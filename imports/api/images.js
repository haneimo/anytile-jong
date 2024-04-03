import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

export const ImagesCollection = new FilesCollection({
  collectionName: 'images',
  onBeforeUpload(file) {
    //Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
    return 'Please upload image, with size equal or less than 10MB';
  },

  storagePath: '/home/haneimo/workspace/anytilejong/public/uploads',
});

if (Meteor.isClient) {
  Meteor.subscribe('files.images.all');
}

if (Meteor.isServer) {
  Meteor.publish('files.images.all', function () {
    return ImagesCollection.find().cursor;
  });
}