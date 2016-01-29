// routine index

Template.routine.helpers({
  routines: function(){
    return Routine.find({});
  },

  checkStatus: function(status){
    if(status){
      return ' link--active';
    } else {
      return ' link--inactive';
    }
  }
});

Template.routine.events({

});
