const button = document.querySelector('button')
const searchResult = document.querySelector('#search-result')
let form = document.querySelector('form')


button.addEventListener('click', () => {
    let searchPassword = document.querySelector('#search-password').value;
    pass(searchPassword);
});

function pass(searchPassword) {
    
    const password = 123456
    if (searchPassword != password) {
        searchResult.textContent = 'パスワードが違います';
        form.reset()
        return;
    }
    else {
        window.location.replace("skill.html");
    }
}