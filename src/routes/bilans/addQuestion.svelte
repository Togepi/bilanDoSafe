<script lang="ts">
	let type: string;
	let entry: string;
	import { isModalQuestionOpen, bilan } from './modalStore';

	let updateModale = (value: boolean) => {
		isModalQuestionOpen.update(() => value);
	};

	let updateBilan = () => {
		bilan.addQuestion({ type, entry });
		updateModale(false);
		console.log($bilan);
	};
</script>

<div class="  p-10 border-2 border-dashed border-gray-200 rounded-lg">
	<div class="text-center">
		<h2 class="mt-2 text-base font-semibold leading-6 text-gray-900">Ajouter un élément</h2>
		<p class="mt-3 mb-10 text-sm text-gray-500">
			Vous pouvez ajouter soit un titre, soit une question avec une réponse à texte ,soit une
			question avec une réponse à note. Vous pouvez aggriper un élément pour le déplacer.
		</p>
	</div>
	<div>
		<fieldset class="mt-4">
			<legend class="sr-only">Type d'élément</legend>
			<div class="space-y-4 sm:flex sm:items-center sm:space-x-10 justify-center sm:space-y-0">
				<div class="flex items-center">
					<input
						bind:group={type}
						value="title"
						id="email"
						name="notification-method"
						type="radio"
						checked
						class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
					<label for="email" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
						>Titre</label
					>
				</div>
				<div class="flex items-center">
					<input
						bind:group={type}
						value="text"
						id="sms"
						name="notification-method"
						type="radio"
						class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
					<label for="sms" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
						>Réponse à texte</label
					>
				</div>
				<div class="flex items-center">
					<input
						bind:group={type}
						value="note"
						id="push"
						name="notification-method"
						type="radio"
						class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
					/>
					<label for="push" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
						>Réponse à note</label
					>
				</div>
			</div>
		</fieldset>
	</div>
	<form class="mt-6 space-y-3 sm:items-center" action="#">
		<label for="emails" class="sr-only">Texte</label>

		<div class="mt-3 sm:ml-4 sm:mt-0">
			<button
				on:click={updateBilan}
				type="submit"
				class="block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Ajouter élément</button
			>
		</div>
	</form>
</div>
