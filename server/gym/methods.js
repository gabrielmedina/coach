// gym methods

Meteor.methods({
  createGym: function(gym){
    if(Gym.findOne({ name: gym.name })){
      throw new Meteor.Error(500, 'It has been registered');
    } else {
      return Gym.insert(gym);
    }
  },

  editGym: function(id, gym){
    return Gym.update({ _id: id }, { $set: gym });
  },

  deleteGym: function(id){
    return Gym.remove(id);
  },

  statusGym: function(id){
    var gym = Gym.findOne({ _id: id });

    if(gym.status == true){
      Gym.update({ _id: gym._id }, { $set: { status: false }});
    } else {
      Gym.update({ _id: gym._id }, { $set: { status: true }});
    }
  }
});
