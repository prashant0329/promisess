function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("Function: your promise has been resolved");
        resolve();
      } else {
        console.log("Function: your promise has not been resolved");
        reject("Sorry not full fulfilled");
      }
    }, 2000);
  });
}
func1()
  .then(function () {
    console.log("Prashant:Thanks for resolving");
  })
  .catch(function (error) {
    console.log("Prashant:Very bad bro Reason:" + error);
  });
