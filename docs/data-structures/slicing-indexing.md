# 切片与索引（Slicing and Indexing）

## 索引的基本概念

- 索引是访问序列数据类型（如字符串、列表、元组）中**单个元素**的方式
- Python 索引从 **0 开始**
- 支持**负索引**（从末尾开始计数）：-1 表示最后一个元素

```python
items = ["apple", "banana", "cherry", "date"]
print(items[0])    # apple（第一个元素）
print(items[2])    # cherry（第三个元素）
print(items[-1])   # date（最后一个元素）
print(items[-2])   # cherry（倒数第二个元素）
```

## 切片的基本概念

- 切片用于访问序列的**子序列**（片段）
- 基本语法：`sequence[start:end:step]`
  - `start`：起始索引（包含）
  - `end`：结束索引（不包含）
  - `step`：步长（间隔）

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:5])     # [2, 3, 4]
print(numbers[1:8:2])   # [1, 3, 5, 7]
```

## 切片的特殊用法

### 📌 省略参数

- 省略 `start`：默认从索引 0 开始
- 省略 `end`：默认到序列末尾
- 省略 `step`：默认步长为 1

```python
data = [10, 20, 30, 40, 50]
print(data[:3])     # [10, 20, 30]（前3个元素）
print(data[2:])     # [30, 40, 50]（从索引2到末尾）
print(data[:])      # [10, 20, 30, 40, 50]（完整复制序列）
```

### 📌 负数索引切片

- 可以在切片中使用负索引

```python
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print(fruits[-3:])     # ["cherry", "date", "elderberry"]（最后3个元素）
print(fruits[-4:-1])   # ["banana", "cherry", "date"]（不包含最后一个元素）
```

### 📌 负数步长

- 使用负数步长可以**反向**切片
- 需要注意 `start` 和 `end` 的顺序变化

```python
nums = [0, 1, 2, 3, 4, 5]
print(nums[::-1])      # [5, 4, 3, 2, 1, 0]（完全反转）
print(nums[4:1:-1])    # [4, 3, 2]（从索引4到索引2）
print(nums[::-2])      # [5, 3, 1]（反向间隔为2）
```

### 📌 超出范围的索引

- 在**切片**中，超出范围的索引会被自动调整为有效边界
- 在**直接索引**中，超出范围会引发 `IndexError`

```python
letters = ["a", "b", "c"]
# print(letters[5])    # ❌ IndexError: list index out of range

# 但是切片不会出错：
print(letters[1:100])  # ["b", "c"]（自动调整为有效范围）
print(letters[-100:2]) # ["a", "b"]（自动调整为有效范围）
```

## 不同数据类型的切片操作

### 📌 字符串切片

```python
message = "Hello, Python!"
print(message[0:5])     # "Hello"
print(message[7:])      # "Python!"
print(message[::-1])    # "!nohtyP ,olleH"（反转字符串）
```

### 📌 列表切片

```python
colors = ["red", "green", "blue", "yellow", "purple"]
print(colors[1:4])      # ["green", "blue", "yellow"]
print(colors[::2])      # ["red", "blue", "purple"]（间隔为2）
```

### 📌 元组切片

```python
coords = (10, 20, 30, 40, 50)
print(coords[1:4])      # (20, 30, 40)
print(coords[:3])       # (10, 20, 30)
```

## 切片与赋值

### 📌 列表切片赋值

- 可以通过切片替换列表中的一部分元素

```python
numbers = [1, 2, 3, 4, 5]
numbers[1:4] = [20, 30]  # 将索引1到3的元素替换为 [20, 30]
print(numbers)           # [1, 20, 30, 5]

letters = ['a', 'b', 'c', 'd']
letters[1:3] = ['B', 'C', 'D', 'E']  # 可以替换为不同长度的序列
print(letters)           # ['a', 'B', 'C', 'D', 'E', 'd']
```

### 📌 切片删除元素

```python
data = [10, 20, 30, 40, 50]
data[1:3] = []  # 删除索引1到2的元素
print(data)     # [10, 40, 50]
```

### 📌 字符串不支持切片赋值

```python
text = "Python"
# text[0:2] = "Ja"  # ❌ TypeError: 'str' object does not support item assignment
```

## 切片的高级应用

### 📌 浅复制序列

```python
original = [1, 2, 3, 4]
copy = original[:]  # 创建列表的浅复制
copy.append(5)      # 修改副本不影响原列表
print(original)     # [1, 2, 3, 4]
print(copy)         # [1, 2, 3, 4, 5]
```

### 📌 清空列表

```python
items = [1, 2, 3, 4]
items[:] = []  # 清空列表
print(items)   # []
```

### 📌 切片对象（Python 3）

```python
letters = ["a", "b", "c", "d", "e", "f"]
s = slice(1, 5, 2)  # 创建切片对象
print(letters[s])   # ["b", "d"]
```

## 📚 总结

| 操作 | 语法 | 描述 | 示例 |
| --- | --- | --- | --- |
| 索引 | `seq[i]` | 访问单个元素 | `items[0]`, `items[-1]` |
| 基本切片 | `seq[start:end]` | 从start到end-1的子序列 | `items[1:4]` |
| 步长切片 | `seq[start:end:step]` | 按间隔获取子序列 | `items[::2]` |
| 省略参数 | `seq[:end]`, `seq[start:]` | 使用默认值切片 | `items[:3]`, `items[2:]` |
| 负索引切片 | `seq[-n:]`, `seq[:-n]` | 使用负数索引切片 | `items[-3:]` |
| 反向切片 | `seq[::-1]` | 反转序列 | `items[::-1]` | 