---
sidebar_position: 1
---

# 变量（Variables）

变量是 Python 编程中最基础也是最重要的概念之一。通过本章节，你将掌握 Python 中变量的定义、命名规则和最佳实践。

## 基本概念

- **变量**是用来存储数据值的"容器"
- 在 Python 中，变量在赋值时自动创建，无需声明类型
<!-- - Python是**动态类型语言**，即变量的数据类型可以随时改变 -->

```python
x = 10           # 整数类型
name = "Alice"   # 字符串类型
```

## 变量的定义与使用

### 📌 如何定义变量

- 使用<strong>等号(=)</strong>为变量赋值，左侧是变量名，右侧是值

```python
age = 20          # age是整数
print(type(age))  # 输出: <class 'int'>

age = "twenty"    # 现在age是字符串
print(type(age))  # 输出: <class 'str'>
```

### 📌 修改变量值

Python 中一个变量可以在程序执行期间指向不同类型的值，即变量的值可变：

- 可以直接对变量重新赋值：

```python
x = 5
x = x + 2  # 现在x的值是7
print(x)   # 输出: 7
```

- 也可以通过简化表达式修改：

```python
counter = 1
counter += 1  # 相当于counter = counter + 1
print(counter)  # 输出: 2

# 其他常见的简化表达式
counter -= 1    # 相当于counter = counter - 1
counter *= 2    # 相当于counter = counter * 2
counter /= 2    # 相当于counter = counter / 2
```

## 变量命名规则

### 📌 语法规范

变量名：

- **只能包含字母、数字和下划线**
- **不能以数字开头**
- **不能是 Python 保留关键字**（如`for`, `if`, `class`等）
> Python 中的所有保留关键字如下：

```python
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await',
 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except',
 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is',
 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try',
 'while', 'with', 'yield', 'match', 'case']
```

合法示例：

```python
student_name = "John"
score1 = 85
_private = "这也是合法的"
```

非法示例（将报错）：

```python
1score = 85       # 不能以数字开头
for = 10          # 不能使用关键字
user-name = "Tom" # 不能包含连字符
```

### 📌 语义规范（命名最佳实践）
语义规范即大家约定俗成，都会遵循的规范。违反该规范不会报错。
- 使用**小写字母加下划线**（snake_case）风格命名变量
- 避免使用`l`、`o`、`i`这样容易混淆的单字符
- 保持一致性，例如统一使用`user_name`不要时而用`username`


```python
# 不好的命名
n = 30
s = "Hello"

# 好的命名
max_attempts = 30
greeting_message = "Hello"
```
:::note
💡 **有意义的命名**会让代码更易读、易维护：
:::
## 常量（constant）

### 📌 常量的概念

- 常量（Constant）是指在程序运行过程中值不改变的变量
- Python**没有真正的常量机制**，但通过**命名习惯**来标识常量

### 📌 定义常量的方式

- 使用全大写命名常量，单词与单词之间使用**下划线**链接并置于代码开头或专门的模块中：

```python
PI = 3.14159
MAX_LOGIN_ATTEMPTS = 5
DATABASE_URL = "mongodb://localhost:27017"
```

### 📌 常量的意义

- 提高代码**可维护性**：集中管理固定值
- 避免"魔法数字"：提高代码**可读性**
- 有助于团队协作时**理解代码意图**

```python
# 不好的做法
discount = price * 0.2

# 好的做法
DISCOUNT_RATE = 0.2
discount = price * DISCOUNT_RATE
```

## 小结

| 内容     | 说明                         |
| -------- | ---------------------------- |
| 变量定义 | 用等号赋值，自动推断类型     |
| 修改变量 | 可重新赋值或使用表达式       |
| 命名规范 | 避免保留字，遵守语法规则     |
| 最佳实践 | 使用有意义命名，统一风格     |
| 常量     | 使用大写字母命名，值不应更改 |

如果想了解更详细的代码风格规范，请见附录：[代码风格](/docs/appendix/python-style-guide)