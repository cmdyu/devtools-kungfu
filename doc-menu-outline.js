(hosts => {
    const {hostname} = location
    const host = hosts[hostname]

    if (!host) {
        alert('no outline define on site: ' + hostname)
        return
    }

    const {menuContainer, contentProp = 'innerHTML', menuItem, itemFunc, execItemFuncWhenOpen, itemListener} = host
    const $menuContainer = $(menuContainer)

    if (!$menuContainer) {
        alert('Could not find menu container element: ' + menuContainer)
        return
    }
    
    const $bodyContainer = $('body')
    $bodyContainer.setHTML($menuContainer[contentProp])
    $bodyContainer.style.width = '40%'
    $bodyContainer.style.margin = '0 auto'
    $bodyContainer.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'x') {
            if (itemFunc) document.querySelectorAll(menuItem).forEach(itemFunc)
        }
    })

    if (execItemFuncWhenOpen && itemFunc) $$(menuItem).forEach(itemFunc)

    if (itemListener) $$(menuItem).forEach(itemListener)
})({
    'tc39.es': {
        menuContainer: '#menu-toc',
        contentProp: 'outerHTML',
        menuItem: 'li',
        itemFunc: x => {
            const className = 'active'

            if (x.classList.contains(className)) {
                x.classList.remove(className)
            } else {
                x.classList.add(className)
            }
        },
        itemListener: x => {
            x.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    x.classList.toggle('active');
                }
                e.stopPropagation();
            })
        }
    },
    'developer.mozilla.org': {
        menuContainer: '.sidebar-inner div:nth-child(2)',
        menuItem: 'details',
        itemFunc: x => {
            if (x.open) {
                x.open = false
            } else {
                x.open = true
            }
        },
    },
    'vuejs.org': {
        menuContainer: '#VPSidebarNav',
        menuItem: '.title',
        itemFunc: x => x.style.fontWeight = 'bold',
        execItemFuncWhenOpen: true,
    },
})
