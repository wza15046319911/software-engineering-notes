---
sidebar_position: 2
title: 文件操作练习
---

# 文件操作练习

:::note
此页面正在建设中。敬请期待更多练习题和解析。
:::

## 示例练习

### 练习1：基本文件读写

**题目描述**：创建一个程序，将用户输入的内容写入文件，然后读取并显示文件内容。

```python
# 写入文件
with open("sample.txt", "w") as file:
    file.write("这是一个文件操作示例。\n")
    file.write("Python的文件操作非常简单和强大。")

# 读取文件
with open("sample.txt", "r") as file:
    content = file.read()
    print("文件内容：")
    print(content)
``` 