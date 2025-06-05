---
title: Python控制结构
description: 详细讲解Python中的控制结构，包括条件判断、循环结构、控制语句等，以及Python特有的缩进规则和最佳实践，帮助初学者掌握程序流程控制。
keywords: [Python控制流, 条件判断, 循环结构, 缩进规则, 流程控制]
sidebar_position: 4
---

# 控制结构（Control Flow）

控制结构让程序能够根据**条件**和**重复操作**来改变执行流程，是编程的核心组成之一。Python 主要包含：

1. 条件判断（`if` 语句）
2. 循环结构（`while`, `for` 循环）
3. 无限循环（Infinite Loop）
4. `for` 和 `while` 循环的互相转化
5. 控制语句（`break`, `continue`, `pass`）

---

## 条件判断（if, elif, else）

### 📌 基本语法：

```python
if 条件:
    语句块
elif 其他条件:
    语句块
else:
    语句块

```

### 📌 示例：

```python
score = 85

if score >= 90:
    print("A")
elif score >= 75:
    print("B")
else:
    print("C")

```

:::info
Python 使用缩进来表示代码块，推荐使用 **4 个空格**。
:::
:::warning
位于同一代码块中的 if, elif, else 如果多个分支都满足，也只会运行**第一个**满足的分支，其他满足的分支会被忽略
:::

## while 循环

### 📌 基本语法：

```python
while 条件:
    循环体

```

只要条件为 `True`，循环就会一直执行。

### 📌 示例：

```python
x = 3
while x > 0:
    print(x)
    x -= 1

```

---

## 无限循环（Infinite Loop）

### 📌 什么是无限循环？

无限循环是指**循环条件永远为 `True`**，导致循环永远不会自然结束的情况。

### 📌 有意创建无限循环

#### 使用 `while True:`

```python
while True:
    user_input = input("请输入命令 (输入 'quit' 退出): ")
    if user_input == 'quit':
        break
    print(f"你输入了: {user_input}")

```

### 📌 意外的无限循环（常见错误）

#### ❌ 错误示例 1：忘记更新循环变量

```python
x = 5
while x > 0:
    print(x)
    # 忘记了 x -= 1，导致 x 永远是 5

```

#### ❌ 错误示例 2：条件永远为真

```python
count = 0
while count < 10:
    print(count)
    count += 1
    count -= 1  # 这行代码让 count 永远不会增长

```

### 📌 如何退出无限循环

| 方法                  | 说明                       |
| --------------------- | -------------------------- |
| `break` 语句          | 在循环内部使用条件判断退出 |
| `Ctrl + C` (键盘中断) | 强制终止程序运行           |
| 修改循环条件          | 通过变量控制循环是否继续   |
| `return` (在函数中)   | 直接从函数返回，结束循环   |

### 📌 实用的无限循环模式

#### 菜单驱动程序

```python
def menu_program():
    while True:
        print("\n=== 主菜单 ===")
        print("1. 选项一")
        print("2. 选项二")
        print("3. 退出")

        choice = input("请选择: ")

        if choice == "1":
            print("执行选项一")
        elif choice == "2":
            print("执行选项二")
        elif choice == "3":
            print("再见！")
            break
        else:
            print("无效选择，请重试")

```

:::warning
**注意事项：**

-   无限循环会消耗系统资源，确保循环体内有适当的延迟或阻塞操作
-   在生产环境中，总是提供优雅的退出机制
-   使用 `try-except` 处理可能的异常，避免程序意外崩溃
    :::

## for 循环（遍历结构）

### 📌 基本语法：

```python
for 变量 in 可迭代对象:
    循环体

```

可迭代对象包括：字符串、列表、元组、字典、集合、range 等。

### 📌 示例：

```python
for i in range(5):
    print(i)

```

```python
for char in "hello":
    print(char)

```

---

## for 和 while 循环的互相转化

### 📌 转化的基本原理

`for` 循环和 `while` 循环在本质上都是重复执行代码块，因此它们可以互相转化。理解这种转化有助于：

-   更深入理解循环的工作原理
-   根据具体场景选择更合适的循环类型
-   解决复杂的循环问题

### 📌 for 循环转化为 while 循环

#### 基本模式：

```python
# for 循环的一般形式
for 变量 in 可迭代对象:
    循环体

# 等价的 while 循环形式
迭代器 = iter(可迭代对象)
while True:
    try:
        变量 = next(迭代器)
        循环体
    except StopIteration:
        break
```

#### 示例 1：遍历 range

```python
# for 循环版本
for i in range(5):
    print(i)

# 等价的 while 循环版本
i = 0
while i < 5:
    print(i)
    i += 1
```

#### 示例 2：遍历字符串

```python
# for 循环版本
for char in "hello":
    print(char)

# 等价的 while 循环版本
text = "hello"
index = 0
while index < len(text):
    char = text[index]
    print(char)
    index += 1
```

#### 示例 3：遍历列表

```python
# for 循环版本
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num * 2)

# 等价的 while 循环版本
numbers = [1, 2, 3, 4, 5]
index = 0
while index < len(numbers):
    num = numbers[index]
    print(num * 2)
    index += 1
```

