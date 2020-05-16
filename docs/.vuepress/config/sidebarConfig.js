module.exports = {
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
    '/OAndM/docker/': [
        {
            title: 'Docker',
            collapsable: true,
            children: [
                '/OAndM/docker/docker/'
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
            ]
        },
        {
            title: 'Kubernetes',
            collapsable: true,
            children: [
                '/OAndM/docker/kubernetes/'
            ]
        }
    ],

};