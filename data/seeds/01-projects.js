exports.seed = function(knex) {
  return knex('projects').insert([
    {project_name: 'build a rock wall', project_description: "a nice sturdy wall that will last for years"},
    {project_name: 'fix the roof', project_description: "prevent the rain from getting the inside wet"},
    {project_name: 'web-sprint-challenge-adding-data-persistence'},
  ]);
};

//projects 
//project_id - primary key
//project_name
//project_description - optional
//project_completed - should default to false, or integer 0