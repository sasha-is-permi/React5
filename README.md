Использованно: 
react, react-dom, react context
Додумывал и сложности: 

Как сделать чтобы не учитывать значение в фильтре?
Добавляю пустой элемент- тогда данный фильтр не учитывается.

Если пустая корзина?
При покупке- пишу чито корзина пустая.


Задание:
Необходимо сделать список товаров и фильтр товаров для магазина игрушечных пони.
Фильтр открывается в оверлее по клику на ссылку
Необходимо сделать возможность навесить открытие оверлея на произвольную ссылку на сайте.
Каталог пони загружен в переменную, которая инициируется при загрузке страницы.
Формат данных:
[
	{
		name:   ‘Твайлайт’,
		color:  ‘Фиолетовый’,
       kind:   ‘Единорог’,
		price:  19.99,
		is_new: false,
		<...>,
       },
	<...>
]
Изначально в списке выводятся 20 произвольных пони, и есть пагинация
Доступны следующие фильтры:
Цвет пони — один вариант из списка
Вид — Земная пони/Единорог/Пегас/?Аликорн/Кирин/Чейнджлинг/…
Цена — диапазон от и до
Новинка — да?/?нет
По клику на «найти» пони фильтруются
Выводятся произвольных 20 пони удовлетворяющих выбранным фильтрам.
Пони можно добавить в корзину и состояние корзины должно сохраняться между пользовательскими сессиями
При наличии интернета в корзине есть кнопка «Купить» и она должна якобы отправлять запрос на сервер и показывать пользователю уведомление что всё хорошо При отсутствии интернета кнопка «Купить» должна быть заблокирована, у пользователя должна висеть нотификация о том что сети нет.
Условия: Все недостающие данные можно придумать самому (дизайн в том числе, можно и совсем технический, это неважно);
Использовать Рeact 16+ вместе с Реакт-Домом, можно затащить Редакс, но помимо этого минимум (лучше ноль) сторонних либ в рантайме, крайне желательно использовать хуки и функциональные компоненты вместе life-cycle и классов;
Вопросы по заданию приветствуются;
Не стоит тратить на задание больше 8 часов.
Результат:
Репозиторий с исходниками в гитхабе;
Рабочую версию опубликовать в codesandbox.io;
Собранная версия, которая будет работать в браузере и в мобильном браузере as well;
Сопроводительная записка: какие технологии использовались и почему, какие возникли сложности и как они были решены, какие условия пришлось додумать.
