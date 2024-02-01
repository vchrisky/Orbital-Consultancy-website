
const span = document.getElementById('dark-mode-span');
const themeToggle = document.getElementById('theme-toggle');
const storedDarkMode = localStorage.getItem('darkMode');
const icon = document.getElementById('theme-icon');

//    themeToggle.addEventListener('click', () => {
//      if(!document.body.classList.contains('dark')){
//        // if it's light -> go dark          
//        document.body.classList.add('dark');
//        span.textContent = 'Light Mode';
//        localStorage.setItem('darkMode', true);
//      } else {
//        // if it's dark -> go light
//        document.body.classList.remove('dark');
//        span.textContent = 'Dark Mode';
//        localStorage.setItem('darkMode', false);
//      }
//    })
//    
//    // this one is just to wait for the page to load
//
//    if(storedDarkMode === 'true'){
//        console.log('add');
//        document.body.classList.add('dark');
//    } 


themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  sessionStorage.setItem('color', document.body.classList.contains('dark') ? 'dark' : 'light');
  sessionStorage.getItem('color') === 'dark' ? span.textContent = 'Light Mode' : span.textContent = 'Dark Mode';
  if (sessionStorage.getItem('color') === 'dark'){
      icon.classList.remove('icon-moon2');
      icon.classList.add('icon-line-sun');
  }else{
      icon.classList.remove('icon-line-sun');
      icon.classList.add('icon-moon2');
  }
})



if (sessionStorage.getItem('color') === 'dark') {
    icon.classList.add('icon-line-sun');
    span.textContent ='Light Mode';
    document.body.classList.add('dark');
}


// if (localStorage.getItem('theme') === 'dark') {
//     console.log('local');
//     span.textContent ='Light Mode';
//     document.body.classList.add('dark');
// }