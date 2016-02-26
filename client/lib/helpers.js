// lib helpers

Template.registerHelper('authorized', function(level) {
  if(Meteor.users.findOne({ _id: Meteor.userId() }).profile.type.value <= level){
    return true;
  } else {
    return false;
  }
});

Template.registerHelper('execution', function(value, comparator) {
  if(Meteor.user().profile.type.value == 3){
    if(value == comparator){
      return true;
    } else {
      return false;
    }
  }
});

Template.registerHelper('checkStatus', function(status){
  if(!status){
    return ' list__link--disabled';
  }
});

Template.registerHelper('checkDone', function(status){
  if(status){
    return ' list__link--done';
  }
});

Template.registerHelper('selected', function(value, comparator){
  if(value == comparator){
    return 'selected';
  } else {
    return '';
  }
});

Template.registerHelper('image', function(value){
  if(value === undefined){
    return false;
  } else {
    return true;
  }
});
