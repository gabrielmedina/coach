// state index

Template.state.helpers({
  states: function(){
    return State.find({}, {sort: {name: 1}});
  }
});

Template.state.events({

});
