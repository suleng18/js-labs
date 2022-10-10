function removeVowel(str) {
   if (str === '') return '';

   let finalStr = str.replace('u', '').replace('e', '').replace('o', '').replace('a', '').replace('i', '');

   return finalStr.trim();
}

console.log(removeVowel('   i love you    '));
console.log(removeVowel(''));
