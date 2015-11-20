// gym index

Template.gym.helpers({
  gyms: function(){
    return Gym.find({});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.gym.events({

});
