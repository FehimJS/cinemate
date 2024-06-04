<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const itemState = useState("chosenItem");
const item = itemState.value;
console.log('ITEM', item.title)
//Meta////////////////////////////////
const pageTitle = `${item.title} - MySite`;
const pageDescription = item.overview;
const pageKeywords = item.overview;
const pageUrl = `${config.public.baseURL}/item/${route.params.name}`;

useHead({
	title: pageTitle,
	meta: [
		{ name: "description", content: pageDescription },
		{ name: "keywords", content: pageKeywords },
		{ property: "og:title", content: pageTitle },
		{ property: "og:description", content: pageDescription },
		{ property: "og:url", content: pageUrl },
		{ property: "og:type", content: "movie" },
		{ name: "msapplication-TileColor", content: "#2d89ef" },
		{ name: "theme-color", content: "#ffffff" },
	],
});
////////////////////////////////////////
</script>
<template>
	<div class="flex items-center justify-center lg:h-[90vh]">
		<MovieCard
			class="overwrite"
			v-if="item.release_date"
			:vote_count="item.vote_count"
			:vote_average="item.vote_average"
			:id="item.id"
			:title="item.title"
			:poster_path="item.poster_path"
			:item="item"
			:overview="item.overview"
			:release_date="item.release_date"
			:popularity="item.popularity" />

		<SeriesCard
			class="overwrite"
			v-if="item.first_air_date"
			:id="item.id"
			:name="item.name"
			:poster_path="item.poster_path"
			:item="item"
			:overview="item.overview"
			:release_air_date="item.first_air_date"
			:popularity="item.popularity" />
	</div>
</template>
<style scoped>
:deep(.overwrite) {
	@apply flex justify-center items-center;
}
:deep(.overwrite div) {
	@apply md:max-w-lg lg:max-w-[75vw]   lg:flex lg:justify-center;
}
:deep(.overwrite div div) {
	@apply lg:flex lg:flex-col lg:justify-start;
	h5 {
		@apply lg:text-5xl lg:mb-4;
	}
}
:deep(.overwrite img) {
	@apply lg:h-[100vh] lg:w-[60vw]  lg:max-w-96;
}

:deep(.overwrite) {
	@apply lg:flex;
}
:deep(.overwrite div p span) {
	@apply line-clamp-none;
}
</style>
