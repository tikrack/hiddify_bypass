export default {
	async fetch(request, env, ctx) {
		let url = URL.parse(request.url);
		let request_send = false

		let target = getUrl("url", url.search)

		const response = await fetch(target, {
			method: 'GET',
		})

		const data = await response?.text()

		return new Response(data ?? "Error -> url is not valid");
	}
};

const getUrl = (name, search) => {
	search = search.substring(1)
	search = search.split("=")

	if (search[0] === name) {
		return decodeURIComponent(search[1])
	}
}
