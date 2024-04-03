<script setup>

import { ref, onMounted } from 'vue'
import { GameCollection } from '../../../api/games'
import UploadForm from '../../components/molecule/UploadForm.vue'

let gameName = ref('')
let handsRules = ref('')

onMounted(() => {
    gameName.value = ''
    handsRules.value = `{
                        "hands": [
                            {
                                "name": "役名",
                                "discription": "役の説明",
                                "tiles": "役を構成する牌"
                            }
                        ]
                    }`
})

const submit = () => {
    GameCollection.insert({
        name: gameName.value,
        hands: hands.value
    })
}

</script>

<template>
    <!-- 新しくGameを登録する画面を作成する -->
    <div>
        <h1>Entry New Game</h1>
        <form @submit.prevent="submit" id="register-game">
            <div>
                <label for="gameName">ゲーム名</label>
                <input type="text" id="gameName" v-model="gameName" />
            </div>
            <div>
                <h2>手役の登録</h2>
                <!-- 手役の登録フォームを作成する 
                    現在は適したUIの見当がつかないため、jsonを直接記述するためのテキストエリアを作成 -->
                <textarea v-model="handsRules">
                </textarea>
            </div>
            <button type="submit" class="btn" form="register-game" >登録</button>
        </form>
    </div>
</template>