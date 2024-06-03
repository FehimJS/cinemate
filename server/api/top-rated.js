export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const { ACCESS_TOKEN } = config;
	const topRateMoviesURL = "https://api.themoviedb.org/3/movie/top_rated";
	const topRateSeriesURL = "https://api.themoviedb.org/3/tv/top_rated";
	const topRatedMovies = await $fetch(topRateMoviesURL, {
		method: "get",
		query: {
			language: "tr-TR",
		},
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
	});
	const topRatedSeries = await $fetch(topRateSeriesURL, {
		method: "get",
		query: {
			language: "tr-TR",
		},
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
	});
	
	return { topRatedMovies, topRatedSeries };
});
