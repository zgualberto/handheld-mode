export const actions = {
  async loadBatteryInfo() {
    try {
      const battery = await navigator.getBattery();
      this.batteryPercentage = battery.level;
      this.batteryIsCharging = battery.charging;

      battery.addEventListener("levelchange", () => {
        this.batteryPercentage = battery.level;
      });
      battery.addEventListener("chargingchange", () => {
        this.batteryIsCharging = battery.charging;
      });
    } catch {
      return false;
    }
  },
};
