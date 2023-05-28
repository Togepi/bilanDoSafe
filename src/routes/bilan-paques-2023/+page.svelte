<script lang="ts">
	import { bind } from 'svelte/internal';
	import Note from './note.svelte';
	import Text from './text.svelte';

	let ArrayResponse = [
		{ title: ' Général', type: 'titre' },
		{ title: " Le séjour s'est bien déroulé dans son ensemble.", type: 'note' },
		{ title: " Les enfants ont donné l'impression d'apprécier le séjour.", type: 'note' },
		{ title: 'Tu as pris du plaisir à y monter en tant que moniteurice.', type: 'note' },
		{ title: "Dans l'ensemble, cela s'est bien passé avec les enfants.", type: 'note' },
		{ title: 'Les enfants ont montré du respect envers les adultes.', type: 'note' },
		{ title: "Chaque enfant a pu s'intégrer aux autres.", type: 'note' },

		{
			title: "Dans l'ensemble, les animations proposées aux enfants ont été un succès.",
			type: 'note'
		},
		{ title: 'Les activités étaient bien préparées et organisées.', type: 'note' },
		{ title: 'Le retour des enfants sur les activités était positif.', type: 'note' },
		{
			title: 'Les explications fournies aux adultes étaient claires et facilement compréhensibles.',
			type: 'note'
		},
		{
			title: 'Les explications fournies aux enfants étaient claires et facilement compréhensibles.',
			type: 'note'
		},
		{
			title: 'Le timing des journées était bien adapté.',
			type: 'note'
		},
		{
			title: 'Entre adultes ',
			type: 'titre'
		},
		{
			title: "L'ambiance entre adultes était bonne.",
			type: 'note'
		},
		{
			title: "Tu as pu trouver ta place au sein de l'équipe.",
			type: 'note'
		},
		{
			title: "Tu as pu t'exprimer, donner ton avis lorsque tu le voulais.",
			type: 'note'
		},
		{
			title: 'Les 5ème repas se sont bien déroulés.',
			type: 'note'
		},
		{
			title: 'Spiritualité  ',
			type: 'titre'
		},
		{
			title: ' Les activités de spiritualité étaient en lien avec le thème.',
			type: 'note'
		},
		{
			title: " Il y a eu suffisamment d'activités de spiritualité durant le séjour.",
			type: 'note'
		},
		{
			title: 'Les activités de spiritualité étaient bien organisées.',
			type: 'note'
		},
		{
			title:
				'Les enfants ont pu comprendre le lien entre la spiritualité et les activités de jeu de rôle.',
			type: 'note'
		},
		{
			title: 'Gérance  ',
			type: 'titre'
		},
		{
			title: "Dans l'ensemble, la communication avec la gérance a été cordiale.",
			type: 'note'
		},
		{
			title: 'La transmission des informations par et pour la gérance a été efficace.',
			type: 'note'
		},
		{
			title: 'Mise en place et respect des objectifs pédagogiques',
			type: 'titre'
		},
		{
			title: "Gestion de l'échec et de la frustration qui en découle.",
			type: 'note'
		},
		{
			title: 'Collaboration sur les objectifs de jeu et les besoins la vie en communauté.',
			type: 'note'
		},
		{
			title: "Responsabilisation commune et individuelle au bon fonctionnement d'un camp.",
			type: 'note'
		},
		{
			title:
				'Pro-activité dans la participation aux activités ainsi que les tâches qui découlent de la vie de groupe.',
			type: 'note'
		},
		{
			title: 'Commentaires  ',
			type: 'titre'
		},
		{
			title: 'points positifs  ',
			type: 'text'
		},
		{
			title: 'points négatifs  ',
			type: 'text'
		},
		{
			title: 'Divers, remarques,...  ',
			type: 'text'
		}
	];

	let selectedAnswer = 8;
</script>

<form class="prose m-auto px-5 sm:px-0 mt-12 pb-12" method="POST">
	<h1>BILAN PÂQUES 2023</h1>
	{#each ArrayResponse as { title, type }}
		{#if type === 'note'}
			<Note {title} />
		{:else if type === 'text'}
			<Text {title} />
		{:else if type === 'titre'}
			<h2>{title}</h2>
		{/if}
	{/each}

	<div class="w-full flex justify-center">
		<button class="  bg-indigo-600 px-24 py-1.5 text-white mt-5 rounded" type="submit"
			>Envoyer
		</button>
	</div>
</form>
