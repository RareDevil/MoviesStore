<template>
  <div class="album py-5 home">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 moviesCollection">

          <div class="col" v-for="value in moviesCollection" v-bind:key="value">
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
    props: ['query'],
    data: () => ({
        moviesCollection: {}
    }),
    created () {
        return axios.get('/api/movies').then(({ data }) => this.moviesCollection = data);
    },
    watch: {
        query: function(newVal, oldVal) {
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
            return axios.get('/api/movies?query=' + newVal).then(({ data }) => this.moviesCollection = data);
        }
    }
}
</script>
