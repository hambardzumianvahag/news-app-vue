<script setup>
import Header from '../components/Header.vue'
import Category from '../components/Category.vue'
import NewsList from '../components/NewsList.vue'
import Footer from '../components/Footer.vue'
import { RouterView } from 'vue-router'

</script>

<template>
    <header class=" w-full md:px-[102px] px-4 mx-auto">
        <Header />
    </header>
    <main class=" w-full md:px-[102px] px-4 mx-auto">
        <!-- <section>
            <Category />
        </section>
        <section>
            <NewsList />
        </section> -->
        <RouterView />
    </main>
    <footer class="md:block hidden">
        <Footer />
    </footer>
</template>