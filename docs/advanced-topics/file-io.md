---
title: Python文件操作详解
description: 深入讲解Python文件读写操作，包括文件打开模式、上下文管理器、文件指针操作、二进制文件处理、JSON和CSV文件处理等核心内容。
keywords: [Python文件操作, 文件读写, 上下文管理器, 二进制文件, 文件处理]
sidebar_position: 1
---

# 文件读写（File I/O）

## 文件读写的基本概念

-   文件读写是指**将程序的数据保存到外部文件**或**从外部文件中读取数据**。

## 打开文件的基本语法

使用内置函数 `open()`：

```python
open(file, mode)
```

| 参数   | 说明                              |
| ------ | --------------------------------- |
| `file` | 文件名，包含路径（如 `data.txt`） |
| `mode` | 文件操作模式（见下方表格）        |

## 文件打开模式

| 模式  | 含义                               |
| ----- | ---------------------------------- |
| `'r'` | 只读模式，文件必须存在             |
| `'w'` | 写入模式，不存在则创建，存在则清空 |
| `'a'` | 追加模式，不存在则创建             |

## 推荐用法：`with` 上下文管理器

-   使用 `with` 打开文件，可以**自动关闭文件**，避免忘记关闭或资源泄露。
-   推荐作为标准实践。

```python
# 读取文件示例
with open('data.txt', 'r') as file:
    content = file.read()
    print(content)

# 写入文件示例
with open('output.txt', 'w') as file:
    file.write('Hello, Python!')
```

## 文件对象的常用方法

| 方法             | 功能描述                                 |
| ---------------- | ---------------------------------------- |
| `.read([size])`  | 一次性读取整个文件内容，可指定读取字节数 |
| `.readline()`    | 每次读取一行                             |
| `.readlines()`   | 读取所有行，返回一个列表                 |
| `.write(string)` | 向文件写入内容（字符串）                 |
| `.close()`       | 手动关闭文件（不推荐，建议用 `with`）    |

## CSV 文件处理

处理表格数据的常用格式：

```python
import csv

# 写入CSV文件
data = [['Name', 'Age'], ['Alice', 25], ['Bob', 30]]
with open('data.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerows(data)

# 读取CSV文件
with open('data.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
```

## 常见文件操作注意事项

-   打开文件后一定要关闭（或使用 `with` 自动处理）
-   写入模式 `w` 会**清空原有文件内容**
-   `read()`、`readlines()` 会将整个内容读入内存，不适合非常大的文件
-   写入操作只能用于**文本数据或转成字符串的内容**

```python
# 指定编码打开文件
with open('file.txt', 'r', encoding='utf-8') as f:
    content = f.read()
```

## 异常处理

文件操作常见的异常处理：

```python
try:
    with open('file.txt', 'r') as f:
        content = f.read()
except FileNotFoundError:
    print("文件不存在")
except PermissionError:
    print("没有权限访问文件")
except UnicodeDecodeError:
    print("文件编码问题")
```

## 📚 总结

| 内容     | 说明                                     |
| -------- | ---------------------------------------- |
| 文件打开 | 使用 `open(filename, mode)`              |
| 常见模式 | `'r'`, `'w'`, `'a'`                      |
| 推荐写法 | 使用 `with open(...) as f:` 自动管理资源 |
| 常用方法 | `.read()`, `.write()`, `.readlines()` 等 |
| 异常处理 | 处理 `FileNotFoundError` 等常见异常      |
| 注意事项 | 写模式清空文件、关闭文件、内存管理       |
