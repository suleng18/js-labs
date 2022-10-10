// Say hello in many languages
function sayHello(languageCode) {
   let message;

   switch (languageCode) {
      case 'en': {
         message = 'Hello';
         break;
      }

      case 'vi': {
         message = 'Xin chào';
         break;
      }

      case 'cn': {
         message = 'Nin hao';
         break;
      }

      case 'ja': {
         message = 'Konnichiwa';
         break;
      }

      case 'ko': {
         message = 'Anyoung haseyo';
         break;
      }

      case 'en': {
         message = 'Hello';
         break;
      }

      default: {
         message = 'Hello';
         break;
      }
   }
   return message;
}

console.log(sayHello('en'));
