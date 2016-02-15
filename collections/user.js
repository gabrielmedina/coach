// collection user

userImages = new FS.Collection('userImages', {
  stores: [
    new FS.Store.FileSystem('userImages')
  ]
});

userImages.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  download: function () {
    return true;
  }
});
