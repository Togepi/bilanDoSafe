<script lang="ts">
	export let whiteTheme = false;
</script>

<header class=" relative sm:absolute inset-x-0 top-0 z-50">
	{#if whiteTheme}
		<nav
			class=" flex flex-col sm:flex-row items-center justify-between p-6 lg:px-8 text-white"
			aria-label="Global"
		>
			<div
				class="flex lg:flex-1 justify-center sm:justify-normal order-last sm:order-first pt-20 sm:p-0"
			>
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">dosafe</span>
					<img class="h-8 w-auto" src="/logo_main_white.png" alt="" />
				</a>
			</div>

			<div class="flex flex-1 justify-end gap-6 items-center">
				<div>
					<a
						href="/premium"
						class=" text-indigo-500 sm:text-white text-sm font-semibold leading-6 sm:bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
						>Premium</a
					>
				</div>
				<a
					href="/login"
					class="text-sm font-semibold leading-6 gap-x-1 hover:text-gray-600 inline-flex items-center"
					>Se connecter<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 22 22"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</nav>
	{:else}
		<nav
			class="flex flex-col sm:flex-row items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div
				class="flex lg:flex-1 justify-center sm:justify-normal order-last sm:order-first pt-20 sm:p-0"
			>
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">dosafe</span>
					<img class="h-8 w-auto" src="/logo_main.png" alt="" />
				</a>
			</div>

			<div class="flex flex-1 justify-end gap-6 items-center">
				<div>
					<a
						href="/premium"
						class=" text-indigo-600 sm:text-white text-sm font-semibold leading-6 sm:bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
						>Premium</a
					>
				</div>
				<a
					href="/login"
					class="text-sm font-semibold leading-6 text-gray-900 gap-x-1 hover:text-gray-600 inline-flex items-center"
					>Se connecter<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 22 22"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</nav>
	{/if}
</header>
