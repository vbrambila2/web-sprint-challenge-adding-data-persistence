exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_description: 'mark a straight line for the wall', project_id: 1},
    {task_description: 'stack rocks for wall', task_notes: "make sure to choose pretty rock faces", project_id: 1},
    {task_description: 'squeeze cement between rocks', task_notes: "use liberally", project_id: 1},
    {task_description: 'climb onto roof', task_notes: "use ladder", project_id: 2},
    {task_description: 'replace old plywood with new plywood', project_id: 2},
    {task_description: 'nail down new plywood', task_notes: "use nails", project_id: 2},
    {task_description: 'write code', task_notes: "make sure it is clean and readable to humans", project_id: 3},
    {task_description: 'submit via codegrade', task_notes: "run npm test first to check your work", project_id: 3},
  ]);
};

//tasks
//task_id - primary key
//task_description
//task_notes - optional
//task_completed - should default to false, or integer 0
//project_id - points to project_id in projects table