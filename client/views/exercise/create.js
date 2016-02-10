// exercise create

Template.exerciseCreate.helpers({
  props: function(){
    return Prop.find({}, {sort: {name: 1}});
  },

  muscles: function(){
    return Muscle.find({}, {sort: {name: 1}});
  }
});

Template.exerciseCreate.events({
  'submit .form--create': function(e, t){
    e.preventDefault();

    var muscles = [];
    var musclesElements = t.findAll('.muscles');

    for(var i = 0; i < musclesElements.length; i++){
      if(musclesElements[i].checked){
        muscles.push(musclesElements[i].value);
      }
    }

    var exercise = {
      name: t.find('#name').value,
      prop: t.find('#prop').value,
      muscles: muscles,
      status: true
    };

    Meteor.call('createExercise', exercise, function(err){
      if(err){
        reason(err.reason, 'error');
      } else {
        Router.go('/exercise');
      }
    });
  }
});
