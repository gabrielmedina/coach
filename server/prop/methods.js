// prop methods

Meteor.methods({
  createProp: function(prop){
    if(Prop.findOne({ name: prop.name })){
      throw new Meteor.Error(403, 'Já existe um equipamento com este nome');
    } else {
      return Prop.insert(prop);
    }
  },

  editProp: function(id, prop){
    if(Prop.findOne({_id: {$ne: id}, name: prop.name})){
      throw new Meteor.Error(403, 'Já existe um equipamento com este nome');
      return false;
    } else {
      return Prop.update(
        { _id: id },
        { $set: prop }
      );
    }
  },

  deleteProp: function(id){
    return Prop.remove(id);
  },

  statusProp: function(id){
    var prop = Prop.findOne({ _id: id });

    if(prop.status == true){
      Prop.update(
        { _id: prop._id },
        { $set: { status: false }}
      );
    } else {
      Prop.update(
        { _id: prop._id },
        { $set: { status: true }}
      );
    }
  }
});
