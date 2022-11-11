const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(22), 3000);
});

console.log(promise);
promise.then((result) => console.log(result)).catch((err) => console.log(err));

//-------------------------------------------------------------//

const promise1 = new Promise((resolve, reject) => {
  reject(new Error('huhu'));
});

promise1.then((result) => console.log(result)).catch((err) => console.log(err));

//-------------------------------------------------------------//

const b = new Promise((resolve) => {
  resolve('BBB');
});
const promiseA = Promise.resolve('AAA');
console.log('🚀 ~ promiseA', promiseA);
const promiseB = Promise.resolve(b);
console.log('🚀 ~ promiseB', promiseB);

Promise.all([promiseA, promiseB])
  .then(([resultA, resultB]) => console.log(resultA, resultB))
  .catch((err) => console.log(err));

//--------------------F8-----------------------------------------//

var promise2 = new Promise(function (resolve, reject) {
  // logic
  // thanh cong : resolve()
  // that bai :reject()

  // Fake call Api
  resolve([
    {
      id: 1,
      name: 'javascript',
    },
  ]);
});
promise2
  .then(function () {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve([1, 2, 3]);
      }, 3000);
    });
  })
  .then(function (data) {
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function () {})
  .finally(function () {
    console.log('Done');
  });

//-------------------------------------------------------------//

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
sleep(1000)
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(2);
    return sleep(1000);
  })
  .then(() => {
    console.log(3);
    return sleep(1000);
  });

//-------------------------------------------------------------//

var promise3 = Promise.resolve('success');
promise3.then(function (result) {
  console.log('result', result);
});

//-------------------------------------------------------------//

var users = [
  { id: 1, name: 'Xuan Long' },
  { id: 2, name: 'Hau Nguyen' },
  { id: 3, name: 'Son Dang' },
];

var comments = [
  {
    id: 1,
    user_id: 1,
    content: 'phai ra truong dung han',
  },
  {
    id: 2,
    user_id: 2,
    content: 'va phai co viec lam',
  },
];

function getComments() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userId) {
  return new Promise(function (resolve) {
    var result = users.filter((user) => userId.includes(user.id));
    resolve(result);
  });
}
getUsersByIds([1]);

getComments().then(function (comments) {
  var userIdList = comments.map((comment) => comment.user_id);
  console.log(userIdList);
});
