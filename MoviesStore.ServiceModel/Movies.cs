﻿using System.Collections.Generic;
using ServiceStack;

namespace MoviesStore.ServiceModel
{
    [Route("/movies", "GET")]
    public class MoviesRequest : IReturn<List<MoviesResponse>>
    {
        public string Query { get; set; }
        public string Language { get; set; }
        public string Location { get; set; }
    }

    [Route("/movie", "GET")]
    [Route("/movie/{imdbID}", "GET")]
    public class MovieRequest : IReturn<MoviesResponse>
    {
        public string imdbID { get; set; }
    }

    [Route("/movie/languages", "GET")]
    public class MovieLanguagesRequest : IReturn<List<string>>{}

    [Route("/movie/locations", "GET")]
    public class MovieLocationsRequest : IReturn<List<string>>{}

    public class MoviesResponse
    {
        public string Language { get; set; }
        public string Location { get; set; }
        public string Plot { get; set; }
        public string Poster { get; set; }
        public List<string> SoundEffects { get; set; }
        public List<string> Stills { get; set; }
        public string Title { get; set; }
        public string imdbID { get; set; }
        public string listingType { get; set; }
        public string imdbRating { get; set; }
    }
}
