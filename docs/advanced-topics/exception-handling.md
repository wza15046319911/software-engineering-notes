---
title: Python异常处理详解
description: 深入讲解Python异常处理机制，包括try/except语法、异常类型、自定义异常、上下文管理器等核心内容，帮助开发者编写更健壮的程序。
keywords: [Python异常处理, try/except, 异常类型, 自定义异常, 错误处理]
sidebar_position: 3
---

# 异常处理（Exception Handling）

## 异常的基本概念

-   **异常（Exception）** 是程序运行时发生的错误。
-   如果没有处理，程序会**中断执行**并报错。
-   Python 使用 `try / except` 语法来**捕获并处理异常**，使程序更健壮。

## try / except 基本语法

```python
try:
    # 可能出错的代码
except 错误类型:
    # 错误发生时执行的代码
```

示例：

```python
try:
    number = int(input("请输入一个数字: "))
    result = 10 / number
    print(f"结果是: {result}")
except ValueError:
    print("输入的不是有效数字")
except ZeroDivisionError:
    print("不能除以零")
```

## else 与 finally 子句

-   `else`：当 try 代码块**没有异常时**执行
-   `finally`：**无论是否出错都执行**，常用于资源释放（如关闭文件）

```python
try:
    file = open("data.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("文件不存在")
else:
    print(f"文件内容: {content}")
finally:
    file.close() if 'file' in locals() else None
```

## 常见的内建异常类型

| 异常类型            | 出现原因                                    |
| ------------------- | ------------------------------------------- |
| `ValueError`        | 类型正确但值不合法（如 `int("abc")`）       |
| `TypeError`         | 类型不兼容（如 `"2" + 2`）                  |
| `ZeroDivisionError` | 除以零                                      |
| `IndexError`        | 索引越界（如 `a[10]` 而 `a` 只有 5 个元素） |
| `KeyError`          | 字典中找不到指定键                          |
| `FileNotFoundError` | 文件不存在                                  |
| `AttributeError`    | 对象没有这个属性                            |
| `RecursionError`    | 递归太深（Python 3.5+）                     |

## 捕获多个异常

可以按需捕获不同类型：

```python
try:
    # 可能出错的代码
except ValueError:
    # 处理ValueError
except ZeroDivisionError:
    # 处理ZeroDivisionError
```

也可以统一处理：

```python
try:
    # 可能出错的代码
except (ValueError, TypeError):
    # 同时处理ValueError和TypeError
```

## 获取异常信息

```python
try:
    # 可能出错的代码
except Exception as e:
    print(f"错误类型: {type(e).__name__}")
    print(f"错误信息: {e}")
    print(f"错误详情: {dir(e)}")  # 查看异常对象的所有属性
```

## 主动抛出异常：raise 语句

当检测到错误情况时，可以主动抛出异常：

```python
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为零")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(e)  # 输出: 除数不能为零
```

## 📚 总结

| 关键词       | 说明                                                          |
| ------------ | ------------------------------------------------------------- |
| try / except | 捕获并处理运行时错误                                          |
| else         | 只有当 try 不报错时执行                                       |
| finally      | 无论是否出错都会执行（如关闭文件）                            |
| as           | 将异常对象赋值给变量：`except ValueError as e`                |
| raise        | 主动抛出异常                                                  |
| 常见异常类型 | `ValueError`, `TypeError`, `ZeroDivisionError`, `KeyError` 等 |
