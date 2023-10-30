/**
 * Get respone data fields from Knife4j api document page.
 */

e = {}

let arr
[2, 1].some(x => {
    const elms = $$(`.ant-table-row-level-${x}`)
    if (elms.length) {
        arr = elms
        return true
    }
})

arr.filter(x => x.children.length === 4).forEach(x => {
    const v = x.children;
    e[v[1].innerText] = v[0].innerText
})

copy(e)
