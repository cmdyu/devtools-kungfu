//console.dir($('article').innerText)
const ORIGIN = 'https://eloquentjavascript.net'
const FRAME_NAME = 'eljs'

if (location.origin === ORIGIN) {
    function go(n=1){location.href=JSON.parse(localStorage.urls)[n]}
    
    const links = document.querySelectorAll('#contents a')

    if (links.length) {
        const urls = []
        document.querySelectorAll('#contents a').forEach(x => urls.push(x.href))
        void (localStorage.urls = JSON.stringify(urls))
    }
} else if (!frames[FRAME_NAME]) {
    const frame = document.createElement('iframe')
    frame.hidden = true
    frame.src = ORIGIN
    frame.name = FRAME_NAME
    document.body.append(frame)
}
