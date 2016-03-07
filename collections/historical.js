// collection historical

Historical = new Mongo.Collection('historicals');

Historical.before.insert(function(id, doc){
  doc.createdAt = new Date();
});

Historical.before.update(function(id, doc, fields, modifier, options){
  modifier.$set = modifier.$set || {};
  modifier.$set.modifiedAt = new Date();
});
