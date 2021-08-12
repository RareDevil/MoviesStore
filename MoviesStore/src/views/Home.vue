<template>
  <div class="album py-5 home">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 moviesCollection">

          <div class="col" v-for="value in moviesCollection" v-bind:key="value.imdbID">
              <div class="card shadow-sm">
                  <router-link v-bind:to="/movie/ + value.imdbID">
                      <img class="bd-placeholder-img card-img-top" v-bind:src="value.poster" v-bind:alt="value.title">
                      <div class="card-body">
                          <p class="card-text">{{value.title}}</p>
                      </div>
                  </router-link>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Home',
    props: ['query', 'language', 'location'],
    data: () => ({
        moviesCollection: {}
    }),
    created () {
        axios.get('/api/movies').then(({ data }) => this.moviesCollection = data);
    },
    watch: {
        query: function(newVal) {
            return axios.get('/api/movies?query=' + this.getValueOrEmptyString(newVal) +
                '&language=' + this.getValueOrEmptyString(this.language) +
                '&location' + this.getValueOrEmptyString(this.location))
                .then(({ data }) => this.moviesCollection = data);
        },
        language: function(newVal) {
            return axios.get('/api/movies?query=' + this.getValueOrEmptyString(this.query) +
                '&language=' + this.getValueOrEmptyString(newVal) +
                '&location' + this.getValueOrEmptyString(this.location))
                .then(({ data }) => this.moviesCollection = data);
        },
        location: function(newVal) {
            return axios.get('/api/movies?query=' + this.getValueOrEmptyString(this.query) +
                '&language=' + this.getValueOrEmptyString(this.language) +
                '&location' + this.getValueOrEmptyString(newVal))
                .then(({ data }) => this.moviesCollection = data);
        }
    },
    methods: {
        getValueOrEmptyString: function (value) {
            if (value == null) {
                return "";
            }
            return value;
        },
    }
}
</script>
