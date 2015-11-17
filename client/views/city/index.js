// city index

Template.city.helpers({
  cities: function(){
    return City.find({});
  }
});

Template.city.events({

});
