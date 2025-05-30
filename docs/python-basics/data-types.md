---
title: Python数据类型详解
description: 全面介绍Python中的基本数据类型，包括整数、浮点数、字符串、列表、元组、字典、集合等，以及类型转换和各类数据类型的运算特性。
keywords: [Python数据类型, 类型转换, 数据结构, 基本类型, 类型运算]
sidebar_position: 3
---

# 数据类型（Data Types）

## 常见数据类型简介

Python 中的变量具有**类型（type）**，常见内建类型包括：

| 类型       | 名称               | 示例                 |
| ---------- | ------------------ | -------------------- |
| `int`      | 整数               | `42`, `-7`, `1000`   |
| `float`    | 浮点数（小数）     | `3.14`, `-0.001`     |
| `bool`     | 布尔值             | `True`, `False`      |
| `str`      | 字符串             | `"hello"`, `'world'` |
| `list`     | 列表（数组）       | `[1, 2, 3]`, `[]`    |
| `tuple`    | 元组（不可变数组） | `(1, 2)`, `()`       |
| `dict`     | 字典（键值对）     | `{"a": 1, "b": 2}`   |
| `set`      | 集合               | `{1, 2, 3}`          |
| `NoneType` | 空值               | `None`               |

---

## 类型转换（Type Casting）

### 📌 显式转换

使用内置函数进行类型转换：

```python

int("5")      # → 5
float("3.14") # → 3.14
str(100)      # → "100"
bool(0)       # → False
```

### 📌 隐式转换

Python 有时会自动转换类型（如 `int` + `float` → `float`）：

```python

x = 3 + 2.5   # x = 5.5

```

---

## 支持的简单运算

不同类型支持不同的操作：

---

### 📌 整数与浮点数（int, float）

支持：`+`, `-`, `*`, `/`, `//`, `%`, `**`

```python
a = 10
b = 3.0
print(a + b)  # 13.0
print(a / b)  # 3.333...

```

---

### 📌 布尔值（bool）

-   本质上：`True = 1`，`False = 0`
-   可以参与算术运算

```python
print(True + 1)   # 2
print(False * 10) # 0

```

---

### 📌 字符串（str）

支持：`+`（拼接），`*`（重复），`in`（包含）

```python
print("Hello" + " World")  # 拼接
print("Hi" * 3)            # 重复输出
print("a" in "apple")      # True
```

不支持直接的减法、除法等运算。

---

### 📌 列表（list）

支持：`+`（拼接），`*`（重复），`in`，索引、切片

```python
print([1, 2] + [3, 4])  # [1, 2, 3, 4]
print([0] * 3)          # [0, 0, 0]
print(2 in [1, 2, 3])   # True

```

不支持直接的减法、除法等运算。

---

### 📌 字典（dict）

-   不支持直接运算

---

### 📌 元组（tuple）

-   和列表类似但**不可修改**
-   可切片、索引

```python
t = (1, 2, 3)
print(t[1])     # 2
# t[0] = 100    # 报错：元组不能修改

```

---

### 📌 NoneType

-   表示空值，常用作默认返回、初始化状态
-   不支持直接运算

---

## 📚 小节小结

| 数据类型   | 可用操作                          |
| ---------- | --------------------------------- |
| int, float | 算术运算：+ - \* / // % \*\*      |
| str        | 拼接（+）、重复（\*）、in         |
| list       | 拼接（+）、重复（\*）、索引、切片 |
| bool       | 可用于运算，True=1, False=0       |
| tuple      | 不可变、支持索引、in              |
| dict       | 键值操作，无数学运算              |
| set        | 集合运算：并                      |
| None       | 表示空值，不参与计算              |
