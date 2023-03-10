# 简历模版

## To PDF

1. `ctrl + p`
2. 边距设置为 `无`
3. 勾选 `背景图形`
4. 取消 `页脚` 和 `页眉`
5. 保存

## 组件

### Layout

| 参数            | 说明                           | 类型                                   | 可选值 | 默认值 |
| --------------- | ------------------------------ | -------------------------------------- | ------ | ------ |
| avatar `必填`   | 头像，需要传入图片路径         | string                                 | -      | -      |
| fullName `必填` | 姓名                           | string                                 | -      | -      |
| basics `必填`   | 基础信息                       | string[]                               | -      | -      |
| contacts `必填` | 联系方式                       | string[]                               | -      | -      |
| socialLinks     | 社交链接，参考 Link 的参数类型 | object[] `object 参考 Link 的参数类型` | -      | -      |
| linkStrong      | 设置社交链接可跳转文本是否加粗 | boolean                                | -      | true   |

### Link

| 参数         | 说明                                     | 类型            | 可选值       | 默认值 |
| ------------ | ---------------------------------------- | --------------- | ------------ | ------ |
| title `必填` | 链接可点击部分的文本，注意是可点击部分！ | string / number | -            | -      |
| label        | 链接描述文本内容，注意是不可点击部分！   | string / number | -            | -      |
| direction    | title 相对于 label 的方向                | string          | left / right | left   |
| href `必填`  | 跳转目标的链接                           | string          | -            | -      |
| strong       | 设置 title 文本是否加粗                  | boolean         | -            | true   |

### Label

直接使用，和 `<p></p>` 用法一样
