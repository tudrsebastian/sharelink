import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../chunks/ssr.js";
import { a as user } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let href;
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  href = "/login/username";
  $$unsubscribe_user();
  return `<h2 data-svelte-h="svelte-bhb3ah">Login</h2> ${$user ? `<h2 class="card-title">Welcome, ${escape($user.displayName)}</h2> <p class="text-center text-success" data-svelte-h="svelte-1958qcl">You are logged in</p> <button class="btn btn-warning" data-svelte-h="svelte-1es2iab">Sign out</button> <button class="btn btn-primary"><a${add_attribute("href", href, 0)}>Next Step</a></button>` : `<button class="btn btn-primary" data-svelte-h="svelte-eubzr8">Sign in with Google</button> `}`;
});
export {
  Page as default
};
