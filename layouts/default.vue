<script lang="ts" setup>
const authStore = useAuthStore();
const colorMode = useColorMode()

const isOpen = ref(false)

const isDark = computed({
	get() {
		return colorMode.value === 'dark'
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
	}
})
</script>

<template>
	<NuxtPwaManifest />
	<NuxtLoadingIndicator />
	<NuxtErrorBoundary>
		<!-- ... -->
		<template #error="{ error }">
			<p>An error occurred: {{ error }}</p>
		</template>
	</NuxtErrorBoundary>
	<nav class="bg-gray-800 p-4">
		<div class="container mx-auto flex items-center justify-between">
			<NuxtLink class="text-white text-lg font-bold" to="/">
				<UIcon name="i-heroicons-currency-dollar" /> IceO Finanzas
			</NuxtLink>

			<div class="flex space-x-2">
				<span class="text-white hover:text-gray-300 pt-1">
					{{ authStore.user?.name ?? 'No logueado' }}
				</span>

				<div class="text-white hover:text-gray-300">
					<div class="relative inline-block text-left">
						<button type="button" @click="isOpen = !isOpen"
							class="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:border-gray-800 focus:ring focus:ring-gray-300 active:bg-gray-800">
							<UIcon name="i-heroicons-cog-6-tooth" />
						</button>


						<div v-show="isOpen" @click.away="isOpen = false"
							class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
							<!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Usuario</a> -->
							<!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Categorías</a> -->
							<!-- <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mi Balance</a> -->
							<!-- v-if="authStore.isAuthenticated" -->
							<button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
								v-on:click="authStore.logout">Cerrar sesión</button>
							<ClientOnly>
								<UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
									color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
								<template #fallback>
									<div class="w-8 h-8" />
								</template>
							</ClientOnly>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<slot />
</template>

<style scoped></style>