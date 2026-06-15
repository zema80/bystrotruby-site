# Техническое задание для Codex: стартовая структура сайта

Проект: **Быстроразъемные трубопроводы РФ**

Основа структуры: утвержденная карта сайта из PDF/XMind: главная, решения, отрасли, конструкции, материалы труб, каталог, о компании и юридические страницы.

## 1. Цель задачи

Создать стартовый многостраничный статический HTML-сайт.

На этом этапе нужно создать:
- общую шапку;
- общий футер;
- все страницы из карты сайта;
- меню с выпадающими подменю;
- хлебные крошки;
- H1 на каждой странице.

Контент страниц пока не заполнять.

На каждой внутренней странице должен быть только:
- header;
- breadcrumbs;
- H1;
- пустой основной блок;
- footer.

## 2. Общие требования

1. Использовать текущий проект `bystrotruby-site`.
2. Сайт статический: HTML/CSS/JS.
3. Базу данных не использовать.
4. Фреймворки не подключать.
5. Все URL — латиницей, в нижнем регистре.
6. Каждая страница должна быть в отдельной папке с файлом `index.html`.
7. Все ссылки в меню должны вести на реально созданные страницы.
8. На главной странице хлебные крошки не нужны.
9. На внутренних страницах хлебные крошки обязательны.
10. После выполнения сделать Git-коммит.

## 3. Структура проекта

Создать или привести проект к такой структуре:

```txt
bystrotruby-site/
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   └── main.js
│   └── img/
├── includes/
│   ├── header.html
│   └── footer.html
├── solutions/
├── industries/
├── constructions/
├── materials/
├── catalog/
├── company/
├── legal/
└── sitemap/
```

Если без сборщика нельзя подключать `includes/header.html` и `includes/footer.html`, то временно продублировать шапку и футер во всех HTML-файлах. Папку `includes/` всё равно создать для будущей шаблонизации.

## 4. Шапка сайта

Шапка состоит из трех строк.

### 4.1. Верхняя тонкая строка

Ссылки:

| Текст | URL |
|---|---|
| Юридическая информация | `/legal/` |
| Блог | `/blog/` |
| О компании | `/company/` |
| Каталог | `/catalog/` |

Страницу `/blog/` пока не создавать. Ссылку можно оставить на `/blog/`.

### 4.2. Средняя широкая строка

Разместить:

- логотип/текстовый логотип: `Быстроразъемные трубопроводы РФ`;
- фраза: `Проектирование и поставка быстроразъемных трубопроводов для промышленности`;
- телефон: `8-800-101-71-20`;
- email: `po-almash@mail.ru`;
- кнопка: `Отправить заказ`.

Кнопка:

```html
<a class="btn btn-primary js-open-request" href="#request">Отправить заказ</a>
```

Попап пока не делать.

### 4.3. Нижняя строка меню

Горизонтальное меню первого уровня:

| Пункт | URL |
|---|---|
| Главная | `/` |
| Решения | `/solutions/` |
| Отрасли | `/industries/` |
| Конструкции | `/constructions/` |
| Материалы труб | `/materials/` |
| Каталог | `/catalog/` |
| О компании | `/company/` |

При наведении на пункты с вложенными страницами должен открываться выпадающий список.

## 5. Футер сайта

Футер сделать с двумя основными столбцами.

### 5.1. Столбец 1: основные категории

| Текст | URL |
|---|---|
| Решения | `/solutions/` |
| Отрасли | `/industries/` |
| Конструкции | `/constructions/` |
| Материалы труб | `/materials/` |
| Каталог | `/catalog/` |

### 5.2. Столбец 2: о компании

| Текст | URL |
|---|---|
| О компании | `/company/` |
| Производство | `/company/production/` |
| Сертификаты | `/company/certificates/` |
| Доставка | `/company/delivery/` |
| Условия оплаты | `/company/payment/` |
| Контакты | `/company/contacts/` |

### 5.3. Нижняя часть футера

Юридические ссылки:

| Текст | URL |
|---|---|
| Политика конфиденциальности | `/legal/privacy-policy/` |
| Согласие на обработку персональных данных | `/legal/personal-data-consent/` |
| Пользовательское соглашение | `/legal/user-agreement/` |
| Реквизиты компании | `/legal/company-details/` |
| Карта сайта HTML | `/sitemap/` |

Копирайт:

```txt
© Быстроразъемные трубопроводы РФ. Все права защищены.
```

## 6. Карта страниц: H1 и URL

### 6.1. Главная

| H1 | URL |
|---|---|
| Быстроразъемные трубопроводы РФ | `/` |

### 6.2. Решения

