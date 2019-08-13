# Button
胡成胜
<button-a></button-a>
<show-code :code="'%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cro-button%20%3Atype%3D%22%5B%27tiny%27%2C%20%27success%27%5D%22%3Etiny%20Button%3C/ro-button%3E%0A%20%20%20%20%3Cro-button%20%3Atype%3D%22%27small%27%22%3Esmall%20Button%3C/ro-button%3E%0A%20%20%20%20%3Cro-button%20%3Atype%3D%22%27clear%27%22%20%3Asub%3D%22%7B%20number%3A%20200%20%7D%22%3Enormal%20Button%3C/ro-button%3E%0A%20%20%20%20%3Cro-button%20%3Atype%3D%22%5B%27big%27%2C%20%27warning%27%5D%22%3Ebig%20Button%3C/ro-button%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20%22ButtonA%22%0A%7D%3B%0A%3C/script%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.ro-button%20%7B%0A%20%20margin%3A%200%2010px%3B%0A%7D%0A%3C/style%3E%0A'"></show-code>


### Demo B

<button-b></button-b>
<show-code :code="'%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cro-button%20%3Atype%3D%22%5B%27big%27%2C%20%27danger%27%5D%22%3Ebig%20Button%3C/ro-button%3E%0A%20%20%20%20%3Cro-button%20%3Atype%3D%22%5B%27big%27%2C%20%27clear%27%2C%20%27danger%27%5D%22%3Ebig%20Button%3C/ro-button%3E%0A%20%20%20%20%3Cro-button%20%3Atype%3D%22%5B%27big%27%2C%20%27clear%27%2C%20%27danger%27%2C%20%27disable%27%5D%22%20%3Asub%3D%223%22%0A%20%20%20%20%20%20%3Ebig%20Button%3C/ro-button%0A%20%20%20%20%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20%22ButtonA%22%0A%7D%3B%0A%3C/script%3E%0A%3Cstyle%20lang%3D%22less%22%20scoped%3E%0A.ro-button%20%7B%0A%20%20margin%3A%200%2010px%3B%0A%7D%0A%3C/style%3E%0A'"></show-code>


### 属性

使用`button`

```
button
```

| 属性名 | 类型            | 默认值 |
| ------ | --------------- | ------ |
| type   | String \| Array | Null   |
