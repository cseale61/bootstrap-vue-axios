<template>
  <div>
    <b-sidebar id="sidebar-1" aria-labelledby="sidebar-1-title" no-header shadow>
      <template #default="{ hide }">
        <div>
          <b-navbar variant="banner" style="padding: 14px 10px" id="sidebar-1-title">
              <router-link to="/">
                <h4 class="m-0">
                    Sidebar Title
                </h4>
              </router-link>
          </b-navbar>
          <p style="padding: 1rem">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <nav class="mb-3" style="padding: 1rem">
            <b-nav vertical>
              <b-nav-item active @click="hide">Active</b-nav-item>
              <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <div style="padding: 1rem">
            <b-button variant="banner" block @click="hide">Close Sidebar</b-button>
          </div>
        </div>
      </template>
    </b-sidebar>
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
    }
    a:hover {
        text-decoration: none !important;
        color: #FFF;
    }
</style>