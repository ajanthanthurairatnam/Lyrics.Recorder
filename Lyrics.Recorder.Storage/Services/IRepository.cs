using Lyric.Recorder.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Lyric.Recorder.Storage
{
    public interface IRepository
    {
        IEnumerable<Lyrics> FetchAll();
        Lyrics Add(Lyrics Lyrics);
        Lyrics GetById(string id);
        Lyrics Save(Lyrics Lyrics);
    }
}
