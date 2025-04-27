# 类型提示（Type Hint）

## 类型提示的基本概念

**类型提示（Type Hint）** 是 Python 从 3.5 开始引入的一种静态类型标注方法。

> ✅ **它本身不会影响程序的运行时行为**，即 Python 解释器默认不会强制执行类型检查。
> ✅ **主要目的**是提高代码的可读性、可维护性，并允许使用静态类型检查工具（如 MyPy, Pyright）来发现潜在的类型错误。

## Python版本与类型提示语法差异

类型提示语法随Python版本演进：

- **Python 3.5-3.8**：需要从`typing`模块导入大多数容器类型（如`List`, `Dict`, `Tuple`等）
- **Python 3.9+**：可以直接使用内置类型（如`list`, `dict`, `tuple`等）作为类型提示
- **Python 3.10+**：引入`|`运算符作为`Union`的简写，如`str | int`代替`Union[str, int]`

本教案将同时展示两种语法，并标注适用的Python版本。

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

| 类型 | 含义 | 示例 |
| --- | --- | --- |
| `int` | 整数类型 | `x: int` |
| `float` | 浮点数 | `y: float` |
| `bool` | 布尔值 | `flag: bool` |
| `str` | 字符串 | `name: str` |
| `bytes` | 字节串 | `data: bytes` |
| `None` | 空值 | `result: None` |

这些基础类型**在所有Python版本**中都可以直接使用，无需导入。

## 容器类型与集合类型

Python标准库中的容器类型可以用于类型提示：

### 📌 列表（List）

```python
# Python 3.9+ 写法
scores: list[int] = [90, 85, 78]
names: list[str] = ["Alice", "Bob"]
matrix: list[list[int]] = [[1, 2], [3, 4]]

# Python 3.5-3.8 写法
from typing import List
scores_legacy: List[int] = [90, 85, 78]
matrix_legacy: List[List[int]] = [[1, 2], [3, 4]]
```

### 📌 字典（Dict）

指定键和值的类型：

```python
# Python 3.9+ 写法
user_ages: dict[str, int] = {
    "Alice": 20,
    "Bob": 21
}

# Python 3.5-3.8 写法
from typing import Dict
user_ages_legacy: Dict[str, int] = {
    "Alice": 20,
    "Bob": 21
}
```

### 📌 元组（Tuple）

- **固定长度和类型**
- **任意长度同类型**（使用省略号`...`）

```python
# Python 3.9+ 写法
point: tuple[int, int] = (3, 4)  # 固定长度和类型
rgb: tuple[int, int, int] = (255, 128, 0)
numbers: tuple[int, ...] = (1, 2, 3, 4, 5)  # 任意数量的整数

# Python 3.5-3.8 写法
from typing import Tuple
point_legacy: Tuple[int, int] = (3, 4)
numbers_legacy: Tuple[int, ...] = (1, 2, 3, 4, 5)
```

### 📌 集合（Set）

```python
# Python 3.9+ 写法
unique_ids: set[int] = {101, 102, 103}

# Python 3.5-3.8 写法
from typing import Set
unique_ids_legacy: Set[int] = {101, 102, 103}
```

## 特殊的集合类型（需导入`typing`模块）

某些特殊的集合类型需要从`typing`模块导入，在所有Python版本中都适用：

### 📌 序列（Sequence）

`Sequence`是一个抽象类型，表示任何支持索引和长度的序列（如列表、元组、字符串等）。

```python
from typing import Sequence

def print_first_item(seq: Sequence[int]) -> None:
    """接受任何包含整数的序列类型"""
    if len(seq) > 0:
        print(seq[0])

# 可以传入列表、元组等
print_first_item([1, 2, 3])  # 列表
print_first_item((4, 5, 6))  # 元组
```

### 📌 可迭代对象（Iterable）

```python
from typing import Iterable

def process_items(items: Iterable[str]) -> None:
    """处理任何可迭代的字符串集合"""
    for item in items:
        print(item.upper())

# 可以传入任何可迭代的字符串集合
process_items(["a", "b"])  # 列表
process_items(("c", "d"))  # 元组
process_items({"e", "f"})  # 集合
```

## 高级类型提示（`typing`模块）

以下类型在所有Python版本中都需要从`typing`模块导入：

### 📌 `Optional[T]` — 可选类型

表示一个值可以是类型`T`或`None`。

```python
from typing import Optional

def find_user(user_id: int) -> Optional[dict[str, str]]:  # Python 3.9+
    if user_id == 1:
        return {"name": "Alice"}
    return None
```

