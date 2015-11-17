// city methods

Meteor.methods({
  createCity: function(city){
    if(City.findOne({ name: city.name })){
      throw new Meteor.Error(500, 'It has been registered');
    } else {
      return City.insert(city);
    }
  },

  editCity: function(city){
    return City.update({ _id: city._id }, { $set: { name: city.name }});
  },

  deleteCity: function(id){
    return City.remove(id);
  },

  statusCity: function(id){
    var city = City.findOne({ _id: id });

    if(city.status == true){
      City.update({ _id: city._id }, { $set: { status: false }});
    } else {
      City.update({ _id: city._id }, { $set: { status: true }});
    }
  }
});
