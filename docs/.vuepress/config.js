module.exports = {
    title: 'sunBT',
    description: '有道无术，术尚可求，有术无道，止于术',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/images/sun.png'}],
        ['meta', {name: "author", content: "sunBT"}],
        ['meta', {name: "keywords", content: "sunBT学习笔记"}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/images/sun.png',
        nav: require("./nav"),
        sidebar: {
            '/guide/': [
                {
                    title: '新手指南',
                    collapsable: true,
                    children: [
                        '/guide/notes/one',
                    ]
                },
                {
                    title: '知码学院',
                    collapsable: true,
                    children: [
                        '/guide/notes/two',
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}