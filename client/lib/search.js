// user search

var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};

UsersSearch = new SearchSource('users', ['profile.name'], options);
PropsSearch = new SearchSource('props', ['name'], options);
MusclesSearch = new SearchSource('muscles', ['name'], options);
ExercisesSearch = new SearchSource('exercises', ['name'], options);
