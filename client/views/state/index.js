// state index

Template.state.helpers({
  states: function(){
    return State.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.state.events({

});
