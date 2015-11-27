// training index

Template.training.helpers({
  trainings: function(){
    return Training.find({});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.training.events({

});
