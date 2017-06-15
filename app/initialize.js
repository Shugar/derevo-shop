// инициализация jquery
import $ from "jquery"

// инициализация данных о товарах
import rings from './content/rings.js'
import bracelets from './content/bracelets.js'
import earrings from './content/earrings.js'
import chokers from './content/chokers.js'

function getGridClass () {
  const number = Math.floor(Math.random() * 10)
  // получаем случайное число от 0 до 10

  // возвращаем строку с классом в зависимости от выполнения условия
  if (number > 5) {
    return 'content-item'
  } else {
    return 'content-item content-item--big'
  }
}

function getItems (data, name) {
  // data — это данные, которые хранятся в виде объекта (товары)
  // name — класс элемента к которому нужно добавлять данные

  // пробегаемся по массиву
  return data.map((item, index) => {
    const result = `
      <div class='${getGridClass()}' style='background-image: url(../images/${item.image_path}.jpg)'>
        <input type="hidden" value="../images/${item.image_path}.jpg" />
        <div class="content-info">
          <div class="content-title">${item.name}</div>
        </div>
        <div class="content-button">ПРОСМОТРЕТЬ</div>
      </div>
    `

    // добавляем сгенерированный html внутрь блока в HTML
    $(`.${name} .content`).append(result)
  })
}

function initModal () {
  // инициализация модального окна

  $('.content-item').on('click', function () {
    $('.modal').show()
    $('.modal .modal-inner').css('background-image', `url(${$(this).find('input').val()})`)
  })

  $('.modal-close').on('click', function () {
    $('.modal').hide()
  })

  $('.modal-background').on('click', function () {
    $('.modal').hide()
  })
}

$(document).ready(() => {
  // генерирование всех товаров
  getItems(bracelets, 'bracelets')
  getItems(chokers, 'chokers')
  getItems(earrings, 'earrings')
  getItems(rings, 'rings')
  // getItems(pendant, 'pendant')
  // getItems(necklace, 'necklace')

  initModal()
})
