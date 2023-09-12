

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.49601994.js","_app/immutable/chunks/scheduler.1005fe53.js","_app/immutable/chunks/index.9d1d7535.js"];
export const stylesheets = ["_app/immutable/assets/0.7a533f33.css"];
export const fonts = [];
