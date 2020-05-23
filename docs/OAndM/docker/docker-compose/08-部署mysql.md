# MySQL

```docker
version: '3'
services:
  db:
    image: mysql
    restart: always
    container_name: mysql
    environment:
      MYSQL_ROOT_PASSWORD: gyg123456
    command:
      --default-authentication-plugin=mysql_native_password
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
      --lower_case_table_names=1
      --max_connections=3000
    ports:
      - 3306:3306
    volumes:
      - ./mysql/data:/var/lib/mysql
```