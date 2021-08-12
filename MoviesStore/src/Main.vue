<template>
    <header>
        <!-- Fixed navbar -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">Movie Store</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                        </li>
                    </ul>
                    <div class="d-flex" v-if="$route.name === 'Home'">
                        <div class="collapse navbar-collapse" id="navbarNavLanguageDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarLanguageDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarLanguageDropdownMenuLink">
                                        <li><span class="dropdown-item" v-on:click="changeLang('All')">All</span></li>
                                        <li v-for="lang in languages" v-bind:key="lang"><span class="dropdown-item" v-on:click="changeLang(lang)">{{ lang }}</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarNavLocationDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarLocationDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Location
                                    </a>
                                    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarLocationDropdownMenuLink">
                                        <li><span class="dropdown-item" v-on:click="changeLoc('All')">All</span></li>
                                        <li v-for="loc in locations" v-bind:key="loc"><span class="dropdown-item" v-on:click="changeLoc(loc)">{{ loc }}</span></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <input class="form-control me-2 searchField" type="search" placeholder="Search" aria-label="Search" v-on:keypress="keypressedInSearch">
                        <button class="btn btn-outline-success" type="button" v-on:click="search">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main class="flex-shrink-0">
        <div class="container">
            <router-view/>
        </div>
    </main>
    <footer class="footer mt-auto py-3 bg-light">
        <div class="container">
            <span class="text-muted">Copyright Movie Store.</span>
        </div>
    </footer>
</template>

<script>
import axios from "axios";

export default {
    name: 'Main',
    data: () => ({
        languages: {},
        locations: {},
    }),
    created () {
        axios.get('/api/movie/languages').then(({ data }) => this.languages = data);
        axios.get('/api/movie/locations').then(({ data }) => this.locations = data);
    },
    methods: {
        keypressedInSearch: function (event) {
            if (event.key === "Enter") {
                this.search();
            }
        },
        search: function () {
            const searchfield = document.getElementsByClassName("searchField");

            this.$router.push({
                name: 'Home',
                params: {
                    query: searchfield[0].value
                }
            });
        },
        changeLang: function(lang) {
            this.$router.push({
                name: 'Home',
                params: {
                    language: (lang === "All" ? "": lang)
                }
            });
        },
        changeLoc: function(loc) {
            this.$router.push({
                name: 'Home',
                params: {
                    location: (loc === "All" ? "": loc)
                }
            });
        }
    }
}
</script>

<style>
main > .container {
    margin-top: 60px;
}
</style>
