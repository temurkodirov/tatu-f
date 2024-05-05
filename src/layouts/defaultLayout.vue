<script>

import Sidebard from "@/components/dashboard/sidebard/sidebard.vue";

export default {
  name: "defaultLayout",
  components: {Sidebard},
}
</script>

<template>
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
      <sidebard></sidebard>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

</style>