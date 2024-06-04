<script setup>
const config = useRuntimeConfig();
const pageTitle = " Filmler ve Diziler - sinemaizle";
const pageDescription =
	"En iyi  filmler ve diziler hakkında bilgi edinin. Son çıkan ve en popüler filmleri keşfedin.";
const pageKeywords =
	"film, filmler, dizi, diziler, en iyi filmler, en iyi diziler, sinema, film izle";

const pageUrl = `${config.public.baseURL}`;
useHead({
	title: pageTitle,
	meta: [
		{ name: "description", content: pageDescription },
		{ name: "keywords", content: pageKeywords },
		{ property: "og:title", content: pageTitle },
		{ property: "og:description", content: pageDescription },
		{ property: "og:url", content: pageUrl },
		{ property: "og:type", content: "website" },
	],
	link: [{ rel: "canonical", href: pageUrl }],
});
</script>
<template>
	<div>
		<UINavBar />
		<slot />
	</div>
</template>
