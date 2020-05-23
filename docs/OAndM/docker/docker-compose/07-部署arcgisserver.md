# arcgisserver

```docker
version: '3'
services: 
    arcgisserver:
        restart: always
        image: huas/arcgisserver:10.3.1
        container_name: arcgisserver
        ports: 
            - 6080:6080
        volumes: 
            - ./arcgisserver/agserver103/config-store:/arcgis/server/usr/config-store
            - ./arcgisserver/agserver103/directories:/arcgis/server/usr/directories
            - ./arcgisserver/agserver103/lib/ext:/arcgis/server/usr/lib/ext
            - ./arcgisserver/agserver103/logs:/arcgis/server/usr/logs
            - ./arcgisserver/gisdata:/arcgis/gisdata
```