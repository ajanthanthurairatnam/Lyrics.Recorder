using Lyric.Recorder.Core.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;

namespace Lyric.Recorder.MongoFramework
{
    public interface IDbService
    {
        MongoClient CreateMongoClient(string ConnectionString);

        IMongoDatabase GetMongoDatabase(MongoClient mongoClient);

        IMongoCollection<Lyrics> GetMongoCollection(IMongoDatabase mongoDatabase);

        Lyrics Insert(Lyrics Lyrics, string ConnectionString);
    }
}
