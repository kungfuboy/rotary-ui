# Card

<card-a></card-a>
<show-code :code="'%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demo%22%3E%0A%20%20%20%20%3Cro-card%0A%20%20%20%20%20%20@move-left%3D%22handleMoveLeft%22%0A%20%20%20%20%20%20@move-right%3D%22handleMoveRight%22%0A%20%20%20%20%20%20%3Aclass%3D%22isActive%20%3F%20%27active%27%20%3A%20%27%27%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cdiv%3E%7B%7B%20msg%20%7D%7D%3C/div%3E%0A%20%20%20%20%3C/ro-card%3E%0A%20%20%20%20%3Cb%20class%3D%22del%22%3E%u5220%u9664%3C/b%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20%22CardA%22%2C%0A%20%20data%3A%20%28%29%20%3D%3E%20%28%7B%0A%20%20%20%20msg%3A%20%22%u6CA1%u6709%u52A8%u4F5C%22%2C%0A%20%20%20%20isActive%3A%20false%0A%20%20%7D%29%2C%0A%20%20methods%3A%20%7B%0A%20%20%20%20handleMoveLeft%28%29%20%7B%0A%20%20%20%20%20%20this.msg%20%3D%20%22%u4F60%u5F80%u5DE6%u6ED1%u4E86%22%3B%0A%20%20%20%20%20%20this.isActive%20%3D%20true%3B%0A%20%20%20%20%7D%2C%0A%20%20%20%20handleMoveRight%28%29%20%7B%0A%20%20%20%20%20%20this.msg%20%3D%20%22%u4F60%u5F80%u53F3%u6ED1%u4E86%22%3B%0A%20%20%20%20%20%20this.isActive%20%3D%20false%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%3B%0A%3C/script%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.demo%20%7B%0A%20%20position%3A%20relative%3B%0A%20%20.ro-card%20%7B%0A%20%20%20%20transform%3A%20translateX%280%29%3B%0A%20%20%20%20transition%3A%200.4s%20all%20ease%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20%26.active%20%7B%0A%20%20%20%20%20%20transform%3A%20translateX%28-80px%29%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20.del%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20top%3A%205px%3B%0A%20%20%20%20bottom%3A%205px%3B%0A%20%20%20%20width%3A%2080px%3B%0A%20%20%20%20display%3A%20flex%3B%0A%20%20%20%20align-items%3A%20center%3B%0A%20%20%20%20justify-content%3A%20center%3B%0A%20%20%20%20background%3A%20%23b5495b%3B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20z-index%3A%20-5%3B%0A%20%20%7D%0A%7D%0A%3C/style%3E%0A'"></show-code>


### 事件

| 事件名     | 回调参数 | 备注           |
| ---------- | -------- | -------------- |
| move-left  | 无       | 用户触屏向左滑 |
| move-right | 无       | 用户触屏向右滑 |

