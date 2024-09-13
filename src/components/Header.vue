<script setup>
import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { RouterLink, useRoute } from "vue-router";

const burgerOpen = ref(false)
const route = useRoute()
const saved = ref(false)

watch(() => route.fullPath, () => {
    if (route.fullPath === '/save') {
        saved.value = true
    }
    else {
        saved.value = false
    }
})

// Watch-y cher ashxatum

const updateWidth = () => {
    if (window.innerWidth > 768) {
        burgerOpen.value = false;
    }
};
window.addEventListener('resize', updateWidth);

updateWidth();

const toggleBurger = computed(() => {
    burgerOpen.value = !burgerOpen.value;
})

watchEffect(() => {
    if (burgerOpen.value) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
});

</script>

<template>
    <div class="flex justify-between  py-[45px] xl:items-center md:items-start items-center">
        <div class="flex md:gap-[68px] gap-4 items-center">
            <div class="flex items-center gap-5">
                <div class="bg-[#f5f5f5] xl:hidden block  rounded-xl" @click="toggleBurger">
                    <img v-if="!burgerOpen" src="../assets/img/burger-menu.png" class="md:p-[14px]  w-full cursor-pointer "
                        alt="burger">
                    <img v-else src="../assets/img/close-icon.png" class="md:p-[14px] w-full cursor-pointer " alt="burger">

                </div>
                <RouterLink to="/">
                    <h1 class="md:flex hidden text-[22px] text-[#FC4308] font-bold cursor-pointer">MEGA.news</h1>
                </RouterLink>
            </div>
            <nav>
                <ul class="xl:flex hidden gap-[34px] text-[#3E3232] font-medium">
                    <li class="cursor-pointer flex items-center gap-2">Categories <img
                            src="../assets/img/arrow-icon.png" alt="arrow"></li>
                    <li class="cursor-pointer flex items-center gap-2">Pages<img src="../assets/img/arrow-icon.png"
                            alt="arrow"></li>
                    <li class="cursor-pointer flex items-center gap-2">Contact Us <img
                            src="../assets/img/arrow-icon.png" alt="arrow"></li>
                    <li class="cursor-pointer flex items-center gap-2">About Us <img src="../assets/img/arrow-icon.png"
                            alt="arrow"></li>

                </ul>
            </nav>
        </div>
        <div class="flex gap-[25px] items-center xl:flex-row flex-col-reverse">
            <div class="flex items-center relative">
                <img src="../assets/img/input-icon.png" alt="input icon" class="absolute left-4">
                <input type="text" placeholder="Search Anything"
                    class="py-[14px] md:pl-[56px] pl-[40px] md:pr-4 rounded-xl bg-[#F5F5F5]">
                <img src="../assets/img/search-icon.png" alt="input icon" class="absolute right-4">
            </div>
            <div class="md:flex hidden items-center gap-[50px]">
                <div class="flex items-center gap-2">
                    <img class="rounded-xl" src="../assets/img/profile-pic.png" alt="Profile">
                    <p class="font-medium flex items-center gap-2">Behzad <img src="../assets/img/arrow-icon.png"
                            alt="arrow"></p>
                </div>
                <div class="bg-[#F5f5f5]">
                    <RouterLink :to="route.fullPath === '/save' ? '/' : '/save'">
                        <img v-if="!saved" class="cursor-pointer p-2 rounded-xl" src="../assets/img/save-icon.png"
                            alt="save">
                        <img v-else src="../assets/img/unsave-icon.png" alt="unsave"
                            class="cursor-pointer p-2 rounded-xl w-[35px]">
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    <div v-if="burgerOpen" class="md:hidden">
        <nav>
            <ul class="text-4xl w-full h-screen text-[#3E3232] font-medium">
                <li class="cursor-pointer mx-4">Categories</li>
                <li class="cursor-pointer mx-4 my-16">Pages</li>
                <li class="cursor-pointer mx-4 my-16">Contact Us</li>
                <li class="cursor-pointer mx-4 my-16">About Us</li>
            </ul>
        </nav>
    </div>
</template>