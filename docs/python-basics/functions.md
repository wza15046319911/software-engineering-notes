---
title: Python函数详解
description: 深入讲解Python函数的概念、定义与调用、参数传递、作用域、返回值等核心内容，包括高级特性如lambda表达式、函数式编程等，帮助初学者掌握Python函数编程。
keywords: [Python函数, 函数定义, 参数传递, 作用域, lambda表达式]
sidebar_position: 5
---

# 函数（Functions）

## 函数的基本概念

函数是将一段代码组织起来以供重复使用的结构。使用函数可以：

-   **提高代码复用性**
-   **让代码结构更清晰**
-   **避免重复编写相同逻辑**

## 定义与调用函数

### 📌 函数定义语法

```python
def 函数名(参数1, 参数2, ...):
    代码块
    return 返回值（可选）
```

### 📌 函数调用示例

```python
def greet(name):
    print("Hello,", name)

greet("Alice")  # 输出: Hello, Alice
```

## 函数的返回值

-   使用 `return` 语句返回结果
-   可以返回任意类型的数据（甚至多个值）
-   如果没有 `return` 语句，函数默认返回 `None`

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)  # 输出: 7

# 返回多个值
def get_person():
    return "Alice", 25, "Engineer"

name, age, job = get_person()
print(name, age, job)  # 输出: Alice 25 Engineer
```

## 函数参数

### 📌 普通参数

基本的参数传递方式，调用时必须提供:

```python
def say_hello(name):
    print("Hi", name)

say_hello("Bob")  # 输出: Hi Bob
```

### 📌 默认参数

为参数提供默认值，调用时可省略:

```python
def greet(name="Guest"):
    print("Hello,", name)

greet()          # 输出: Hello, Guest
greet("Emily")   # 输出: Hello, Emily
```

### 📌 关键字参数

调用时通过参数名指定值，可改变参数顺序:

```python
def describe_person(name, age, job):
    print(f"{name} is {age} years old and works as a {job}")

describe_person(age=30, job="Developer", name="John")
# 输出: John is 30 years old and works as a Developer
```

## 参数传递机制

Python 中的传参规则是:

> "对象的引用"传递（传递的是"地址的副本"）

-   **不可变对象（int, float, str, tuple）**：类似值传递
-   **可变对象（list, dict, set）**：类似引用传递，函数内修改会影响外部

### 📌 不可变对象示例

```python
def modify(x):
    x += 1
    print("Inside:", x)

a = 5
modify(a)        # 输出: Inside: 6
print("Outside:", a)  # 输出: Outside: 5（不变）
```

### 📌 可变对象示例

```python
def append_item(lst):
    lst.append(4)
    print("Inside:", lst)

my_list = [1, 2, 3]
append_item(my_list)   # 输出: Inside: [1, 2, 3, 4]
print("Outside:", my_list)  # 输出: Outside: [1, 2, 3, 4]（改变）
```

## 函数的作用域

-   **局部变量**：只在函数内部可见
-   **全局变量**：定义在函数外，整个文件中可用

```python
x = 10  # 全局变量

def show():
    x = 5  # 局部变量，与全局变量同名但不同
    print("Inside:", x)  # 输出: Inside: 5

show()
print("Outside:", x)  # 输出: Outside: 10
```

### 📌 使用 `global` 关键字

使用 `global` 关键字可以在函数内部修改全局变量:

```python
count = 0

def increment():
    global count
    count += 1
    print("Inside:", count)

increment()  # 输出: Inside: 1
print("Outside:", count)  # 输出: Outside: 1
```

## 匿名函数（lambda 表达式）

lambda 表达式创建简短的匿名函数:

```python
# 普通函数
def add(x, y):
    return x + y

# 等价的lambda表达式
add_lambda = lambda x, y: x + y

print(add(3, 4))        # 输出: 7
print(add_lambda(3, 4)) # 输出: 7

# 常用于排序和过滤
numbers = [5, 2, 8, 1, 9]
sorted_numbers = sorted(numbers, key=lambda x: -x)
print(sorted_numbers)  # 输出: [9, 8, 5, 2, 1]
```

## 📚 函数概念总结

| 概念     | 说明                                   |
| -------- | -------------------------------------- |
| 定义函数 | `def 函数名(参数):` + 缩进代码块       |
| 调用函数 | 通过 `函数名(参数)` 调用               |
| 返回值   | `return` 语句返回结果，可返回多个值    |
| 参数类型 | 普通参数、默认参数、关键字参数         |
| 参数传递 | 不可变类型类似传值、可变类型类似传引用 |
| 作用域   | 局部变量与全局变量，`global`           |
| lambda   | 匿名函数，用于简单函数表达式           |
