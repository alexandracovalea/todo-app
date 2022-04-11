FROM docker.io/ubuntu:22.04

ENV DATABASE_HOST 127.0.0.1
ENV DATABASE_NAME todo-db
ENV DATABASE_USER todo
ENV DATABASE_PASSWORD secret
ENV PORT 8000

COPY todo-app/ /todo-app

RUN apt-get update && \
    apt-get -y dist-upgrade && \
    apt-get -y install npm

RUN useradd --create-home todoapp && \
    chown -R todoapp:todoapp /todo-app

USER todoapp

WORKDIR /todo-app 

CMD ["/usr/bin/env", "node", "bin/www"]
