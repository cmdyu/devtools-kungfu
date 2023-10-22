# devtools-kungfu
kungfu of chrome devtools

## console hack

- Expand the entire menu on the left of the vscode api documentation (展开vscode官网api文档左侧全部菜单)
```javascript
// go to https://code.visualstudio.com/api/, and execute the following code in DevTools console
$$('.panel ul').forEach(x => {x.classList.add('in')})
```

- Batch unfollow twitter following（批量取消twitter关注）
```javascript
// go to https://twitter.com/[userName]/following, and execute the following code in DevTools console
(async function twtterBatchUnfollow() {
    function getFollowingList() {
        return document.querySelectorAll('#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-jxzhtn.r-1ljd8xs.r-13l2t4g.r-1phboty.r-16y2uox.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > section > div > div > div')
    }

    const followingList = getFollowingList()

    for await (const item of followingList) {
        const button = item.querySelector('div > div > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox > div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wtj0ep > div.css-1dbjc4n.r-19u6a5r>div')

        if (button.ariaLabel.startsWith('Following')) {
            button.click()
            await new Promise((r) => setTimeout(r, 200))

            const confirmButton = document.querySelector("#layers > div:nth-child(2) > div > div > div > div > div > div.css-1dbjc4n.r-1awozwy.r-1kihuf0.r-18u37iz.r-1pi2tsx.r-1777fci.r-1pjcn9w.r-xr3zp9.r-1xcajam.r-ipm5af.r-9dcw1g > div.css-1dbjc4n.r-z6ln5t.r-14lw9ot.r-1867qdf.r-1jgb5lz.r-pm9dpa.r-1ye8kvj.r-1rnoaur.r-494qqr.r-13qz1uu > div.css-1dbjc4n.r-eqz5dr.r-1hc659g.r-1n2ue9f.r-11c0sde.r-13qz1uu > div.css-18t94o4.css-1dbjc4n.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-16y2uox.r-6gpygo.r-peo1c.r-1ps3wis.r-1ny4l3l.r-1udh08x.r-1guathk.r-1udbk01.r-o7ynqc.r-6416eg.r-lrvibr.r-3s2u2q > div > span > span")

            confirmButton.click()

            await new Promise((r) => setTimeout(r, 1000))
        } else {
            window.scrollTo(0, window.scrollY + 200)
        }
    }

    const newFollowingList = getFollowingList()
    if (newFollowingList.length > followingList.length) {
        twtterBatchUnfollow()
    }
})()
```
