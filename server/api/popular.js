export default defineEventHandler(async event=>{
    const config = useRuntimeConfig();
    const {ACCESS_TOKEN} = config;
    const popularMoviesURL = "https://api.themoviedb.org/3/movie/popular";
    const popularSeriesURL = "https://api.themoviedb.org/3/tv/popular"
    const popularMovies = await $fetch(popularMoviesURL, {
        method:'get',
        headers:{
            accept: "application/json",
				Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        query:{
            language:'tr-TR'
        }
    })
      const popularSeries = await $fetch(popularSeriesURL, {
        method:'get',
        headers:{
            accept: "application/json",
				Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        query:{
            language:'tr-TR'
        }
    })
    return { popularMovies, popularSeries }
})