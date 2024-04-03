<script setup>
import { onMounted, ref, defineProps } from 'vue';

const props = defineProps({
    tileName: {
        type: String,
        default: undefined
    },
    gameName: {
        type: String,
        default: undefined
    },
    isStand: {
        type: Boolean,
        default: true
    }
});

const image = ref('');
onMounted(() => {
    if(props.tileName == "dummy"){
        image.value = `/tiles/dummy.png`
    }else{
        image.value = `/tiles/${props.gameName}/pie_${props.tileName}.png`
    }
});

</script>

<template>
    <!-- パラメータでうけとった画像を表示する -->
    <img :src="image" />
</template>

<style scoped>
    img {
        /* 画像の縦幅を100pxに縮小した上で横幅を画像中央から80pxでトリミングする*/
        width: 70px;
        height: 100px;
        object-fit: cover;
        /* ボーダーを灰色にする */
        border: 2px solid #ccc;
    }
</style>