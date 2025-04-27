---
sidebar_position: 4
title: 字典练习
---

# 字典练习

:::note
此页面正在建设中。敬请期待更多练习题和解析。
:::

## 示例练习

### 练习1：创建和操作字典

**题目描述**：创建一个学生信息字典，并演示字典的基本操作。

```python
# 创建学生信息字典
student = {
    "name": "张三",
    "age": 20,
    "major": "计算机科学",
    "grades": {"数学": 90, "英语": 85, "编程": 95}
}

# 访问字典元素
print(f"学生姓名: {student['name']}")
print(f"学生年龄: {student['age']}")

# 修改字典元素
student['age'] = 21
print(f"修改后的年龄: {student['age']}")

# 添加新元素
student['email'] = 'zhangsan@example.com'
print(f"添加邮箱后: {student}")

# 删除元素
del student['email']
print(f"删除邮箱后: {student}")

# 访问嵌套字典
print(f"数学成绩: {student['grades']['数学']}")
``` 