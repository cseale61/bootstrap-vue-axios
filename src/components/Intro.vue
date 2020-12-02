<template>
  <div>
    <b-row>
      <b-container>
        <h1 style="text-align: center;">{{ msg }}</h1>
        <p>
          This is a quick start template using Vue 2. Once this template has been cloned from github, simply change into its directory and
          run <b>"npm install"</b> to install its dependencies, then run <b>"npm run serve"</b> to view it in a browser. 
        </p>
        <p>
          This site template has the following pre-installed:
          <ul>
            <li>Vue router</li>
            <li>Vuex</li>
            <li>Axios - for API calls</li>
            <li>BootstrapVue and Bootstrap</li>
            <li>A custom SCSS file (custom.scss) for site-wide custom styling</li>
          </ul>
        </p>
      </b-container>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'IntroPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 2.2em !important;
}
h3 {
  margin: 40px 0 0;
}
/*
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
*/
a {
  color: #42b983;
}
p {
  font-size: 1.2em;
}
</style>
