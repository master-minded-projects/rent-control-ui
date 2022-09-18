import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","old-welcom-log.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-82d17812.js","imports":["_app/immutable/start-82d17812.js","_app/immutable/chunks/index-66220184.js","_app/immutable/chunks/singletons-3db67b4f.js","_app/immutable/chunks/index-e366d1ab.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
