//Data
const readline = require("readline-sync");
global.fetch = require("node-fetch");
const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;

// Main function
app();
//support functions
function app() {
  let isPlaying = true;
  while (isPlaying) {
    handlePromise();

    break;
  }

  function handlePromise() {
    if (!isPlaying) return;

    printMenu();
    getUserOption()
      .then(function (userOption) {
        switch (userOption) {
          case 1:
            return handleGetPostContent();
          case 2:
            return handleGetAllPostContent();
          case 0:
            isPlaying = false;
            console.log(`See you again!`);
            break;
          default:
            console.log(`Nhap sai cu phap!`);
        }
      })
      .then(handlePromise);
  }
}

function printMenu() {
  console.log(`
    1.Get a post content
    2.Get all post contents
    0.Exit!`);
}

function getUserOption() {
  return new Promise(function (resolve) {
    resolve(Number(readline.question(`Select your option:`)));
  });
}

function handleGetPostContent() {
  const userId = getUserInput(`userId:`);
  return getAllPostForUser(userId).then(function (returnedData) {
    if (returnedData.hasUser) {
      const postId = getUserInput(`postId:`);
      const targetPost = returnedData.userRelatedPosts.filter(function (post) {
        return post.id === postId;
      });
      console.log(targetPost);
    }
  });
}
function handleGetAllPostContent() {
  const userId = getUserInput(`userId:`);
  return getAllPostForUser(userId).then(function (returnedData) {
    if (returnedData.hasUser) {
      console.log(returnedData.userRelatedPosts);
    }
  });
}
function getAllPostForUser(userId) {
  return fetch(`${USER_ENDPOINT}/${userId}`).then(function (userResponse) {
    const hasUser = userResponse.ok;
    if (hasUser) {
      return fetch(POST_ENDPOINT).then(function (response) {
        return response.json().then(function (postResponse) {
          const userRelatedPosts = postResponse.filter(function (post) {
            return post.userId === userId;
          });
          return { hasUser: true, userRelatedPosts };
        });
      });
    } else {
      console.log(`UserID ${userId} not existing!`);
      return { hasUser: false };
    }
  });
}

function getUserInput(question) {
  return Number(readline.question(question));
}
