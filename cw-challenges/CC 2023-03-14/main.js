// Create a counter function which has increment and getValue functionality (closure)

function closure() {
  let count = 0;

  return {
    increment: (value = 1) => {
      count += value;
    },
    getValue: () => {
      return count;
    },
  };
}

const privateCounter = () => {
  let count = 0;

  return {
    increment: (value = 1) => {
      count += value;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = privateCounter();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
