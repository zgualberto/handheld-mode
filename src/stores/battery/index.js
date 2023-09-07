import { defineStore } from "pinia";

import { state } from "./state.js";
import { getters } from "./getters.js";
import { actions } from "./actions.js";

export const useBatteryStore = defineStore("battery", {
  state,
  getters,
  actions,
});
