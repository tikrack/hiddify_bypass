export default {
	async fetch(request, env, ctx) {
		console.log(env.URL)
		return new Response('Hello ddddWorld!');
	}
};
