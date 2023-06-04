function greetUser(user) {
  let message;
  if (user.name === "coco") {
    message("안녕하세요 coco님");
  } else if (user.name === "cookie") {
    message("안녕하세요 cookie님");
  } else {
    message("누구세요?");
  }
  console.log(message);
  return message;
}

const user1 = { name: "coco" };
const user2 = { name: "cookie" };
const user3 = { name: "young" };

greetUser(user1);
greetUser(user2);
greetUser(user3);