<script>
	import NavAnon from '$lib/components/NavAnon.svelte';

	let whiteTheme = true;
</script>

<div class="isolate overflow-hidden">
	<div class="flow-root bg-gray-900 sm:pt-32 lg:pb-0">
		<NavAnon {whiteTheme} />
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="relative z-10">
				<h2 class="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
					Payez une seule fois et profitez des avantages Premium à vie.
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
					Passez au plan Premium et bénéficiez d'avantages exclusifs pour la création de vos
					sondages. Avec un paiement unique, vous aurez accès à des fonctionnalités avancées et à
					une expérience améliorée.
				</p>
			</div>
			<div
				class="relative mx-auto mt-24 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 pb-12 lg:pb-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3"
			>
				<svg
					viewBox="0 0 1208 1024"
					aria-hidden="true"
					class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
				>
					<ellipse
						cx="604"
						cy="512"
						fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
						rx="604"
						ry="512"
					/>
					<defs>
						<radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
							<stop stop-color="#7775D6" />
							<stop offset="1" stop-color="#E935C1" />
						</radialGradient>
					</defs>
				</svg>
				<div
					class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
					aria-hidden="true"
				/>
				<div
					class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0"
				>
					<div class="p-8 lg:pt-12 xl:p-10 xl:pt-14 text-white">
						<div class="flex items-center gap-x-3 pb-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-10 h-10 outline outline-1 rounded-full p-2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
								/>
							</svg>

							<h3 id="tier-scale" class="text-sm font-semibold leading-6">Basique</h3>
						</div>
						<div
							class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"
						>
							<div class="mt-2 flex items-center gap-x-4">
								<!-- Price, update based on frequency toggle state -->
								<p class="text-4xl font-bold tracking-tight text-white">0 CHF</p>
								<div class="text-sm leading-5">
									<!-- Payment frequency, update based on frequency toggle state -->
									<p class="text-gray-400">Gratuit</p>
								</div>
							</div>
							<a
								href="/"
								aria-describedby="tier-starter"
								class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 hover:bg-white/20 focus-visible:outline-white"
								>S'incrire
							</a>
						</div>
						<div class="mt-8 flow-root sm:mt-10">
							<ul
								class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white"
							>
								<li class="flex gap-x-3 py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-5 w-5 flex-none text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
										/>
									</svg>

									Création de sondage illimitée
								</li>

								<li class="flex gap-x-3 py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-5 w-5 flex-none text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
										/>
									</svg>

									Exportation de données ( CSV, PDF, PPT, XLS )
								</li>
								<li class="flex gap-x-3 py-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-5 w-5 flex-none text-gray-500"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
										/>
									</svg>

									3 Templates de base
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="relative rounded-2xl z-10 bg-white shadow-xl ring-1 ring-gray-900/10">
					<div class="p-8 lg:pt-10 xl:p-10 xl:pt-12">
						<div class="flex items-center gap-x-3 pb-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-10 h-10 text-indigo-400 outline outline-1 rounded-full p-1"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
								/>
							</svg>

							<h3 id="tier-scale" class="text-sm font-semibold leading-6 text-indigo-400">
								License Team Premium
							</h3>
						</div>
						<div class="flex flex-col gap-6 lg:flex-col lg:items-stretch">
							<div class="mt-2 sm:flex items-center gap-x-4">
								<!-- Price, update based on frequency toggle state -->
								<p class="text-4xl font-bold tracking-tight text-gray-900">300 CHF</p>
								<div class="text-sm leading-5">
									<p class="text-gray-900">TTC</p>
									<!-- Payment frequency, update based on frequency toggle state -->
									<p class="text-gray-500">Paiement unique</p>
								</div>
							</div>
							<a
								href="/"
								aria-describedby="tier-scale"
								class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
								>Acheter cette license</a
							>
						</div>
						<div class="mt-8 flow-root sm:mt-10">
							<ul
								class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-gray-900/5 border-gray-900/5 text-gray-600"
							>
								<li class="flex gap-x-3 py-2">
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
									<p>
										<span class="font-bold">Accès premium pour toute votre équipe.</span> La license
										permet jusqu'à 25 personnes de travailler sur le même projet.
									</p>
								</li>
								<li class="flex gap-x-3 py-2">
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
									<p>
										<span class="font-bold">Gestion des équipes de projet.</span> Choisissez de gérer
										quelle personne va travailler sur quel projet.
									</p>
								</li>
								<li class="flex gap-x-3 py-2">
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
									<p>
										<span class="font-bold">Gestion des équipes de projet.</span> Choisissez de gérer
										quelle personne va travailler sur quel projet.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div
					class="relative rounded-2xl bg-gray-800/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0"
				>
					<div class="p-8 lg:pt-12 xl:p-10 xl:pt-14 text-white">
						<div class="flex items-center gap-x-3 pb-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-10 h-10 outline outline-1 rounded-full p-2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
								/>
							</svg>

							<h3 id="tier-scale" class="text-sm font-semibold leading-6">License Premium</h3>
						</div>
						<div class="flex flex-col gap-6 lg:flex-col lg:items-stretch">
							<div class="mt-2 sm:flex items-center gap-x-4">
								<!-- Price, update based on frequency toggle state -->
								<p class="text-4xl font-bold tracking-tight text-white">60 CHF</p>
								<div class="text-sm leading-5">
									<p class="text-white">TTC</p>
									<!-- Payment frequency, update based on frequency toggle state -->
									<p class="text-gray-400">Paiement unique</p>
								</div>
							</div>
							<a
								href="/"
								aria-describedby="tier-growth"
								class="rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 hover:bg-white/20 focus-visible:outline-white"
								>Acheter cette license</a
							>
						</div>
						<div class="mt-8 flow-root sm:mt-10">
							<ul
								class="-my-2 divide-y border-t text-sm leading-6 lg:border-t-0 divide-white/5 border-white/5 text-white"
							>
								<li class="flex gap-x-3 py-2">
									<svg
										class="h-6 w-5 flex-none text-gray-500"
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
									Charte statistique
								</li>
								<li class="flex gap-x-3 py-2">
									<svg
										class="h-6 w-5 flex-none text-gray-500"
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
									Easy to use accounting
								</li>
								<li class="flex gap-x-3 py-2">
									<svg
										class="h-6 w-5 flex-none text-gray-500"
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
									Ajotu d'image possible
								</li>
								<li class="flex gap-x-3 py-2">
									<svg
										class="h-6 w-5 flex-none text-gray-500"
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
									Accès à tous les templates
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="relative bg-gray-50 lg:pt-14">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
			<!-- Feature comparison (up to lg) -->
			<section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
				<h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

				<div class="mx-auto max-w-2xl space-y-16">
					<div class="border-t border-gray-900/10">
						<div class="-mt-px w-72 border-t-2 pt-10 md:w-80 border-transparent">
							<h3 class="text-sm font-semibold leading-6 text-gray-900">Starter</h3>
							<p class="mt-1 text-sm leading-6 text-gray-600">
								All your essential business finances, taken care of.
							</p>
						</div>

						<div class="mt-10 space-y-10">
							<div>
								<h4 class="text-sm font-semibold leading-6 text-gray-900">Catered for business</h4>
								<div class="relative mt-6">
									<!-- Fake card background -->
									<div
										aria-hidden="true"
										class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
									/>

									<div
										class="relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 ring-1 ring-gray-900/10"
									>
										<dl class="divide-y divide-gray-200 text-sm leading-6">
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Tax Savings</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Easy to use accounting</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Multi-accounts</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<span class="text-gray-900">3 accounts</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Invoicing</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<span class="text-gray-900">3 invoices</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Exclusive offers</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">6 months free advisor</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Mobile and web access</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
										</dl>
									</div>

									<!-- Fake card border -->
									<div
										aria-hidden="true"
										class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block ring-1 ring-gray-900/10"
									/>
								</div>
							</div>
							<div>
								<h4 class="text-sm font-semibold leading-6 text-gray-900">Other perks</h4>
								<div class="relative mt-6">
									<!-- Fake card background -->
									<div
										aria-hidden="true"
										class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
									/>

									<div
										class="relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 ring-1 ring-gray-900/10"
									>
										<dl class="divide-y divide-gray-200 text-sm leading-6">
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">24/7 customer support</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Instant notifications</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Budgeting tools</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Digital receipts</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Pots to separate money</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Free bank transfers</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Business debit card</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
										</dl>
									</div>

									<!-- Fake card border -->
									<div
										aria-hidden="true"
										class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block ring-1 ring-gray-900/10"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="border-t border-gray-900/10">
						<div class="-mt-px w-72 border-t-2 pt-10 md:w-80 border-indigo-600">
							<h3 class="text-sm font-semibold leading-6 text-indigo-600">Scale</h3>
							<p class="mt-1 text-sm leading-6 text-gray-600">
								The best financial services for your thriving business.
							</p>
						</div>

						<div class="mt-10 space-y-10">
							<div>
								<h4 class="text-sm font-semibold leading-6 text-gray-900">Catered for business</h4>
								<div class="relative mt-6">
									<!-- Fake card background -->
									<div
										aria-hidden="true"
										class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
									/>

									<div
										class="relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 ring-2 ring-indigo-600"
									>
										<dl class="divide-y divide-gray-200 text-sm leading-6">
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Tax Savings</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Easy to use accounting</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Multi-accounts</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<span class="font-semibold text-indigo-600">Unlimited accounts</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Invoicing</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<span class="font-semibold text-indigo-600">Unlimited invoices</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Exclusive offers</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">6 months free advisor</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Mobile and web access</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
										</dl>
									</div>

									<!-- Fake card border -->
									<div
										aria-hidden="true"
										class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block ring-2 ring-indigo-600"
									/>
								</div>
							</div>
							<div>
								<h4 class="text-sm font-semibold leading-6 text-gray-900">Other perks</h4>
								<div class="relative mt-6">
									<!-- Fake card background -->
									<div
										aria-hidden="true"
										class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
									/>

									<div
										class="relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 ring-2 ring-indigo-600"
									>
										<dl class="divide-y divide-gray-200 text-sm leading-6">
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">24/7 customer support</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Instant notifications</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Budgeting tools</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Digital receipts</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Pots to separate money</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Free bank transfers</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Business debit card</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
										</dl>
									</div>

									<!-- Fake card border -->
									<div
										aria-hidden="true"
										class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block ring-2 ring-indigo-600"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="border-t border-gray-900/10">
						<div class="-mt-px w-72 border-t-2 pt-10 md:w-80 border-transparent">
							<h3 class="text-sm font-semibold leading-6 text-gray-900">Growth</h3>
							<p class="mt-1 text-sm leading-6 text-gray-600">
								Convenient features to take your business to the next level.
							</p>
						</div>

						<div class="mt-10 space-y-10">
							<div>
								<h4 class="text-sm font-semibold leading-6 text-gray-900">Catered for business</h4>
								<div class="relative mt-6">
									<!-- Fake card background -->
									<div
										aria-hidden="true"
										class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
									/>

									<div
										class="relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 ring-1 ring-gray-900/10"
									>
										<dl class="divide-y divide-gray-200 text-sm leading-6">
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Tax Savings</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Easy to use accounting</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Multi-accounts</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<span class="text-gray-900">7 accounts</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Invoicing</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<span class="text-gray-900">10 invoices</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Exclusive offers</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">6 months free advisor</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Mobile and web access</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
										</dl>
									</div>

									<!-- Fake card border -->
									<div
										aria-hidden="true"
										class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block ring-1 ring-gray-900/10"
									/>
								</div>
							</div>
							<div>
								<h4 class="text-sm font-semibold leading-6 text-gray-900">Other perks</h4>
								<div class="relative mt-6">
									<!-- Fake card background -->
									<div
										aria-hidden="true"
										class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
									/>

									<div
										class="relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0 ring-1 ring-gray-900/10"
									>
										<dl class="divide-y divide-gray-200 text-sm leading-6">
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">24/7 customer support</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Instant notifications</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Budgeting tools</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Digital receipts</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Pots to separate money</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-indigo-600"
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
													<span class="sr-only">Yes</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Free bank transfers</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
											<div
												class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
											>
												<dt class="pr-4 text-gray-600">Business debit card</dt>
												<dd class="flex items-center justify-end sm:justify-center sm:px-4">
													<svg
														class="mx-auto h-5 w-5 text-gray-400"
														viewBox="0 0 20 20"
														fill="currentColor"
														aria-hidden="true"
													>
														<path
															d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
														/>
													</svg>
													<span class="sr-only">No</span>
												</dd>
											</div>
										</dl>
									</div>

									<!-- Fake card border -->
									<div
										aria-hidden="true"
										class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block ring-1 ring-gray-900/10"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Feature comparison (lg+) -->
			<section aria-labelledby="comparison-heading" class="hidden lg:block">
				<h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

				<div class="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
					<div aria-hidden="true" class="-mt-px">
						<div class="border-t-2 pt-10 border-transparent">
							<p class="text-sm font-semibold leading-6 text-gray-900">Starter</p>
							<p class="mt-1 text-sm leading-6 text-gray-600">
								All your essential business finances, taken care of.
							</p>
						</div>
					</div>
					<div aria-hidden="true" class="-mt-px">
						<div class="border-t-2 pt-10 border-indigo-600">
							<p class="text-sm font-semibold leading-6 text-indigo-600">Scale</p>
							<p class="mt-1 text-sm leading-6 text-gray-600">
								The best financial services for your thriving business.
							</p>
						</div>
					</div>
					<div aria-hidden="true" class="-mt-px">
						<div class="border-t-2 pt-10 border-transparent">
							<p class="text-sm font-semibold leading-6 text-gray-900">Growth</p>
							<p class="mt-1 text-sm leading-6 text-gray-600">
								Convenient features to take your business to the next level.
							</p>
						</div>
					</div>
				</div>

				<div class="-mt-6 space-y-16">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Catered for business</h3>
						<div class="relative -mx-8 mt-10">
							<!-- Fake card backgrounds -->
							<div
								class="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
								aria-hidden="true"
							>
								<div class="h-full w-full rounded-lg bg-white shadow-sm" />
								<div class="h-full w-full rounded-lg bg-white shadow-sm" />
								<div class="h-full w-full rounded-lg bg-white shadow-sm" />
							</div>

							<table class="relative w-full border-separate border-spacing-x-8">
								<thead>
									<tr class="text-left">
										<th scope="col">
											<span class="sr-only">Feature</span>
										</th>
										<th scope="col">
											<span class="sr-only">Starter tier</span>
										</th>
										<th scope="col">
											<span class="sr-only">Scale tier</span>
										</th>
										<th scope="col">
											<span class="sr-only">Growth tier</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Tax Savings
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Easy to use accounting
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Multi-accounts
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<span class="text-sm leading-6 text-gray-900">3 accounts</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<span class="text-sm leading-6 font-semibold text-indigo-600"
													>Unlimited accounts</span
												>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<span class="text-sm leading-6 text-gray-900">7 accounts</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Invoicing
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<span class="text-sm leading-6 text-gray-900">3 invoices</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<span class="text-sm leading-6 font-semibold text-indigo-600"
													>Unlimited invoices</span
												>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<span class="text-sm leading-6 text-gray-900">10 invoices</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Exclusive offers
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											6 months free advisor
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
											>Mobile and web access</th
										>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
									</tr>
								</tbody>
							</table>

							<!-- Fake card borders -->
							<div
								class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
								aria-hidden="true"
							>
								<div class="rounded-lg ring-1 ring-gray-900/10" />
								<div class="rounded-lg ring-2 ring-indigo-600" />
								<div class="rounded-lg ring-1 ring-gray-900/10" />
							</div>
						</div>
					</div>
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Other perks</h3>
						<div class="relative -mx-8 mt-10">
							<!-- Fake card backgrounds -->
							<div
								class="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
								aria-hidden="true"
							>
								<div class="h-full w-full rounded-lg bg-white shadow-sm" />
								<div class="h-full w-full rounded-lg bg-white shadow-sm" />
								<div class="h-full w-full rounded-lg bg-white shadow-sm" />
							</div>

							<table class="relative w-full border-separate border-spacing-x-8">
								<thead>
									<tr class="text-left">
										<th scope="col">
											<span class="sr-only">Feature</span>
										</th>
										<th scope="col">
											<span class="sr-only">Starter tier</span>
										</th>
										<th scope="col">
											<span class="sr-only">Scale tier</span>
										</th>
										<th scope="col">
											<span class="sr-only">Growth tier</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											24/7 customer support
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Instant notifications
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Budgeting tools
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Digital receipts
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Pots to separate money
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
										>
											Free bank transfers
											<div class="absolute inset-x-8 mt-3 h-px bg-gray-200" />
										</th>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
									</tr>
									<tr>
										<th
											scope="row"
											class="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
											>Business debit card</th
										>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-indigo-600"
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
												<span class="sr-only">Yes</span>
											</span>
										</td>
										<td class="relative w-1/4 px-4 py-0 text-center">
											<span class="relative h-full w-full py-3">
												<svg
													class="mx-auto h-5 w-5 text-gray-400"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
												>
													<path
														d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
													/>
												</svg>
												<span class="sr-only">No</span>
											</span>
										</td>
									</tr>
								</tbody>
							</table>

							<!-- Fake card borders -->
							<div
								class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
								aria-hidden="true"
							>
								<div class="rounded-lg ring-1 ring-gray-900/10" />
								<div class="rounded-lg ring-2 ring-indigo-600" />
								<div class="rounded-lg ring-1 ring-gray-900/10" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>
