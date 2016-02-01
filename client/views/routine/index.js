// routine index

Template.routine.helpers({
  routines: function(){
    return Routine.find({});
  },

  checkStatus: function(status){
    if(status){
      return ' list__link--active';
    } else {
      return ' list__link--inactive';
    }
  }
});

Template.routine.events({
  'click .nav--back': function(e, t){
    e.preventDefault();
    history.back();
  }
});
