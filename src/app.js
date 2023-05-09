const feedDisplay = document.querySelector('#feed')

'http://localhost:8000/results'

fetch('http://localhost:8000/results')
.then(response => response.json())
.then(data => {
    data.forEach(article => {
        const articleItem = '<div id="item"><h3>'+ article.title +'</h3><a href=`${article.url}`>' + article.url + '</a></div>'
        feedDisplay.insertAdjacentHTML("beforeend", articleItem)
    });

})
.catch(err => console.log(err))