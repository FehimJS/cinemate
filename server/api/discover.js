export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const { ACCESS_TOKEN, API_KEY } = config;
	console.log(API_KEY);
	const movieURL = `https://api.themoviedb.org/3/discover/movie`;

	const seriesURL = `https://api.themoviedb.org/3/discover/tv`;
	const movies = await $fetch(movieURL, {
		method: "get",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
		query: {
			language: "tr-TR",
		},
	});
	const series = await $fetch(seriesURL, {
		method: "get",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
		query: {
			video: false,
			language: "tr-TR",
			include_null_first_air_dates: false,
			sort_by: "popularity.desc",
		},
	});
	
	return { movies, series };
});
