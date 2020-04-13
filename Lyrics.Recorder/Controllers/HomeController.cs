using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Lyric.Recorder.Models;
using Lyric.Recorder.Storage;
using Lyric.Recorder.API.Models;
using Lyric.Recorder.Core.Models;
using System.Text.Json;
using Microsoft.Extensions.Options;

namespace Lyric.Recorder.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IRepository _repository;

        public HomeController(ILogger<HomeController> logger, IRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        public IActionResult Index()
        {
           return View(new LyricsViewModel() { Lyricss= _repository.FetchAll() });
        }

    
        [HttpPost]
        public IActionResult Save(Lyrics llyrics)
        { 
            var _Lyrics=  _repository.Save(llyrics);
            return Json(_Lyrics);
        }

        [HttpGet]
        public IActionResult GetLyricss()
        {
            return Json(_repository.FetchAll());
        }

        [HttpGet]
        public IActionResult GetLyrics(string id)
        {
            return Json(_repository.FetchAll().FirstOrDefault(e=>e.id== id));
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
