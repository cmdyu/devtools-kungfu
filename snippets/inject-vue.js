(function(e, s) {
    e.src = s
    e.onload = function() {
        console.log('vue injected')
    }
    document.head.appendChild(e)
}
)(document.createElement('script'), 'https://unpkg.com/vue@3.2.45/dist/vue.global.js')
