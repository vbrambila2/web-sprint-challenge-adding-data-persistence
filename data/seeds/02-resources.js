exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: 'rocks', resource_description: "river bed rocks"},
    {resource_name: 'cement', resource_description: "has gravel mixed in"},
    {resource_name: 'plywood', resource_description: "quarter inch thickness"},
    {resource_name: 'nails'},
    {resource_name: 'ladder', resource_description: "extends up to 20 feet"},
    {resource_name: 'macbook', resource_description: "13 inch macbook pro"},
  ]);
};

//resources
//resource_id - primary key
//resource_name - unique
//resource_description - optional