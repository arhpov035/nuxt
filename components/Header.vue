<template>
  <header class="header">
    <topHeader/>
  </header>
</template>

<script>
import Navigation from './Navigation.vue'
import Logo from './Logo.vue'
import topHeader from './topHeader.vue'

export default {
  components: {
    Navigation,
    Logo,
    topHeader
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 7px 0 rgb(0 0 0 / 4%);
  border-radius: 10px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 75px;
}

@media (max-width: 480px) {
  .header {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #f3f3f4;
  }
}
</style>
