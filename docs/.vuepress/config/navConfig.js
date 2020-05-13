module.exports = [
    {
        text: 'HOME', link: '/'
    },
    {
        text: 'Guide', link: '/guide/'
    },
    {
        text: '运维', link: '/OAndM/',
        items: [
            {
                text: 'Linux', link: '/OAndM/Linux/'
            },
            {
                text: 'windows', link: '/OAndM/windows/'
            },
            {
                text: 'docker', link: '/OAndM/Docker/'
            }
        ]
    },
    {
        text: '后端', link: '/backend/',
        items: [
            {
                text: 'Java', link: '/backend/Java/'
            },
            {
                text: 'SpringBoot', link: '/backend/springboot/'
            },
            {
                text: 'database', link: '/backend/database/'
            }
        ]
    },
    {
        text: '前端', link: '/frontend/',
        items:[
            {
                text: 'WebGIS', link: '/frontend/WebGIS/'
            },
            {
                text: 'Vue', link: '/frontend/Vue/'
            }
        ]
    },
    {
        text: '工具箱',
        items: [
            {
                text: '在线编辑',
                items: [
                    {text: '图片压缩', link: 'https://tinypng.com/'}
                ]
            },
            {
                text: '在线服务',
                items: [
                    {text: '阿里云', link: 'https://www.aliyun.com/'},
                    {text: '腾讯云', link: 'https://cloud.tencent.com/'}
                ]
            },
            {
                text: '博客指南',
                items: [
                    {text: '掘金', link: 'https://juejin.im/'},
                    {text: 'CSDN', link: 'https://blog.csdn.net/'}
                ]
            }
        ]
    }
];