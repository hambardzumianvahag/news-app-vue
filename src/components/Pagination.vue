<script setup>
import { useMainStore } from "../store"

const props = defineProps({
    pagesArray: Array
})
const store = useMainStore()


</script>

<template>
    <div class="my-5" v-for="page in pagesArray" :key="page">
        <button :class="{ 'bg-[#FC4308] text-white': page === store.page }"
            class="p-5 shadow-xl text-lg border border-solid border-white-600 rounded-xl"
            @click="store.handleChangePage(page)">{{ page
            }}</button>
    </div>
</template>