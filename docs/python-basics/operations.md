---
title: Python运算符与运算
description: 深入讲解Python中的数学运算、比较运算和逻辑运算，包括运算符优先级、短路求值、链式比较等高级特性，帮助初学者掌握Python运算基础。
keywords: [Python运算, 运算符, 数学运算, 逻辑运算, 比较运算]
sidebar_position: 2
---
# Python运算（Operations）

## 数学运算（Arithmetic Operations）

### 📌 基本运算符

| 运算符 | 含义 | 示例 |
| --- | --- | --- |
| `+` | 加法 | `3 + 2 → 5` |
| `-` | 减法 | `3 - 2 → 1` |
| `*` | 乘法 | `3 * 2 → 6` |
| `/` | 除法（浮点结果） | `5 / 2 → 2.5` |
| `//` | 整除（向下取整） | `5 // 2 → 2`，`-5 // 2 → -3` |
| `%` | 取余（模运算） | `5 % 2 → 1`，`-5 % 2 → 1` |
| `**` | 幂运算 | `2 ** 3 → 8`，`2 ** 0.5 → 1.4142...` |

### 📌 代码实例

```python
a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.3333...
print(a // b)  # 3（向下取整）
print(a % b)   # 1（余数）
print(a ** b)  # 1000（10的3次方）
```

### 📌 负数运算特点

```python
x = -5
y = 3
print(x + y)      # -2
print(-x)         # 5（负负得正）
print(-2 ** 2)    # -4（先幂运算再取负）
print((-2) ** 2)  # 4（先计算括号内容）
```

### 📌 浮点数运算的精度问题

浮点数在计算机中是以二进制分数表示的，一些十进制小数无法精确表示为二进制小数，导致计算结果可能出现微小误差：

```python
print(0.1 + 0.2)         # 0.30000000000000004
print(0.1 + 0.2 == 0.3)  # False
```

### 📌 运算符优先级

| 优先级 | 运算符 | 说明 |
| --- | --- | --- |
| 1 | `()` | 括号优先 |
| 2 | `**` | 幂运算（**从右向左**结合） |
| 3 | `+x, -x` | 正负号（一元运算） |
| 4 | `*, /, //, %` | 乘、除、整除、取余 |
| 5 | `+, -` | 加减（二元运算） |
| 6 | `<, >, ==, !=, <=, >=` | 比较运算符 |
| 7 | `not` | 逻辑非 |
| 8 | `and` | 逻辑与 |
| 9 | `or` | 逻辑或 |
在数学运算时，只要任何时刻出现浮点数，则结果一定为浮点数，除非人为将结果控制为其他类型。
### 📌 复杂表达式计算示例

```python
# 表达式1: 2 ** 3 ** 2
# 注意：幂运算是从右向左结合的
print(2 ** 3 ** 2)  # 2 ** (3 ** 2) = 2 ** 9 = 512

# 表达式2: 4 ** 2 // 3 + 1
# 先计算幂，再整除，最后加法
print(4 ** 2 // 3 + 1)  # (4 ** 2) // 3 + 1 = 16 // 3 + 1 = 5 + 1 = 6

# 表达式3: -1 - 4 ** 5 // (2 ** 3) - (-6)
# 按照运算符优先级计算
print(-1 - 4 ** 5 // (2 ** 3) - (-6))  # 复杂表达式的步骤分解
```

## 比较运算（Comparison Operations）

### 📌 基本比较运算符

| 运算符 | 含义 | 示例 |
| --- | --- | --- |
| `==` | 值相等 | `3 == 3 → True` |
| `!=` | 值不相等 | `4 != 5 → True` |
| `>` | 大于 | `5 > 3 → True` |
| `<` | 小于 | `2 < 1 → False` |
| `>=` | 大于等于 | `3 >= 3 → True` |
| `<=` | 小于等于 | `2 <= 3 → True` |

### 📌 特殊比较

```python
# 数值比较
print(7 == 7.0)       # True（值相等，类型自动转换）
print("5" == 5)       # False（不同类型，不相等）

# 字符串比较（按字典序/lexicographical order）
print("apple" < "banana")  # True
print("A" < "a")           # True（ASCII值：A=65, a=97）
print("10" < "2")          # True（字符串比较是逐字符的，'1'比'2'小）

# 容器比较
print([1, 2] == [1, 2])    # True（内容相等）
print((1, 2) != [1, 2])    # True（类型不同）

# 链式比较
x = 10
print(5 < x < 15)          # True（等价于5 < x and x < 15）
print(1 < 2 < 3 < 4)       # True
print(1 < 2 > 0 < 4)       # True（混合比较）
```

