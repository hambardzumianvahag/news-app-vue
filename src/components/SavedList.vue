<script setup>
import { onMounted } from "vue";
import { useMainStore } from "../store";
import Pagination from './Pagination.vue'
import SavedCard from "./SavedCard.vue";
const store = useMainStore()

onMounted(() => {
    store.fetchData()
})

</script>

<template>
    <div>
        <div v-if="store.savedArticles.length === 0" class="flex  justify-center mt-10 ">
            <h2 class="text-2xl">Nothing to Show</h2>
        </div>
        <div v-else class="flex flex-wrap xl:justify-between justify-center">
            <div v-for="article in store.savedArticles" :key="article.url">
                <SavedCard :article="article" />
            </div>
        </div>
    </div>
</template>
