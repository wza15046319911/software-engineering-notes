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

# 处理浮点数比较的方法
import math
print(math.isclose(0.1 + 0.2, 0.3))  # True

# 或者使用小误差范围
print(abs((0.1 + 0.2) - 0.3) < 1e-10)  # True

# 使用Decimal模块处理精确十进制运算
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2') == Decimal('0.3'))  # True
```

### 📌 运算符优先级

| 优先级 | 运算符 | 说明 |
| --- | --- | --- |
| 1 | `()` | 括号优先 |
| 2 | `**` | 幂运算（从右向左结合） |
| 3 | `+x, -x` | 正负号（一元运算） |
| 4 | `*, /, //, %` | 乘、除、整除、取余 |
| 5 | `+, -` | 加减（二元运算） |
| 6 | `<, >, ==, !=, <=, >=` | 比较运算符 |
| 7 | `not` | 逻辑非 |
| 8 | `and` | 逻辑与 |
| 9 | `or` | 逻辑或 |

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
print("x" in "apple")         # False
print("key" in {"key": 1})    # True（字典检查键）
print(1 in {"key": 1})        # False（不检查值）
print((1, 2) in [(1, 2), 3])  # True（元组是列表成员）
```

### 📌 身份运算符：`is`

检查对象是否为同一引用（内存地址相同）：

```python
a = [1, 2]
b = [1, 2]
c = a

print(a == b)  # True（值相等）
print(a is b)  # False（不同对象）
print(a is c)  # True（同一对象）

# 易错点：整数与小整数缓存
x = 256
y = 256
print(x is y)  # True（Python缓存-5到256的小整数）

x = 257
y = 257
print(x is y)  # 通常为False（超出缓存范围）

# None的比较
print(None is None)     # True（使用is检查None）
print(None == None)     # True
print(None is not None) # False

# 空容器的比较
print([] == [])   # True（值相等）
print([] is [])   # False（不同对象）
print(() == ())   # True（空元组）
print(() is ())   # True（空元组是单例）
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
- 实现了`__bool__`或`__len__`方法且返回`False`或`0`的自定义类的实例

其他所有值都被视为`True`。

```python
# 检查不同值的布尔性质
values = [0, 0.0, "", [], {}, None, False, True, 1, "hello", [1, 2], {"a": 1}]
for val in values:
    print(f"{val!r:10} → {bool(val)}")

# 输出：
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

Python的逻辑运算符返回的是实际值，而不是布尔值：

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

## 位运算（Bitwise Operations）

Python还支持对整数进行位级操作：

| 运算符 | 含义 | 示例 |
| --- | --- | --- |
| `&` | 按位与 | `5 & 3 → 1` (0101 & 0011 = 0001) |
| `\|` | 按位或 | `5 \| 3 → 7` (0101 \| 0011 = 0111) |
| `^` | 按位异或 | `5 ^ 3 → 6` (0101 ^ 0011 = 0110) |
| `~` | 按位取反 | `~5 → -6` (在二进制补码表示中) |
| `<<` | 左移 | `5 << 1 → 10` (0101 → 1010) |
| `>>` | 右移 | `5 >> 1 → 2` (0101 → 0010) |

```python
a = 0b1100  # 二进制表示: 12
b = 0b1010  # 二进制表示: 10

print(f"按位与: {a & b} ({bin(a & b)})")   # 按位与: 8 (0b1000)
print(f"按位或: {a | b} ({bin(a | b)})")   # 按位或: 14 (0b1110)
print(f"按位异或: {a ^ b} ({bin(a ^ b)})") # 按位异或: 6 (0b110)
print(f"左移1位: {a << 1} ({bin(a << 1)})") # 左移1位: 24 (0b11000)
```

## 📚 综合应用

### 📌 运算符在条件表达式中的应用

```python
# 条件表达式（三元运算符）
age = 20
status = "成年" if age >= 18 else "未成年"
print(status)  # 成年

# 带有多重条件的三元运算符
score = 85
grade = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "D"
print(grade)  # B
```

### 📌 运算符在复杂数据处理中的应用

```python
# 过滤列表中的偶数
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [num for num in numbers if num % 2 == 0]
print(evens)  # [2, 4, 6, 8, 10]

# 使用位运算检查整数的奇偶性（更高效）
evens_bitwise = [num for num in numbers if (num & 1) == 0]
print(evens_bitwise)  # [2, 4, 6, 8, 10]

# 对列表元素进行转换
doubled = [num * 2 for num in numbers]
print(doubled)  # [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

# 结合多种运算符的列表推导
result = [f"{num}:{'偶数' if num % 2 == 0 else '奇数'}" for num in numbers if num > 5]
print(result)  # ['6:偶数', '7:奇数', '8:偶数', '9:奇数', '10:偶数']
```

## 📝 重要概念总结

| 概念 | 关键点 |
| --- | --- |
| 运算符优先级 | 括号 > 幂运算 > 单目运算符 > 乘除 > 加减 > 比较 > not > and > or |
| 浮点数精度 | 浮点数计算可能有微小误差，使用`math.isclose`或`Decimal`处理 |
| 短路求值 | `and`和`or`只在必要时计算右侧表达式，避免潜在错误 |
| 链式比较 | `a < b < c`等价于`a < b and b < c`，但b仅计算一次 |
| 位运算 | 对整数的二进制位进行操作，高效处理特定问题 |

---