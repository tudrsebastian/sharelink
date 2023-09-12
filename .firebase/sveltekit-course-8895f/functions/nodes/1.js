

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e4de1b07.js","_app/immutable/chunks/scheduler.1005fe53.js","_app/immutable/chunks/index.9d1d7535.js","_app/immutable/chunks/stores.d3914c1a.js","_app/immutable/chunks/singletons.f09b62c9.js","_app/immutable/chunks/index.8d61a749.js"];
export const stylesheets = [];
export const fonts = [];
