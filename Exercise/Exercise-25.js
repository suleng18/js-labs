const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGE_LIST = ['en', 'vi', 'cn'];

function getLanguageCodeFromURL(url) {
   url = url.slice(-3).replace('/', ' ').trim();
   for (const lengKey of SUPPORTED_LANGUAGE_LIST) {
      if (lengKey === url) return lengKey;
   }

   return DEFAULT_LANGUAGE;
}

console.log(getLanguageCodeFromURL('https://abc.com'));
console.log(getLanguageCodeFromURL('https://ezfrontend.com/en'));
console.log(getLanguageCodeFromURL('https://ezfrontend.com/cn'));
console.log(getLanguageCodeFromURL('https://ezfrontend.com/vi/'));
console.log(getLanguageCodeFromURL('https://ezfrontend.com/abc'));
