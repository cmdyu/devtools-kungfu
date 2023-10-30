/**
 * Generate table columns from axure preview page.
 */

if (typeof id === 'undefined') {
    alert('no selector id')
    throw ''
}

if (!id.startsWith('#')) id = '#' + id

copy(Array.from($(id + '>[data-label="表格头部"]').find('span:not([id])').map((i, v) => {
    const label = $(v).text()
    let prop = ''

    if (typeof e === 'object' && !Array.isArray(e)) {
        prop = e[label] || ''
    }

    return `    {label: '${label}', prop: '${prop}'}`
})).join(',\n'))
