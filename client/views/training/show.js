// training show

Template.trainingShow.helpers({
  training: function(){
    return Training.findOne({ _id: this._id });
  }
});

Template.trainingShow.events({
  'click .': function(e, t){

  }
});
