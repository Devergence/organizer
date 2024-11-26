import {routes} from "../../shared/routing.ts";
import {createEffect, createEvent, createStore, sample} from "effector";
import {api} from "../../shared/api";
import {redirect} from "atomic-router";

export const currentRoute = routes.auth.register;

export type RegisterData =  {
  email: string;
  password: string;
}
type UserData = {
  id: string;
}
export const registerEvent = createEvent<RegisterData>();

export type RegisterError = {error: 'invalid_credentials'} | {error: 'user_exist'};

export const registerFx = createEffect<RegisterData, UserData, RegisterError>(async ({email, password}) => {
  const response = await api.post('/auth/register', {
    email, password,
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
});

const $user = createStore<UserData | null>(null);

$user.on(registerFx.doneData, (_, data) => data);

sample({
  clock: registerEvent,
  target: registerFx,
});

redirect({
  clock: registerFx.done,
  route: routes.auth.login,
});