# Крок 7. Налаштувати запуск backend через systemd

Виконуйте на **VM1**.

Створіть/зкопіюйте файл `/etc/systemd/system/cat-api.service`:

Перезавантажити конфігурацію systemd і запустити сервіс:
```
sudo systemctl daemon-reload
sudo systemctl enable --now cat-api
```
Перевірити статус:
```
sudo systemctl status cat-api --no-pager
```
Подивитися логи:
```
bash
sudo journalctl -u cat-api -n 50 --no-pager
```
Перевірити API (замінити IP на IP VM1):
```
bash
curl http://10.10.10.11:8080/health
curl http://10.10.10.11:8080/cat
```