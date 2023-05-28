<script lang="ts">
	export let entry: string;
</script>

<div class="relative mt-12">
	<div class="absolute inset-0 flex items-center" aria-hidden="true">
		<div class="w-full border-t border-gray-300" />
	</div>
	<div class="relative flex justify-center">
		<span class="text-3xl bg-white px-3 font-semibold leading-6 text-gray-900">{entry}</span>
	</div>
</div>
