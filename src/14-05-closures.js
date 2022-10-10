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
