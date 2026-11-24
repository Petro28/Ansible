# Cat & Dog Web Application

Ansible project that deploys two simple web applications — Cat Generator SIte and Dog Generator Site — using two Ubuntu Server virtual machines.

## Architecture

The project uses two virtual machines:

| Server | IP address | Responsibilities |
|---|---|---|
| VM1 — Frontend | `your IP address` | Nginx, static websites, HTTPS, reverse proxy |
| VM2 — Backend | `your IP address` | Docker, Cat API, Dog API, PostgreSQL |

### Request flow

```text
              User's browser
                    |
              HTTPS (443)
                    |
                    v
          VM1 — Nginx Reverse Proxy
             /              \
            /                \
     Cat website          Dog website
            |                |
            v                v
       Cat API             Dog API
       Port 8080           Port 8081
            \                /
             \              /
              PostgreSQL
               Database
```

## Websites

I created two DNS A records for my domain that map to IP addresses.
- Cat Generator Site: your domain address
- Dog Generator Site: your domain address

## Ansible configuration

The inventory contains two managed hosts:

- `server1` — frontend
- `server2` — backend

Shared variables are stored in `inventory/inventory.ini`.

Sensitive variables are stored in Ansible Vault.
