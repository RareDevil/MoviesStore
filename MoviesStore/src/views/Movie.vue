<template>
    <div class="row featurette">
        <div class="col-md-7">
            <h2 class="featurette-heading">{{movieInformation.title}}</h2>
            <p class="lead">{{movieInformation.plot}}</p>
            <p class="card-text mb-auto">Languange: {{movieInformation.language}}</p>
            <p class="card-text mb-auto">Location: {{movieInformation.location}}</p>
            <p class="card-text mb-auto">Rating: {{movieInformation.imdbRating}}</p>
            <p class="card-text mb-auto">Sound effects:</p>
            <ul>
                <li v-for="soundEffect in movieInformation.soundEffects" v-bind:key="soundEffect">{{ soundEffect }}</li>
            </ul>
            <a v-bind:href="'https://www.imdb.com/title/' + movieInformation.imdbID">Imdb</a>
            <div class="row row-cols-md-3 mb-3">
                <div class="col themed-grid-col" v-for="value in movieInformation.stills" v-bind:key="value">
                    <img class="bd-placeholder-img card-img-top" v-bind:src="value" alt="still image">
                </div>
            </div>
        </div>
        <div class="col-md-5">
            <img class="bd-placeholder-img card-img-top" v-bind:src="movieInformation.poster" v-bind:alt="movieInformation.title">
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Movie",
    data: () => ({
        movieInformation: {}
    }),
    created () {
        return axios.get('/api/movie/' + this.$route.params.id).then(({ data }) => this.movieInformation = data);
    },
}
</script>

<style scoped>

</style>
