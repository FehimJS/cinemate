<script setup>
const nuxtApp = useNuxtApp();
const nowPlayingMovies = useState("nowPlayingMovies", () => null);

if (!nowPlayingMovies.value) {
	const { data, error } = await useFetch("/api/now-playing", {
		getCachedData: (key) => {
			return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
		},
		transform: (data) => {
			nowPlayingMovies.value = data.nowPlayingMovies.results;
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
					>Gösterimdeki Filmler</span
				>
			</h1>

			<div class="flex justify-center mx-8">
				<ul
					class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row-dense auto-rows-auto gap-4">
					<li v-for="mov in nowPlayingMovies">
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
