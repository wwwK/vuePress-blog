# 部署nginx
## 运行第一个容器
以nginx为例
```shell script
# 下载镜像
docker pull nginx

# 运行容器
docker run --name nginx-container -p 80:80 -d nginx
```
浏览器输入虚拟机地址即可访问 Nginx http://localhost

<img :src="$withBase('/images/docker/nginx.webp')"  alt="foo">

