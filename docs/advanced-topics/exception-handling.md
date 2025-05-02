---
title: Python异常处理详解
description: 深入讲解Python异常处理机制，包括try/except语法、异常类型、自定义异常、上下文管理器等核心内容，帮助开发者编写更健壮的程序。
keywords: [Python异常处理, try/except, 异常类型, 自定义异常, 错误处理]
sidebar_position: 3
---
# 异常处理（Exception Handling）

## 异常的基本概念

- **异常（Exception）** 是程序运行时发生的错误。
- 如果没有处理，程序会**中断执行**并报错。
- Python 使用 `try / except` 语法来**捕获并处理异常**，使程序更健壮。

## try / except 基本语法

```
try:
    # 可能出错的代码
except 错误类型:
    # 错误发生时执行的代码
```

示例：

```
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

- `else`：当 try 代码块**没有异常时**执行
- `finally`：**无论是否出错都执行**，常用于资源释放（如关闭文件）

```
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

## Python异常的层次结构

所有异常都继承自`BaseException`类，但通常我们处理的是`Exception`及其子类：

```
BaseException
 ├── SystemExit          # 由sys.exit()触发
 ├── KeyboardInterrupt   # 用户按下Ctrl+C
 ├── GeneratorExit       # 生成器关闭
 └── Exception           # 所有常规错误的基类
      ├── StopIteration  # 迭代器结束
      ├── ArithmeticError
      │    ├── FloatingPointError
      │    ├── OverflowError
      │    └── ZeroDivisionError
      ├── AssertionError  # assert语句失败
      ├── AttributeError  # 属性引用或赋值失败
      ├── ImportError     # 导入模块失败
      │    └── ModuleNotFoundError  # 找不到模块
      ├── LookupError     # 索引或键无效
      │    ├── IndexError # 序列中没有此索引
      │    └── KeyError   # 映射中没有此键
      ├── NameError       # 找不到局部或全局名称
      ├── SyntaxError     # 解析错误
      ├── TypeError       # 操作或函数应用于不适当类型
      ├── ValueError      # 值不适当
      └── ... 等等
```

## 常见的内建异常类型

| 异常类型 | 出现原因 |
| --- | --- |
| `ValueError` | 类型正确但值不合法（如 `int("abc")`） |
| `TypeError` | 类型不兼容（如 `"2" + 2`） |
| `ZeroDivisionError` | 除以零 |
| `IndexError` | 索引越界（如 `a[10]` 而 `a` 只有5个元素） |
| `KeyError` | 字典中找不到指定键 |
| `FileNotFoundError` | 文件不存在 |
| `IOError` | 输入/输出操作失败 |
| `AttributeError` | 对象没有这个属性 |
| `ImportError` | 导入模块失败 |
| `ModuleNotFoundError` | 找不到模块（Python 3.6+） |
| `RuntimeError` | 一般的运行时错误 |
| `MemoryError` | 内存不足 |
| `RecursionError` | 递归太深（Python 3.5+） |

## 捕获多个异常

可以按需捕获不同类型：

```
try:
    # 可能出错的代码
except ValueError:
    # 处理ValueError
except ZeroDivisionError:
    # 处理ZeroDivisionError
```

也可以统一处理：

```
try:
    # 可能出错的代码
except (ValueError, TypeError):
    # 同时处理ValueError和TypeError
```

## 获取异常信息

```
try:
    # 可能出错的代码
except Exception as e:
    print(f"错误类型: {type(e).__name__}")
    print(f"错误信息: {e}")
    print(f"错误详情: {dir(e)}")  # 查看异常对象的所有属性
```

## 主动抛出异常：raise语句

当检测到错误情况时，可以主动抛出异常：

```
def divide(a, b):
    if b == 0:
        raise ValueError("除数不能为零")
    return a / b

try:
    result = divide(10, 0)
except ValueError as e:
    print(e)  # 输出: 除数不能为零
```

## 异常链：保留原始异常信息

在Python 3中，可以在抛出新异常时保留原始异常的信息：

```
try:
    # 一些可能出错的代码
    int("abc")
except ValueError:
    # 抛出新异常，同时保留原始异常信息
    raise RuntimeError("处理数据时出错") from ValueError
```

使用`from None`可以抑制异常链：

```
try:
    int("abc")
except ValueError:
    # 抑制原始异常信息
    raise RuntimeError("处理数据时出错") from None
```

## 断言：assert语句

断言用于开发和调试过程中验证代码行为：

```
def calculate_average(numbers):
    # 确保传入的不是空列表
    assert len(numbers) > 0, "列表不能为空"
    return sum(numbers) / len(numbers)

try:
    avg = calculate_average([])
except AssertionError as e:
    print(e)  # 输出: 列表不能为空
```

> 注意：在生产环境中通常会禁用断言（使用`-O`参数运行Python）。不要在断言中包含必要的程序逻辑。

## 自定义异常

- 可以创建自己的异常类，继承自 `Exception`。
- 适合用于大型项目中定义特定错误逻辑。

```
class InsufficientFundsError(Exception):
    """余额不足异常"""
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        self.deficit = amount - balance
        message = f"余额不足。余额: {balance}, 需要: {amount}, 差额: {self.deficit}"
        super().__init__(message)

def withdraw(balance, amount):
    if balance < amount:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    new_balance = withdraw(100, 150)
except InsufficientFundsError as e:
    print(e)  # 输出详细的错误信息
    print(f"请再存入至少 {e.deficit} 元")
```

## 上下文管理器与异常处理

`with`语句创建的上下文管理器能优雅地处理异常和资源释放：

```
# 文件操作的传统方式
try:
    file = open("data.txt", "r")
    content = file.read()
finally:
    file.close()  # 即使出错也会执行

# 使用with语句（推荐）
with open("data.txt", "r") as file:
    content = file.read()
# 文件会自动关闭，即使发生异常
```

自定义上下文管理器：

```
from contextlib import contextmanager

@contextmanager
def file_manager(filename, mode):
    try:
        file = open(filename, mode)
        yield file
    finally:
        file.close()  # 总是会执行

with file_manager("data.txt", "r") as f:
    content = f.read()
```

## 异常处理最佳实践

1. **具体优先于抽象**：尽量捕获具体异常，而不是笼统的`Exception`
2. **只捕获预期的异常**：不要盲目捕获所有异常
3. **异常不用于控制流**：不要使用异常来处理正常的程序流程
4. **保持try块简短**：只包含可能引发异常的代码
5. **提供有用的错误信息**：自定义异常时包含足够的上下文信息
6. **优先使用内置异常类型**：适合时再创建自定义异常
7. **使用finally清理资源**：或更好的选择是使用`with`语句

## 📚 总结

| 关键词 | 说明 |
| --- | --- |
| try / except | 捕获并处理运行时错误 |
| else | 只有当 try 不报错时执行 |
| finally | 无论是否出错都会执行（如关闭文件） |
| as | 将异常对象赋值给变量：`except ValueError as e` |
| raise | 主动抛出异常 |
| assert | 断言语句，用于调试和验证 |
| 多异常处理 | 可以有多个 except 分支，分别处理不同错误类型 |
| 常见异常类型 | `ValueError`, `TypeError`, `ZeroDivisionError`, `KeyError` 等 |
| 自定义异常 | 继承`Exception`创建项目中的专属错误类型 |
| 上下文管理器 | 使用`with`语句自动处理资源释放和异常 |