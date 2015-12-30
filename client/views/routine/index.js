// routine index

Template.routine.helpers({
  routines: function(){
    return Routine.find({});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.routine.events({

});
