<template>
		<div class="new-location-detail
		bg-white
		m-4
		rounded-lg
		shadow-xl
		flex flex-col justify-between
	">
		<div class="card-header
			w-full
			p-6
			flex flex-row justify-between items-center
		">
			<div class="h3 text-base font-bold">New Location</div>
			<font-awesome-icon :icon="['fas', 'xmark']" class="text-xl text-gray-300"/>
		</div>
		<div class="card-hq-info
			w-full
			p-6
			space-y-4
		">
      <InputField label="Title *"/>
      <InputField label="Enter the address *"/>
		</div>
		<div class="card-contact-info
			w-full
			p-6
		">
			<div class="text-sm text-cyan-500 tracking-wide pb-4">
				CONTACT INFORMATION
			</div>
			<div class="line-break
				border-t-2
				border-cyan-100
				pt-6
				flex flex-col
				justify-between
				text-xs tracking-wide
			">
				<InputField label="Full name *"/>
				<InputField label="Job position *"/>
				<InputField label="Email address *"/>
				<InputField label="Phone *"/>
			</div>
		</div>
		<div class="card-save
			p-6
			flex flex-row
		">
			<div class="save-btn
				rounded-md
				bg-cyan-600
				text-white
				px-4
				py-2
			">
				Save
			</div>
		</div>



	</div>
</template>

<script>
// add validation for save button
</script>