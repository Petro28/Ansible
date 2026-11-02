# Крок 13. Налаштувати Nginx як reverse proxy
Виконуйте на VM2.

Створіть /etc/nginx/sites-available/cat-site

Важливий момент (Замінити IP на IP VM1):
```
location /api/ {
    proxy_pass http://10.10.10.11:8080/;
}
```

Запит браузера:
```
GET /api/cat
```

Nginx передасть на VM1:
```
GET /cat
```


Увімкнути сайт і вимкнути стандартний:
```
sudo ln -s /etc/nginx/sites-available/cat-site /etc/nginx/sites-enabled/cat-site
sudo rm -f /etc/nginx/sites-enabled/default
```


Перевірити синтаксис:
```
sudo nginx -t
```

Якщо бачите `syntax is ok` і `test is successful`, застосуйте конфігурацію:
```
bash
sudo systemctl reload nginx
```