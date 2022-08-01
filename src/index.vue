<template>
  <div>
    <nav class="navbar navbar-dark justify-content-between flex-nowrap flex-row nav_bar_db">
      <div class="container">
        <a class="navbar-brand float-left logo_dg">CRUD </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item list_nav">
            <router-link class="nav-link pr-3 link_list" to="/">Add User</router-link>
          </li>
          <li class="nav-item list_nav">
            <router-link class="nav-link link_list" to="/list">View Users</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="router_design">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>
<style>
.nav_bar_db {
  background: #CF152D;
}

.list_nav {
  color: #dddddd;
  padding: 11px;
}

.logo_dg {
  letter-spacing: 23.6px;
  text-shadow: 1px 2px 3px #707070cc;
  font-size: 40px;
  font-weight: 800;
}

.link_list {
  font-size: 18px;
}

.router_design {
  margin: 120px;
}

</style>