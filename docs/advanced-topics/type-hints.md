---
title: Python类型提示详解
description: 全面介绍Python类型提示系统，包括基本类型标注、容器类型、特殊类型、类型别名、泛型等高级特性，帮助开发者编写更健壮的代码。
keywords: [Python类型提示, 类型标注, 类型检查, 泛型编程, 静态类型]
sidebar_position: 2
---

# 类型提示（Type Hint）

## 类型提示的基本概念

**类型提示（Type Hint）** 是 Python 从 3.5 开始引入的一种静态类型标注方法。

> ✅ **它本身不会影响程序的运行时行为**，即 Python 解释器默认不会强制执行类型检查。

## 基本类型提示语法

### 📌 变量的类型提示：

```python
name: str = "Alice"
age: int = 20
pi: float = 3.14
is_active: bool = True
```

### 📌 函数参数和返回值的提示：

```python
def greet(name: str) -> str:
    return "Hello, " + name
```

### 📌 没有返回值的函数 (`None`)

如果函数不返回任何值（或者显式返回 `None`），使用 `-> None`:

```python
def print_message(message: str) -> None:
    print(message)
```

## 常见基础类型

| 类型    | 含义     | 示例           |
| ------- | -------- | -------------- |
| `int`   | 整数类型 | `x: int`       |
| `float` | 浮点数   | `y: float`     |
| `bool`  | 布尔值   | `flag: bool`   |
| `str`   | 字符串   | `name: str`    |
| `bytes` | 字节串   | `data: bytes`  |
| `None`  | 空值     | `result: None` |

这些基础类型**在所有 Python 版本**中都可以直接使用，无需导入。

## 容器类型与集合类型

Python 标准库中的容器类型可以用于类型提示：

### 📌 列表（List）

```python
scores: list[int] = [90, 85, 78]
names: list[str] = ["Alice", "Bob"]
matrix: list[list[int]] = [[1, 2], [3, 4]]
```

### 📌 字典（Dict）

指定键和值的类型：

```python
user_ages: dict[str, int] = {
    "Alice": 20,
    "Bob": 21
}

```

### 📌 元组（Tuple）

-   **固定长度和类型**
-   **任意长度同类型**（使用省略号`...`）

```python
point: tuple[int, int] = (3, 4)  # 固定长度和类型
rgb: tuple[int, int, int] = (255, 128, 0)
numbers: tuple[int, ...] = (1, 2, 3, 4, 5)  # 任意数量的整数
```

### 📌 `Callable` — 可调用对象

用于函数或可调用对象的类型提示。

```python
from typing import Callable

# 第一个列表表示参数类型，最后一个类型表示返回值类型
def apply(func: Callable[[int, int], int], x: int, y: int) -> int:
    return func(x, y)

def add(a: int, b: int) -> int:
    return a + b

result = apply(add, 5, 3)  # 8
```

## 类型别名（Type Alias）

为复杂类型定义简短的别名，适用于所有 Python 版本。

```python
Vector = list[float]
Point = tuple[float, float]
```

## `Literal`类型 — 字面量类型

限制变量只能取特定的字面值（Python 3.8+）。

```python
from typing import Literal

def align_text(alignment: Literal["left", "center", "right"]) -> None:
    print(f"Text aligned to {alignment}")

align_text("left")    # 正确
align_text("center")  # 正确
# align_text("top")  # 类型错误：不在允许值范围内
```

## 类型注解的作用域和转发引用

当需要引用尚未完全定义的类型时，使用字符串形式：

```python
# 使用引号处理循环引用
class Node:
    def __init__(self, value: int):
        self.value = value
        self.next: 'Node' = None  # 引用Node自身

# Python 3.7+的更简洁方法
from __future__ import annotations

class TreeNode:
    def __init__(self, value: int):
        self.value = value
        self.left: TreeNode = None  # 无需引号
        self.right: TreeNode = None
```

## 📚 总结

| 用法       | Python 3.9+ 示例        | Python 3.5-3.8 示例     | 需要导入                    |
| ---------- | ----------------------- | ----------------------- | --------------------------- |
| 基础类型   | `x: int`                | `x: int`                | 无                          |
| 函数标注   | `def f(x: int) -> str:` | `def f(x: int) -> str:` | 无                          |
| 列表       | `list[str]`             | `List[str]`             | 3.9 前需`typing.List`       |
| 字典       | `dict[str, int]`        | `Dict[str, int]`        | 3.9 前需`typing.Dict`       |
| 元组       | `tuple[int, str]`       | `Tuple[int, str]`       | 3.9 前需`typing.Tuple`      |
| 可调用对象 | `Callable[[int], str]`  | `Callable[[int], str]`  | 所有版本需`typing.Callable` |
| 字面量     | `Literal["A", "B"]`     | `Literal["A", "B"]`     | 所有版本需`typing.Literal`  |
