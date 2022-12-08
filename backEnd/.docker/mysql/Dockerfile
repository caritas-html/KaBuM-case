FROM mysql:5.7.37

ENV MYSQL_ROOT_PASSWORD docker
ENV MYSQL_DATABASE containermysqlkabum
COPY db.sql /docker-entrypoint-initdb.d

EXPOSE 3306

