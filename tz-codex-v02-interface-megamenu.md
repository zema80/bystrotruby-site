# ТЗ для Codex: v0.2 — интерфейс, мегаменю, мобильное меню и шаблон страниц

Проект: **bystrotruby-site**  
Текущий статус: структура страниц создана, GitHub Pages работает, сайт опубликован в подпапке `/bystrotruby-site/`.

## 1. Цель задачи

Сделать из текущего технического каркаса нормальный промышленный B2B-интерфейс сайта:

- новая шапка по референсу fundamenty.moscow;
- логотип из файла `assets/img/logo.webp`;
- вкладочные мегаменю;
- мобильное меню;
- popup-заглушка заявки;
- единый контейнер шириной `max-width: 1400px`;
- улучшенный шаблон внутренних страниц;
- боковая навигация по текущему разделу;
- корректная работа на GitHub Pages с базовым путём `/bystrotruby-site/`.

Контент страниц пока не писать.

## 2. Важные ограничения

1. Не менять существующую структуру папок и URL.
2. Не удалять созданные страницы.
3. Не переименовывать папки.
4. Не добавлять контентные тексты на страницы.
5. Не подключать фреймворки.
6. Не использовать базу данных.
7. Не выполнять `git commit`.
8. Все ссылки должны работать на GitHub Pages: базовый путь `/bystrotruby-site/`.
9. После выполнения показать список изменённых файлов.

## 3. Логотип

Использовать загруженный логотип:

```txt
assets/img/logo.webp
```

В шапке логотип должен быть кликабельным и вести на главную:

```txt
/bystrotruby-site/
```

## 4. Контейнер сайта

Создать единый контейнер:

```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}
```

На мобильных:

```css
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}
```

## 5. Шапка сайта

Шапка состоит из трёх уровней.

### 5.1. Верхняя тонкая строка

Ссылки справа:

| Текст | URL |
|---|---|
| Юридическая информация | `/bystrotruby-site/legal/` |
| Блог | `/bystrotruby-site/blog/` |
| О компании | `/bystrotruby-site/company/` |
| Каталог | `/bystrotruby-site/catalog/` |

Страницу блога пока не создавать.

### 5.2. Средняя широкая строка

Разместить:

1. Логотип: `assets/img/logo.webp`
2. Фразу:

```txt
Проектирование и поставка быстроразъемных трубопроводов для промышленности
```

3. Контакты:

```txt
8-800-101-71-20
po-almash@mail.ru
```

4. Социальные кнопки:

Telegram:

```txt
tg://resolve?domain=poalmash
```

MAX:

```txt
#
```

5. Кнопка:

```html
<button class="btn btn-primary js-open-request" type="button">Отправить заказ</button>
```

### 5.3. Нижняя строка меню

Пункты первого уровня:

| Текст | URL |
|---|---|
| Главная | `/bystrotruby-site/` |
| Решения | `/bystrotruby-site/solutions/` |
| Отрасли | `/bystrotruby-site/industries/` |
| Конструкции | `/bystrotruby-site/constructions/` |
| Материалы труб | `/bystrotruby-site/materials/` |
| Каталог | `/bystrotruby-site/catalog/` |
| О компании | `/bystrotruby-site/company/` |

Пункты с дочерними страницами должны открывать мегаменю при наведении на десктопе.

## 6. Мегаменю

Сделать мегаменю по логике референса: внутри выпадающего блока есть вкладки и сетка ссылок.

Мегаменю должно быть:
- шириной в пределах контейнера;
- с белым фоном;
- с лёгкой тенью;
- с вкладками сверху;
- с сеткой ссылок;
- открываться при hover на десктопе.

### 6.1. Мегаменю «Решения»

Вкладки:

#### По задачам

- Водопонижение — `/bystrotruby-site/solutions/dewatering/`
- Водоотлив — `/bystrotruby-site/solutions/water-drainage/`
- Подача воды — `/bystrotruby-site/solutions/water-supply/`
- Пылеподавление — `/bystrotruby-site/solutions/dust-suppression/`
- Перекачка пульпы — `/bystrotruby-site/solutions/slurry-pumping/`
- Перекачка шламов — `/bystrotruby-site/solutions/sludge-pumping/`
- Гидрозолоудаление — `/bystrotruby-site/solutions/ash-slag-removal/`
- Подача бетонной смеси — `/bystrotruby-site/solutions/concrete-supply/`
- Подача закладочной смеси — `/bystrotruby-site/solutions/backfill-supply/`
- Пожарное водоснабжение — `/bystrotruby-site/solutions/fire-water-supply/`
- Оснежение — `/bystrotruby-site/solutions/snowmaking/`

#### Орошение

- Орошение и мелиорация — `/bystrotruby-site/solutions/irrigation-melioration/`
- Орошение полей — `/bystrotruby-site/solutions/irrigation-melioration/field-irrigation/`
- Дождевальные машины — `/bystrotruby-site/solutions/irrigation-melioration/irrigation-machines/`
- Мобильные оросительные сети — `/bystrotruby-site/solutions/irrigation-melioration/mobile-irrigation-networks/`

