import createApplication from "express.js";
import methods from "methods";

let app = createApplication();
const slice = Array.prototype.slice();

app.init = function () {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  this._router = undefined;
};

app.lazyrouter = lazyrouter() => {
  if(!this.router){
    this.router = new Router({})
  }
}

methods.forEach((method) => {
  app[method] = (path) => {
    this.lazyrouter();

    const route = this._router.route(path);

    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});
