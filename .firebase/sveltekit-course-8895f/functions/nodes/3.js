

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.d8ccd805.js","_app/immutable/chunks/scheduler.1005fe53.js","_app/immutable/chunks/index.9d1d7535.js","_app/immutable/chunks/firebase.b7e54b21.js","_app/immutable/chunks/index.8d61a749.js"];
export const stylesheets = [];
export const fonts = [];
