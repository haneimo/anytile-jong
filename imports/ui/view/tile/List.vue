<script setup>
import { ref } from 'vue';
import { ImagesCollection } from '../../../api/images';

const imagesCollection = ref(ImagesCollection);
</script>


<template>
    <div>
        <h1> Game List</h1>
        <ul>
            <li v-for="(image, imageIndex) in ImagesCollection" :key="`image-${imageIndex}`">
                <img :src="image.url" :alt="image.name">
            </li>
        </ul>
    </div>
</template>

