<script lang="ts">
	export let entry: string;
</script>

<div class="hidden sm:block">
	<p class="text-base font-semibold text-gray-900">{entry}</p>
	<legend class="sr-only">Notification method</legend>
	<div class="sm:flex justify-between items-center">
		<p class="block text-sm font-medium leading-6 text-gray-900">Pas d'accord</p>
		<fieldset class="mt-4">
			<div>
				<div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
					<div class="flex items-center">
						<input
							name="notification-method"
							type="radio"
							checked
							class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
					</div>
					<div class="flex items-center">
						<input
							id="sms"
							name="notification-method"
							type="radio"
							class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
					</div>
					<div class="flex items-center">
						<input
							id="push"
							name="notification-method"
							type="radio"
							class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
					</div>
					<div class="flex items-center">
						<input
							id="push"
							name="notification-method"
							type="radio"
							class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
					</div>
					<div class="flex items-center">
						<input
							id="push"
							name="notification-method"
							type="radio"
							class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
						/>
					</div>
				</div>
			</div>
		</fieldset>
		<p class="block text-sm font-medium leading-6 text-gray-900">D'accord</p>
	</div>
</div>

<div class=" sm:hidden">
	<p class="text-base font-semibold text-gray-900">{entry}</p>

	<fieldset class="mt-4">
		<legend class="sr-only">Notification method</legend>
		<div class="space-y-4">
			<div class="flex items-center">
				<input
					id="email"
					name="notification-method"
					type="radio"
					checked
					class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
				/>
				<label for="email" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
					>Pas du tout d'accord</label
				>
			</div>
			<div class="flex items-center">
				<input
					id="sms"
					name="notification-method"
					type="radio"
					class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
				/>
				<label for="sms" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
					>Pas d'accord</label
				>
			</div>
			<div class="flex items-center">
				<input
					id="push"
					name="notification-method"
					type="radio"
					class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
				/>
				<label for="push" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
					>Ni pas d'accord, ni en désaccord</label
				>
			</div>
			<div class="flex items-center">
				<input
					id="push"
					name="notification-method"
					type="radio"
					class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
				/>
				<label for="push" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
					>D'accord</label
				>
			</div>
			<div class="flex items-center">
				<input
					id="push"
					name="notification-method"
					type="radio"
					class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
				/>
				<label for="push" class="ml-3 block text-sm font-medium leading-6 text-gray-900"
					>Absolument d'accord</label
				>
			</div>
		</div>
	</fieldset>
</div>
