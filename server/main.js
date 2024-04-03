import { Meteor } from 'meteor/meteor'
import { LinksCollection } from '/imports/api/links'
import { GameCollection } from '../imports/api/games'
//importすることでpublishが実行されるため、importするだけでよい
import { ImagesCollection } from '../imports/api/images'

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() })
}

async function insertGame({ name, hands }) {
  await GameCollection.insertAsync({ name, hands, createdAt: new Date() })
}


Meteor.startup(async () => {
  // If the Links collection is empty, add some data.
  await LinksCollection.removeAsync({})

  await insertLink({
    title: 'Do the Tutorial',
    url: 'https://vuejs.org/guide/quick-start.html',
  })

  await insertLink({
    title: 'Follow the Guide',
    url: 'https://guide.meteor.com',
  })

  await insertLink({
    title: 'Read the Docs',
    url: 'https://docs.meteor.com',
  })

  await insertLink({
    title: 'Discussions',
    url: 'https://forums.meteor.com',
  })


  await GameCollection.removeAsync({}); 

  await insertGame({
    name: 'sample001',
    hands: [
      { 
        name: '２２時だよ！全員集合！', 
        tiles: [
          "0_x",
          "1_x",
          "2_x",
          "3_x",
          "4_x",
          "5_x",
          "6_x",
          "7_x",
          "8_0"
        ],
        discription: "すべての種類を一つずつ揃える。",
        ruleDefiner: "['0', '1', '2', '3', '4', '5', '6', '7', '8']"
      },
      {
        name: 'ポピーファミリーズ',
        tiles: [
          "1_x",
          "1_x",
          "1_x",
          "6_x",
          "6_x",
          "6_x",
          "7_x",
          "7_x",
          "7_x"
        ],
        discription: "ポピー、ポピーのパパ、ポピーのママを３つづつ揃える。",
        ruleDefiner: "['1', '1', '1', '6', '6', '6', '7', '7', '7']"
      },
      {
        name: '未来からの使者',
        tiles: [
          "0_x",
          "0_x",
          "0_x",
          "2_x",
          "2_x",
          "2_x",
          "dummy",
          "dummy",
          "dummy"
        ],
        discription: "ザエモン、ミーを３つづつ揃える。dummyは何でも良い。",
        ruleDefiner: "['1', '1', '1', '6', '6', '6', '7', '7', '7']"
      }
    ],
  })
})
