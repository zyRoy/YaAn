define([],function() {

    var menuData = [
        {
            text: "干部人才",
            code: "01",
            level: "1",
            // image: "resources/commons/css/imgs/sidebar-1.png",
            // icon:"icon-gongjiaoche green",
            isDefault: false,
            children: [
                {
                    key: '0111',
                    text: "关系图谱分析",
                    code: "0101",
                    level: "2",
                    page: "yaAn/cadreTalent/relationship.html",
                    isDefault: false,
                    iframe: true
                },
                // {
                //     key: '0112',
                //     text: "货运实时分布",
                //     code: "0101",
                //     level: "2",
                //     page: "dynamic-monitor/controlLayer/index.html?industry=021,030",
                //     isDefault: false,
                //     iframe: true
                // }
            ]
        }
    ];

    return menuData || [];
})



