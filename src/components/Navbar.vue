<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="banner">
                <b-navbar-brand class="ml-2"><router-link to="/"><h4 class="m-0">Site Title</h4></router-link></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">

                    <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
                    <b-nav-item><router-link to="/about">About</router-link></b-nav-item>

                    
                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
a {
    color: #FFF;
    font-weight: bold;

    :hover {
        text-decoration: none;
    }
}
em {
    font-weight: bold;
    color: #FFF;
}
</style>