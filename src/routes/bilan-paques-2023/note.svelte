<script lang="ts">
	import { bind } from 'svelte/internal';

	let selectedAnswer = 8;
	export let title: String;
</script>

<p class="font-medium leading-6 text-gray-900">{title}</p>

<fieldset class="mt-2">
	<legend class="sr-only">Opinion</legend>
	<div class="grid gap-3 grid-cols-6">
		{#each Array(6) as _, i}
			<label
				class="{selectedAnswer === i
					? 'bg-indigo-600 text-white hover:bg-indigo-500 '
					: 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50 '} flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1 cursor-pointer focus:outline-none"
			>
				<input
					type="radio"
					name="memory-option-{i}"
					value={i}
					class="sr-only"
					aria-labelledby="memory-option-0-label"
					bind:group={selectedAnswer}
				/>
				<span id="memory-option-0-label">{i}</span>
			</label>
		{/each}
	</div>
</fieldset>
<div class="flex mt-1">
	<div class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500 w-full text-left">
		Pas d'accord
	</div>

	<div
		class="text-sm font-medium leading-6 text-indigo-600 w-full hover:text-indigo-500 text-right"
	>
		Tout à fait d'accord
	</div>
</div>
<div class="relative pb-12" />
