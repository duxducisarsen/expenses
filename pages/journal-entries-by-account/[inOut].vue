<script setup>
const storeMonthYear = useMonthYearStore();

const route = useRoute()

definePageMeta({
    middleware: ['auth'],
    layout: 'simple'
})

const accounts = ref(null);
const errors = ref(null);

onMounted(() => {
    getRows()
})

async function getRows() {
    try {
        const url = `/api/journalEntry/indexIncomesByAccount/${route.params.inOut}/${storeMonthYear.month}/${storeMonthYear.year}`;
        const { data, error } = await useApiFetch(url);
        if (error.value) {
            throw error;
        }
        accounts.value = data.value;
    } catch (error) {
        errors.value = error.value?.data?.errors
        console.error('Error al obtener datos:', error);
    }
}
</script>

<template>
    <MonthYearSelect v-on:selected="getRows()" />

    <div class="p-4 mb-3 text-white-100"
        :class="{ 'bg-red-300': route.params.inOut == 'out', 'bg-green-300': route.params.inOut == 'in' }">
        <h4>Total de {{ route.params.inOut == 'out' ? 'Gastos' : 'Ingresos' }}</h4>
        <!-- <h1>$ {{ balance }}</h1> -->
    </div>

    <div v-if="accounts">
        <div v-for="account in accounts" class="p-2">
            <div class="flex">
                <div class="flex-1">
                    <NuxtLink
                        :to="'/journal-entry-line/' + storeMonthYear.month + '/' + storeMonthYear.year + '/' + account.account.id">
                        <small class="text-gray-800 font-bold">{{ account?.account?.name }}</small>
                    </NuxtLink>
                </div>
                <div class="flex-none text-right">
                    <h5 class="text-green-800 font-bold">$ {{ Math.round(account?.balance * 100 / 100) }}</h5>
                </div>
            </div>
            <hr class="w-full mt-2">
        </div>

        <div v-if="errors" class="alert alert-danger" role="alert">
            <ul>
                <li v-for="error in errors">{{ error[0] }}</li>
            </ul>
        </div>
    </div>


    <!-- <div v-for="journalEntryLine in rows"  class="row">
		<div class="col-8" v-if="journalEntryLine.journal_entry">
			<small class="text-gray-800"><b>{{ journalEntryLine.journal_entry.observation }}</b></small>
			<br>
			{{ dayjs(journalEntryLine.journal_entry.posting_date).format('DD/MM/YYYY') }}
		</div>
		<div class="col-4 text-end">
			<h5 class="text-green-800 font-bold">$ {{ Math.round(journalEntryLine.credit * 100/ 100) }}</h5>
			
		</div>
		<hr>
	</div> -->
</template>