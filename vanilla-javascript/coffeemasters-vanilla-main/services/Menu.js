import Api from "./Api.js";

async function loadData() {
  const response = await Api.fetchMenu();

  window.app.store.menu = response;
}

export { loadData };
