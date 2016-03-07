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

    var props = [];
    var propsElements = t.findAll('.props');

    for(var i = 0; i < propsElements.length; i++){
      if(propsElements[i].checked){
        props.push(propsElements[i].value);
      }
    }

    var exercise = {
      name: t.find('#name').value,
      props: props,
      muscles: muscles,
      status: true
    };

    Meteor.call('createExercise', exercise, function(err, result){
      if(err){
        reason(err.reason, 'error');
      }

      if(result){
        reason('Feito', 'success');
        Router.go('/exercise/image/' + result);
      }
    });
  }
});
