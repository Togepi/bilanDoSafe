<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
	<div class="w-full max-w-sm space-y-10">
		<div>
			<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
				Se connecter
			</h2>
		</div>
		<form class="space-y-6" method="POST">
			<div class="relative -space-y-px rounded-md shadow-sm">
				<div
					class="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300"
				/>
				<div>
					<label for="email-address" class="sr-only">Adresse Email</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="relative block w-full text-center rounded-t-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Adresse Email"
						value={form?.email ?? ''}
					/>
				</div>
				<div>
					<label for="password" class="sr-only">Mot de passe</label>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="relative text-center block w-full rounded-b-md border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						placeholder="Mot de passe"
					/>
				</div>
			</div>
			{#if form?.incorrect}
				<div class="rounded-md bg-red-50 p-4">
					<div class="flex">
						<div class="flex-shrink-0">
							<svg
								class="h-5 w-5 text-red-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="ml-3">
							<h3 class="text-sm font-medium text-red-800">Attention</h3>
							<div class="mt-2 text-sm text-red-700">
								<ul class="list-disc space-y-1 pl-5">
									<li>Mauvais Email ou mot de passe</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			{/if}

			<!-- <div class="flex items-center justify-between">
				<div class="flex items-center">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
					<label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-900"
						>Se souvenir de moi</label
					>
				</div>

				<div class="text-sm leading-6">
					<a href="/" class="font-semibold text-indigo-600 hover:text-indigo-500"
						>Mot de passe oublié ?</a
					>
				</div>
			</div> -->

			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Se connecter</button
				>
			</div>
		</form>
	</div>
</div>
