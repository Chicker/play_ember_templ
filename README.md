
# Особенности #

## Client ##

Клиентское приложение разрабатывается на Javascript с использованием Ember.js.

Для разрешения зависимостей используется Require.js.

В файле `public/javascripts/requirejs.config.js` прописываются настройки Require.js.

Главный и единственный html-файл приложения генерируется на сервере с использованием
PlayFramework 2.

# Использование #

## Client ##

Исходные коды клиентского приложения хранятся в папке `public/javascripts/app`.

### Компиляция ###

Требуется только компиляция `Handlebars` шаблонов. Выполняется задачей Grunt `templates`.
Поддерживает watch.


