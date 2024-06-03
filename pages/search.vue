<script setup>
const { capitalizeFirstLetter} = useCapitalizeFirst()
const searchItem = useState("search-item", () => "");
const movies = useState(() => []);
const series = useState(() => []);
const { data } = await useFetch("/api/search", {
	query: {
		searchItem,
	},
	immediate: false,
	transform: (data) => {
		movies.value = data.movies.results;
		series.value = data.series.results;
	},
});

console.log("************************************");
console.log("Search", movies);
const some = () => {
	console.log(null);
};
</script>
<template>
	<div>
		<div class="w-full flex justify-center">
			<form @submit.prevent="some" class="">
				<div class="relative">
					<div
						class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg
							class="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
						</svg>
					</div>
					<input
						v-model="searchItem"
						type="text"
						id="default-search"
						class="block my-8 w-80 md:w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search Movies, Series..."
						required />
				</div>
			</form>
		</div>
		<section v-if="movies.length" class="mt-12">
			<h1
				class="mb-12 pl-4 font-[sans-serif] text-6xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
					>{{ capitalizeFirstLetter(searchItem) }}
				</span>

				<span
					class="indent-2 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
					>Filmler</span
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
		<section v-if="series.length" class="mt-12">
			<h1
				class="pl-4 mb-12 text-6xl font-[sans-serif] font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				<span
					class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
					>{{ capitalizeFirstLetter(searchItem) }}
				</span>

				<span
					class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-400"
					>Diziler</span
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
