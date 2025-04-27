---
sidebar_position: 2
title: 字符串练习
---

# 字符串练习

:::note
此页面正在建设中。敬请期待更多练习题和解析。
:::

## 示例练习

### 练习1：字符串操作

**题目描述**：使用Python的字符串方法完成以下操作。

```python
# 给定一个字符串
text = "Hello, Python Programming!"

# 1. 将字符串转换为大写
# 2. 将字符串转换为小写
# 3. 统计字母'P'的出现次数
# 4. 替换"Python"为"World"
```

**参考解答**：
```python
text = "Hello, Python Programming!"

# 转换为大写
upper_text = text.upper()
print(f"大写: {upper_text}")

# 转换为小写
lower_text = text.lower()
print(f"小写: {lower_text}")

# 统计字母'P'的出现次数
count_p = text.count('P')
print(f"'P'的出现次数: {count_p}")

# 替换"Python"为"World"
replaced_text = text.replace("Python", "World")
print(f"替换后: {replaced_text}")
``` 