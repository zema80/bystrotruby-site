# Аудит публикации страниц раздела «Применение»

Дата проверки: 2026-08-13.

| Страница | URL | Content source | Published | Images | TOC | FAQ | Schema | Status |
|---|---|---|---|---|---|---|---|---|
| Водоснабжение | `/solutions/water-supply/` | `content/applications/water-supply.md` | Да | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Водоотведение | `/solutions/wastewater/` | `content/applications/wastewater.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Водоотлив и водопонижение | `/solutions/dewatering/` | Существующая страница; content подготовлен отдельно | Ранее опубликована, не изменялась | Существующие | Да | Да | Существующая Schema | PUBLISHED |
| Орошение и полив | `/solutions/irrigation-melioration/` | `content/applications/irrigation-melioration.md` | Да | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | PUBLISHED |
| Пожарное водоснабжение | `/solutions/fire-water-supply/` | `content/applications/fire-water-supply.md` | Да, подтвержденная часть | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | NEEDS_DATA |
| Промышленное охлаждение | `/solutions/industrial-cooling/` | `content/applications/industrial-cooling.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Перекачка воды | `/solutions/water-pumping/` | `content/applications/water-pumping.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Перекачка пульпы | `/solutions/slurry-pumping/` | `content/applications/slurry-pumping.md` | Да | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Перекачка шлама | `/solutions/sludge-pumping/` | `content/applications/sludge-pumping.md` | Да, подтвержденная часть | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | NEEDS_DATA |
| Гидротранспорт | `/solutions/hydraulic-transport/` | `content/applications/hydraulic-transport.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Гидрозолоудаление | `/solutions/ash-slag-removal/` | `content/applications/ash-slag-removal.md` | Да, подтвержденная часть | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | NEEDS_DATA |
| Намыв | `/solutions/reclamation/` | `content/applications/reclamation.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Дноуглубление | `/solutions/dredging/` | `content/applications/dredging.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Байпасирование | `/solutions/bypass/` | `content/applications/bypass.md` + ранее опубликованная страница | Ранее опубликована; текущая структура сохранена | Нет placeholders | Да | HTML FAQ | Без изменений в этой задаче | PUBLISHED |
| Временные линии при ремонте | `/solutions/temporary-repair-lines/` | `content/applications/temporary-repair-lines.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | PUBLISHED |
| Аварийные трубопроводы | `/solutions/emergency-pipelines/` | `content/applications/emergency-pipelines.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | PUBLISHED |
| Испытание и опрессовка | `/solutions/pressure-testing/` | `content/applications/pressure-testing.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | REVIEW |
| Промывка и очистка | `/solutions/flushing-cleaning/` | `content/applications/flushing-cleaning.md` | Да, создана | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | PUBLISHED |
| Пылеподавление | `/solutions/dust-suppression/` | `content/applications/dust-suppression.md` | Да | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | PUBLISHED |
| Искусственное оснежение | `/solutions/snowmaking/` | `content/applications/snowmaking.md` | Да, подтвержденная часть | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | NEEDS_DATA |
| Подача бетонной смеси | `/solutions/concrete-supply/` | `content/applications/concrete-supply.md` | Да, подтвержденная часть | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | NEEDS_DATA |
| Подача закладочной смеси | `/solutions/backfill-supply/` | `content/applications/backfill-supply.md` | Да, подтвержденная часть | 3 placeholders | Да | Да | WebPage, BreadcrumbList, FAQPage | NEEDS_DATA |

## Сводка

- Все 22 URL раздела существуют; 21 тема обработана в рамках публикации, водоотлив намеренно пропущен.
- Создано заново 10 страниц: wastewater, industrial-cooling, water-pumping, hydraulic-transport, reclamation, dredging, temporary-repair-lines, emergency-pipelines, pressure-testing, flushing-cleaning.
- Переработано 10 существующих страниц из content-файлов.
- Страница bypass сохранена в существующем рабочем виде.
- На 20 переработанных/созданных страницах размещено по пять текстовых placeholders: всего 100. Они обозначают HERO, PROCESS, SCHEME, PRODUCT и CONNECTION. На dewatering используются существующие изображения; bypass оставлен без изменений.
- Все новые и переработанные страницы имеют один H1, уникальные title/description/canonical, breadcrumbs, фактический TOC, FAQ и WebPage/BreadcrumbList/FAQPage.
- Product и Offer не использовались.

## Защищенные страницы

`solutions/dewatering/index.html` не менялся ни в одном коммите задачи. Контрольный SHA-256 после завершения: `A301B3D02E1D868690BD26039E1068EC2F3B4A835A0B08325E24D3B6227DB712`.

`solutions/bypass/index.html` не переписывался при публикации временной группы. Его текстовая и визуальная структура сохранена.
