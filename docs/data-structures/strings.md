# 字符串（String）

## 字符串的基本概念

- 字符串是由一系列字符组成的序列，用**单引号** `' '` 或 **双引号** `" "` 包围。
- 字符串是**不可变（immutable）**类型，不能直接修改其内容。

```python
greeting = "Hello, world!"
```

## 字符串索引与切片

### 📌 索引

- 从 `0` 开始，负索引用于从末尾反向访问。

```python
s = "Python"
print(s[0])   # P
print(s[-1])  # n
```

### 📌 切片

- 使用 `start:end:step` 格式，不包含 `end`。

```python
print(s[1:4])    # yth
print(s[:3])     # Pyt
print(s[::-1])   # 反转字符串：nohtyP
```

## 字符串是不可变的

尝试修改会报错：

```python
s = "hello"
# s[0] = "H"  # ❌ 错误：字符串不可变
```

## 拼接与重复

### 📌 拼接 `+`：

```python
first = "Hello"
second = "World"
print(first + " " + second)  # Hello World
```

### 📌 重复 `*`：

```python
print("ha" * 3)  # hahaha
```

## 常用字符串方法（含示例）

| 方法 | 功能 | 示例 |
| --- | --- | --- |

### 🔹 `.lower()` — 转换为小写

```python
s = "HELLO"
print(s.lower())  # hello
```

### 🔹 `.upper()` — 转换为大写

```python
s = "hello"
print(s.upper())  # HELLO
```

### 🔹 `.strip()` — 去除首尾空格或指定字符

```python
s = "  hello  "
print(s.strip())  # "hello"
```

### 🔹 `.replace(old, new)` — 替换子串

```python
s = "I love apples"
print(s.replace("apples", "bananas"))  # I love bananas
```

### 🔹 `.split(delimiter)` — 拆分为列表

```python
s = "a,b,c"
print(s.split(","))  # ['a', 'b', 'c']
```

### 🔹 `.join(list)` — 将列表元素拼接成字符串

```python
words = ["Python", "is", "fun"]
print(" ".join(words))  # Python is fun
```

### 🔹 `.find(sub)` — 查找子串第一次出现的索引，找不到返回 -1

```python
s = "banana"
print(s.find("na"))  # 2
```

### 🔹 `.startswith(prefix)` / `.endswith(suffix)`

```python
print("hello".startswith("he"))  # True
print("hello".endswith("lo"))    # True
```

### 🔹 `.count(sub)` — 统计子串出现次数

```python
s = "banana"
print(s.count("a"))  # 3
```

## 遍历字符串

```python
text = "hello"
for ch in text:
    print(ch)
```

## 字符串与列表的互转

### 📌 字符串 → 列表

```python
s = "abc"
print(list(s))  # ['a', 'b', 'c']
```

### 📌 列表 → 字符串（用 `join()`）

```python
chars = ['a', 'b', 'c']
print("".join(chars))  # abc
```

## 📚 总结

| 内容 | 示例 |
| --- | --- |
| 索引与切片 | `s[0]`, `s[1:4]`, `s[::-1]` |
| 拼接与重复 | `"a" + "b"`, `"ha" * 3` |
| 字符串不可变 | 不能用 `s[0] = "H"` |
| 遍历 | `for c in string:` |
| 方法总结 | `.lower()`, `.split()`, `.join()`, `.replace()`, 等 |