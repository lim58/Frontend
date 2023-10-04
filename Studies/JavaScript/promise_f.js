const f1 = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("1번 완료");
      resolve();
    }, 1000);
  });
};

const f2 = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("2번 완료");
      resolve();
    }, 2000);
  });
};

const f3 = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.log("3번 완료");
      resolve();
    }, 3000);
  });
};

//프로미스체이닝
f1()
  .then(() => f2())
  .then(() => f3())
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("끝");
  });

// Promise.all
Promise.all([f1(), f2(), f3()]).then(() => {
  console.log("완료");
});

// Promise.race
Promise.race([f1(), f2(), f3()]).then(() => {
  console.log("완료");
});
