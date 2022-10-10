// filter(arr,callbackFn)
// callbackFn return true / false

function filter(arr, callbackFn) {
   if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

   const newArray = [];

   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (callbackFn(element, i)) {
         newArray.push(element);
      }
   }
   return newArray;
}
console.log(filter([1, 2, 3, 4, 5], (x) => x > 3));
console.log(filter([0, 2, 4, 6, 5], (x, idx) => x % 2 === 0 && idx % 2 === 1));
