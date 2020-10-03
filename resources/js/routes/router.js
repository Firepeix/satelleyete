import VueRouter from 'vue-router'
export default class Router {

  constructor () {
    this._routes = [
      { path: '/', component: () => import('../pages/Index') }
    ];
  }

  get vueRouter () {
    return new VueRouter({ routes: this._routes });
  }
}