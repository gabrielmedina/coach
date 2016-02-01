// lib helpers

Template.registerHelper('admin', function() {
  if(Meteor.users.findOne({ _id: Meteor.userId() }).profile.type.value !== 3){
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
