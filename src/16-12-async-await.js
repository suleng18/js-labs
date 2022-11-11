async function func1() {}

const func2 = async function () {};

const func3 = async () => {};

const ob1 = { async say() {} };

async function getAllStudent() {
  try {
    const url = 'http://js-post-api.herokuapp.com/api/students?_page=1';
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const promiseList = [getAllStudents, getAllCategory, getAllCities];

Promise.all(promiseList)
  .then(([studentList, categoryList, cityList]) => {
    console.log(studentList, categoryList, cityList);
  })
  .catch((error) => console.log(error));
