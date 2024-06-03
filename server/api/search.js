export default defineEventHandler(async (event) => {
	const searchQuery = getQuery(event);
	const { searchItem } = searchQuery;
	const config = useRuntimeConfig();
	const { ACCESS_TOKEN } = config;
	const moviesURL = "https://api.themoviedb.org/3/search/movie";
	const seriesURL = "https://api.themoviedb.org/3/search/tv";
	const movies = await $fetch(moviesURL, {
		method: "get",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
		query: {
			query: searchItem,
			language: "tr-TR",
		},
	});
	// const url = new URL(seriesURL);
	// url.searchParams.append("query", searchItem);
	// url.searchParams.append("language", "tr-TR");
	const series = await $fetch(seriesURL, {
		method: "get",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
		query: {
			query: searchItem,
			language: "tr-TR",
		},
	});
	
	
	return { movies, series };
});
