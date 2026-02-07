// CURD operations in javascript:
// create,delete,update,read using arrays

/*
const todoList = [];


function createTodo(task) {
  todoList.push(task);
}
createTodo("Read Functions");
createTodo("Create a Todo Function");
createTodo("Study Hard")
createTodo("Don't Watch Anime")

function readTodo() {
  //console.log(tasks);
  todoList.forEach(function (task, index) {
    console.log(index + 1 + ":" + task);
  });
}
createTodo("Study about Memory Execution");
readTodo()

function updateTask(index) {
  todoList[index] = "updateTask ";
}
updateTask(1)
function deleteTask() {
  todoList.pop();
}
*/

// Array of Objects

const taskManagement = [];

const createTask = function (addTask, status) {
  taskManagement.push({
    task: addTask,
    status: status,
  });
};

createTask("Study Functions", "Working");
createTask("Study About Variables", "Completed");
createTask("Study About Data Types", "Completed");

const readTasks = function () {
  taskManagement.forEach(function (task, index) {
    console.log(task);
  });
};

createTask("Study About Async/Await", "InComplete");
readTasks();

const updateTask = function (indexNum, updateTask, updateStatus) {
  taskManagement.forEach(function (task, index) {
    if (indexNum === index) {
      // console.log(indexNum);
      // console.log(index-1);
      // console.log(task.task);
      task.task = updateTask;
      task.status = updateStatus;
    }
  });
};

updateTask(2, "Study Apis Update", "InComplete");

const deleteTask = function () {
  taskManagement.pop();
};

deleteTask();
console.log(taskManagement);

