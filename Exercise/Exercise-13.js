//v1
function handleWord(str) {
   if (!str) return '';
   const handleStr = str.trim();
   return `${handleStr[0].toUpperCase()}${handleStr.slice(1).toLowerCase()}`;
}

function getFullName(firstName, lastName) {
   const fn = handleWord(firstName);
   const ln = handleWord(lastName);

   return `${fn} ${ln}`.trim();
}
console.log(getFullName('Alice'));
console.log(getFullName('       Alice', ''));
console.log(getFullName('', 'Nguyen'));
console.log(getFullName('Bob', 'Tran'));
console.log(getFullName('john', 'pHam'));

//v2
function capitalize(str) {
   if (str === '') return '';

   const trimmedStr = str.trim().toUpperCase();
   return `${trimmedStr[0]}${trimmedStr.slice(1).toLowerCase()}`;
}
function getFullName(firstName, lastName) {
   // your code heret
   const fn = capitalize(firstName || '');
   const ln = capitalize(lastName || '');

   const name = `${fn} ${ln}`;
   return name.trim();
}

//v3
function getFullName(...name) {
   if (name.length === 0) return '';

   return name
      .filter((word) => word !== '')
      .map((word) => {
         const [firstLetter, ...restLetter] = word.trim().toLowerCase();

         return `${firstLetter.toUpperCase()}${restLetter.join('')}`;
      })
      .join(' ')
      .trim();
}
