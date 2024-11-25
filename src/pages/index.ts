import {createRoutesView} from "atomic-router-react";
import {LoginRoute} from "./login";
import {RegisterRoute} from "./register";

export const Pages = createRoutesView({
  routes: [LoginRoute, RegisterRoute],
});