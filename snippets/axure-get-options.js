/**
 * Generate option list from axure preview page.
 */

// e = e.split('\n').map(x => x.replace(/[^A-Z]/g, '')).filter(x => x).slice(1)

if (typeof id === 'undefined') {
    alert('no selector id')
    throw ''
}

copy(Array.from($(id).find('span:not([id])').map((i, v) => {
    const name = $(v).text()
    let id = ''

    if (typeof e === 'object' && Array.isArray(e)) {
        id = e[i]
    }

    return `    id: '${id}',\n    name: '${name}'`
})).join('\n}, {\n'))
