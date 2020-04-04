# Derived from official mysql image (our base image)
FROM mysql
# Add a database
ENV MYSQL_DATABASE user
# Add the content of the sql-scripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
#WORKDIR /usr/src/mysql

#EXPOSE 5432
COPY ./sql_scripts/ /docker-entrypoint-initdb.d/