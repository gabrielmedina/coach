// collection image

var createThumb = function(fileObj, readStream, writeStream) {
  gm(readStream, fileObj.name()).resize('200', '200').stream().pipe(writeStream);
};

userImages = new FS.Collection('userImages', {
  stores: [
    new FS.Store.FileSystem('thumbs', { transformWrite: createThumb }),
    new FS.Store.FileSystem('images'),
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
