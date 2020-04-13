using Lyric.Recorder.Core;
using Lyric.Recorder.Core.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lyric.Recorder.API.Services
{
    public class ConfigurationService : IConfigurationService
    {
        public IConfiguration _Config { get; }

        public ConfigurationService(IConfiguration Config)
        {
            _Config = Config;

            _Config.GetConnectionString("DBConnection");
        }
     
    }
}
