import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

window.app = {
  store: Store,
  router: Router,
};

//Its better to wait for this event before we can start any manipulation.
window.addEventListener("DOMContentLoaded", () => {
  loadData();
  window.app.router.init();
});
