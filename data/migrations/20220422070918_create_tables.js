exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('project_id');
        tbl.text('project_name')
            .notNullable();
        tbl.text('project_description');
        tbl.integer('project_completed')
            .notNullable()
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.text('resource_name')
            .notNullable()
            .unique();
        tbl.text('resource_description');
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.text('task_description')
            .notNullable();
        tbl.text('task_notes');
        tbl.text('task_completed')
            .notNullable()
            .defaultTo(false);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');    
    })
    .createTable('project_resources', tbl => {
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');  
    })
};

exports.down = function(knex) {
    return knex.schema  
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
};

//ADD ONDELETE AND ONUPDATE to foreign keys!!!!!

//projects 
//project_id - primary key
//project_name
//project_description - optional
//project_completed - should default to false, or integer 0

//resources
//resource_id - primary key
//resource_name - unique
//resource_description - optional

//tasks
//task_id - primary key
//task_description
//task_notes - optional
//task_completed - should default to false, or integer 0
//project_id - points to project_id in projects table

//project_resources
//resource_id
//project_id
