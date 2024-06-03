<script setup>
const nuxtApp = useNuxtApp();
const movies = useState("upcoming-movies", () => null);

if (!movies.value) {
	const { data, error } = await useFetch("/api/upcoming", {
		getCachedData: (key) => {
			return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
		},
		transform: (data) => {
			movies.value = data.upComingMovies.results;
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
					>Yeni Çıkan Filmler</span
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
	</div>
</template>
