let buttonTheme = document.querySelector('#theme')
let bodyTheme = document.querySelector('body')
let headerTheme = document.querySelector('.header')

// buttonTheme.addEventListener('click', () => {
//   bodyTheme.classList.toggle('dark');
//   headerTheme.classList.toggle('headerDark');
// })


function getTheme() {
    document.body.classList.toggle('dark')
    let headerTheme = document.querySelector('.header')
    headerTheme.classList.toggle('headerDark');
}