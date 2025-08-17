const readline = require("readline-sync");
const userIdInput = Number(readline.question(`Please input user Id: `));
const postIdInput = Number(readline.question(`Please input Post Id: `));
const basedUrl = "https://jsonplaceholder.typicode.com/posts";

if (isNaN(userIdInput) || isNaN(postIdInput)) {
  console.log(`UserId va PostId không hợp lệ!`);
  process.exit(1);
}
if (userIdInput <= 0 || postIdInput <= 0) {
  console.log(`UserId va PostId phải là số!`);
  process.exit(1);
}

test(basedUrl);

async function test(url) {
  const response = await fetch(url);
  const posts = await response.json();
  if (!posts) {
    console.log(`Không thể lấy dữ liệu từ server!`);
    return;
  }
  const result = posts.filter(function (post) {
    return post.userId === userIdInput && post.id === postIdInput;
  });
  if (result.length > 0) {
    console.log("Match post:" + JSON.stringify(result, null, 2));
  } else {
    console.log(
      `Không tìm thấy post cho userId ${userIdInput} và postId ${postIdInput}`
    );
  }
}
