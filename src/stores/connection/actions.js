import { getConnectionType } from "src/helpers/get-connection-type.helper.js";

export const actions = {
  loadConnectionType() {
    this.connectionType = getConnectionType();

    navigator.connection.addEventListener("change", () => {
      this.connectionType = getConnectionType();
    });
  },
};
