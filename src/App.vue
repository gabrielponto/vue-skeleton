<template>
  <div id="app" class="page-container">
    <div v-if="showMenu" class="page-sidebar">
      <Sidebar :items="items" :subitems="subitems" subitems-title="Sidebar" />
    </div>
    <div class="page">
      <Header v-if="showHeader"></Header>
      <div class="main">
        <router-view></router-view>
      </div>
      <Footer v-if="showFooter"></Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Footer from './components/Layout/Footer.vue';
import Sidebar from './components/Layout/Sidebar.vue';
import Vue from 'vue';
import store from './store/index.js';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Sidebar
  },
  store,
  data: function() {
    return {
      items: [
        {
          title: 'Vue Skeleton',
          href: '/',
          image: 'https://vuejs.org/images/logo.png',
          main: true
        },
      ],
      subitems: [
        {
          title: 'Dashboard',
          href: '/',
          icon: 'desktop',
        }
      ]
    }
  },
  computed: {
    showMenu: function() {
      // Add code to show or hide sidebar menu here.
      return true;
    },
    showHeader: function() {
      return true;
    },
    showFooter: function() {
      return true;
    }
  },
}
</script>

<style lang="scss">
@import './sass/main.scss';
</style>
