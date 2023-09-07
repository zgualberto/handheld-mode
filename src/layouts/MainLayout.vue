<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeaderComponent from "src/components/HeaderComponent.vue";
</script>
