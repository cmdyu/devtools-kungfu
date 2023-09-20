# devtools-kungfu
kungfu of chrome devtools

## console hack

- Expand the entire menu on the left of the vscode api documentation (展开vscode官网api文档左侧全部菜单)
```
// go to https://code.visualstudio.com/api/, and execute the following code in DevTools console
$$('.panel ul').forEach(x => {x.classList.add('in')})
```