### 📌 while 循环转化为 for 循环

#### 示例 1：计数循环

```python
# while 循环版本
count = 0
while count < 10:
    print(f"计数: {count}")
    count += 1

# 等价的 for 循环版本
for count in range(10):
    print(f"计数: {count}")
```

#### 示例 2：累加计算

```python
# while 循环版本
i = 1
total = 0
while i <= 100:
    total += i
    i += 1
print(total)

# 等价的 for 循环版本
total = 0
for i in range(1, 101):
    total += i
print(total)
```

#### 示例 3：条件循环（需要特殊处理）

```python
# while 循环版本（用户输入）
user_input = ""
while user_input != "quit":
    user_input = input("请输入命令 (输入 'quit' 退出): ")
    if user_input != "quit":
        print(f"你输入了: {user_input}")

# for 循环版本（使用 iter 和 lambda）
for user_input in iter(lambda: input("请输入命令 (输入 'quit' 退出): "), "quit"):
    print(f"你输入了: {user_input}")
```

### 📌 转化的注意事项

#### 1. 索引访问 vs 直接访问

```python
# for 循环：直接访问元素
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# while 循环：通过索引访问
fruits = ["apple", "banana", "orange"]
i = 0
while i < len(fruits):
    fruit = fruits[i]
    print(fruit)
    i += 1
```

#### 2. 需要索引时的处理

```python
# 使用 enumerate 的 for 循环
fruits = ["apple", "banana", "orange"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# 等价的 while 循环
fruits = ["apple", "banana", "orange"]
index = 0
while index < len(fruits):
    fruit = fruits[index]
    print(f"{index}: {fruit}")
    index += 1
```

#### 3. 步长控制

```python
# for 循环：使用 range 的步长
for i in range(0, 10, 2):  # 步长为 2
    print(i)

# 等价的 while 循环
i = 0
while i < 10:
    print(i)
    i += 2  # 步长为 2
```

### 📌 何时选择哪种循环？

| 场景                 | 推荐循环类型        | 原因                       |
| -------------------- | ------------------- | -------------------------- |
| 遍历已知的可迭代对象 | `for`               | 代码更简洁，不易出错       |
| 需要索引的遍历       | `for` + `enumerate` | 同时获得索引和值           |
| 条件不确定的重复     | `while`             | 更灵活的条件控制           |
| 需要复杂的循环控制   | `while`             | 可以精确控制循环变量的变化 |
| 无限循环             | `while`             | `while True` 更直观        |
| 固定次数的重复       | `for`               | `range()` 使意图更清晰     |

### 📌 实际应用示例

#### 查找元素的位置

```python
# for 循环版本
numbers = [10, 20, 30, 40, 50]
target = 30
found_index = -1

for index, num in enumerate(numbers):
    if num == target:
        found_index = index
        break

print(f"元素 {target} 在索引 {found_index}")

# while 循环版本
numbers = [10, 20, 30, 40, 50]
target = 30
index = 0
found_index = -1

while index < len(numbers):
    if numbers[index] == target:
        found_index = index
        break
    index += 1

print(f"元素 {target} 在索引 {found_index}")
```

#### 处理嵌套结构

```python
# for 循环版本
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in matrix:
    for element in row:
        print(element, end=" ")
    print()

# while 循环版本
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
row_index = 0
while row_index < len(matrix):
    col_index = 0
    while col_index < len(matrix[row_index]):
        print(matrix[row_index][col_index], end=" ")
        col_index += 1
    print()
    row_index += 1
```

:::tip
**选择建议：**

-   当你知道要遍历什么时，优先使用 `for` 循环
-   当循环条件复杂或不确定时，使用 `while` 循环
-   理解两者的转化关系有助于调试和优化代码
    :::

:::info
**性能考虑：**

-   `for` 循环通常比等价的 `while` 循环稍快
-   `for` 循环的代码更简洁，可读性更好
-   `while` 循环提供更大的灵活性
    :::

---

## 4.4 break, continue, pass

| 关键字     | 作用                             |
| ---------- | -------------------------------- |
| `break`    | 立即终止整个循环                 |
| `continue` | 跳过当前这次循环，继续下一次迭代 |
| `pass`     | 占位语句，不执行任何操作         |

### 📌 示例：

```python
for i in range(5):
    if i == 3:
        break
    print(i)

```

```python
for i in range(5):
    if i % 2 == 0:
        continue
    print(i)  # 只打印奇数

```

```python
if True:
    pass  # 占位，不报错

```

---

## 📚 小节小结

| 控制结构           | 功能                      |
| ------------------ | ------------------------- |
| `if / elif / else` | 条件判断                  |
| `while`            | 条件循环                  |
| `for`              | 遍历可迭代对象            |
| 无限循环           | 永不停止的循环结构        |
| 循环转化           | `for` 和 `while` 互相转换 |
| `break`            | 终止整个循环              |
| `continue`         | 跳过本次，继续循环        |
| `pass`             | 占位，无操作              |
