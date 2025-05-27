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

| 模式  | 含义                                   |
| ----- | -------------------------------------- |
| `'r'` | 只读模式，文件必须存在                 |
| `'w'` | 写入模式，不存在则创建，存在则清空     |
| `'a'` | 追加模式，不存在则创建                 |
| `'x'` | 写入模式，文件不存在才创建，存在则报错 |
| `'b'` | 以二进制形式读写（与其它模式组合使用） |
| `'t'` | 以文本形式读写（默认）                 |
| `'+'` | 读写模式（如 `'r+'`, `'w+'`）          |

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

| 方法                      | 功能描述                                 |
| ------------------------- | ---------------------------------------- |
| `.read([size])`           | 一次性读取整个文件内容，可指定读取字节数 |
| `.readline()`             | 每次读取一行                             |
| `.readlines()`            | 读取所有行，返回一个列表                 |
| `.write(string)`          | 向文件写入内容（字符串）                 |
| `.writelines(lines)`      | 向文件写入多个字符串（列表形式）         |
| `.close()`                | 手动关闭文件（不推荐，建议用 `with`）    |
| `.flush()`                | 刷新缓冲区，强制写入数据                 |
| `.seek(offset[, whence])` | 移动文件指针位置                         |
| `.tell()`                 | 返回当前文件指针位置                     |

## 文件指针操作

文件指针表示当前读写位置，通过 `seek()` 方法可以控制：

```python
with open('file.txt', 'r') as f:
    # 移动到文件开头（默认）
    f.seek(0)

    # 移动到文件第10个字节
    f.seek(10)

    # 获取当前位置
    position = f.tell()

    # 相对当前位置移动
    f.seek(5, 1)  # 向后移动5个字节

    # 相对文件末尾移动
    f.seek(-10, 2)  # 从文件末尾向前10个字节
```

## 二进制文件处理

处理图片、音频等非文本文件时使用二进制模式：

```python
# 读取二进制文件
with open('image.jpg', 'rb') as f:
    binary_data = f.read()

# 写入二进制文件
with open('output.jpg', 'wb') as f:
    f.write(binary_data)
```

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
-   处理大文件时，应使用**逐行读取**或**分块读取**
-   注意文件编码问题，可通过`encoding`参数指定

```python
# 指定编码打开文件
with open('file.txt', 'r', encoding='utf-8') as f:
    content = f.read()

# 逐行处理大文件
with open('large_file.txt', 'r') as f:
    for line in f:  # 内存友好的迭代方式
        process_line(line)
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

| 内容       | 说明                                                |
| ---------- | --------------------------------------------------- |
| 文件打开   | 使用 `open(filename, mode)`                         |
| 常见模式   | `'r'`, `'w'`, `'a'`, `'x'`, `'b'`, `'t'`, `'+'`     |
| 推荐写法   | 使用 `with open(...) as f:` 自动管理资源            |
| 常用方法   | `.read()`, `.write()`, `.readlines()`, `.seek()` 等 |
| 二进制文件 | 使用 `'rb'`, `'wb'` 等模式处理                      |
| 异常处理   | 处理 `FileNotFoundError` 等常见异常                 |
| 注意事项   | 写模式清空文件、关闭文件、内存管理、文件编码        |
