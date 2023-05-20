const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
  },
  env: {
    baseUrl: "https://www.britinsurance.com/",
    contactUrl: "https://www.britinsurance.com/contact",
  },
});