### 📌 成员运算符：`in`

检查元素是否存在于序列中：

```python
print(3 in [1, 2, 3])         # True
print("a" in "apple")         # True
print("ap" in "apple")        # True（in是片段匹配）
print("x" in "apple")         # False
print("key" in {"key": 1})    # True（字典检查键）
print(1 in {"key": 1})        # False（不检查值）
print((1, 2) in [(1, 2), 3])  # True（元组是列表成员）
```

### 📌 身份运算符：`is`

检查对象是否为同一引用（内存地址相同）：
:::warning
尽可能不要在代码中使用is（除非你清楚地知道你在干什么）
:::
```python
a = [1, 2]
b = [1, 2]
c = a

print(a == b)  # True（值相等）
print(a is b)  # False（不同对象）
print(a is c)  # True（同一对象）

# None的比较
print(None is None)     # True
print(None == None)     # True
print(None is not None) # False
```

## 逻辑运算（Logical Operations）

### 📌 基本逻辑运算符

| 运算符 | 含义 | 示例 |
| --- | --- | --- |
| `and` | 逻辑与 | `True and False → False` |
| `or` | 逻辑或 | `False or True → True` |
| `not` | 逻辑非 | `not True → False` |
### 📌 Python中的真假值

Python中，以下值被视为`False`：
- `False`, `None`, `0`, `0.0`, `0j`（零的复数形式）
- `""` (空字符串), `[]` (空列表), `()` (空元组), `{}` (空字典), `set()` (空集合)

其他所有值都被视为`True`。

```python
# 0          → False
# 0.0        → False
# ''         → False
# []         → False
# {}         → False
# None       → False
# False      → False
# True       → True
# 1          → True
# 'hello'    → True
# [1, 2]     → True
# {'a': 1}   → True
```

### 📌 短路求值

- `and`：若左操作数为假，立即返回左操作数（不计算右操作数）
- `or`：若左操作数为真，立即返回左操作数（不计算右操作数）

```python
# 短路求值避免错误
x = 0
print(x != 0 and 10/x)  # False（不会计算10/x，避免除零错误）

# 更复杂的短路示例
def expensive_function():
    print("执行了昂贵的计算")
    return True

result = False and expensive_function()  # 不会执行昂贵的函数
print(f"结果: {result}")  # 结果: False

result = True or expensive_function()    # 不会执行昂贵的函数
print(f"结果: {result}")  # 结果: True
```

### 📌 返回值规则

逻辑运算不只返回`True`或者`False`，而是返回第一个决定整体真假值的操作数本身

- `and`：返回第一个假值，若全为真则返回最后一个值
- `or`：返回第一个真值，若全为假则返回最后一个值

```python
print(5 and 10)         # 10（两个都为真，返回后者）
print(0 and "hello")    # 0（第一个为假，返回0）
print("" or "default")  # "default"（空字符串为假）
print([] and {})        # []（空列表为假）
print([] or {})         # {}（两个都为假，返回最后一个）
print("a" and "b" and "c")  # "c"（全为真，返回最后一个）
print("" or 0 or [])    # []（全为假，返回最后一个）
```

### 📌 逻辑运算的实用模式

```python
# 1. 使用or设置默认值
name = user_input or "Guest"  # 如果输入为空，使用"Guest"

# 2. 使用and进行条件执行
debug = True
debug and print("调试信息")  # 等同于 if debug: print("调试信息")

# 3. 使用多个or进行多值匹配
is_valid = (value == "A" or value == "B" or value == "C")

# 4. 嵌套逻辑
result = (a > b) and (c or d)

# 5. 使用not优化条件
if not (age < 18 or role != "admin"):
    # 相当于 if age >= 18 and role == "admin":
    print("成年管理员")
```

### 📌 复杂逻辑运算示例

```python
# 复杂条件组合
data = {"status": "active", "user": {"age": 25, "role": "admin"}}

# 检查用户是否为活跃的管理员且年龄满足条件
is_active_admin = (
    data.get("status") == "active" and 
    data.get("user") and 
    data.get("user").get("role") == "admin" and 
    data.get("user").get("age", 0) >= 21
)

print(f"活跃管理员? {is_active_admin}")  # 活跃管理员? True
```

## 📝 重要概念总结

| 概念 | 关键点 |
| --- | --- |
| 运算符优先级 | 括号 > 幂运算 > 单目运算符 > 乘除 > 加减 > 比较 > not > and > or |
| 短路求值 | `and`和`or`只在必要时计算右侧表达式，避免潜在错误 |
| 链式比较 | `a < b < c`等价于`a < b and b < c` |

---