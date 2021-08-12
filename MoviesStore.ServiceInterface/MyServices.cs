using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using ServiceStack;
using MoviesStore.ServiceModel;
using Newtonsoft.Json;

namespace MoviesStore.ServiceInterface
{
    public class MyServices : Service
    {
        public object Any(Hello request)
        {
            return new HelloResponse { Result = $"Hello, {request.Name}!" };
        }

        public List<MoviesResponse> Get(MoviesRequest request)
        {
            List<MoviesResponse> movies = LoadMoviesFromJson();

            if (!string.IsNullOrEmpty(request.Language))
            {
                movies = movies.Where(m => m.Language.ToLower() == request.Language.ToLower()).ToList();
            }
            if (!string.IsNullOrEmpty(request.Location))
            {
                movies = movies.Where(m => m.Location.ToLower() == request.Location.ToLower()).ToList();
            }
            if (!string.IsNullOrEmpty(request.Query))
            {
                movies = movies.Where(m => m.Title.ToLower().Contains(request.Query.ToLower())).ToList();
            }

            return movies;
        }

        public MoviesResponse Get(MovieRequest request)
        {
            List<MoviesResponse> movies = LoadMoviesFromJson();
            return movies.SingleOrDefault(m => m.imdbID == request.imdbID);
        }

        public List<string> Get(MovieLanguagesRequest request)
        {
            List<MoviesResponse> movies = LoadMoviesFromJson();
            return movies.Select(m => m.Language).Distinct().ToList();
        }

        public List<string> Get(MovieLocationsRequest request)
        {
            List<MoviesResponse> movies = LoadMoviesFromJson();
            return movies.Select(m => m.Location).Distinct().ToList();
        }

        private List<MoviesResponse> LoadMoviesFromJson()
        {
            MovieJsonFormat items = new();
            try
            {
                using StreamReader r = new StreamReader("movies.json");
                string json = r.ReadToEnd();
                items = JsonConvert.DeserializeObject<MovieJsonFormat>(json);
            }
            catch (Exception e)
            {
                // Let the user know what went wrong.
                Console.WriteLine("The file could not be read:");
                Console.WriteLine(e.Message);
            }

            return items.movies;
        }

        public class MovieJsonFormat
        {
            public List<MoviesResponse> movies { get; set; }
        }
    }
}
