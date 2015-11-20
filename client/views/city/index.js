// city index

Template.city.helpers({
  cities: function(){
    return City.find({}, {sort: {name: 1}});
  },

  checkStatus: function(status){
    if(status){
      return ' active';
    } else {
      return ' inactive';
    }
  }
});

Template.city.events({

});
