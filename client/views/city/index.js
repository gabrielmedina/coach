// city index

Template.city.helpers({
  cities: function(){
    return City.find({}, {sort: {name: 1}});
  }
});

Template.city.events({

});
