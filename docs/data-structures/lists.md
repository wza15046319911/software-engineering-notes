---
title: Python列表详解
description: 全面介绍Python列表的概念、基本操作和常用方法，包括索引切片、元素操作、列表方法、嵌套列表和列表推导式等核心内容。
keywords: [Python列表, 列表操作, 列表方法, 列表推导式, 数据结构]
sidebar_position: 2
---
# 列表（List）

## 列表的基本概念

- 列表是 Python 中**最常用的可变容器类型**
- 可以存储**任意数量、任意类型**的元素
- 用 `[]` 定义，用逗号分隔元素

```python
numbers = [1, 2, 3]
mixed = [1, "hello", True]
empty = []
```

## 列表索引与切片

### 📌 索引（Index）

- 从 **0 开始**：第一个元素是索引 0
- 支持**负索引**：-1 表示最后一个元素

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # apple
print(fruits[-1])  # cherry
```

### 📌 切片（Slicing）

- 语法：`list[start:end:step]`
- 不包含 `end` 位置

```python
nums = [10, 20, 30, 40, 50]
print(nums[1:4])     # [20, 30, 40]
print(nums[:3])      # [10, 20, 30]
print(nums[::2])     # [10, 30, 50]
```

## 添加和删除元素

### 📌 添加元素

```python
fruits = ["apple", "banana"]

fruits.append("cherry")        # 添加到末尾
fruits.insert(1, "orange")     # 插入到指定位置
fruits += ["grape"]            # 扩展列表
```

### 📌 删除元素

```python
fruits.remove("banana")        # 按值删除（只删第一个）
fruits.pop()                   # 删除并返回最后一个元素
fruits.pop(1)                  # 删除指定位置
del fruits[0]                  # 用 del 删除元素
```

## 常用方法

| 方法 | 作用 |
| --- | --- |
| `.append(x)` | 添加元素到末尾 |
| `.insert(i, x)` | 在索引 i 处插入元素 x |
| `.remove(x)` | 移除第一个值为 x 的元素 |
| `.pop(i=-1)` | 移除并返回索引 i 的元素 |
| `.index(x)` | 返回 x 第一次出现的索引 |
| `.count(x)` | 返回 x 出现的次数 |
| `.sort()` | 就地排序 |
| `.reverse()` | 就地反转 |
| `.copy()` | 浅拷贝 |
| `.clear()` | 清空列表 |

### 🔹 `.append(x)` — 添加元素到列表末尾

```python
colors = ["red", "green"]
colors.append("blue")
print(colors)  # ['red', 'green', 'blue']
```

### 🔹 `.insert(i, x)` — 在索引 i 处插入元素 x

```python
colors = ["red", "green"]
colors.insert(1, "yellow")
print(colors)  # ['red', 'yellow', 'green']
```

### 🔹 `.remove(x)` — 删除第一个值为 x 的元素

```python
colors = ["red", "green", "red"]
colors.remove("red")
print(colors)  # ['green', 'red']
```

### 🔹 `.pop([i])` — 删除并返回指定索引的元素（默认最后一个）

```python
colors = ["red", "green", "blue"]
last = colors.pop()
print(last)    # blue
print(colors)  # ['red', 'green']

first = colors.pop(0)
print(first)   # red
```

### 🔹 `.index(x)` — 返回元素 x 第一次出现的索引

```python
nums = [10, 20, 30, 20]
idx = nums.index(20)
print(idx)  # 1
```

### 🔹 `.count(x)` — 统计 x 在列表中出现的次数

```python
nums = [1, 2, 2, 3, 2]
print(nums.count(2))  # 3
```

### 🔹 `.sort()` — 对列表进行升序排序（原地排序）

```python
nums = [4, 2, 5, 1]
nums.sort()
print(nums)  # [1, 2, 4, 5]
```

可选：降序排序

```python
nums.sort(reverse=True)
print(nums)  # [5, 4, 2, 1]
```

### 🔹 `.reverse()` — 将列表中的元素原地反转

```python
nums = [1, 2, 3]
nums.reverse()
print(nums)  # [3, 2, 1]
```

### 🔹 `.copy()` — 浅拷贝列表

```python
a = [1, 2, 3]
b = a.copy()
b.append(4)
print(a)  # [1, 2, 3]
print(b)  # [1, 2, 3, 4]
```

### 🔹 `.clear()` — 清空列表中的所有元素

```python
data = [1, 2, 3]
data.clear()
print(data)  # []
```

## 嵌套列表（二维列表）

### 📌 什么是嵌套列表？

- 列表中的元素也可以是列表，形成**二维结构**
- 常用于表示**表格、矩阵、坐标系**等数据结构

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```

### 📌 访问嵌套列表的元素

- 使用两个索引：`matrix[row][column]`

```python
print(matrix[0][0])  # 1
print(matrix[1][2])  # 6
```

### 📌 修改嵌套元素

```python
matrix[2][1] = 88
print(matrix[2])  # [7, 88, 9]
```

### 📌 遍历嵌套列表

```python
for row in matrix:
    for item in row:
        print(item, end=" ")
# 输出：1 2 3 4 5 6 7 88 9
```

## 遍历列表（List Traversal）

### 📌 使用 `for` 遍历列表

```python
names = ["Alice", "Bob", "Charlie"]

for name in names:
    print("Hello", name)
```

### 📌 使用 `range(len(list))` 遍历索引

```python
nums = [10, 20, 30]

for i in range(len(nums)):
    print(i, "=>", nums[i])
```

### 📌 使用 `enumerate()` 同时获取索引和值

```python
colors = ["red", "green", "blue"]

for idx, color in enumerate(colors):
    print(idx, color)
```

### 📌 列表推导式（List Comprehension）基础

列表推导是一种快速生成新列表的方法：

```python
squares = [x ** 2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
```

也可以添加条件：

```python
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]
```

## 📚 总结

| 内容 | 示例或说明 |
| --- | --- |
| 嵌套列表 | `matrix[1][2]` 访问行列元素 |
| 列表遍历 | `for item in list`, `for i in range()` |
| enumerate | 同时获取索引和值 |
| 推导式 | `[x for x in list if 条件]` |