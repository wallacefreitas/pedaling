const sharedConfig = require("../../packages/tailwind-config/tailwind.config.js");

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  presets: [sharedConfig],
};