| H1 | URL |
|---|---|
| Решения на базе быстроразъемных трубопроводов | `/solutions/` |
| Быстроразъемные трубопроводы для водопонижения | `/solutions/dewatering/` |
| Быстроразъемные трубопроводы для водоотлива | `/solutions/water-drainage/` |
| Быстроразъемные трубопроводы для подачи воды | `/solutions/water-supply/` |
| Быстроразъемные трубопроводы для орошения и мелиорации | `/solutions/irrigation-melioration/` |
| Трубопроводы для орошения полей | `/solutions/irrigation-melioration/field-irrigation/` |
| Трубопроводы для дождевальных машин | `/solutions/irrigation-melioration/irrigation-machines/` |
| Мобильные оросительные сети | `/solutions/irrigation-melioration/mobile-irrigation-networks/` |
| Быстроразъемные трубопроводы для пылеподавления | `/solutions/dust-suppression/` |
| Быстроразъемные трубопроводы для перекачки пульпы | `/solutions/slurry-pumping/` |
| Быстроразъемные трубопроводы для перекачки шламов | `/solutions/sludge-pumping/` |
| Быстроразъемные трубопроводы для гидрозолоудаления | `/solutions/ash-slag-removal/` |
| Быстроразъемные трубопроводы для подачи бетонной смеси | `/solutions/concrete-supply/` |
| Быстроразъемные трубопроводы для подачи закладочной смеси | `/solutions/backfill-supply/` |
| Быстроразъемные трубопроводы для пожарного водоснабжения | `/solutions/fire-water-supply/` |
| Быстроразъемные трубопроводы для систем оснежения | `/solutions/snowmaking/` |

### 6.3. Отрасли

| H1 | URL |
|---|---|
| Быстроразъемные трубопроводы по отраслям | `/industries/` |
| Быстроразъемные трубопроводы для горнодобывающей промышленности | `/industries/mining/` |
| Быстроразъемные трубопроводы для строительства | `/industries/construction/` |
| Быстроразъемные трубопроводы для сельского хозяйства | `/industries/agriculture/` |
| Быстроразъемные трубопроводы для нефтегазовой отрасли | `/industries/oil-and-gas/` |
| Быстроразъемные трубопроводы для энергетики | `/industries/energy/` |
| Быстроразъемные трубопроводы для ЖКХ и водоканалов | `/industries/utilities-waterworks/` |
| Быстроразъемные трубопроводы для металлургии | `/industries/metallurgy/` |
| Быстроразъемные трубопроводы для химической промышленности | `/industries/chemical-industry/` |

### 6.4. Конструкции

| H1 | URL |
|---|---|
| Конструкции быстроразъемных трубопроводов | `/constructions/` |
| Быстроразъемные трубопроводы | `/constructions/quick-release-pipelines/` |
| Трубопроводы на БРС | `/constructions/brs-pipelines/` |
| Трубопроводы на шарнирных хомутах | `/constructions/hinged-clamp-pipelines/` |
| Трубопроводы Bauer | `/constructions/bauer-pipelines/` |
| Трубопроводы Camlock | `/constructions/camlock-pipelines/` |
| Быстросборные трубопроводы | `/constructions/quick-assembly-pipelines/` |
| Сборно-разборные трубопроводы | `/constructions/modular-pipelines/` |
| Мобильные трубопроводы | `/constructions/mobile-pipelines/` |
| Временные трубопроводы | `/constructions/temporary-pipelines/` |
| Полевые трубопроводы | `/constructions/field-pipelines/` |
| Высоконапорные быстроразъемные трубопроводы | `/constructions/high-pressure-pipelines/` |

### 6.5. Материалы труб

| H1 | URL |
|---|---|
| Материалы труб для быстроразъемных трубопроводов | `/materials/` |
| Стальные трубы для быстроразъемных трубопроводов | `/materials/steel-pipes/` |
| Оцинкованные трубы для быстроразъемных трубопроводов | `/materials/galvanized-pipes/` |
| Нержавеющие трубы для быстроразъемных трубопроводов | `/materials/stainless-pipes/` |
| ПНД трубы для быстроразъемных трубопроводов | `/materials/hdpe-pipes/` |
| Резиновые трубы и рукава для быстроразъемных трубопроводов | `/materials/rubber-hoses/` |
| Алюминиевые трубы для быстроразъемных трубопроводов | `/materials/aluminum-pipes/` |
| Композитные трубы для быстроразъемных трубопроводов | `/materials/composite-pipes/` |
| Комбинированные быстроразъемные трубопроводы | `/materials/combined-pipelines/` |
| Комбинированные трубопроводы из стали и ПНД | `/materials/combined-pipelines/steel-hdpe/` |
| Комбинированные трубопроводы из стали и резиновых рукавов | `/materials/combined-pipelines/steel-rubber-hoses/` |
| Комбинированные трубопроводы из ПНД и резиновых рукавов | `/materials/combined-pipelines/hdpe-rubber-hoses/` |
| Трубопроводы из металла и композитных участков | `/materials/combined-pipelines/metal-composite/` |

