<script lang="ts">
	import AddQuestion from '../addQuestion.svelte';
	import { isModalQuestionOpen, bilan } from '../modalStore';
	import Title from './title.svelte';
	import Text from './text.svelte';
	import Note from './note.svelte';

	let bilanType: string;
	let bilanEntry: string;

	let updateModale = (value: boolean) => {
		isModalQuestionOpen.update(() => value);
		console.log(bilan);
	};
	console.log(bilan);
</script>

<a
	href="/dahsboard"
	class=" text-xs text-blue-600 underline hover:text-blue-900 absolute top-0 left-0 p-5"
>
	Revenir au dashboard
</a>
<div class="mx-auto max-w-md sm:max-w-3xl mt-10">
	<h1 class="text-center mt-12 text-3xl font-bold uppercase">Nom du Bilan</h1>

	<div class="mt-10 mb-16">
		<ul class="mt-4 grid grid-cols-1 gap-4">
			{#each $bilan as { type, entry }}
				{#if type === 'title'}
					<Title {entry} />
				{:else if type === 'text'}
					<Text {entry} />
				{:else if type === 'note'}
					<Note {entry} />
				{:else}
					not
				{/if}
			{/each}
		</ul>
	</div>
</div>
