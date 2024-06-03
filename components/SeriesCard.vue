<script setup>
const route = useRoute();
const { hypenate } = useConvertTo();
const props = defineProps([
	"id",
	"name",
	"overview",
	"first_air_date",
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
};
const showSDetails = computed(() => {
	if (props.title) {
		if (route.params.name === hypenate(props.title)) return true;
	}
	return false;
});
</script>
<template>
	<div>
		<div
			class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<NuxtLink @click="changeItemState(item)" :to="`/item/${hypenate(name)}`">
				<img
					class="rounded-t-lg max-h-[420px] w-full"
					:src="`${imageSiteURL}/${poster_path}`"
					alt="" />
			</NuxtLink>
			<div class="p-5">
				<span>
					<h5
						class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{{ name }}
					</h5>
				</span>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
					First Air Date: {{ first_air_date }}
				</p>
				<div v-if="showSDetails">
					<div class="inline-flex mb-4 w-max">
						<p class="pr-4 py-2 font-normal dark:text-gray-300">
							<b>Puan {{ vote_average }} / &#10111; </b>
						</p>
						<p class="pr-4 py-2 font-normal dark:text-gray-300">
							<b>
								&#11088;
								{{ vote_count }} Oylama
							</b>
						</p>
					</div>
				</div>
				<p
					v-if="overview"
					class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					<span id="mytarget" class="line-clamp-5">{{ overview }}</span>
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
