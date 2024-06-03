<script setup>
const nuxtApp = useNuxtApp();
const movies = useState("top-rated-movies", () => null);
const series = useState("top-rated-series", () => null);
if (!movies.value && !series.value) {
	const { data, error } = await useFetch("/api/top-rated", {
		getCachedData: (key) => {
			return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
		},
		transform: (data) => {
			movies.value = data.topRatedMovies.results;
			series.value = data.topRatedSeries.results;
		},
	});
}
</script>
<template>
	<div>
		<section class="mt-12">
			<h1
				class="mb-12 pl-4 font-[sans-serif] text-6xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
					>En Çok Oy Alan Film</span
				>
			</h1>

			<div class="flex justify-center mx-8">
				<ul
					class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense auto-rows-auto gap-4">
					<li v-for="mov in movies">
						<MovieCard
							:id="mov.id"
							:title="mov.title"
							:poster_path="mov.poster_path"
							:item="mov"
							:overview="mov.overview"
							:release_date="mov.release_date"
							:popularity="mov.popularity" />
					</li>
				</ul>
			</div>
		</section>
		<section class="mt-12">
			<h1
				class="pl-4 mb-12 text-6xl font-[sans-serif] font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400"
					>En Çok Oy Alan Dizi</span
				>
			</h1>
			<div class="flex justify-center mx-8">
				<ul
					class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense auto-rows-auto gap-4">
					<li v-for="serie in series">
						<SeriesCard
							:id="serie.id"
							:name="serie.name"
							:poster_path="serie.poster_path"
							:item="serie"
							:overview="serie.overview"
							:release_air_date="serie.first_air_date"
							:popularity="serie.popularity" />
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>
