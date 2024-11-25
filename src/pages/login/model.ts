import {routes} from "../../shared/routing.ts";
import {createEvent} from "effector";

export const currentRoute = routes.auth.login;

export const submitEvent = createEvent();