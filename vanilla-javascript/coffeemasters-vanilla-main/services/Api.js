const Api = {
  url: "/data/menu.json",
  //Async await works on the browser.
  fetchMenu: async function () {
    const response = await fetch(Api.url);
    return await response.json();
  },
};

export default Api;
