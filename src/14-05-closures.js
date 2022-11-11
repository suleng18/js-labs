function createCounter(initValue) {
  let value = initValue || 0;

  function increase() {
    value++;
  }
  function decrease() {
    value--;
  }
  function getValue() {
    console.log(value);
    return value;
  }

  return {
    increase,
    decrease,
    getValue,
  };
}
const counter1 = createCounter(0);
counter1.increase();
counter1.increase();
counter1.getValue();
// counter1.decrease();

const counter2 = createCounter(10);
counter2.increase();
counter2.increase();
counter2.getValue();

// -----------------------------------------------------------//

function createCounter1() {
  let counter = 0;

  function increase() {
    return ++counter;
  }
  return increase;
}
const counter3 = createCounter1();
console.log(counter3());
console.log(counter3());
console.log(counter3());

// -----------------------------------------------------------//

function createStorage(key) {
  const store = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(store));
  };

  const storage = {
    get(key) {
      return store[key];
    },
    set(key, value) {
      store[key] = value;
      save();
    },
    remove(key) {
      delete store[key];
      save();
    },
  };
  return storage;
}
const profileSettings = createStorage('profile_setting');
profileSettings.set('fullName', 'Xuan Long');
profileSettings.set('age', 18);
profileSettings.set('add', 'HNC');

// -----------------------------------------------------------//
function createApp() {
  const cars = [];

  return {
    add(car) {
      cars.push(car);
    },
    show() {
      console.log(cars);
    },
  };
}

const app = createApp();
app.add('BMV');
app.show();
