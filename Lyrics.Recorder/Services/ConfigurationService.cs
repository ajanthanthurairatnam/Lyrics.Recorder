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

            Configuration.ConnectionString = @"mongodb://muscian:Wc49ajIaLWPAs2GGwNXjp6zgGFqAZn5Mrsi6xvcOSIvRaS70BfF4YJQuM1Xy53gi00n8Tl6H800f5rVozzIR4Q==@muscian.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@muscian@";

            //Configuration.ConnectionString = @"mongodb://contact:rKkAMlY8pHlQ3ROcgIwuzNCJzW1iJEbteOkPTz0I6T0yXtPIdnISuLS60WIRhujod3C9pYkc3jMmh2K5qhzXBQ==@contact.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@contact@;retrywrites = false";

           // _Config.GetConnectionString("DBConnection");
        }
     
    }
}
