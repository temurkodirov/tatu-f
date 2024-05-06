<script>
export default {
  name: "sidebard"
}
</script>

<template>
  <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo">
      <router-link to="/"  class="app-brand-link">

      <span class="app-brand-text demo menu-text fw-bolder ms-2">Sneat</span>
      </router-link>

    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">
      <!-- Dashboard -->
      <li class="menu-item" :class="this.$route.name === 'dashboard' ? 'active':''">
        <router-link to="/" class="menu-link">
          <i class="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Analytics">Dashboard</div>
        </router-link>
      </li>

      <!-- Layouts -->
      <li class="menu-item" :class="this.$route.name === 'rooms' ? 'active':''">
        <router-link to="/rooms"  class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Layouts">Xonalar</div>
        </router-link>
      </li>
      <li class="menu-item" :class="this.$route.name === 'furniture' ? 'active':''">
        <router-link to="/furniture"  class="menu-link menu-toggle">
          <i class="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Layouts">Jihozlar</div>
        </router-link>
      </li>
      <li class="menu-header small text-uppercase">
        <span class="menu-header-text">Pages</span>
      </li>

    </ul>
  </aside>
</template>

<style scoped>

</style>