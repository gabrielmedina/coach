// lib helpers

Template.registerHelper('authorized', function(level) {
  if(Meteor.users.findOne({ _id: Meteor.userId() }).profile.type.value <= level){
    return true;
  } else {
    return false;
  }
});

Template.registerHelper('checkStatus', function(status){
  if(status){
    return ' list__link--active';
  } else {
    return ' list__link--inactive';
  }
});

Template.registerHelper('selected', function(x, y){
  if(x == y){
    return 'selected';
  } else {
    return '';
  }
});
