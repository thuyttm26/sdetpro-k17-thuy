const readline = require("readline-sync");
const BASE_URL = "https://jsonplaceholder.typicode.com";
global.fetch = require("node-fetch");
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;

app();

function app() {
  let isPlaying = true;
  while (isPlaying) {
    handlePromise();
    break;
  }

  function handlePromise() {
    if (!isPlaying) return;
    printMenu();
    getUserOption().then(function (userOption) {
      switch (userOption) {
        case 1:
          return handleGetPostContent();
        case 2:
          return handleGetAllPostContent();
        case 0:
          isPlaying = false;
          console.log(`See you again!`);
        default:
          console.log(`Nhap sai cu phap!`);
      }
    });
  }
}

function printMenu() {
  console.log(`  1. Get a post content
    2. Get all post contents
    0. Exit`);
}
async function getUserOption() {
  const raw = readline.question("Select your option: ");
  return Number(raw);
}

async function getUserInput(question) {
  return Number(readline.question(question));
}

async function handleGetPostContent() {
  const userId = await getUserInput(`userId:`);
  if (userId == null) return;
  const { hasUser, hasRelatedPosts } = await getAllPostForUser(userId);
  if (!hasUser) return;
  if (hasRelatedPosts.length === 0) {
    return;
  }
  const postId = await getUserInput(`postId:`);
  if (postId == null) return;
  const targetPost = hasRelatedPosts.filter(function (post) {
    return post.id === postId;
  });
  if (!targetPost) {
    console.log(`post ID ${postId} not found for user ID ${userId}`);
    return;
  }
  console.log(targetPost);
}

async function handleGetAllPostContent() {
  const userId = await getUserInput(`userId:`);
  if (userId == null) return;
  const { hasUser, hasRelatedPosts } = await getAllPostForUser(userId);
  if (!hasUser) return;
  console.log(hasRelatedPosts);
}

async function getAllPostForUser(userId) {
  const userRes = await fetch(`${USER_ENDPOINT}/${userId}`);
  if (!userRes.ok) {
    console.log(`UserID ${userId} not existing!`);
    return { hasUser: false, hasRelatedPosts: [] };
  }
  const postsRes = await fetch(`${POST_ENDPOINT}?userId=${userId}`);
  const posts = await postsRes.json();
  return { hasUser: true, hasRelatedPosts: posts };
}
