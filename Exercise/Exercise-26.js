function isStrongPassword(password) {
   if (typeof password !== 'string' || password === '') return false;

   const hasEightCharacters = password.length >= 8;
   let hasOneUpprecaseCharacter = false;
   let hasOneLowercaseCharacter = false;
   let hasOneNumberCharacter = false;
   let hasOneSpecialCharacter = false;

   for (let i = 0; i < password.length; i++) {
      const letter = password[i];
   }
}
