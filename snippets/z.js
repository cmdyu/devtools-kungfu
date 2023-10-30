/**
 * 将某个禅道bug设为已解决
 */
function r() {
    //获取解决按钮
    const $resolveBtn = document.querySelector("#mainContent > div.main-col.col-8 > div.main-actions > div > a.btn.btn-link.iframe.showinonlybody > span")

    if (!$resolveBtn) alert('未能获取到解决按钮，请确认是否在bug详情页')

    //点击解决按钮，若按钮不存在，则会报错，终止脚本执行
    $resolveBtn.click()

    //因为打开解决对话框有延迟，所以设置一个定时器，检测对话框是否已打开
    const interval = setInterval(() => {
        //获取解决对话框
        const $modal = document.querySelector("#iframe-triggerModal")

        //若取不到对话框，中止后续处理
        if (!$modal) return

        //获取解决方案下拉菜单
        const $resolutionSelect = $modal.contentDocument.querySelector("#resolution")
        //获取解决版本下拉菜单
        const $versionSelect = $modal.contentDocument.querySelector("#resolvedBuild")

        //若取不到下拉菜单，中止后续处理
        if (!($resolutionSelect && $versionSelect)) return

        //将解决方案设为“已解决”
        $resolutionSelect.value='fixed'
        //将解决版本设为“主干”
        $versionSelect.value='trunk'

        //点击保存按钮
        $modal.contentDocument.querySelector("#submit").click()

        //清除定时器
        clearInterval(interval)
    }, 500)
}

/**
 * 将某个禅道bug指派给xx
 */
function a() {
    //获取触发按钮
    const $triggerBtn = document.querySelector("#mainContent > div.main-col.col-8 > div.main-actions > div > a:nth-child(4) > span")
    if (!$triggerBtn) alert('未能获取到触发按钮，请确认是否在bug详情页')

    //点击触发按钮，若按钮不存在，则会报错，终止脚本执行
    $triggerBtn.click()

    //因为打开对话框有延迟，所以设置一个定时器，检测对话框是否已打开
    const interval = setInterval(() => {
        //获取对话框
        const $modal = document.querySelector("#iframe-triggerModal")

        //若取不到对话框，中止后续处理
        if (!$modal) return

        //获取指派给下拉菜单
        const $select = $modal.contentDocument.querySelector("#assignedTo")

        //若取不到下拉菜单，中止后续处理
        if (!$select) return

        let isSelected = false
        
        while (!isSelected) {
            const target = prompt('请输入指派对象')

            if (!target) continue

            const strArr = target.split('').map(x => '.*' + x)
            strArr.push('.*')

            const regStr = strArr.join('')
            const reg = new RegExp(regStr)
        
            const optionsArr = Array.from($select.options)
            const option = optionsArr.find(x => reg.test(x.value))

            if (!option) continue

            if (confirm(option.innerText)) {
                $select.value = option.value
                isSelected = true
            }
        }
        
        //获取指派
        const $form = $modal.contentDocument.querySelector("form")

        if ($form) {
            $form.addEventListener("formdata", (e) => {
                e.formData.set('comment', prompt('备注'))
            })
        }

        //点击保存按钮
        $modal.contentDocument.querySelector("#submit").click()

        //清除定时器
        clearInterval(interval)
    }, 500)
}

//返回列表界面
function b() {
    document.querySelector("#back").click()
}

//打开图片
function p(n = 0) {
    document.querySelectorAll("img")[n].click()
}