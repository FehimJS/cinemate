export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const { ACCESS_TOKEN } = config;
	const nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing";
	const nowPlayingMovies = await $fetch(nowPlayingURL, {
		method: "get",
		headers: {
				accept: "application/json",
				Authorization: `Bearer ${ACCESS_TOKEN}`,
		},
        query:{
            language:'tr-TR'
        }
	});
	
	return { nowPlayingMovies };
});
