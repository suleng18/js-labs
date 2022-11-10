// var courseApi = 'http://localhost:3000/courses';

// fetch(courseApi)
//   .then((response) => response.json())
//   .then((course) => console.log(course));

const courseApi = 'http://localhost:3000/courses';

function start() {
  getCourses((courses) => renderCourses(courses));
  handleCreateForm();
}
start();

function getCourses(callback) {
  fetch(courseApi)
    .then((response) => response.json())
    .then(callback);
}

function createCourse(data, callback) {
  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch(courseApi, options)
    .then((response) => response.json())
    .then(callback);
}

function deleteCourse(id) {
  let options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  fetch(courseApi + '/' + id, options)
    .then((response) => response.json())
    .then(getCourses((courses) => renderCourses(courses)));
}

function renderCourses(courses) {
  const listCourseBlock = document.querySelector('#list-courses');
  let htmls = courses.map((course) => {
    return `<li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="deleteCourse(${course.id})" >Delete</button>
            </li>`;
  });

  listCourseBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
  var createBtn = document.querySelector('#create');
  createBtn.onclick = function () {
    let name = document.querySelector('input[name="name"]').value;
    let description = document.querySelector('input[name="description"]').value;
    let formData = {
      name: name,
      description: description,
    };
    createCourse(formData, () => getCourses((courses) => renderCourses(courses)));
  };
}
