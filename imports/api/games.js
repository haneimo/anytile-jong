import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

export const GameCollection = new Mongo.Collection('games')

if (Meteor.isServer) {
  Meteor.publish('games', function () {
    return GameCollection.find({})
  })
}
