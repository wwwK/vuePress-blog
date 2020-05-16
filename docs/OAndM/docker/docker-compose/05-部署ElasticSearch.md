# ElasticSearch

## 单机版
```docker
version: '3'
services: 
    elasticsearch:
        restart: on-failure
        image: ccr.ccs.tencentyun.com/sunbt/elasticsearch:v1
        container_name: elasticsearch
        ports: 
            - 9200:9200
            - 9300:9300
        volumes: 
            - /usr/local/docker/compose/elasticSearch/data:/usr/share/elasticsearch/data
        environment: 
            - ES_JAVA_OPTS= -Xms256m -Xmx256m    
```