# Redis

## 单机版
```docker
version: '3'
services: 
    redis:
        image: redis:latest
        container_name: redis
        ports: 
            - 6379:6379
        volumes: 
            - /mnt/e/docker/volume/redis:/data
        restart: always
        command: 
            - redis-server 
            - --appendonly yes 
            - --requirepass "12345678"   
```