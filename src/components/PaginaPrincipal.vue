<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand :to="{name: 'inicio'}">INICIO</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name:'formulario'}">Formulario</b-nav-item>
            <b-nav-item :to="{name:'paginacion'}">Paginacion</b-nav-item>
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div>
        <b-breadcrumb :items="items"></b-breadcrumb>
    </div>

    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Atras',
            href: '#'
          },
          {
            text: 'Siguiente',
            href: '#'
          },
          {
            active: true
          }
        ]
      }
    }
};
</script>

<style>
</style>