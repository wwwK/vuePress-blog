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
    // '/backend/database/MYSQL': [
    //     {
    //         title: 'MYSQL',
    //         collapsable: true,
    //         children: [
    //             '/backend/database/MySQL/MYSQL'
    //         ]
    //     },
    //     {
    //         title: 'Minio',
    //         collapsable: true,
    //         children: [
    //             '/backend/database/Minio/Minio'
    //         ]
    //     }
    // ],

};