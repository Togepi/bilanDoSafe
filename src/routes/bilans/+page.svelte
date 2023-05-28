<script lang="ts">
	import AddQuestion from './addQuestion.svelte';
	import { isModalQuestionOpen, bilan } from './modalStore';
	import Note from './note.svelte';
	import Texte from './text.svelte';
	import Title from './title.svelte';

	let bilanType: string;
	let bilanEntry: string;

	let updateModale = (value: boolean) => {
		isModalQuestionOpen.update(() => value);
		console.log(bilan);
	};
</script>

<a
	href="/dahsboard"
	class=" text-xs text-blue-600 underline hover:text-blue-900 absolute top-0 left-0 p-5"
>
	Revenir au dashboard
</a>
<div class="mx-auto max-w-md sm:max-w-3xl mt-10">
	<h1 class="text-center mt-12 text-3xl font-bold uppercase">Nom du Bilan</h1>
	<a href="bilans/apercu" class="text-xs text-blue-600 underline">apercu</a>

	<div class="mt-10 mb-16">
		<ul class="mt-4 grid grid-cols-1 gap-4">
			{#each $bilan as { type, entry }}
				{#if type === 'title'}
					<Title {entry} />
				{:else if type === 'text'}
					<Texte {entry} />
				{:else if type === 'note'}
					<Note {entry} />
				{/if}
			{/each}
		</ul>
	</div>

	<AddQuestion />
</div>
