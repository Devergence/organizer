import {routes} from "../../shared/routing.ts";
import {createEffect, createStore, createEvent, sample} from "effector";
import {api} from "../../shared/api";

export const currentRoute = routes.auth.register;

type RegisterData =  {
  email: string;
  password: string;
}
type UserData = {
  id: string;
}
export const registerEvent = createEvent<RegisterData>();

export type RegisterError = {error: 'invalid_credentials'} | {error: 'user_exist'};

export const registerFx = createEffect<RegisterData, UserData, RegisterError>(async (data) =>{
  const kek = await api.get('/auth/register', {
    withCredentials: true,
  });
  return console.log(kek)
})

const $user = createStore(null);

// $user.on(registerFx.doneData, (_, data) => data);

sample({
  clock: registerEvent,
  target: registerFx,
});