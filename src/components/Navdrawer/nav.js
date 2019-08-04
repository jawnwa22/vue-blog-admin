let nav = [
    {
        title: 'dashboard',
        icon: 'dashboard',
        to: '/dashboard'
    },
    {
        title: '文章管理',
        icon: 'view_list',
        // to: '/article_list',
        children: [
            {
                title: "文章列表",
                to: '/article_list',
                icon: 'list'
            },
            {
                title: "类别管理",
                icon: 'label',
                to: '/category_list'
            }
        ]
    },
    // {
    //     title: '类别管理',
    //     icon: 'label',
    //     to: '/category_list'
    // }
]

export default nav;