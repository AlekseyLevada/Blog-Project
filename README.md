# Проект: Блог статей с комментариями

## Описание
Веб-приложение с бэкендом на Laravel, развернутым в Docker-контейнерах.

## Требования
- Docker (версия 20.10.0+)
- Docker Compose (версия 1.29.0+)

## Быстрый старт

1. Клонируйте репозиторий:
git clone https://github.com/AlekseyLevada/Blog-Project.git
cd Blog-Project

2. Запустите сервисы:
docker-compose up -d --build

3. Выполните миграции и сиды:
docker-compose exec backend php artisan migrate --seed

## Доступ
API: http://localhost:8000

Frontend: http://localhost:3000

Основные команды

docker-compose up -d => Запуск контейнеров  

docker-compose down => 	Остановка контейнеров  

docker-compose exec backend php artisan migrate => Выполнить миграции  

docker-compose exec backend php artisan db:seed => 	Заполнить БД тестовыми данными  

docker-compose logs -f => Просмотр логов в реальном времени  

docker-compose ps => проверить состояние контейнеров

4. Структура проекта

├── backend/               # Laravel приложение
├── frontend/              # React приложение
├── docker-compose.yml     # Конфигурация Docker
├── nginx.conf             # Конфигурация NGINX
└── README.md              # Readme.md файл