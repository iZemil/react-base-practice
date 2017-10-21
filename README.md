# Необходимо создать одностраничник, который выполняет следующие задачи:

## Страница пользователь (index.html/#user):

0. Отображает информацию о пользователе (Изображение, фамилия, имя, email, пароль)

1. Все данные можно редактировать, для всех компонентов необходима проверка

-+ Фамилия и имя могут содержать: либо только латинские буквы и символ тире (-), либо только русские символы и символ тире (-);

-+ Поле "email" должно содержать только email;

-+ Фото пользователя необходимо проверить на тип и размер, так же после выбора фотографии её необходимо сразу отображать в профиле, фото должно быть не меньше, чем 100Кб и не больше, чем 2Мб;

-+ Поле "пароль" должно быть от 8 до 12 символов, содержать только латинские буквы и символы: @#$%^&*! должна быть минимум одна цифра, одна заглавная буква, одна строчная буква, под компонентом необходимо отображать интерактивную подсказку:
- Строчный символ
- Заглавный символ
- Спецзнак (@#$%^&*!)
- от 8 до 12 символов
- Только латинские буквы

В подсказке, в зависимости от содержимого поля, пункты должны отображаться красным или зелёным цветом, а так же иметь слева изображения красного крестика или зелёной галочки;

Если компонент не проходит проверку - он должен быть подсвечен красным цветом и должна быть отображена подсказка (текст под компонентом);

## Страница товары (index.html/#products):

0. Страница состоит из 2 частей:
- Добавление товаров (1)
- Список товаров (2)

1. Товар: Изображение, название, описание, цена, скидка.

2. Список: список товаров плиткой. состоящий из изображения, названия и цены с учётом скидки.
При добавлении товара необходимо учитывать, что поля имеют максимально допустимый размер в 255 символов, а цена должна быть дробной (1.23), для цены нужно ввести маску на поле, скидка не может быть меньше чем 0 и больше, чем 100.

При добавлении товара необходимо сразу добавлять его в список товаров, который упорядочен по дате создания, т.е. товар созданный последним - в списке становится первым.

Переходы со страницы на страницу должны происходить без перезагрузки страницы.

## Дополнительным плюсом будет:

* Модальное окно для редактирования товара;

* Пагинация товаров;

* Сортировка товаров.