# 部署
```shell script
# 进入对应的文件夹
cd /usr/local/docker/compose

# 创建应用的文件夹
mkdir minio

# 进入文件夹
cd minio

# 创建docker-comopse.yml文件
vim docker-compose.yml

# 启动粘贴的方法
shift + :
set paste
i

# 粘贴以下内容
```
```docker
version: '3'
services: 
    minio:
        restart: always
        image: minio/minio:latest
        container_name: minio
        ports: 
            - 9000:9000
        volumes: 
            - /usr/local/docker/compose/minio/data:/data
        environment: 
            - MINIO_ACCESS_KEY=AKIAIOSFODNN7EXAMPLE
            - MINIO_SECRET_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
        command: server /data
```

```shell script
# 启动服务
docker-compose up -d
```