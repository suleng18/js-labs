const url = new URL('https://www.ezfrontend.com/blog?page=1&limit=10#title');
console.log(url.searchParams);
console.log(url.searchParams.toString());

const params = new URLSearchParams('?page=1&limit=10');
console.log(params.get('_page'));

// get current URL
window.location.href;
// replace current page with new URL (not able to go back)
window.location.replace('https://ezfrontend.com');
// navigate to new URL
window.location.assign('https://ezfrontend.com');
