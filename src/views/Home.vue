<template>
  <div class="home">
    <Intro :msg=msg />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue'

export default {
  name: 'Home',
  components: {
    Intro
  },
  data() {
    return {
      msg: "Welcome to your Vue Template!"
    }
  }
}
</script>