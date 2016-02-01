// muscle index

Template.muscle.helpers({
  muscles: function(){
    return Muscle.find({}, {sort: {name: 1}});
  }
});

Template.muscle.events({

});
