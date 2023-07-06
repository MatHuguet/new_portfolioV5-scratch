
const navItem = document.getElementsByClassName('nav-item')
function getNavTarget(targets){
    for (let target of targets){
        target.addEventListener('click', function(e){
            console.log('hello');
            return e.target.innerText

        })
    }
}
console.log('Hello world')
getNavTarget(navItem);