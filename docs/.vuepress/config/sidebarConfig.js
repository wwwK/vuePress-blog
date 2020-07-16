module.exports = {
    //简介
    '/guide/': [
        {
            title: 'one',
            collapsable: true,
            children: [
                '/guide/one',
            ]
        },
        {
            title: 'two',
            collapsable: true,
            children: [
                '/guide/two',
            ]
        }
    ],
    //后台
    //SpringBoot
    '/backend/springboot/':[
        {
            title: 'SpringBoot入门',
            collapsable: true,
            children: [
                { title: '快速搭建项目', path:'/backend/springboot/start/快速搭建项目'},
                { title: 'SpringBoot单元测试', path:'/backend/springboot/start/SpringBoot单元测试'},
                { title: 'SpringBoot常用配置', path:'/backend/springboot/start/SpringBoot常用配置'},
            ]
        },
        {
            title: 'SpringBoot技巧',
            collapsable: true,
            children: [
                { title: '静态文件和lib存放包外', path:'/backend/springboot/skill/静态文件和lib存放包外'},

            ]
        },
    ],

    //数据库
    '/backend/database/': [
        {
            title: 'MYSQL',
            collapsable: true,
            children: [
                '/backend/database/MySQL/',
                '/backend/database/MySQL/MySQL',
            ]
        },
        {
            title: 'Minio',
            collapsable: true,
            children: [
                '/backend/database/Minio/',
                '/backend/database/Minio/Minio'
            ]
        }
    ],


    //Docker
    '/OAndM/docker/': [
        {
            title: 'Docker',
            collapsable: true,
            children: [
                { title: '01-介绍', path:'/OAndM/docker/docker/01-介绍'},
                { title: '02-Docker架构', path:'/OAndM/docker/docker/02-Docker架构'},
                { title: '03-安装', path:'/OAndM/docker/docker/03-安装'},
                { title: '04-常用命令', path:'/OAndM/docker/docker/04-常见命令'},
                { title: '部署nginx', path:'/OAndM/docker/docker/100-部署nginx'},
            ]
        },
        {
            title: 'Docker-compose',
            collapsable: true,
            children: [
                { title: '00-YAML 配置文件语言', path:'/OAndM/docker/docker-compose/00-YAML 配置文件语言'},
                { title: '01-介绍', path:'/OAndM/docker/docker-compose/01-介绍'},
                { title: '02-安装', path:'/OAndM/docker/docker-compose/02-安装'},
                { title: '03-常用命令', path:'/OAndM/docker/docker-compose/03-常用命令'},
                { title: '04-部署Minio', path:'/OAndM/docker/docker-compose/04-部署Minio'},
                { title: '05-部署ElasticSearch', path:'/OAndM/docker/docker-compose/05-部署ElasticSearch'},
                { title: '06-部署seafile', path:'/OAndM/docker/docker-compose/06-部署seafile'},
                { title: '07-部署arcgisserver', path:'/OAndM/docker/docker-compose/07-部署arcgisserver'},
                { title: '08-部署mysql', path:'/OAndM/docker/docker-compose/08-部署mysql'},
                { title: '09-部署redis', path:'/OAndM/docker/docker-compose/09-部署redis'},
            ]
        },
        {
            title: 'Kubernetes',
            collapsable: true,
            children: [
                { title: '01-介绍', path:'/OAndM/docker/kubernetes/01-介绍'},
                { title: '02-安装', path:'/OAndM/docker/kubernetes/02-安装'},
                { title: '03-常用命令', path:'/OAndM/docker/kubernetes/03-常用命令'},
            ]
        }
    ],
    '/frontend/WebGIS/': [
        {
            title: 'Cesium',
            collapsable: true,
            children: [
                { title: '介绍', path:'/frontend/WebGIS/Cesium/01-介绍'},
                { title: '安装', path:'/frontend/WebGIS/Cesium/02-安装'},
            ]
        },
        {
            title: 'ThreeJS',
            collapsable: true,
            children: [
                { title: '介绍', path:'/frontend/WebGIS/ThreeJS/介绍'},
                { title: '创建实例', path:'/frontend/WebGIS/ThreeJS/创建实例'},
                { title: '全景图片-视频', path:'/frontend/WebGIS/ThreeJS/全景图片-视频'},
                { title: '贴图-视频', path:'/frontend/WebGIS/ThreeJS/贴图-视频'},
                { title: '贴图-动态图片', path:'/frontend/WebGIS/ThreeJS/贴图-动态图片'},
            ]
        }
    ],
};