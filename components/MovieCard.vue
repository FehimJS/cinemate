<script setup>
const route = useRoute();
const { hypenate } = useConvertTo();
const props = defineProps([
	"title",
	"id",
	"overview",
	"release_date",
	"popularity",
	"poster_path",
	"vote_average",
	"vote_count",
	"item",
]);

const imageSiteURL = "https://image.tmdb.org/t/p/w500";

const itemState = useState("chosenItem", () => {});

const changeItemState = (item) => {
	itemState.value = item;
	console.log("*********************************************");
};

const showDetails = computed(() => {
	if (route.params.name === hypenate(props.title)) return true;
	return false;
});
</script>

<template>
	<div>
		<div
			class="max-w-sm text-black bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
			<NuxtLink @click="changeItemState(item)" :to="`/item/${hypenate(title)}`">
				<img
					class="rounded-t-lg max-h-[400px] w-full"
					:src="`${imageSiteURL}${poster_path}`"
					alt="" />
			</NuxtLink>
			<div class="p-5">
				<h5
					class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{{ title }}
				</h5>

				<p class="mb-3 font-normal text-gray-700 dark:text-gray-300">
					Release Date: {{ release_date }}
				</p>
				<div v-if="showDetails">
					<div class="inline-flex mb-4 w-max">
						<p class="pr-4 py-2 font-normal dark:text-gray-300">
							<b>Puan 
							{{ vote_average.toFixed(1) }} / &#10111;
							</b>
						</p>
						<p class="pr-4 py-2 font-normal dark:text-gray-300">
							<b>		
							&#11088;
							{{ vote_count }} Oylama </b>
						</p>
					</div>
				</div>
				<p
					v-if="overview"
					class="line-clamp-2 font-sans text-black inline-flex items-center px-3 py-2 text-sm font-medium text-center dark:text-white bg-green-300 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					<span class="mytarget line-clamp-5">{{ overview }}</span>
				</p>
				<p
					v-else
					class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					No overview avaliable
				</p>
			</div>
		</div>
	</div>
</template>
