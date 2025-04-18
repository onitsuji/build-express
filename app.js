import createApplication from "express.js";

let app = createApplication();

app.init = function () {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  this._router = undefined;
};
