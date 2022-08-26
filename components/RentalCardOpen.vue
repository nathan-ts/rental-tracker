<template>
		<div class="rental-card-open
		bg-white
		m-4
		rounded-lg
		shadow-xl
		flex flex-col justify-between items-center
	">
		<div class="card-header
			w-full
			rounded-t-lg
			shadow-lg
			p-6
			bg-gray-400
			text-white
			flex flex-row justify-between items-center
		">
			<div class="address">
				<div class="h3 text-2xl font-semibold">Rental</div>
				<div class="h4 text-base">1-1 Chiyoda</div>
			</div>
			<font-awesome-icon :icon="['fas', 'angle-up']" class="text-xl"/>
		</div>
		<div class="card-body
			w-full
			py-6
			px-8
			space-y-2
			text-base
		">
			<div class="name text-xl font-bold">Loid Forger</div>
			<div class="title">Agent</div>
			<div class="email text-cyan-500">
				<a href="mailto:loid.forger@tasogare.jp">
					loid.forger@tasogare.jp
				</a>
			</div>
			<div class="phone">+81 003-187-7090</div>
		</div>
		<div class="card-footer
			w-full
			rounded-b-lg
			pb-6
			px-8
		">
			<div class="line-break
				border-t-2
				border-cyan-100
				pt-6
				flex flex-row
				justify-between
				text-xs tracking-wide
			">
				<div class="edit-icon flex flex-row content-center space-x-3 text-gray-400">
					<font-awesome-icon :icon="['fas', 'pen']" class="text-xl"/>
					<div>EDIT</div>
				</div>
				<div class="delete-icon flex flex-row content-center space-x-3 text-red-400">
					<font-awesome-icon :icon="['fas', 'trash-can']" class="text-xl"/>
					<div>DELETE</div>
				</div>
			</div>
		</div>



	</div>
</template>

<script>
</script>