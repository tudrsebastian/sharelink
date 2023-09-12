import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.83abba30.js","_app/immutable/chunks/scheduler.1005fe53.js","_app/immutable/chunks/index.9d1d7535.js","_app/immutable/chunks/stores.d3914c1a.js","_app/immutable/chunks/singletons.f09b62c9.js","_app/immutable/chunks/index.8d61a749.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/firebase.b7e54b21.js"];
export const stylesheets = [];
export const fonts = [];
