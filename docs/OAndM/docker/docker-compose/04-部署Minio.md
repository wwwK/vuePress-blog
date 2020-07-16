# 部署

## 单机版
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
```yaml
version: '3'
services: 
    minio:
        restart: always
        image: minio/minio:latest
        container_name: minio
        ports: 
            - 9000:9000
        volumes: 
            -  ./data:/data
        environment: 
            - MINIO_ACCESS_KEY=admin
            - MINIO_SECRET_KEY=admin123456
        command: server /data
```

```shell script
# 启动服务
docker-compose up -d
```

# 注意事项
## minio设置桶的地址持久化不变
### 安装minio client
[二进制文件地址](https://dl.minio.io/client/mc/release/linux-amd64/mc)

赋予权限
```shell script
chmod +x mc
```
设置自定义命令(不设置的话就是 ./)
```shell script
alias mc="./mc"
```
### 添加服务端host
使用 minio client将自己的minio server添加到mc的配置管理中
```shell script
mc config host add minio http://192.168.1.60:9000 admin  admin123456  --api s3v4
```
这样我们就可以直接管理 minio这个server端了

### 配置下载策略
```shell script
mc policy public minio/test
```
这个命令的作用是将server端的test桶设置为开放管理，可以直接通过url进行下载
