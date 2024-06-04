<template>
	<div>
		<nav class="bg-white border-gray-200 dark:bg-gray-900">
			<div
				class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
				<NuxtLink
					to="/"
					class="flex items-center space-x-3 rtl:space-x-reverse">
					<img
						src="/cinema_logo.png"
						class="h-16 rounded-2xl"
						alt="Cinemate Logo" />
					<span
						class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
						>Cinemate</span
					>
				</NuxtLink>
				<button
					ref="toggleButton"
					data-collapse-toggle="navbar-default"
					type="button"
					class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
					aria-label="Toggle navigation"
					@click="toggleMenu">
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14">
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h15M1 7h15M1 13h15" />
					</svg>
				</button>
				<div
					ref="menu"
					class="hidden w-full md:block md:w-auto"
					id="navbar-default">
					<ul
						class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						<li>
							<NuxtLink
								to="/"
								:class="getLinkClass('/')"
								aria-current="page"
								@click="collapseMenu">
								Ana Sayfa
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/search"
								:class="getLinkClass('/search')"
								@click="collapseMenu">
								Ara
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/up-coming"
								:class="getLinkClass('/up-coming')"
								@click="collapseMenu">
								Yeni Çıkanlar
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/popular"
								:class="getLinkClass('/popular')"
								@click="collapseMenu">
								Popüler
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/now-playing"
								:class="getLinkClass('/now-playing')"
								@click="collapseMenu">
								Gösterimdekiler
							</NuxtLink>
						</li>
						<li>
							<NuxtLink
								to="/top-rated"
								:class="getLinkClass('/top-rated')"
								@click="collapseMenu">
								En Çok Oy Alan
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const menu = ref(null);
const toggleButton = ref(null);
const route = useRoute();

const toggleMenu = () => {
	if (menu.value.classList.contains("hidden")) {
		menu.value.classList.remove("hidden");
		toggleButton.value.setAttribute("aria-expanded", "true");
	} else {
		menu.value.classList.add("hidden");
		toggleButton.value.setAttribute("aria-expanded", "false");
	}
};

const collapseMenu = () => {
	menu.value.classList.add("hidden");
	toggleButton.value.setAttribute("aria-expanded", "false");
};

const getLinkClass = (path) => {
	const baseClass = "block py-2 px-3 rounded md:p-0";
	const activeClass =
		"text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500";
	const inactiveClass =
		"text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

	return route.path === path
		? `${baseClass} ${activeClass}`
		: `${baseClass} ${inactiveClass}`;
};
</script>
