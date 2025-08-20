//data
const todo1EndPoint = "https://jsonplaceholder.typicode.com/todos/1";

//Usage
test(todo1EndPoint);

//Logic - From controller
function test(url) {
  fetch(url).then(getResponse).then(validateResponse);
}

function getResponse(response) {
  //Return new Promise (function(resolve,reject) {resolve({...})})
  return response.json();
}

function validateResponse(data) {
  if (data.completed) {
    console.log(`TASK COMPLETED`);
  } else {
    console.log(`TASK IS IN PROGRESS!`);
  }
}
