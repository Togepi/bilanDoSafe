<script>
	import NavAnon from '$lib/components/NavAnon.svelte';
</script>

<!-- Header -->
<NavAnon />

<div class="bg-white">
	<main class="isolate">
		<!-- Hero section -->
		<div class="relative">
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
			<div class="py-8 sm:py-32">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl text-center">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Votre sondage en 2 minutes.
						</h1>
						<p class="mt-6 text-lg leading-8 text-gray-600">
							Notre application de création de sondages vous offre une plateforme intuitive pour
							concevoir des questionnaires interactifs et captivants en seulement quelques minutes .
						</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/"
								class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Créer votre sondage</a
							>
							<a href="/" class="text-sm font-semibold leading-6 text-gray-900 sm:flex"
								>En savoir plus <svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 22 22"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-5 h-6 hidden sm:block"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									/>
								</svg></a
							>
						</div>
					</div>
					<div class="mt-16 flow-root sm:mt-24">
						<div
							class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
						>
							<img
								src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
								alt="App screenshot"
								width="2432"
								height="1442"
								class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
		</div>

		<!-- Feature section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Everything you need to deploy your app
				</p>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas
					a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.
				</p>
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl
					class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
									/>
								</svg>
							</div>
							Push to deploy
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio
							urna massa nunc massa.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
							</div>
							SSL certificates
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales
							gravida quam turpis enim lacus amet.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
									/>
								</svg>
							</div>
							Simple queues
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor
							congue commodo diam neque.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base font-semibold leading-7 text-gray-900">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
									/>
								</svg>
							</div>
							Advanced security
						</dt>
						<dd class="mt-2 text-base leading-7 text-gray-600">
							Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id
							hac maecenas ac donec pharetra eget.
						</dd>
					</div>
				</dl>
			</div>
		</div>

		<!-- Pricing section -->
		<div class="isolate overflow-hidden bg-gray-900">
			<div class="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
				<div class="mx-auto max-w-4xl">
					<h2 class="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
					<p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
						The right price for you, <br class="hidden sm:inline lg:hidden" />whoever you are
					</p>
				</div>
				<div class="relative mt-6">
					<p class="mx-auto max-w-2xl text-lg leading-8 text-white/60">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos
						odit doloribus molestiae voluptatum.
					</p>
					<svg
						viewBox="0 0 1208 1024"
						class="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
					>
						<ellipse
							cx="604"
							cy="512"
							fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
							rx="604"
							ry="512"
						/>
						<defs>
							<radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
								<stop stop-color="#7775D6" />
								<stop offset="1" stop-color="#E935C1" />
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>
			<div class="flow-root bg-white pb-24 sm:pb-32">
				<div class="-mt-80">
					<div class="mx-auto max-w-7xl px-6 lg:px-8">
						<div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
							<div
								class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
							>
								<div>
									<h3 id="tier-hobby" class="text-base font-semibold leading-7 text-indigo-600">
										Hobby
									</h3>
									<div class="mt-4 flex items-baseline gap-x-2">
										<span class="text-5xl font-bold tracking-tight text-gray-900">$49</span>
										<span class="text-base font-semibold leading-7 text-gray-600">/month</span>
									</div>
									<p class="mt-6 text-base leading-7 text-gray-600">
										Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci
										vitae.
									</p>
									<ul class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											5 products
										</li>
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											Up to 1,000 subscribers
										</li>
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											Basic analytics
										</li>
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											48-hour support response time
										</li>
									</ul>
								</div>
								<a
									href="/"
									aria-describedby="tier-hobby"
									class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>Get started today</a
								>
							</div>
							<div
								class="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
							>
								<div>
									<h3 id="tier-team" class="text-base font-semibold leading-7 text-indigo-600">
										Team
									</h3>
									<div class="mt-4 flex items-baseline gap-x-2">
										<span class="text-5xl font-bold tracking-tight text-gray-900">$79</span>
										<span class="text-base font-semibold leading-7 text-gray-600">/month</span>
									</div>
									<p class="mt-6 text-base leading-7 text-gray-600">
										Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit
										sequi.
									</p>
									<ul class="mt-10 space-y-4 text-sm leading-6 text-gray-600">
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											Unlimited products
										</li>
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											Unlimited subscribers
										</li>
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											Advanced analytics
										</li>
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											1-hour, dedicated support response time
										</li>
										<li class="flex gap-x-3">
											<svg
												class="h-6 w-5 flex-none text-indigo-600"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												/>
											</svg>
											Marketing automations
										</li>
									</ul>
								</div>
								<a
									href="/"
									aria-describedby="tier-team"
									class="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>Get started today</a
								>
							</div>

							<div
								class="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center"
							>
								<div class="lg:min-w-0 lg:flex-1">
									<h3 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
										Discounted
									</h3>
									<p class="mt-1 text-base leading-7 text-gray-600">
										Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non
										voluptatem sunt eos nostrum.
									</p>
								</div>
								<a
									href="/"
									class="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									>Buy discounted license <span aria-hidden="true">&rarr;</span></a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- FAQs -->
		<div
			class="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32"
		>
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
				Frequently asked questions
			</h2>
			<dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
				<div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
					<dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
						What&#039;s the best thing about Switzerland?
					</dt>
					<dd class="mt-4 lg:col-span-7 lg:mt-0">
						<p class="text-base leading-7 text-gray-600">
							I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Quas cupiditate laboriosam fugiat.
						</p>
					</dd>
				</div>

				<!-- More questions... -->
			</dl>
		</div>

		<!-- CTA section -->
		<div class="relative -z-10 mt-32 px-6 lg:px-8">
			<div
				class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"
				aria-hidden="true"
			>
				<div
					class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"
					style="clip-path: polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)"
				/>
			</div>
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Boost your productivity.<br />Start using our app today.
				</h2>
				<p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
					Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua
					proident excepteur commodo do ea.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="/"
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Get started</a
					>
					<a href="/" class="text-sm font-semibold leading-6 text-gray-900"
						>Learn more <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
			<div
				class="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"
				aria-hidden="true"
			>
				<div
					class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				/>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<div class="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
		<footer
			aria-labelledby="footer-heading"
			class="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
		>
			<h2 id="footer-heading" class="sr-only">Footer</h2>
			<div class="xl:grid xl:grid-cols-3 xl:gap-8">
				<img
					class="h-7"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="Company name"
				/>
				<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
							<ul class="mt-6 space-y-4">
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Hosting</a
									>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>Data Services</a
									>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>Uptime Monitoring</a
									>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>Enterprise Services</a
									>
								</li>
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
							<ul class="mt-6 space-y-4">
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a
									>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>Documentation</a
									>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>API Reference</a
									>
								</li>
							</ul>
						</div>
					</div>
					<div class="md:grid md:grid-cols-2 md:gap-8">
						<div>
							<h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
							<ul class="mt-6 space-y-4">
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
										>Partners</a
									>
								</li>
							</ul>
						</div>
						<div class="mt-10 md:mt-0">
							<h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
							<ul class="mt-6 space-y-4">
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a
									>
								</li>
								<li>
									<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</div>
