export const getConnectionType = () => {
  switch (navigator.connection.effectiveType) {
    case "cellular":
    case "4g":
    case "3g":
    case "2g":
    case "slow-2g":
      return "network_cell";

    case "wifi":
      return "wifi";

    case "ethernet":
      return "lan";

    default:
      return "signal_wifi_off";
  }
};
