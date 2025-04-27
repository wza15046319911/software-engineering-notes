---
sidebar_position: 3
title: 异常处理练习
---

# 异常处理练习

:::note
此页面正在建设中。敬请期待更多练习题和解析。
:::

## 示例练习

### 练习1：基本异常捕获

**题目描述**：创建一个程序，尝试将用户输入的字符串转换为整数，并处理可能发生的异常。

```python
try:
    user_input = input("请输入一个整数：")
    number = int(user_input)
    print(f"您输入的整数是：{number}")
except ValueError:
    print("错误：您输入的不是有效的整数")
finally:
    print("程序执行完毕")
``` 