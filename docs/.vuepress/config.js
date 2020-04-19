const headConfig=require("./config/headConfig");
const nav=require("./config/navConfig");
const sidebarConfig=require("./config/sidebarConfig");

module.exports = {
    title: 'sunBT',
    description: '有道无术，术尚可求，有术无道，止于术',
    dest: './dist',
    port: '7000',
    head:headConfig,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/images/sun.png',
        nav: nav,
        sidebar:sidebarConfig,
        sidebarDepth: 2,
        lastUpdated: '上次更新时间',
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
};