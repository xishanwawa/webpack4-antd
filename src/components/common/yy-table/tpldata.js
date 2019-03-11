//列表模板
export let columns = [
  {
    title: "姓名",
    key: "name"
  },
  {
    title: "年龄",
    key: "age"
  },
  {
    title: "地址",
    key: "address"
  },
  {
    title: "标签",
    key: "tags",
    type: "tags"
  }
];

//详情模板
export let sections = [
  {
    title: "基本信息",
    type: "card",
    items: [
      { title: "取货单号", key: "code", type: "string" },
      { title: "姓名", key: "name", type: "string" },
      { title: "年龄", key: "age", type: "string" },
      { title: "地址", key: "address", type: "string" }
    ]
  },
  {
    title: "子表1",
    type: "table",
    key: "childlist",
    items: [
      {
        title: "姓名",
        key: "name"
      },
      {
        title: "年龄",
        key: "age"
      },
      {
        title: "地址",
        key: "address"
      }
    ]
  },
  ,
  {
    title: "子表2",
    type: "table",
    key: "childlist1",
    items: [
      {
        title: "姓名",
        key: "name"
      },
      {
        title: "年龄",
        key: "age"
      },
      {
        title: "地址",
        key: "address"
      }
    ]
  }
];

//列表数据
export let data = [
  {
    key: "1",
    name: "狗蛋",
    age: 32,
    address: "史各庄",
    tags: ["吊丝", "工程师", "吃藕"]
  },
  {
    key: "2",
    name: "粪叉",
    age: 42,
    address: "屯店",
    tags: ["成功人士", "拼命一族"]
  },
  {
    key: "3",
    name: "石头",
    age: 32,
    address: "中南海",
    tags: ["高富帅", "官宦子弟"]
  }
];

//详情数据
export let datailsData = {
  code: "100000000",
  name: "ytm",
  age: "19",
  address: "史各庄",
  childlist: [
    {
      key: "1",
      name: "狗蛋",
      age: 32,
      address: "史各庄"
    },
    {
      key: "2",
      name: "粪叉",
      age: 42,
      address: "屯店"
    }
  ],
  childlist1: [
    {
      key: "1",
      name: "狗蛋",
      age: 32,
      address: "史各庄"
    },
    {
      key: "2",
      name: "粪叉",
      age: 42,
      address: "屯店"
    }
  ]
};
