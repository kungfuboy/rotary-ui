# RoSelect

<select-a></select-a>
<show-code :code="'%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cro-select%0A%20%20%20%20%20%20%3Aoptions%3D%22%5B%7B%20label%3A%20%27A%27%2C%20code%3A%20%27a%27%20%7D%2C%20%7B%20label%3A%20%27B%27%2C%20code%3A%20%27b%27%20%7D%5D%22%0A%20%20%20%20%3E%3C/ro-select%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20%22SelectA%22%0A%7D%3B%0A%3C/script%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.ro-select%20%7B%0A%20%20height%3A%204.4rem%3B%0A%7D%0A%3C/style%3E%0A'"></show-code>


### 属性

| 属性名  | 类型  | 作用                                         | 默认值 |
| ------- | ----- | -------------------------------------------- | ------ |
| options | Array | 传入的候选项，必须是`[{label: '', code:''}]` | []     |

### 事件

| 事件名   | 回调参数     | 备注                      |
| -------- | ------------ | ------------------------- |
| input    | 选择的 value | 建议通过 v-model 指令绑定 |
| selected | 选择的数据   | 返回点击选择的整条数据    |

