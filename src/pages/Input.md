# RoInput

<input-a></input-a>
<show-code :code="'%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cro-input%20v-model%3D%22value%22%3E%3C/ro-input%3E%0A%20%20%20%20%3Cdiv%3E%u8F93%u5165%u7684%u503C%uFF1A%20%7B%7B%20value%20%7D%7D%3C/div%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20%22InputA%22%2C%0A%20%20data%3A%20%28%29%20%3D%3E%20%28%7B%0A%20%20%20%20value%3A%20%22%22%0A%20%20%7D%29%0A%7D%3B%0A%3C/script%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.ro-button%20%7B%0A%20%20margin%3A%200%2010px%3B%0A%7D%0A%3C/style%3E%0A'"></show-code>


<input-b></input-b>
<show-code :code="'%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demo%22%3E%0A%20%20%20%20%3Cro-input%20label%3D%22%u7528%u6237%u540D%22%20/%3E%0A%20%20%20%20%3Cbr%20/%3E%0A%20%20%20%20%3Cro-input%20label%3D%22%u5BC6%u7801%22%20/%3E%0A%20%20%20%20%3Cbr%20/%3E%0A%20%20%20%20%3Cro-input%20label%3D%22%u542B%u52A8%u753B%22%20required%20%3Aanimate%3D%22true%22%20/%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20%22InputB%22%0A%7D%3B%0A%3C/script%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.demo%20%7B%0A%20%20margin-top%3A%2050px%3B%0A%20%20.ro-input%20%7B%0A%20%20%20%20margin-top%3A%2040px%3B%0A%20%20%20%20width%3A%20320px%3B%0A%20%20%20%20/deep/%20input%20%7B%0A%20%20%20%20%20%20color%3A%20red%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C/style%3E%0A'"></show-code>


### 属性

| 属性名 | 类型   | 作用   | 默认值 |
| ------ | ------ | ------ | ------ |
| label  | String | 标签名 | 空     |





### 事件

| 事件名 | 回调参数          | 备注                    |
| ------ | ----------------- | ----------------------- |
| input  | 输入的值          | 建议通过v-model指令绑定 |
| change | 输入时的Event对象 |                         |

 

