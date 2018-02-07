import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

const MAX_FILE_SIZE = 1024 * 1000;

const Files = new FilesCollection({
  debug: false,
  collectionName: 'Files',
  allowClientCode: false, // Disallow remove files from Client

  onBeforeUpload: (file) => {
    if (file.size <= MAX_FILE_SIZE && (file.type === 'text/csv' || file.type === 'text/plain')) {
      return true;
    }

    return `Please upload text file with size <= ${MAX_FILE_SIZE}`;
  },
});

if (Meteor.isServer) {
  Files.denyClient();

  Files.allow({
    insert: () => { return true; },
  });

  Meteor.publish('allFiles', () => {
    return Files.find().cursor;
  });
}

export default Files;
