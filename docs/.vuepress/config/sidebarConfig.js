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
                { title: '01-介绍', path:'/frontend/WebGIS/Cesium/01-介绍'},
                { title: '02-安装', path:'/frontend/WebGIS/Cesium/02-安装'},
            ]
        }
    ],
};