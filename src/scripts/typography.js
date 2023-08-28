const typoHandlerDesktop = document.getElementById('desk-btn')
const typoHandlerMobile = document.getElementById('mob-btn')
const typos = document.getElementsByName('typos');

const typographyTextsMobile = [
  'Заголовок H1, 48/56, bold',
  'Заголовок H2, 32/40, bold',
  'Заголовок H3, 24/32, medium',
  'Заголовок H4, 18/28, medium',
  'Лид P_Lead, 24/32, regular',
  'Крупный текст P_18, 18/28, regular',
  'Основной текст P_16, 16/24, regular',
  'Впомогательный текст P_14, 14/20, regular',
]

const typographyTextsDesktop = [
  'Заголовок H1, 32/40, bold',
  'Заголовок H2, 28/36, bold',
  'Заголовок H3, 20/28, medium',
  'Заголовок H4, 18/28, medium',
  'Лид P_Lead, 20/28, regular',
  'Крупный текст P_18, 18/28, regular',
  'Основной текст P_16, 16/24, regular',
  'Впомогательный текст P_14, 14/20, regular',
]

typoHandlerDesktop.classList.add('width__focus')

const changeTyposText = () => {
  for (let i = 0; i < typos.length; i++) {
    if (window.innerWidth > 424) {
      typos[i].innerText = typographyTextsMobile[i]
    } else if (window.innerWidth <= 424) {
      typos[i].innerText = typographyTextsDesktop[i]
    }
  }
}

const changeTypoHandler = () => {
  if (window.innerWidth <= 424) {
    typoHandlerDesktop.classList.remove('width__focus')
    typoHandlerMobile.classList.add('width__focus')
  }
  if (window.innerWidth > 424) {
    typoHandlerMobile.classList.remove('width__focus')
    typoHandlerDesktop.classList.add('width__focus')
  }
}

addEventListener('resize', changeTypoHandler)
addEventListener('resize', changeTyposText)
