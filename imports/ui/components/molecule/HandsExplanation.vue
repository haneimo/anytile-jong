<script setup>
import { subscribe, autorun } from 'vue-meteor-tracker'
import { GameCollection } from '../../../api/games'
import { useRouter } from 'vue-router'
import AtomTile from '../atom/AtomTile.vue';

subscribe('games')
const games = autorun(() => GameCollection.find({name:"sample001"}).fetch()).result
</script>

<template>
    <div>
        {{ games?.[0]?.name }}
    </div>
    <dl 
        v-for="(hand, key) in games?.[0]?.hands"
        :key="key">
        <dt>{{ hand.name }}</dt>
        <dd>
            <div>
                {{ hand.discription }}
            </div>
            <div>
                <!-- hand.sampleTilesをイテレーションして [Arrayのitem]_x.pngをimgタグとして埋め込む -->
                <AtomTile 
                    class="tile"
                    v-for="(tile, key) in hand.tiles"
                    :key="key"
                    :tileName="tile"
                    :gameName="games?.[0]?.name"
                />
            </div>
        </dd>
    </dl>
</template>

<style scoped>
/* AtomTileが改行されないようにcssを設定する */
.tile {
    display: inline-block;
}
</style>