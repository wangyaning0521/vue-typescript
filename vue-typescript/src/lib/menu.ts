export default [
    {
      title: "业务管理",
      index: "1",
      Icon: "ios-analytics",
      menu: [
        {
          name: {
            index: "1-1",
            menuUrl: "/contractPage"
          },
          Icon: "md-link",
          menuName: "合同管理"
        },
        {
          name: {
            index: "1-2",
            menuUrl: "/projectPage"
          },
          Icon: "ios-mail-outline",
          menuName: "项目管理"
        }
      ]
    },
    {
      title: "客户管理",
      index: "2",
      Icon: "ios-folder-open",
      menu: [
        {
          name: {
            index: "2-1",
            menuUrl: "/companyPage"
          },
          Icon: "logo-nodejs",
          menuName: "单位账号"
        },
        {
          name: {
            index: "2-2",
            menuUrl: "/userPage"
          },
          Icon: "ios-outlet",
          menuName: "个人客户"
        },
        {
          title: "个人更多信息",
          index: 3,
          Icon: "ios-paw",
          children: [
            {
              name: {
                index: "3-1",
                menuUrl: "/SuperAdmin"
              },
              Icon: "ios-pin",
              menuName: "超级管理员"
            },
            {
              name: {
                index: "3-2",
                menuUrl: "/customerService"
              },
              Icon: "md-pulse",
              menuName: "前道客服"
            }
          ]
        }
      ]
    }
  ];