const items = document.querySelectorAll('button[aria-controls="addToCatalogBookmarkButton"]')

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

async function addToReadingList(delay) {
    for await (x of items) {
        await sleep(delay)
        console.log(x)
        x.click()
    }
}

addToReadingList(1000)
