using Lyric.Recorder.Core.Models;
using Lyric.Recorder.MongoFramework;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Lyric.Recorder.Storage.Services
{
    public class Repository : IRepository
    {
        public IEnumerable<Lyrics> _Lyricss;
        public IDbService _dbService;
        private MongoClient _mongoClient;
        private IMongoDatabase _mongoDatabase;
        private IMongoCollection<Lyrics> _lyricsCollection;
        public Repository(IDbService dbService)
        {
            _dbService = dbService;
            _mongoClient = _dbService.CreateMongoClient(Configuration.ConnectionString);
            _mongoDatabase = _dbService.GetMongoDatabase(_mongoClient);
            _lyricsCollection = _dbService.GetMongoCollection(_mongoDatabase);
        }
        public IEnumerable<Lyrics> FetchAll()
        {
            return _lyricsCollection.Find(_ => true).ToList();
        }
        public Lyrics Add(Lyrics Lyrics)
        {
            Lyrics.lyricsid = Guid.NewGuid().ToString();
            _lyricsCollection.InsertOne(Lyrics);
            _Lyricss = FetchAll();
            return Lyrics;
        }

        public Lyrics GetById(string id)
        {
            return FetchAll().FirstOrDefault(e => e.id == id);
        }

        public Lyrics Save(Lyrics Lyrics)
        {
            if (!string.IsNullOrEmpty(Lyrics.id))
            {
                var Lyricss = _Lyricss;
                var _Lyrics = GetById(Lyrics.id);
                _Lyrics.lyrics = Lyrics.lyrics;
                _Lyrics.notes = Lyrics.notes;
                _Lyrics.tags = Lyrics.tags;
                _Lyrics.title = Lyrics.title;
                _Lyrics.artists = Lyrics.artists;

                var filter = Builders<Lyrics>.Filter.Eq("id", Lyrics.id);

                var update = Builders<Lyrics>.Update
                                              .Set("lyrics", Lyrics.lyrics)
                                              .Set("notes", Lyrics.notes)
                                              .Set("tags", Lyrics.tags)
                                              .Set("title", Lyrics.title)
                                               .Set("artists", Lyrics.artists);

                _lyricsCollection.UpdateOne(filter, update);

                _Lyricss = FetchAll();
                return _Lyrics;

            }
           
             return Add(Lyrics);
            
        }
    }
}
