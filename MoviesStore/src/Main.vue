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
export default {
    name: 'Main',
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
            })
        }
    }
}
</script>

<style>
main > .container {
    margin-top: 60px;
}
</style>
