function t(n = 1) {
    location.href = JSON.parse(localStorage.urls)[n]
}

function s() {
    console.dir($('article').innerText)
}

const links = document.querySelectorAll('#contents a')

if (links.length) {
    const urls = []
    document.querySelectorAll('#contents a').forEach(x => urls.push(x.href))
    void (localStorage.urls = JSON.stringify(urls))
}