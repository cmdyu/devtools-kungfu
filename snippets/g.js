function g(n1, n2, n3) {
    const INTERVAL_TIME = 200

    const commonPath = '#app > div.base-container.flex-col-start'
    const m1 = `${commonPath} > div.menu-first > div > div:nth-child(${n1}) > span`

    const $m1 = document.querySelector(m1)

    if (!$m1) return

    $m1.click()

    if (n2) {
        const goto = m => {
            const getM = () => document.querySelector(m)

            let $m = getM()

            if ($m) {
                $m.click()
            } else {
                const intv = setInterval(() => {
                    $m = getM()

                    if ($m) {
                        $m.click()
                        clearInterval(intv)
                    }
                }, INTERVAL_TIME)
            }
        }

        const m2Path = `${commonPath} > div.base-body.flex-row-between > div.menu-box > div > div > div > div > div > div > div:nth-child(${n2})`
        const m2 = `${m2Path} > div.flex-row-start.cursor-pointer.menuSecondItem`
        setTimeout(() => goto(m2))

        if (n3) {
            //skip the icon dom
            n3 += 1

            const m3 = `${m2Path} > div.flex-col-start.menuThirdList > div > div:nth-child(${n3}) > div.menuThirdText`

            setTimeout(() => goto(m3))
        }
    }
}