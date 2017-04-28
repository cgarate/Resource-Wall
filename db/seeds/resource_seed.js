exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').del()
  .then(() => { return knex('users').del() })
    .then(() => { return knex('likes').del() })
      .then(function () {
        return Promise.all([
          knex('users').insert([{id: 1, first_name: 'John', last_name: 'Smith', email: 'johnsmith@gmail.com', handle: 'jsmith', password: 'johnsmith'}]),
          knex('users').insert([{id: 2, first_name: 'Jane', last_name: 'Doe', email: 'janedoe@gmail.com', handle: 'jdoe', password: 'janedoe'}]),
          knex('resources').insert([{id: 1, url: 'lighthouselabs.ca', title: 'Lighthouse Labs', description: 'Toronto web development bootcamp', created_by: 1}]),
          knex('likes').insert([{id: 1, user_id: 2, resource_id: 1}]),
          knex('comments').insert([{user_id: 2, resource_id: 1, comment: 'Great link!'}]),
          knex('ratings').insert([{user_id: 2, resource_id: 1, rating: 5}]),
          knex('category').insert([{id: 1, cat_name: 'Bootcamp', user_id: 2}])
      ]);
    });
};
