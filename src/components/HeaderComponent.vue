<template>
  <q-header class="">
    <q-toolbar class="bg-black text-white">
      <q-icon size="32px" name="sports_esports" />
      <q-btn class="text-h6" icon="dark_mode" @click="toggleDarkMode"></q-btn>
      <q-space />
      <q-icon class="q-mx-sm" size="32px" :name="connectionType"></q-icon>
      <q-icon
        class="q-ml-sm"
        name="battery_charging_full"
        v-show="batteryCharging"
        size="32px"
      ></q-icon>
      <div class="text-h6">{{ batteryPercentage }} %</div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useBatteryStore } from "stores/battery";
import { useConnectionStore } from "stores/connection";

import { useQuasar } from "quasar";
const $q = useQuasar();

const batteryStore = useBatteryStore();
const connectionStore = useConnectionStore();

const batteryPercentage = computed(() => batteryStore.getPercentage);
const batteryCharging = computed(() => batteryStore.getChargingStatus);
const connectionType = computed(() => connectionStore.getConnectionType);

const toggleDarkMode = () => {
  $q.dark.toggle();
};

onMounted(() => {
  batteryStore.loadBatteryInfo();
  connectionStore.loadConnectionType();
});
</script>
