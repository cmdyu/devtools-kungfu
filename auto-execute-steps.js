/**
 * 自动执行操作步骤
 */

if (typeof STEPS === 'undefined') {
    const msg = '请先设置操作步骤'
    alert(msg)
    //报错，中止脚本执行
    throw new Error(msg)
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

(async (steps) => {
    const stepList = steps.map((x, i) => (i + 1) + '. ' + x[0])
    stepList.unshift('可执行步骤：')
    stepList.push('请指定执行到第几步，若不指定，则全部执行')

    const getStep = () => {
      let step = prompt(stepList.join('\n'))

      if (step) {
        step = parseInt(step)

        if (Number.isNaN(step)) {
          alert('请输入正确的步骤序号')
          return getStep()
        }
      } else if (step === null) {
        throw new Error('用户已取消执行')
      } else {
        step = Infinity
      }

      return step
    }

    const targetStep = getStep()

    const check = (curStep, stepName, delay = 200) => {
        if (curStep === targetStep) throw new Error(`已执行到指定步骤${curStep}：${stepName}`)
        return new Promise(k => setTimeout(k, delay))
    }

    asyncForEach(steps, async (x, i) => {
        const [stepName, stepFunc, delay] = x
        const curStep = i + 1

        try {
          stepFunc()
        } catch(e) {
          throw new Error(`${stepName}出错：${e}`)
        }

        await check(curStep, stepName, delay)
    })
})(STEPS)
