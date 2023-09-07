export const getters = {
  getPercentage: (state) => state.batteryPercentage * 100,
  getChargingStatus: (state) => state.batteryIsCharging,
};
