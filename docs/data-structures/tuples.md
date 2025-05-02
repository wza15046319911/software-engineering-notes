---
title: Python元组详解
description: 深入讲解Python元组的概念、特性和应用场景，包括元组的不可变性、基本操作、遍历方法以及与列表的区别。
keywords: [Python元组, 不可变序列, 元组操作, 元组应用, 数据结构]
sidebar_position: 3
---
# 元组（Tuple）

## 元组的基本概念

- **元组（tuple）** 是一种**有序的、不可变的序列类型**
- 用 `()` 定义，元素间用逗号分隔
- **不可变性**意味着一旦创建，就不能修改其中的元素

```python
coordinates = (3, 4)
empty = ()
single = (5,)  # 注意：单元素元组必须加逗号
```

## 元组的访问与操作

### 📌 索引与切片

```python
t = (10, 20, 30, 40)
print(t[0])     # 10
print(t[-1])    # 40
print(t[1:3])   # (20, 30)
```

## 不可变性

尝试修改元组会报错：

```python
t = (1, 2, 3)
# t[0] = 99  # ❌ TypeError: 'tuple' object does not support item assignment
```

## 遍历元组

```python
for item in (1, 2, 3):
    print(item)
```

## 应用场景

- 不希望被修改的数据
- 可作为字典的键（因为元组是可哈希的，list 不可以）
- 用于函数的**多值返回**

```python
def get_name():
    return ("Alice", "Smith")

first, last = get_name()
```

## 📚 总结：元组 vs 列表

| 对比点 | 元组（tuple） | 列表（list） |
| --- | --- | --- |
| 可变性 | ❌ 不可变 | ✅ 可变 |
| 括号 | `()` | `[]` |
| 用途 | 安全、返回值、多字段 | 存储和修改数据 |
| 哈希性 | ✅ 可作为字典键 | ❌ 不可作为键 |
