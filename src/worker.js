export default {
	async fetch(request, env, ctx) {
		let url = URL.parse(request.url);

		let target = getUrl("url", url.search)

		console.log(target);

		// fetch(request, {
		// 	method: 'GET',
		//
		// })
		return new Response('Hello ddddWorld!');
	}
};

const getUrl = (name, search) => {
	search = search.substring(1)
	search = search.split("=")

	if (search[0] === name) {
		return decodeURIComponent(search[1])
	}
}
