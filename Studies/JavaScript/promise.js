const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("ok");
    reject(new Error("err"))
  }, 3000);
});

console.log("시작");

pr.then((result) => {
  console.log(result);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("끝");
  });
