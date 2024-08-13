# Development documentation

TODO:

- [X] Cookie change button
- [X] Custom image carosel
- [X] Home page custom image element
- [X] Link component instead of `<a>`
- [X] Copy button to code blocks
- [X] Copy button to inline code
- [ ] Caching fixes to workflows
- [ ] Minecraft server page
- [ ] Cookie button refactor
- [ ] Message popup refactor

## Requirements

node v22.1.0
docker

| Platform | Supported |
| :------: | :-------: |
|  amd64  |   ✔️   |
|  arm64  |   ✔️   |
|  arm32  |    ❌    |

## Commands

Serve vue frontend: `npm run serve`
Run ESLint: `npm run lint`
Run prettier: `npm run prettier`
Run Stylelint: `npm run stylelint`

## Building docker image

`docker build -t toomas633/toomas633:latest  .`

## Deploying image

|  ENV variables  | Description                                                            |
| :-------------: | ---------------------------------------------------------------------- |
|   EMAIL_HOST   | SMTP host for your mail server (smtp.mailprovider.com)                 |
|   EMAIL_USER   | Login user                                                             |
|   EMAIL_PASS   | Password                                                               |
|    EMAIL_TO    | What email address the contact form info is sent to (info@example.com) |
| ALLOWED_ORIGINS | Allowed origins (https://example.com,http://localhost:8080)            |

### docker-compose.yml

```
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    image: ghcr.io/toomas633/toomas633:latest
    environment:
      - EMAIL_HOST=<EMAIL_HOST>             # SMTP host for your mail provider (ir or url)
      - EMAIL_USER=<EMAIL_USER>             # Login user
      - EMAIL_PASS=<EMAIL_PASS>             # Password
      - EMAIL_TO=<EMAIL_TO>                 # What email address to send the contact form info to
      - ALLOWED_ORIGINS=<ALLOWED_ORIGINS>   # Allowed origins example 'https://toomas633.com,http://localhost:port'
    ports:
      - "80:80"
```
