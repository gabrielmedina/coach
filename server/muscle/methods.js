// muscle methods

Meteor.methods({
  createMuscle: function(muscle){
    if(Muscle.findOne({ name: muscle.name })){
      throw new Meteor.Error(403, 'Já existe um músculo com este nome');
      return false;
    } else {
      return Muscle.insert(muscle);
    }
  },

  editMuscle: function(id, muscle){
    if(Muscle.findOne({_id: {$ne: id}, name: muscle.name})){
      throw new Meteor.Error(403, 'Já existe um músculo com este nome');
      return false;
    } else {
      return Muscle.update(
        { _id: id },
        { $set: muscle }
      );
    }
  },

  deleteMuscle: function(id){
    return Muscle.remove(id);
  },

  statusMuscle: function(id){
    var muscle = Muscle.findOne({ _id: id });

    if(muscle.status == true){
      Muscle.update(
        { _id: muscle._id },
        { $set: { status: false }}
      );
    } else {
      Muscle.update(
        { _id: muscle._id },
        { $set: { status: true }}
      );
    }
  }
});
