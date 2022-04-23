// build your `Task` model here
const db = require('../../data/dbConfig');

function getTasks() {
    return db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
        .select('tasks.task_id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed','projects.project_name', 'projects.project_description')
}

function getTasksPost() {
    return db('tasks');
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task);
    return getTasksPost().where({ task_id }).first();
}

module.exports = {
    getTasks,
    createTask
}