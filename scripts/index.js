$( function() {
  var dateFormat = "",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        dateFormat: 'с dd.mm.yy',
        minDate: -20, 
        maxDate: "+1M +10D"
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1,
      minDate: -20, 
      dateFormat: 'по dd.mm.yy',
      maxDate: "+1M +10D"
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );

const tag = document.querySelectorAll('.tags-xl-tag');

tag.forEach(el => {
  el.addEventListener('click', ()=>{
    el.classList.toggle('current');
  })
})

$(function() {
  $('.parsing-body__row').click(function() {
    $('.parsing-body__row').not(this).removeClass('current')
    $(this).toggleClass('current')
  })
})

function dropdown(val) {
  var y = document.getElementsByClassName('dropdown-toggle');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}

function dropdown2(val) {
  var y = document.getElementsByClassName('drop-8');
  var aNode = y[0].innerHTML = val + ' <span class="caret"></span>'; // Append 
}



let selected = false;

if (selected == false){
  notselected()
}else{
  selectedSidebar()
}




function itemClicked(){
  selected = true;
  console.log('true ');

  if (selected == false){
    notselected()
  }else{
    selectedSidebar()
  }
}

function selectedSidebar(){
  const sidebar = document.querySelector('.sidebar');
  const sidebarFooter = document.querySelector('.sidebar-footer');

  sidebar.innerHTML = `
  <style>
  .sidebar {
    background: #fff;
    border-radius: 6px;
    padding: 15px 15px 15px 21px;
    height: calc(100vh - 99px);
    width: 100%;
    margin-bottom: 11px;
  }
  .sidebar__main {
    margin-top: 12px;
  }
  .sidebar__main-body__title {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    color: #8B8B8B;
    margin-bottom: 2px;
  }
  .sidebar__main-body__p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 2px;
    color: #494A4A;
  }
  .sidebar__main-body__trans {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #00498D;
  }
  .sidebar__main-body__item.small{
    max-height: 70px;
    overflow-y: auto;
    margin-bottom: 8px;
  }
  .sidebar__main-body__text {
    overflow-y: auto;
    max-height: 225px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #494A4A;
    padding-right: 10px;
  }
  .sidebar__main-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    margin-bottom: 12px;
  }
  .sidebar__main-header__img {
    width: 126px;
  }
  .sidebar__main-header__title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #494A4A;
    margin-bottom: 7px;
  }
  .sidebar__main-header__desc {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #8B8B8B;
    margin-bottom: 6px;
  }
  .sidebar__stat-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-bottom: 6px;
  }
  .sidebar__stat-progress {
    height: 28px;
    max-width: 200px;
    width: 100%;
    margin-right: 11px;
    border-radius: 6px;
    background: #F5F9FB;
  }
  .sidebar__stat-progress-bar {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center;
    color: #1A051D;
    border-radius: 6px;
  }
  .sidebar__stat-progress-bar_green {
    background: #00C48C;
  }
  .sidebar__stat-progress-bar_yellow {
    background: #FFAD4C;
  }
  .sidebar__stat-btn {
    background: #00498D;
    border-radius: 6px;
    border: 2px solid #00498D;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    text-align: center;
    width: 130px;
    height: 28px;
    color: #FFFFFF;
    -webkit-transition: 200ms ease;
    transition: 200ms ease;
  }
  .sidebar__stat-btn:hover {
    background: #fff;
    color: #00498D;
  }
  .sidebar__translate {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-top: 16px;
    margin-bottom: 10px;
  }
  .sidebar__translate-p {
    margin-bottom: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    text-align: right;
    color: #8B8B8B;
    margin-right: 12px;
    max-width: 77px;
  }
  .sidebar__translate-drops {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
  }
  .sidebar__translate-dropdown {
    background: #F5F9FB;
    border-radius: 6px;
    border: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #8B8B8B;
    max-width: 200px;
    width: 100%;
    height: 35px;
    cursor: pointer;
  }
  .sidebar__translate-dropdown__item:hover {
    background: #000;
  }
  .sidebar__translate-svg {
    margin: 0 25px;
    width: 50px;
  }
  .sidebar__imgs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .sidebar__imgs-item {
    border-radius: 6px;
    width: 33.333%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 44px;
    cursor: pointer;
    border: none;
    background: transparent;
    padding: 0 10px;
    border: 2px solid #fff;
  }
  .sidebar__imgs-item__img {
    max-width: 100%;
  }
  .sidebar__imgs-item:nth-child(2) {
    margin: 0 6px;
  }
  .sidebar__imgs-item_current {
    border: 2px solid #00498D;
  }
  .sidebar-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .sidebar-footer__btn {
    width: 265px;
  }
  .sidebar__chartbar {
    padding-top: 50px;
    border-top: 1px solid #BEBEBE;
    margin: 50px -15px 0 -20px;
    padding: 50px 20px 0 20px;
  }
  .sidebar__items {
    height: 339px;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 15px;
  }
  .sidebar__item {
    background: #F5F9FB;
    border-radius: 6px;
    padding: 16px 20px 20px 20px;
    margin-top: 8px;
  }
  .sidebar__item-cat {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-top: 6px;
  }
  .sidebar__item-cat__p {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: #494A4A;
    margin-bottom: 0;
  }
  .sidebar__item-cat__checkbox {
    margin: 0;
    margin-right: 6px;
  }
  .sidebar__item-title {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 0;
    color: #494A4A;
  }
  .sidebar__item-body {
    margin-top: 6px;
  }
  .sidebar__item-p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    padding-bottom: 6px;
    color: #8B8B8B;
  }
  .sidebar__item-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    width: 100%;
  }
  .sidebar__item-btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .sidebar__item-btn {
    width: 28px;
    height: 28px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    border-radius: 4px;
    -webkit-transition: 200ms ease;
    transition: 200ms ease;
  }
  .sidebar__item-btn svg {
    fill: #fff;
    -webkit-transition: 200ms ease;
    transition: 200ms ease;
  }
  .sidebar__item-btn_blue {
    background: #00498D;
    border: 2px solid #00498D;
  }
  .sidebar__item-btn_blue:hover {
    background: #fff;
  }
  .sidebar__item-btn_blue:hover svg {
    fill: #00498D;
    -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg);
  }
  .sidebar__item-btn_green {
    background: #00C48C;
    border: 2px solid #00C48C;
    margin-left: 6px;
  }
  .sidebar__item-btn_green:hover {
    background: #fff;
  }
  .sidebar__item-btn_green:hover svg {
    fill: #00C48C;
  }
  .sidebar .three {
    height: 70%;
  }
  .sidebar .two {
    height: calc(30% - 12px);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .sidebar__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #494A4A;
    margin-bottom: 15px;
  }
  .sidebar__subtitle {
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #494A4A;
    margin-bottom: 15px;
  }
  .sidebar__textarea {
    border: none;
    width: 100%;
    padding-right: 10px;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #494A4A;
    margin-top: 10px;
    height: calc(100% - 360px);
  }
  .sidebar__textarea.min {
    height: calc(50% - 57px);
    margin-top: 15px;
  }
  .sidebar__textarea.medium {
    height: 45%;
  }
  
  </style>
  <h3 class="sidebar__title">Подбор переводчика</h3>
          <div class="sidebar__imgs"> 
            <div class="sidebar__imgs-item sidebar__imgs-item_current"><img class="sidebar__imgs-item__img" src="images/yandex.png" alt="yandex"></div>
            <div class="sidebar__imgs-item"><img class="sidebar__imgs-item__img" src="images/google.png" alt="google"></div>
            <div class="sidebar__imgs-item"><img class="sidebar__imgs-item__img" src="images/promt.png" alt="promt"></div>
          </div>
          <div class="sidebar__translate"> 
            <p class="sidebar__translate-p">Направление перевода</p>
            <div class="sidebar__translate-drops">
              <select class="sidebar__translate-dropdown" id="mySelect2">
                <option class="sidebar__translate-dropdown__item" value="eng">eng</option>
                <option class="sidebar__translate-dropdown__item" value="ru">ru</option>
                <option class="sidebar__translate-dropdown__item" value="uz">uz</option>
              </select>
              <svg class="sidebar__translate-svg" width="11" height="11" viewbox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.688114 7.90606C0.688114 7.99723 0.724331 8.08466 0.788796 8.14913C0.853262 8.21359 0.940696 8.24981 1.03186 8.24981H9.13955L6.97599 10.4127C6.91144 10.4772 6.87518 10.5648 6.87518 10.6561C6.87518 10.7473 6.91144 10.8349 6.97599 10.8994C7.04054 10.964 7.12808 11.0002 7.21936 11.0002C7.31065 11.0002 7.39819 10.964 7.46274 10.8994L10.2127 8.14943C10.2448 8.1175 10.2701 8.07957 10.2875 8.03781C10.3048 7.99604 10.3137 7.95127 10.3137 7.90606C10.3137 7.86084 10.3048 7.81607 10.2875 7.77431C10.2701 7.73255 10.2448 7.69461 10.2127 7.66268L7.46274 4.91268C7.39819 4.84814 7.31065 4.81187 7.21936 4.81187C7.12808 4.81187 7.04054 4.84814 6.97599 4.91268C6.91144 4.97723 6.87518 5.06478 6.87518 5.15606C6.87518 5.24734 6.91144 5.33489 6.97599 5.39943L9.13955 7.56231H1.03186C0.940696 7.56231 0.853262 7.59852 0.788796 7.66299C0.724331 7.72746 0.688114 7.81489 0.688114 7.90606ZM10.3131 3.09356C10.3131 3.18473 10.2769 3.27216 10.2124 3.33663C10.148 3.40109 10.0605 3.43731 9.96936 3.43731H1.86168L4.02524 5.60018C4.0572 5.63214 4.08255 5.67009 4.09985 5.71184C4.11715 5.7536 4.12605 5.79836 4.12605 5.84356C4.12605 5.88876 4.11715 5.93351 4.09985 5.97527C4.08255 6.01703 4.0572 6.05497 4.02524 6.08693C3.99328 6.11889 3.95534 6.14425 3.91358 6.16154C3.87182 6.17884 3.82706 6.18774 3.78186 6.18774C3.73667 6.18774 3.69191 6.17884 3.65015 6.16154C3.60839 6.14425 3.57045 6.11889 3.53849 6.08693L0.788489 3.33693C0.756477 3.305 0.731079 3.26707 0.71375 3.22531C0.69642 3.18354 0.6875 3.13877 0.6875 3.09356C0.6875 3.04834 0.69642 3.00357 0.71375 2.96181C0.731079 2.92005 0.756477 2.88212 0.788489 2.85018L3.53849 0.100184C3.60304 0.0356366 3.69058 -0.00062561 3.78186 -0.00062561C3.87315 -0.00062561 3.96069 0.0356366 4.02524 0.100184C4.08979 0.164731 4.12605 0.252275 4.12605 0.343559C4.12605 0.434842 4.08979 0.522387 4.02524 0.586934L1.86168 2.74981H9.96936C10.0605 2.74981 10.148 2.78603 10.2124 2.85049C10.2769 2.91496 10.3131 3.00239 10.3131 3.09356Z" fill="#00498D"></path>
                </g>
                <defs>
                  <clippath id="clip0">
                    <rect width="11" height="11" fill="white"></rect>
                  </clippath>
                </defs>
              </svg>
              <select class="sidebar__translate-dropdown" id="mySelect3">
                <option class="sidebar__translate-dropdown__item" value="ru">ru</option>
                <option class="sidebar__translate-dropdown__item" value="eng">eng</option>
                <option class="sidebar__translate-dropdown__item" value="uz">uz</option>
              </select>
            </div>
          </div>
          <div class="sidebar__stat"> 
            <div class="sidebar__stat-item"> 
              <div class="sidebar__stat-progress progress"> 
                <div class="sidebar__stat-progress-bar sidebar__stat-progress-bar_green progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
              <button class="sidebar__stat-btn">Загрузить</button>
            </div>
            <div class="sidebar__stat-item"> 
              <div class="sidebar__stat-progress progress"> 
                <div class="sidebar__stat-progress-bar sidebar__stat-progress-bar_yellow progress-bar" role="progressbar" style="width: 60%;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
              </div>
              <button class="sidebar__stat-btn">Перевод</button>
            </div>
          </div>
          <div class="sidebar__main"> 
            <p class="sidebar__title">Детализация статьи</p>
            <div class="sidebar__main-header"> 
              <div class="sidebar__main-header__column"><img class="sidebar__main-header__img" src="images/office.png" alt=""></div>
              <div class="sidebar__main-header__column ml-3">
                <p class="sidebar__main-header__title">Foto1.jpg</p>
                <p class="sidebar__main-header__desc">450x460</p>
                <p class="sidebar__main-header__desc">Alt: купить мужские туфли в Украине</p>
              </div>
            </div>
            <div class="sidebar__main-body">
              <div class="sidebar__main-body__item small"> 
                <p class="sidebar__main-body__title">Заголовок</p>
                <p class="sidebar__main-body__p">Заголовок статьи</p>
                <p class="sidebar__main-body__trans">Article title</p>
              </div>
              <div class="sidebar__main-body__item small"> 
                <p class="sidebar__main-body__title">Дескрипшн</p>
                <p class="sidebar__main-body__p">это текст-"рыба", часто используемый в печати</p>
                <p class="sidebar__main-body__trans">this is the text "fish" often used in print</p>
              </div>
              <div class="sidebar__main-body__item small"> 
                <p class="sidebar__main-body__title">Ключевые слова</p>
                <p class="sidebar__main-body__p">это текст-"рыба", часто используемый в печати</p>
                <p class="sidebar__main-body__trans">this is the text "fish" often used in print</p>
              </div>
              <div class="sidebar__main-body__item"> 
                <p class="sidebar__main-body__title">Текст</p>
                <div class="sidebar__main-body__text">это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. заметных изменений пят. это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. заметных изменений пят</div>
              </div>
            </div>
          </div>
        </div>
  `

  sidebarFooter.innerHTML = `
  <button class="save-btn sidebar-footer__btn"> 
  <div class="save-btn__i">
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7751 6H14.4522C14.1645 6 13.8909 6.13869 13.7217 6.37644L9.28767 12.5467L7.2794 9.75024C7.11017 9.51532 6.83939 9.37381 6.54887 9.37381H5.22601C5.04267 9.37381 4.93548 9.58325 5.04267 9.73326L8.55714 14.6241C8.64016 14.7404 8.74961 14.8352 8.87641 14.9005C9.00321 14.9659 9.14371 15 9.28626 15C9.42882 15 9.56932 14.9659 9.69612 14.9005C9.82292 14.8352 9.93237 14.7404 10.0154 14.6241L15.9556 6.35946C16.0656 6.20945 15.9584 6 15.7751 6Z"></path>
      <path d="M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM10.5 19.2188C5.68594 19.2188 1.78125 15.3141 1.78125 10.5C1.78125 5.68594 5.68594 1.78125 10.5 1.78125C15.3141 1.78125 19.2188 5.68594 19.2188 10.5C19.2188 15.3141 15.3141 19.2188 10.5 19.2188Z"></path>
    </svg>
  </div>
  <p>Сохранить выбор перевода</p>
</button>
  `
}

function notselected(){
  const sidebar = document.querySelector('.sidebar');
  const sidebarFooter = document.querySelector('.sidebar-footer');

  sidebar.innerHTML = `
          <h3 class="sidebar__title">Все источники парсинга</h3>
            <div class="sidebar__item sidebar__item_current">
              <div class="sidebar__item-header sidebar__item-header_current">
                <p class="sidebar__item-title">russian.rt.com</p>
                <div class="sidebar__item-btns current"></div>
              </div>
              <div class="sidebar__item-body collapse show" id="collapse0" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
            <div class="sidebar__item">
              <div class="sidebar__item-header"> 
                <p class="sidebar__item-title">ft.com</p>
                <div class="sidebar__item-btns"></div>
              </div>
              <div class="sidebar__item-body collapse" id="collapse1" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
            <div class="sidebar__item">
              <div class="sidebar__item-header"> 
                <p class="sidebar__item-title">nytimes.com</p>
                <div class="sidebar__item-btns"></div>
              </div>
              <div class="sidebar__item-body collapse" id="collapse2" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
            <div class="sidebar__item">
              <div class="sidebar__item-header"> 
                <p class="sidebar__item-title">aif.ru</p>
                <div class="sidebar__item-btns"></div>
              </div>
              <div class="sidebar__item-body collapse" id="collapse3" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
            <div class="sidebar__item">
              <div class="sidebar__item-header">
                <p class="sidebar__item-title">zen.yandex.ru</p>
                <div class="sidebar__item-btns"></div>
              </div>
              <div class="sidebar__item-body collapse" id="collapse4" data-parent="#accordion-body"> 
                <div class="sidebar__item-p">Категория публикации</div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox" checked><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 1</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 2</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 3</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 4</p>
                </div>
                <div class="sidebar__item-cat">
                  <label class="checkbox-label sidebar__item-cat__checkbox" for="">
                    <input class="mycheckbox" type="checkbox"><span class="checkbox-custom"></span>
                  </label>
                  <p class="sidebar__item-cat__p">Категрия 5</p>
                </div>
              </div>
            </div>
  `

  sidebarFooter.innerHTML = `
          <button class="save-btn sidebar-footer__btn"> 
              <div class="save-btn__i">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7751 6H14.4522C14.1645 6 13.8909 6.13869 13.7217 6.37644L9.28767 12.5467L7.2794 9.75024C7.11017 9.51532 6.83939 9.37381 6.54887 9.37381H5.22601C5.04267 9.37381 4.93548 9.58325 5.04267 9.73326L8.55714 14.6241C8.64016 14.7404 8.74961 14.8352 8.87641 14.9005C9.00321 14.9659 9.14371 15 9.28626 15C9.42882 15 9.56932 14.9659 9.69612 14.9005C9.82292 14.8352 9.93237 14.7404 10.0154 14.6241L15.9556 6.35946C16.0656 6.20945 15.9584 6 15.7751 6Z"></path>
                  <path d="M10.5 0C4.70156 0 0 4.70156 0 10.5C0 16.2984 4.70156 21 10.5 21C16.2984 21 21 16.2984 21 10.5C21 4.70156 16.2984 0 10.5 0ZM10.5 19.2188C5.68594 19.2188 1.78125 15.3141 1.78125 10.5C1.78125 5.68594 5.68594 1.78125 10.5 1.78125C15.3141 1.78125 19.2188 5.68594 19.2188 10.5C19.2188 15.3141 15.3141 19.2188 10.5 19.2188Z"></path>
                </svg>
              </div>
              <p>Сохранить</p>
            </button>
            <button class="edit-btn sidebar-footer__btn">
              <div class="edit-btn__i">
                <svg width="21" height="20" viewbox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9688 0H6.96875C3.65975 0 0.96875 2.691 0.96875 6V19C0.96875 19.2652 1.07411 19.5196 1.26164 19.7071C1.44918 19.8946 1.70353 20 1.96875 20H14.9688C18.2778 20 20.9688 17.309 20.9688 14V6C20.9688 2.691 18.2778 0 14.9688 0ZM18.9688 14C18.9688 16.206 17.1747 18 14.9688 18H2.96875V6C2.96875 3.794 4.76275 2 6.96875 2H14.9688C17.1747 2 18.9688 3.794 18.9688 6V14Z"></path>
                  <path d="M5.96875 12.9869V14.9859H7.96775L13.4967 9.46394L11.4987 7.46594L5.96875 12.9869Z"></path>
                  <path d="M14.4394 8.522L12.4414 6.522L13.9644 5L15.9644 6.999L14.4394 8.522Z"></path>
                </svg>
              </div>
              <p>Редактировать</p>
            </button>
  `
}

registerSidebar()

function registerSidebar(){
  const btns = document.getElementsByClassName('sidebar__item-btns');
  for (let index = 0; index < btns.length; index++) {
    if(btns[index].classList.contains('current')){
      btns[index].innerHTML = `
      <button class="sidebar__item-btn sidebar__item-btn_blue">
        <svg width='20' height='15' viewbox='0 0 20 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7.90859 6.18157H5.15454L5.15549 6.17257C5.27954 5.53318 5.52232 4.92588 5.86989 4.38551C6.38713 3.58331 7.11263 2.95463 7.95989 2.57446C8.24679 2.44645 8.54604 2.34845 8.85099 2.28345C9.48359 2.14844 10.1355 2.14844 10.7681 2.28345C11.6772 2.47955 12.5114 2.95288 13.1668 3.64449L14.512 2.23245C13.9058 1.59407 13.1885 1.08445 12.3992 0.731399C11.9967 0.552023 11.5783 0.415343 11.15 0.323387C10.2663 0.134392 9.3556 0.134392 8.47194 0.323387C8.04335 0.415724 7.62455 0.552737 7.22174 0.732399C6.03475 1.26252 5.01863 2.14253 4.29574 3.26648C3.80924 4.02435 3.46902 4.87552 3.29444 5.77156C3.26784 5.90656 3.25359 6.04456 3.23459 6.18157H0.308594L4.10859 10.1817L7.90859 6.18157ZM11.7086 8.18163H14.4626L14.4617 8.18963C14.2135 9.47143 13.4958 10.5988 12.4638 11.3277C11.9507 11.6939 11.3737 11.9495 10.7662 12.0798C10.1339 12.2148 9.48232 12.2148 8.85004 12.0798C8.24265 11.9492 7.66573 11.6936 7.15239 11.3277C6.90028 11.1482 6.6649 10.944 6.44939 10.7177L5.10609 12.1318C5.71268 12.77 6.43032 13.2792 7.21984 13.6318C7.62264 13.8118 8.04349 13.9488 8.46909 14.0398C9.35242 14.2289 10.2629 14.2289 11.1462 14.0398C12.8491 13.6678 14.347 12.6112 15.3214 11.0947C15.8075 10.3374 16.1474 9.48694 16.3218 8.59164C16.3474 8.45664 16.3626 8.31863 16.3816 8.18163H19.3086L15.5086 4.18151L11.7086 8.18163Z'>
        </svg>
      </button>
      <button class="sidebar__item-btn sidebar__item-btn_green" onclick="deleteSidebarMenu(this)" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> 
        <svg width='18' height='18' viewbox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M13.5209 5.14297H12.387C12.1404 5.14297 11.9059 5.26185 11.7609 5.46564L7.96031 10.7544L6.23893 8.35747C6.09387 8.15611 5.86178 8.03481 5.61276 8.03481H4.47888C4.32173 8.03481 4.22986 8.21433 4.32173 8.34291L7.33413 12.5351C7.4053 12.6348 7.49911 12.716 7.6078 12.772C7.71648 12.828 7.83691 12.8573 7.9591 12.8573C8.08129 12.8573 8.20171 12.828 8.3104 12.772C8.41909 12.716 8.5129 12.6348 8.58406 12.5351L13.6757 5.45108C13.7699 5.3225 13.6781 5.14297 13.5209 5.14297Z'>
          <path d='M9 0C4.02991 0 0 4.02991 0 9C0 13.9701 4.02991 18 9 18C13.9701 18 18 13.9701 18 9C18 4.02991 13.9701 0 9 0ZM9 16.4732C4.87366 16.4732 1.52679 13.1263 1.52679 9C1.52679 4.87366 4.87366 1.52679 9 1.52679C13.1263 1.52679 16.4732 4.87366 16.4732 9C16.4732 13.1263 13.1263 16.4732 9 16.4732Z'>
        </svg>
      </button>
      `
    }else{
      btns[index].innerHTML = `
      <button onclick="addSidebarMenu(this)" class="sidebar__item-btn sidebar__item-btn_blue" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> 
        <svg width='20' height='20' viewbox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M11.1652 0.909318C10.8615 -0.303106 9.14028 -0.303106 8.83529 0.909318L8.74654 1.2668C8.69462 1.47454 8.58804 1.66461 8.43788 1.81727C8.28771 1.96993 8.09943 2.07963 7.89256 2.13498C7.6857 2.19033 7.46779 2.18932 7.26145 2.13204C7.05511 2.07477 6.86786 1.96332 6.71912 1.80926L6.46288 1.54553C5.59416 0.646835 4.10297 1.50803 4.44671 2.70921L4.5467 3.06418C4.60546 3.26985 4.60817 3.48749 4.55456 3.69456C4.50094 3.90163 4.39295 4.0906 4.24176 4.24192C4.09057 4.39323 3.90169 4.50138 3.69466 4.55516C3.48763 4.60895 3.26998 4.60642 3.06426 4.54784L2.70927 4.4466C1.50932 4.10287 0.64685 5.59403 1.54557 6.46272L1.80931 6.71896C1.96337 6.86769 2.07482 7.05494 2.13209 7.26127C2.18937 7.46761 2.19038 7.68551 2.13503 7.89237C2.07968 8.09923 1.96998 8.28751 1.81732 8.43767C1.66465 8.58783 1.47458 8.6944 1.26683 8.74633L0.90934 8.83507C-0.303113 9.1388 -0.303113 10.8599 0.90934 11.1649L1.26683 11.2537C1.47458 11.3056 1.66465 11.4122 1.81732 11.5623C1.96998 11.7125 2.07968 11.9008 2.13503 12.1076C2.19038 12.3145 2.18937 12.5324 2.13209 12.7387C2.07482 12.9451 1.96337 13.1323 1.80931 13.281L1.54557 13.5373C0.64685 14.406 1.50807 15.8971 2.70927 15.5534L3.06426 15.4534C3.27006 15.3945 3.48787 15.3918 3.69509 15.4455C3.90231 15.4991 4.0914 15.6072 4.24277 15.7586C4.39413 15.9099 4.50224 16.099 4.55591 16.3063C4.60957 16.5135 4.60682 16.7313 4.54795 16.9371L4.44671 17.2908C4.10297 18.4907 5.59416 19.3532 6.46288 18.4545L6.71912 18.1907C6.86786 18.0367 7.05511 17.9252 7.26145 17.868C7.46779 17.8107 7.6857 17.8097 7.89256 17.865C8.09943 17.9204 8.28771 18.0301 8.43788 18.1827C8.58804 18.3354 8.69462 18.5255 8.74654 18.7332L8.83529 19.0907C9.13903 20.3031 10.8602 20.3031 11.1652 19.0907L11.2539 18.7332C11.3059 18.5255 11.4124 18.3354 11.5626 18.1827C11.7128 18.0301 11.9011 17.9204 12.1079 17.865C12.3148 17.8097 12.5327 17.8107 12.739 17.868C12.9454 17.9252 13.1326 18.0367 13.2814 18.1907L13.5376 18.4545C14.4063 19.3532 15.8975 18.492 15.5538 17.2908L15.4538 16.9358C15.3949 16.73 15.3922 16.5122 15.4458 16.305C15.4995 16.0978 15.6076 15.9087 15.759 15.7573C15.9103 15.606 16.0994 15.4979 16.3067 15.4442C16.5139 15.3905 16.7317 15.3933 16.9375 15.4522L17.2912 15.5534C18.4912 15.8971 19.3536 14.406 18.4549 13.5373L18.1912 13.281C18.0371 13.1323 17.9257 12.9451 17.8684 12.7387C17.8111 12.5324 17.8101 12.3145 17.8655 12.1076C17.9208 11.9008 18.0305 11.7125 18.1832 11.5623C18.3358 11.4122 18.5259 11.3056 18.7337 11.2537L19.0911 11.1649C20.3036 10.8612 20.3036 9.14005 19.0911 8.83507L18.7337 8.74633C18.5259 8.6944 18.3358 8.58783 18.1832 8.43767C18.0305 8.28751 17.9208 8.09923 17.8655 7.89237C17.8101 7.68551 17.8111 7.46761 17.8684 7.26127C17.9257 7.05494 18.0371 6.86769 18.1912 6.71896L18.4549 6.46272C19.3536 5.59403 18.4924 4.10287 17.2912 4.4466L16.9362 4.54659C16.7306 4.60535 16.5129 4.60806 16.3058 4.55445C16.0988 4.50083 15.9098 4.39284 15.7585 4.24166C15.6072 4.09047 15.499 3.90159 15.4452 3.69457C15.3914 3.48754 15.394 3.2699 15.4525 3.06418L15.5538 2.70921C15.8975 1.50928 14.4063 0.646835 13.5376 1.54553L13.2814 1.80926C13.1326 1.96332 12.9454 2.07477 12.739 2.13204C12.5327 2.18932 12.3148 2.19033 12.1079 2.13498C11.9011 2.07963 11.7128 1.96993 11.5626 1.81727C11.4124 1.66461 11.3059 1.47454 11.2539 1.2668L11.1652 0.909318ZM10.0002 16.2459C9.17249 16.2576 8.35066 16.1046 7.58252 15.796C6.81438 15.4873 6.11525 15.0291 5.52575 14.4479C4.93626 13.8667 4.46815 13.1741 4.14865 12.4104C3.82915 11.6468 3.66462 10.8272 3.66462 9.99938C3.66462 9.17156 3.82915 8.35199 4.14865 7.58832C4.46815 6.82464 4.93626 6.13207 5.52575 5.55087C6.11525 4.96967 6.81438 4.51142 7.58252 4.20276C8.35066 3.8941 9.17249 3.74118 10.0002 3.75289C11.6571 3.75289 13.2461 4.41107 14.4177 5.58263C15.5893 6.75419 16.2475 8.34316 16.2475 10C16.2475 11.6568 15.5893 13.2458 14.4177 14.4174C13.2461 15.5889 11.6571 16.2471 10.0002 16.2471V16.2459Z'>
        </svg>
      </button>
      `
    }
  }
}

const btns = document.getElementsByClassName('sidebar__item-btns');
window.onclick = function(event) {
  if (!event.target == btns) {
      console.log('unmas');
  }
}

function deleteSidebarMenu(e){
  e.parentNode.classList.remove('current')
  registerSidebar()
}

function addSidebarMenu(e){
  e.parentNode.classList.add('current')
  registerSidebar()
}