### 6.6. Каталог

| H1 | URL |
|---|---|
| Каталог компонентов быстроразъемных трубопроводов | `/catalog/` |
| Трубы для быстроразъемных трубопроводов | `/catalog/pipes/` |
| Трубы Ду50 для быстроразъемных трубопроводов | `/catalog/pipes/du50/` |
| Трубы Ду80 для быстроразъемных трубопроводов | `/catalog/pipes/du80/` |
| Трубы Ду100 для быстроразъемных трубопроводов | `/catalog/pipes/du100/` |
| Трубы Ду150 для быстроразъемных трубопроводов | `/catalog/pipes/du150/` |
| Трубы Ду200 для быстроразъемных трубопроводов | `/catalog/pipes/du200/` |
| Трубы Ду250 для быстроразъемных трубопроводов | `/catalog/pipes/du250/` |
| Трубы Ду300 для быстроразъемных трубопроводов | `/catalog/pipes/du300/` |
| Трубы Ду400 для быстроразъемных трубопроводов | `/catalog/pipes/du400/` |
| Быстроразъемные соединения для трубопроводов | `/catalog/quick-couplings/` |
| Шарнирные хомуты для трубопроводов | `/catalog/quick-couplings/hinged-clamps/` |
| Соединения Bauer | `/catalog/quick-couplings/bauer/` |
| Соединения Camlock | `/catalog/quick-couplings/camlock/` |
| Бугельные соединения | `/catalog/quick-couplings/yoke-couplings/` |
| Соединения Грувлок | `/catalog/quick-couplings/grooved-couplings/` |
| Соединения Виктаулик | `/catalog/quick-couplings/victaulic/` |
| Фасонные элементы для быстроразъемных трубопроводов | `/catalog/fittings/` |
| Отводы для быстроразъемных трубопроводов | `/catalog/fittings/bends/` |
| Тройники для быстроразъемных трубопроводов | `/catalog/fittings/tees/` |
| Переходы для быстроразъемных трубопроводов | `/catalog/fittings/adapters/` |
| Заглушки для быстроразъемных трубопроводов | `/catalog/fittings/end-caps/` |
| Арматура для быстроразъемных трубопроводов | `/catalog/valves/` |
| Обратные клапаны для быстроразъемных трубопроводов | `/catalog/valves/check-valves/` |
| Запорная арматура для быстроразъемных трубопроводов | `/catalog/valves/shutoff-valves/` |

### 6.7. О компании

| H1 | URL |
|---|---|
| О компании | `/company/` |
| Производство быстроразъемных трубопроводов | `/company/production/` |
| Сертификаты | `/company/certificates/` |
| Доставка | `/company/delivery/` |
| Условия оплаты | `/company/payment/` |
| Контакты | `/company/contacts/` |

### 6.8. Юридические страницы

| H1 | URL |
|---|---|
| Юридическая информация | `/legal/` |
| Политика конфиденциальности | `/legal/privacy-policy/` |
| Согласие на обработку персональных данных | `/legal/personal-data-consent/` |
| Пользовательское соглашение | `/legal/user-agreement/` |
| Согласие на получение рекламной и информационной рассылки | `/legal/marketing-consent/` |
| Сведения о продавце или исполнителе | `/legal/seller-info/` |
| Реквизиты компании | `/legal/company-details/` |
| Условия возврата и обмена | `/legal/return-exchange-policy/` |
| Отказ от ответственности | `/legal/disclaimer/` |
| Карта сайта HTML | `/sitemap/` |
| Карта сайта XML | `/sitemap.xml` |

## 7. Хлебные крошки

Пример:

```html
<nav class="breadcrumbs" aria-label="Хлебные крошки">
  <a href="/">Главная</a>
  <span>/</span>
  <a href="/solutions/">Решения</a>
  <span>/</span>
  <span>Водопонижение</span>
</nav>
```

## 8. JS-заготовка

В `assets/js/main.js` добавить:

```js
document.addEventListener('DOMContentLoaded', () => {
  const requestButtons = document.querySelectorAll('.js-open-request');

  requestButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Здесь будет открываться форма заявки');
    });
  });
});
```

## 9. Git-коммит

После выполнения задачи выполнить:

```bash
git add .
git commit -m "Create site pages and navigation structure"
```

Публикацию на хостинг пока не выполнять.