### 📌 Union类型 — 联合类型

表示一个值可以是多种指定类型中的一种。

```python
# Python 3.10+ 写法（使用 | 运算符）
def process_data(data: str | int) -> str:
    if isinstance(data, int):
        return f"整数: {data}"
    return f"字符串: {data}"

# Python 3.5-3.9 写法
from typing import Union
def process_data_legacy(data: Union[str, int]) -> str:
    if isinstance(data, int):
        return f"整数: {data}"
    return f"字符串: {data}"
```

### 📌 `Any` — 任意类型

表示完全动态的类型，可以是任何类型。

```python
from typing import Any

def process_anything(item: Any) -> None:
    print(item)
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

为复杂类型定义简短的别名，适用于所有Python版本。

```python
# Python 3.9+
Vector = list[float]
Point = tuple[float, float]

# Python 3.5-3.8
from typing import List, Tuple
Vector_legacy = List[float]
Point_legacy = Tuple[float, float]

def scale(vector: Vector, factor: float) -> Vector:
    return [x * factor for x in vector]
```

## 泛型与`TypeVar`

`TypeVar`用于创建泛型函数或类。

```python
from typing import TypeVar, Sequence

T = TypeVar('T')  # 定义类型变量T

def first(items: Sequence[T]) -> T:
    """返回序列的第一个元素，保留原始类型"""
    return items[0]

# 类型检查器知道返回类型与输入序列元素类型相同
num: int = first([1, 2, 3])
char: str = first("abc")
```

## `Literal`类型 — 字面量类型

限制变量只能取特定的字面值（Python 3.8+）。

```python
from typing import Literal

def align_text(alignment: Literal["left", "center", "right"]) -> None:
    print(f"Text aligned to {alignment}")

# 类型检查器只接受特定字面值
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

## `typing`模块中的常用集合类型

- `Dict`, `List`, `Set`, `FrozenSet`, `Tuple` - 常见容器类型（Python 3.9前需导入）
- `Sequence` - 任何支持索引和长度的序列类型（列表、元组、字符串等）
- `Mapping` - 任何类似字典的类型
- `Iterable` - 任何可迭代类型
- `Collection` - 任何集合类型（可迭代、可计数、可包含）

## 类型提示的最佳实践

1. **保持简洁**：只在必要时添加类型提示，不必为每个变量都添加
2. **优先使用内置类型**（Python 3.9+）
3. **使用类型检查工具**：如 MyPy、Pyright 或 IDE 内置工具
4. **添加文档字符串**：类型提示配合文档字符串效果更佳
5. **不要滥用 `Any`**：尽量使用更具体的类型
6. **考虑兼容性**：如果代码需兼容多个Python版本，注意语法差异

## 📚 总结

| 用法 | Python 3.9+ 示例 | Python 3.5-3.8 示例 | 需要导入 |
| --- | --- | --- | --- |
| 基础类型 | `x: int` | `x: int` | 无 |
| 函数标注 | `def f(x: int) -> str:` | `def f(x: int) -> str:` | 无 |
| 列表 | `list[str]` | `List[str]` | 3.9前需`typing.List` |
| 字典 | `dict[str, int]` | `Dict[str, int]` | 3.9前需`typing.Dict` |
| 元组 | `tuple[int, str]` | `Tuple[int, str]` | 3.9前需`typing.Tuple` |
| 集合 | `set[int]` | `Set[int]` | 3.9前需`typing.Set` |
| 联合类型 | `int \| str` (3.10+) | `Union[int, str]` | 3.10前需`typing.Union` |
| 可选类型 | `int \| None` (3.10+) | `Optional[int]` | 3.10前需`typing.Optional` |
| 任意类型 | `Any` | `Any` | 所有版本需`typing.Any` |
| 可调用对象 | `Callable[[int], str]` | `Callable[[int], str]` | 所有版本需`typing.Callable` |
| 类型别名 | `Vector = list[float]` | `Vector = List[float]` | 无（但定义可能需要） |
| 泛型变量 | `T = TypeVar('T')` | `T = TypeVar('T')` | 所有版本需`typing.TypeVar` |
| 字面量 | `Literal["A", "B"]` | `Literal["A", "B"]` | 所有版本需`typing.Literal` |


### 📌 题目 1

给下面的变量加上正确的类型提示：

```python
# 补充类型提示
name = "Alice"
age = 25
pi = 3.1415
is_active = True
```
<details> 
<summary>点击展开参考答案</summary>
```python
name: str = "Alice"
age: int = 25
pi: float = 3.1415
is_active: bool = True
```
</details> 