### 6.2. Мегаменю «Отрасли»

Вкладки:

#### Промышленность

- Горнодобывающая промышленность — `/bystrotruby-site/industries/mining/`
- Нефтегазовая отрасль — `/bystrotruby-site/industries/oil-and-gas/`
- Энергетика — `/bystrotruby-site/industries/energy/`
- Металлургия — `/bystrotruby-site/industries/metallurgy/`
- Химическая промышленность — `/bystrotruby-site/industries/chemical-industry/`

#### Инфраструктура и хозяйство

- Строительство — `/bystrotruby-site/industries/construction/`
- Сельское хозяйство — `/bystrotruby-site/industries/agriculture/`
- ЖКХ и Водоканалы — `/bystrotruby-site/industries/utilities-waterworks/`

### 6.3. Мегаменю «Конструкции»

Вкладки:

#### По способу соединения

- Трубопроводы на БРС — `/bystrotruby-site/constructions/brs-pipelines/`
- Трубопроводы на шарнирных хомутах — `/bystrotruby-site/constructions/hinged-clamp-pipelines/`
- Трубопроводы Bauer — `/bystrotruby-site/constructions/bauer-pipelines/`
- Трубопроводы Camlock — `/bystrotruby-site/constructions/camlock-pipelines/`

#### По типу системы

- Быстроразъемные трубопроводы — `/bystrotruby-site/constructions/quick-release-pipelines/`
- Быстросборные трубопроводы — `/bystrotruby-site/constructions/quick-assembly-pipelines/`
- Сборно-разборные трубопроводы — `/bystrotruby-site/constructions/modular-pipelines/`
- Мобильные трубопроводы — `/bystrotruby-site/constructions/mobile-pipelines/`
- Временные трубопроводы — `/bystrotruby-site/constructions/temporary-pipelines/`
- Полевые трубопроводы — `/bystrotruby-site/constructions/field-pipelines/`
- Высоконапорные трубопроводы — `/bystrotruby-site/constructions/high-pressure-pipelines/`

### 6.4. Мегаменю «Материалы труб»

Вкладки:

#### Материалы

- Стальные трубы — `/bystrotruby-site/materials/steel-pipes/`
- Оцинкованные трубы — `/bystrotruby-site/materials/galvanized-pipes/`
- Нержавеющие трубы — `/bystrotruby-site/materials/stainless-pipes/`
- ПНД трубы — `/bystrotruby-site/materials/hdpe-pipes/`
- Резиновые трубы и рукава — `/bystrotruby-site/materials/rubber-hoses/`
- Алюминиевые трубы — `/bystrotruby-site/materials/aluminum-pipes/`
- Композитные трубы — `/bystrotruby-site/materials/composite-pipes/`

#### Комбинированные

- Комбинированные трубопроводы — `/bystrotruby-site/materials/combined-pipelines/`
- Сталь и ПНД — `/bystrotruby-site/materials/combined-pipelines/steel-hdpe/`
- Сталь и резиновые рукава — `/bystrotruby-site/materials/combined-pipelines/steel-rubber-hoses/`
- ПНД и резиновые рукава — `/bystrotruby-site/materials/combined-pipelines/hdpe-rubber-hoses/`
- Металл и композитные участки — `/bystrotruby-site/materials/combined-pipelines/metal-composite/`

### 6.5. Мегаменю «Каталог»

Вкладки:

#### Трубы

- Трубы — `/bystrotruby-site/catalog/pipes/`
- Трубы Ду50 — `/bystrotruby-site/catalog/pipes/du50/`
- Трубы Ду80 — `/bystrotruby-site/catalog/pipes/du80/`
- Трубы Ду100 — `/bystrotruby-site/catalog/pipes/du100/`
- Трубы Ду150 — `/bystrotruby-site/catalog/pipes/du150/`
- Трубы Ду200 — `/bystrotruby-site/catalog/pipes/du200/`
- Трубы Ду250 — `/bystrotruby-site/catalog/pipes/du250/`
- Трубы Ду300 — `/bystrotruby-site/catalog/pipes/du300/`
- Трубы Ду400 — `/bystrotruby-site/catalog/pipes/du400/`

#### Соединения

- Быстроразъемные соединения — `/bystrotruby-site/catalog/quick-couplings/`
- Шарнирные хомуты — `/bystrotruby-site/catalog/quick-couplings/hinged-clamps/`
- Соединения Bauer — `/bystrotruby-site/catalog/quick-couplings/bauer/`
- Соединения Camlock — `/bystrotruby-site/catalog/quick-couplings/camlock/`
- Бугельные соединения — `/bystrotruby-site/catalog/quick-couplings/yoke-couplings/`
- Соединения Грувлок — `/bystrotruby-site/catalog/quick-couplings/grooved-couplings/`
- Соединения Виктаулик — `/bystrotruby-site/catalog/quick-couplings/victaulic/`

