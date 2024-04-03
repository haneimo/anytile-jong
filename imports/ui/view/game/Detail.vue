<script setup>
import { ref, onMounted } from 'vue'
import HandsExplanation from '../../components/molecule/HandsExplanation.vue';

const props = defineProps({
    name: {
        type:String,
        required: true
    }
});

let gameName = ref('')
onMounted(() => {
  gameName.value = props.name
})

</script>

<template>
  <div>
    <h1> request game name is {{ gameName }}</h1>
    <HandsExplanation />
  </div>
</template>