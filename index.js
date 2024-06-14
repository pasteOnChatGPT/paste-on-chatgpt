const TEXTAREA_ID = 'prompt-textarea'
const checkPageInterval = setInterval(() => {
  if (document.getElementById(TEXTAREA_ID)) {
    clearInterval(checkPageInterval)
    setup()
  }
}, 1000)

const setup = () => {
  document.body.addEventListener('paste', async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const target = e.target

    if (target.tagName === 'TEXTAREA') {
      const text = await navigator.clipboard.readText()
      if (!text) {
        return
      }

      target.focus()
      typing(text, target)
    }
  })

  const typing = (text, targetElement, delay = 20) => {
    let index = 0

    const typeNextChar = () => {
      if (index < text.length) {
        const char = text[index]
        const keyCode = char.charCodeAt(0)
        const eventOption = {
          keyCode,
          bubbles: true,
        }

        targetElement.dispatchEvent(new KeyboardEvent('keypress', eventOption))
        targetElement.value += char
        index++
        setTimeout(typeNextChar, delay)
      }
    }

    typeNextChar()
  }
}
