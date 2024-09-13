<script setup>
import { computed, onMounted } from "vue";
import { useMainStore } from "../store";
import NewsCard from './NewsCard.vue';
import Pagination from './Pagination.vue'
const store = useMainStore()

onMounted(() => {
    store.fetchData()
})

const classByFlex = computed(() => {
    return {
        'flex flex-wrap xl:justify-between justify-center ': store.styleType === 'byFlex',
    };
});

const classByColumn = computed(() => {
    return {
        'flex flex-col': store.styleType === 'byColumn',
    };
});

const computedClass = computed(() => {
    return store.styleType === 'byFlex'
        ? classByFlex.value
        : store.styleType === 'byColumn'
            ? classByColumn.value
            : '';
});

</script>

<template>
    <div>
        <div v-if="store.articles.length === 0" class="flex justify-center items-center mt-10">
            <button type="button" class="bg-[#3E3232BF] text-white font-bold py-2 px-4 rounded flex items-center"
                disabled>
                <svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
                Processing...
            </button>

        </div>
        <div :class="computedClass" v-else>
            <div v-for="article in store.articles" :key="article.url">
                <NewsCard :article="article" />
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center gap-5">
        <Pagination :pagesArray="store.pagesArray" />
    </div>
</template>
