using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Lyric.Recorder.Core.Models
{
    //public class Lyrics
    //{
    //    public string Id { get; set; }
    //    public string LyricsId { get; set; }
    //    public string FirstName { get; set; }
    //    public string LastName { get; set; }
    //    public string Mobile { get; set; }
    //    public string Home { get; set; }
    //}

    public class Artist
    {
        public string artistName { get; set; }
    }

    [BsonIgnoreExtraElements]
    public class Lyrics
    {
        public string title { get; set; }
        public List<Artist> artists { get; set; }
        public List<string> tags { get; set; }
        public string lyrics { get; set; }
        public string notes { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string lyricsid { get; set; }
    }

}
