<script setup>
import { useMainStore } from '../store';

const store = useMainStore()
const props = defineProps({
    article: Object,
})
const date = new Date(props.article.publishedAt)

const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}).format(date);

const shortenText = (text, maxLength) => {
    return text?.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const shortenedTitle = shortenText(props.article.title, 30);
const shortenedDescription = shortenText(props.article.description, 75);
const shortenedAuthor = shortenText(props.article.author, 20);

const isInSavedArticles = (article) => {
    return store.savedArticles.some(savedArticle => savedArticle.url === article.url);
};

const toggleSave = (article) => {
    store.addToSaved(article);
};

</script>

<template>
    <div class="max-w-[320px] my-5 p-[10px] bg-white shadow-xl rounded-xl">
        <a :href="article.url" target="_blank">
            <div>
                <img :src="article.urlToImage" alt="article img" class="w-[320px] h-[190px] object-cover rounded-xl">
            </div>
            <div>
                <h2 class="font-medium py-4 px-[6px]">{{ shortenedTitle }}</h2>
                <p class="text-[14px] text-[#3E3232BF] px-[6px] pb-4">{{ shortenedDescription ||
                    shortenedDescription === '[Removed]' ? shortenedDescription :
                    "The former partner of Ugandan athlete Rebecca Cheptegei, who is accused of killi..." }}</p>
            </div>
        </a>

        <div class="flex justify-between py-[14px] px-4 bg-[#f5f5f5] items-center rounded-xl">
            <div class="flex gap-[10px]">
                <div>
                    <img src="../assets/img/profile-pic.png" alt="profilepic" class="rounded-xl">
                </div>
                <div class="text-[#3E3232BF] flex flex-col justify-between">
                    <p class="font-medium text-[14px]">
                        {{ shortenedAuthor ? shortenedAuthor : 'Random Name' }}
                    </p>
                    <p class="text-[12px]">
                        {{ formattedDate }}
                    </p>
                </div>
            </div>
            <div @click="toggleSave(article)">
                <img v-if="isInSavedArticles(article)" src="../assets/img/unsave-icon.png" alt="unsave"
                    class="cursor-pointer w-5" />
                <img v-else src="../assets/img/save-icon.png" alt="save" class="cursor-pointer" />
            </div>
        </div>

    </div>
</template>