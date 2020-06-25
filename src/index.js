import './index.scss'

(function () {
  const bodyElement = document.body
  const fontContainerElement = document.getElementsByClassName('control__font')[0]
  const fontSmallElement = document.getElementById('font-small')
  const fontLargeElement = document.getElementById('font-large')
  const themeContainerElement = document.getElementsByClassName('control__theme')[0]
  const themeLightElement = document.getElementById('theme-light')
  const themeDarkElement = document.getElementById('theme-dark')
  const FONT = 'font'
  const SMALL = 'small'
  const LARGE = 'large'
  const FONT_SMALL = FONT + '--' + SMALL
  const FONT_LARGE = FONT + '--' + LARGE
  const THEME = 'theme'
  const LIGHT = 'light'
  const DARK = 'dark'
  const THEME_LIGHT = THEME + '--' + LIGHT
  const THEME_DARK = THEME + '--' + DARK

  init()

  function init () {
    resizeFont()
    changeTheme()
  }

  // 글꼴 제어
  function resizeToSmall () {
    bodyElement.classList.remove(FONT_LARGE)
    bodyElement.classList.add(FONT_SMALL)
    window.localStorage.setItem(FONT, SMALL)
    fontLargeElement.removeAttribute('checked')
    fontSmallElement.setAttribute('checked', 'checked')
  }

  function resizeToLarge () {
    bodyElement.classList.remove(FONT_SMALL)
    bodyElement.classList.add(FONT_LARGE)
    window.localStorage.setItem(FONT, LARGE)
    fontSmallElement.removeAttribute('checked')
    fontLargeElement.setAttribute('checked', 'checked')
  }

  function resizeFont () {
    window.localStorage.getItem(FONT) !== LARGE
      ? resizeToSmall()
      : resizeToLarge()

    fontContainerElement.addEventListener('change', () => {
      fontSmallElement.checked
        ? resizeToSmall()
        : resizeToLarge()
    })
  }

  // 테마 제어
  function changeToLight () {
    bodyElement.classList.remove(THEME_DARK)
    bodyElement.classList.add(THEME_LIGHT)
    window.localStorage.setItem(THEME, LIGHT)
    themeDarkElement.removeAttribute('checked')
    themeLightElement.setAttribute('checked', 'checked')
  }

  function changeToDark () {
    bodyElement.classList.remove(THEME_LIGHT)
    bodyElement.classList.add(THEME_DARK)
    window.localStorage.setItem(THEME, DARK)
    themeLightElement.removeAttribute('checked')
    themeDarkElement.setAttribute('checked', 'checked')
  }

  function changeTheme () {
    var selectedTheme = window.localStorage.getItem(THEME)

    if (selectedTheme) {
      selectedTheme === LIGHT
        ? changeToLight()
        : changeToDark()
    } else {
      window.matchMedia('(prefers-color-scheme: light)').matches
        ? changeToLight()
        : changeToDark()
    }

    themeContainerElement.addEventListener('change', () => {
      themeLightElement.checked
        ? changeToLight()
        : changeToDark()
    })
  }
})()