#### Фасонные элементы и арматура

- Фасонные элементы — `/bystrotruby-site/catalog/fittings/`
- Отводы — `/bystrotruby-site/catalog/fittings/bends/`
- Тройники — `/bystrotruby-site/catalog/fittings/tees/`
- Переходы — `/bystrotruby-site/catalog/fittings/adapters/`
- Заглушки — `/bystrotruby-site/catalog/fittings/end-caps/`
- Арматура — `/bystrotruby-site/catalog/valves/`
- Обратные клапаны — `/bystrotruby-site/catalog/valves/check-valves/`
- Запорная арматура — `/bystrotruby-site/catalog/valves/shutoff-valves/`

## 7. Мобильное меню

На ширине до 1024 px:

1. Скрыть десктопное меню.
2. Показать кнопку-гамбургер.
3. По клику открывать выезжающее меню.
4. В мобильном меню пункты первого уровня раскрываются по клику.
5. Мегаменю на мобильном не использовать как hover, а показывать как аккордеон.
6. Добавить кнопку закрытия.
7. При открытом меню затемнять фон страницы.

## 8. Popup заявки

Сделать модальное окно-заглушку.

Открывается по кнопкам `Отправить заказ`.

Поля:
- Телефон
- Email
- Комментарий

Скрытое поле:

```html
<input type="hidden" name="page_url">
```

JS должен заполнять его текущим URL:

```js
window.location.href
```

Форма пока не отправляется. При клике на кнопку отправки выводить сообщение:

```txt
Форма пока не подключена. Здесь будет отправка заявки.
```

Popup должен:
- открываться по кнопке `.js-open-request`;
- закрываться по крестику;
- закрываться по клику на затемнение;
- закрываться по Escape.

## 9. Шаблон внутренних страниц

Для внутренних страниц добавить структуру:

```html
<main class="page">
  <section class="page-head">
    <div class="container">
      <!-- breadcrumbs -->
      <h1>...</h1>
    </div>
  </section>

  <section class="page-layout">
    <div class="container page-layout__grid">
      <aside class="section-sidebar">
        <!-- Навигация по текущему разделу -->
      </aside>

      <article class="page-content">
        <div class="content-placeholder">
          Контент страницы будет добавлен позже.
        </div>
      </article>
    </div>
  </section>
</main>
```

На главной странице боковую навигацию не делать.

### Боковая навигация

Для каждой страницы показывать ссылки на соседние страницы текущего первого раздела:
- если страница внутри `/solutions/`, показывать основные страницы решений;
- если внутри `/industries/`, показывать отрасли;
- если внутри `/constructions/`, показывать конструкции;
- если внутри `/materials/`, показывать материалы;
- если внутри `/catalog/`, показывать основные группы каталога;
- если внутри `/company/`, показывать страницы компании;
- если внутри `/legal/`, показывать юридические страницы.

Активную страницу подсвечивать.

## 10. Футер

Футер оставить двухколоночным, но визуально улучшить.

Колонка 1: основные категории:
- Решения
- Отрасли
- Конструкции
- Материалы труб
- Каталог

Колонка 2: о компании:
- О компании
- Производство
- Сертификаты
- Доставка
- Условия оплаты
- Контакты

Нижняя строка:
- Политика конфиденциальности
- Согласие на обработку персональных данных
- Пользовательское соглашение
- Реквизиты компании
- Карта сайта HTML

## 11. CSS

В `assets/css/main.css` добавить стили для:
- новой шапки;
- логотипа;
- верхней строки;
- средней строки;
- меню;
- вкладочного мегаменю;
- мобильного меню;
- popup;
- шаблона внутренних страниц;
- боковой навигации;
- футера;
- адаптива.

Стиль: промышленный B2B, чистый, светлый, без декоративной перегрузки.

Цвета:
- тёмно-синий/графит для меню;
- белый фон;
- зелёный или синий акцент для кнопок;
- мягкие серые линии.

## 12. JS

В `assets/js/main.js` реализовать:
- переключение вкладок внутри мегаменю;
- мобильное меню;
- раскрытие пунктов мобильного меню;
- popup заявки;
- заполнение скрытого поля `page_url`;
- закрытие popup по Escape.

## 13. Проверка после выполнения

Проверить:

1. Главная открывается.
2. Меню не ломается.
3. Мегаменю открывается на десктопе.
4. Вкладки мегаменю переключаются.
5. Мобильное меню открывается.
6. Popup открывается.
7. Popup закрывается.
8. На внутренних страницах есть:
   - breadcrumbs;
   - H1;
   - боковая навигация;
   - placeholder под контент.
9. Ссылки ведут с базовым путём `/bystrotruby-site/`.
10. Сайт работает на GitHub Pages.

## 14. После выполнения

Показать список изменённых файлов.

Git commit не выполнять.
