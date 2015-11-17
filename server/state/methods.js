// state methods

Meteor.methods({
  createState: function(state){
    if(State.findOne({ name: state.name })){
      throw new Meteor.Error(500, 'It has been registered');
    } else {
      return State.insert(state);
    }
  },

  editState: function(id, state){
    return State.update({ _id: id }, { $set: state });
  },

  deleteState: function(id){
    return State.remove(id);
  },

  statusState: function(id){
    var state = State.findOne({ _id: id });

    if(State.status == true){
      State.update({ _id: state._id }, { $set: { status: false }});
    } else {
      State.update({ _id: state._id }, { $set: { status: true }});
    }
  }
});
