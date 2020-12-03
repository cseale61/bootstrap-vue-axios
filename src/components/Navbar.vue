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
                        <b-nav-item v-if="!user.user_id"><router-link to="/login">Login</router-link></b-nav-item>
                        <b-nav-item-dropdown right v-if="user.user_id">
                        
                            <!-- Using 'button-content' slot -->
                            <template v-slot:button-content>
                                <router-link to="#">{{ user.name }}</router-link>
                            </template>

                            <b-dropdown-item><router-link class="profile-link" to="/profile">Profile</router-link></b-dropdown-item>
                            <b-dropdown-item><span class="profile-link" @click="signOut()">Sign Out</span></b-dropdown-item>
                        
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'menuBar',
        computed: {
            ...mapState([ 'user' ])
        },
        data() {
            return {

            }
        }
        
    }
</script>

<style lang="scss" scoped>
a {
    color: #FFF;
    font-weight: bold;

    :hover {
        text-decoration: none !important;
        color: #FFF;
    }
}
em {
    font-weight: bold;
    color: #FFF;
}
</style>