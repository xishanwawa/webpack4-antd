let tplData = [
  {
    label: "参照",
    type: "refer",
    key: "refer",
    placeholder: "请输入..."
  },
  {
    label: "姓名",
    type: "input",
    key: "username",
    placeholder: "请输入...",
    message: "姓名 必填!",
    required: true,
    bring: {
      key: "itemlist"
    },
    effect: [
      {
        condition: "$state.key == '1'",
        effectItems: [
          {
            key: "userage",
            merge: {
              required: true,
              disbled: false
            }
          },
          {
            key: "money",
            merge: {
              required: true,
              disbled: false
            }
          }
        ]
      }
    ]
  },
  {
    label: "年龄",
    type: "number",
    key: "userage",
    message: "年龄 必填!",
    referto: "customer",
    params: {
      keys: ["name"],
      globel: ["type", ""]
    },
    placeholder: "请输入..."
  },
  {
    label: "人民币",
    type: "money",
    key: "money",
    placeholder: "请输入..."
  },
  {
    label: "百分比",
    type: "percent",
    key: "percent",
    placeholder: "请输入..."
  },
  {
    label: "日期",
    type: "date",
    key: "datepicker",
    placeholder: "请输入..."
  },
  {
    label: "下拉单选",
    type: "select",
    key: "select",
    placeholder: "请输入..."
  },
  {
    label: "下拉多选",
    type: "selectMultiple",
    key: "selectMultiple",
    placeholder: "请输入..."
  },
  {
    label: "单选按钮",
    type: "radio",
    key: "radio",
    placeholder: "请输入..."
  },
  {
    label: "单选按钮",
    type: "radioButton",
    key: "radioButton",
    placeholder: "请输入..."
  },
  {
    label: "多选按钮",
    type: "checkbox",
    key: "checkbox",
    placeholder: "请输入..."
  }
];

export { tplData };
