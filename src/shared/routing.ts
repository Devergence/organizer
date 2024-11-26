import {createHistoryRouter, createRoute, createRouterControls, UnmappedRouteObject} from "atomic-router";
import {createBrowserHistory} from "history";
import {sample} from "effector";
import {appStarted} from "./config/init.ts";

export const routes = {
  search: createRoute(),
  home: createRoute(),
  auth: {
    register: createRoute(),
    login: createRoute(),
  }
}

const routesMap: UnmappedRouteObject<any>[] = [
  {
    path: '/register',
    route: routes.auth.register
  },
  {
    path: '/login',
    route: routes.auth.login
  },
  {
    path: '/search',
    route: routes.search
  },
  {
    path: '/',
    route: routes.home
  }
];

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: routesMap,
  controls
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
