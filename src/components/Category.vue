<script setup>
import { computed } from 'vue';
import { useMainStore } from '../store/index'

const store = useMainStore();

const classByFlex = computed(() => {
    return {
        'bg-[#3E32320D] p-1.5 rounded-xl': store.styleType === 'byFlex',
    };
});

const classByColumn = computed(() => {
    return {
        'bg-[#3E32320D] p-1.5 rounded-xl': store.styleType === 'byColumn',
    };
});
</script>


<template>
    <div>
        <h2 class="text-[12px] text-[#3E323280]"> <span class="font-medium text-black">Home</span> &#62; {{
            store.category }}</h2>
        <div class="md:flex xl:gap-5 gap-1 justify-between items-center bg-[#f5f5f5] p-5 my-10 rounded-xl">
            <div v-for="category in store.categories" :key="category" class="text-[#3E3232BF]">
                <p :class="{ 'text-[#FC4308]': category === store.category }" class="md:my-0 my-5 cursor-pointer"
                    @click="store.changeCategory(category)">{{
                        category }}
                </p>
            </div>
            <div class="md:flex hidden xl:gap-5 items-center gap-1">
                <div :class="classByColumn" class="cursor-pointer" @click="store.changeStyleType('byColumn')">
                    <img src="../assets/img/category-icon-one.png" alt="category icon">
                </div>
                <div :class="classByFlex" class=" cursor-pointer" @click="store.changeStyleType('byFlex')">
                    <img src="../assets/img/category-icon-two.png" alt="category icon">
                </div>
            </div>
        </div>
        <div class="flex items-center gap-2">
            <hr class="border-2 border-solid border-red-500 h-4">
            <h2 class="text-[20px] text-[#3E3232]">
                <span class="pr-2">Category:</span> {{ store.category }}
            </h2>
        </div>
    </div>
</template>
