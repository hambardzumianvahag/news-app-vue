<script setup>
import MegaNews from './Footer/MegaNews.vue'
import Categories from './Footer/Categories.vue'
import NewComments from './Footer/NewComments.vue'
import Follow from './Footer/Follow.vue'
import Privacy from './Footer/Privacy.vue'
</script>

<template>
    <div class="flex mt-[100px] mb-10 justify-between">
        <div class="bg-[#f5f5f5] rounded-r-[50px]">
            <div class="flex gap-[113px] pt-10 pr-10">
                <MegaNews />
                <div>
                    <Categories />
                </div>
            </div>
            <Privacy />
        </div>
        <div class="xl:flex hidden">
            <NewComments />
        </div>
        <div class="2xl:pr-[105px] 2xl:block hidden">
            <Follow />
        </div>
    </div>
    <div>

    </div>
</template>