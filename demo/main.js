const btn = document.querySelector('#btn')
const standalone = document.querySelector('#standalone')

let deferredPrompt

window.addEventListener(`beforeinstallprompt`, (e) => {
  // 阻止 Chrome 67 及更早版本自动显示提示
  e.preventDefault()
  if (window.localStorage.getItem('prompt') === 'accepted') return
  // 将事件引用保存下来，以便稍后使用
  deferredPrompt = e
  btn.style.display = `block`
})

btn.addEventListener(`click`, (e) => {
  // 隐藏我们自己的 UI
  btn.style.display = `none`
  // 触发提示
  deferredPrompt.prompt()
  // 等待用户的响应
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === `accepted`) {
      alert(`用户接受了提示`)
      window.localStorage.setItem('prompt', 'accepted')
    } else {
      alert(`用户拒绝了提示`)
    }
    deferredPrompt = null
  })
})

// 检测web是否以添加至主屏幕
standalone.addEventListener('click', () => {
  // https://github.com/GeoffZhu/is-standalone
  alert(navigator.standalone || (window.matchMedia('(display-mode: standalone)').matches))
})
