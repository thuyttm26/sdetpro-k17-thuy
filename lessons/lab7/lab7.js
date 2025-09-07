const RequestHandler = require("./ResquestHandler");
const readline = require("readline-sync");
global.fetch = require("node-fetch");

const BASE_URL = "https://jsonplaceholder.typicode.com";

lab7();
async function lab7() {
  const reqHandler = new RequestHandler(BASE_URL);
  const userId = Number(readline.question(`Enter userId: `));
  const allPosts = await reqHandler.getAllPosts(userId);
  if (allPosts.length === 0) {
    console.log(`UserID ${userId} not existing!`);
    return;
  }

  while (true) {
    console.log(`\n===MENU===
        \n1. Get a post content
        \n2. Get all post contents
        \n0. Exit
        `);
    const choice = Number(readline.question(`Choose option: `));
    if (choice === 1) {
      let postId = Number(readline.question(`Enter postId: `));
      const post = await reqHandler.getTargetPost(userId, postId);
      if (post) {
        console.log(post);
      } else {
        console.log(`Post not found!`);
      }
    } else if (choice === 2) {
      //   const allPosts = await reqHandler.getAllPosts(userId);
      console.log(allPosts);
    } else if (choice === 0) {
      console.log(`Exiting programming..`);
      break;
    } else {
      console.log(`Invalid option. Please choose again!`);
    }
  }
}
