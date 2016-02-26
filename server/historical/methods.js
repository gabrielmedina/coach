// historical methods

Meteor.methods({
  createHistorical: function(historical){
    return Historical.insert(historical);
  },

  editHistorical: function(id, historical){
    return Historical.update(
      { _id: id },
      { $set: historical }
    );
  }
});
