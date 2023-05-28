<script lang="ts">
	import type { PageData } from './$types';
</script>

<main class="bg-gray-50 w-full h-full min-h-screen p-12">
	<div class="prose">
		<section>
			<h1>Gestion des sondages</h1>
		</section>
	</div>
	<div class="relative">
		<div class="absolute inset-0 flex items-center" aria-hidden="true">
			<div class="w-full border-t border-gray-300" />
		</div>
	</div>

	<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 rounded-xl mt-16">
		<li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
			<a
				href="/"
				class="flex w-full items-center justify-between space-x-6 p-6 group hover:bg-gray-50"
			>
				<div class="flex-1 truncate">
					<div class="flex items-center space-x-3">
						<h3 class="truncate text-sm font-medium text-gray-900">BIlan Pâques 2023</h3>
						<span
							class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
							>Colonie de la Fouly</span
						>
					</div>
					<p class="mt-1 truncate text-sm text-gray-500">Bilan du séjour de Pâques 2023</p>
				</div>
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1"
						stroke="currentColor"
						class="w-6 h-6 lg:text-gray-300 group-hover:text-gray-700"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
					<p class="text-xs lg:text-gray-300 group-hover:text-gray-700">Résultats</p>
				</div>
			</a>

			<div>
				<div class="-mt-px flex divide-x divide-gray-200">
					<div class="flex w-0 flex-1">
						<a
							href="mailto:janecooper@example.com"
							class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:border-gray-300 group"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
								/>
							</svg>

							Modifier
						</a>
					</div>
					<div class="-ml-px flex w-0 flex-1">
						<a
							href="tel:+1-202-555-0170"
							class="group relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:border-gray-300"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
								/>
							</svg>

							Copier
						</a>
					</div>
				</div>
			</div>
		</li>
		<li>
			<button
				type="button"
				class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
			>
				<svg
					class="mx-auto h-12 w-12 text-gray-400"
					stroke="currentColor"
					fill="none"
					viewBox="0 0 48 48"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
					/>
				</svg>
				<span class="mt-2 block text-sm font-semibold text-gray-900">Créer un nouveau sondage</span>
			</button>
		</li>

		<!-- More people... -->
	</ul>
</main>
