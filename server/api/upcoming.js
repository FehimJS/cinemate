export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const { ACCESS_TOKEN } = config;
	const upComingMoviesURL = "https://api.themoviedb.org/3/movie/upcoming";
	const upComingMovies = await $fetch(upComingMoviesURL, {
		method: "get",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
		query: {
			language: "tr-TR",
		},
	});

	return { upComingMovies };
});
