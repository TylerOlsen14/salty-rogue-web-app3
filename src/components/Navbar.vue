<template>
    <div class="navbar">
        <img alt="Salty Rogue Real Estate" src="../assets/logo.jpg" class="image">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
            <div class="navbar-brand">Salty Rogue Real Estate</div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="Home" tag="li">Home</router-link >
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" v-bind:to="`./Home.vue`" tag="li">Home2</router-link >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="./CallList.vue">Call List</router-link >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="./CallRecord.vue">Call Record</router-link >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
    display: flex;
    flex-direction: row;
}
#navbar{
    align-self: flex-end;
    flex-grow: 1;
    height: 85px;
}
</style>