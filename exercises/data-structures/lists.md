---
sidebar_position: 1
title: 列表练习
---

# 列表练习

以下是关于Python列表的练习题，帮助你掌握列表的创建、访问、修改和高级操作。

## 基本操作练习

### 练习1：创建和访问列表

**题目描述**：创建一个包含5个不同水果名称的列表，然后通过索引访问列表中的元素。

**参考解答**：

```python
# 创建水果列表
fruits = ["苹果", "香蕉", "橙子", "草莓", "葡萄"]

# 访问列表元素
print(f"列表的第一个元素: {fruits[0]}")
print(f"列表的最后一个元素: {fruits[-1]}")
print(f"列表的第二到第四个元素: {fruits[1:4]}")
```

### 练习2：修改列表

**题目描述**：修改你的水果列表，替换一个水果，添加两种新水果，并删除一种水果。

**参考解答**：

```python
fruits = ["苹果", "香蕉", "橙子", "草莓", "葡萄"]
print(f"原始列表: {fruits}")

# 替换元素
fruits[1] = "芒果"
print(f"替换后: {fruits}")

# 添加元素
fruits.append("猕猴桃")
fruits.insert(2, "柠檬")
print(f"添加后: {fruits}")

# 删除元素
fruits.remove("草莓")
print(f"删除后: {fruits}")

# 使用del语句删除元素
del fruits[0]
print(f"使用del删除后: {fruits}")
```

## 列表操作练习

### 练习3：列表排序

**题目描述**：创建一个包含随机数的列表，使用不同的方法对其进行排序。

**参考解答**：

```python
import random

# 创建包含10个随机数的列表
numbers = [random.randint(1, 100) for _ in range(10)]
print(f"原始列表: {numbers}")

# 使用sort()方法排序（修改原列表）
sorted_numbers = numbers.copy()  # 创建副本以保留原列表
sorted_numbers.sort()
print(f"升序排序: {sorted_numbers}")

# 降序排序
sorted_numbers.sort(reverse=True)
print(f"降序排序: {sorted_numbers}")

# 使用sorted()函数排序（不修改原列表）
sorted_asc = sorted(numbers)
sorted_desc = sorted(numbers, reverse=True)
print(f"原始列表（未修改）: {numbers}")
print(f"使用sorted()升序排序: {sorted_asc}")
print(f"使用sorted()降序排序: {sorted_desc}")
```

### 练习4：列表推导式

**题目描述**：使用列表推导式创建以下列表：
1. 1到20之间的所有偶数
2. 1到10的所有数字的平方
3. 包含元音字母的单词列表

**参考解答**：

```python
# 1到20之间的所有偶数
even_numbers = [x for x in range(1, 21) if x % 2 == 0]
print(f"1到20之间的偶数: {even_numbers}")

# 1到10的所有数字的平方
squares = [x**2 for x in range(1, 11)]
print(f"1到10的平方: {squares}")

# 包含元音字母的单词
words = ["apple", "banana", "orange", "grape", "kiwi", "plum", "pear", "melon"]
vowels = "aeiou"
vowel_words = [word for word in words if any(vowel in word.lower() for vowel in vowels)]
print(f"包含元音字母的单词: {vowel_words}")
```

## 高级列表操作

### 练习5：列表切片和复制

**题目描述**：演示列表切片和不同的列表复制方法，并解释它们的区别。

**参考解答**：

```python
original = [1, 2, 3, [4, 5]]
print(f"原始列表: {original}")

# 切片复制（浅复制）
slice_copy = original[:]
print(f"切片复制: {slice_copy}")

# 使用list()函数复制（浅复制）
list_copy = list(original)
print(f"list()复制: {list_copy}")

# 使用copy()方法（浅复制）
method_copy = original.copy()
print(f"copy()方法复制: {method_copy}")

# 修改嵌套列表，观察浅复制的效果
original[3][0] = 99
print(f"修改原始列表后:")
print(f"原始列表: {original}")
print(f"切片复制: {slice_copy}")  # 嵌套列表也被修改
print(f"list()复制: {list_copy}")  # 嵌套列表也被修改
print(f"copy()方法复制: {method_copy}")  # 嵌套列表也被修改

# 使用深复制
import copy
deep_copy = copy.deepcopy(original)
original[3][1] = 88
print(f"\n深复制后，再次修改原始列表:")
print(f"原始列表: {original}")
print(f"深复制: {deep_copy}")  # 嵌套列表不受影响
```

### 练习6：列表的常用方法

**题目描述**：使用列表的常用方法，如`count()`, `index()`, `extend()`, `pop()`等。

**参考解答**：

```python
numbers = [1, 2, 3, 2, 4, 2, 5]
print(f"列表: {numbers}")

# count() - 计算元素出现的次数
count_2 = numbers.count(2)
print(f"2在列表中出现的次数: {count_2}")

# index() - 找出元素第一次出现的索引
index_4 = numbers.index(4)
print(f"4在列表中第一次出现的索引: {index_4}")

# extend() - 扩展列表
numbers.extend([6, 7, 8])
print(f"使用extend()扩展后: {numbers}")

# pop() - 移除并返回元素
popped = numbers.pop(2)  # 移除索引为2的元素
print(f"使用pop(2)移除的元素: {popped}")
print(f"移除后的列表: {numbers}")

# 默认情况下pop()移除最后一个元素
last = numbers.pop()
print(f"使用pop()移除的最后一个元素: {last}")
print(f"再次移除后的列表: {numbers}")
```

## 挑战题

### 练习7：矩阵转置

**题目描述**：编写一个函数，对给定的矩阵（二维列表）进行转置操作（行变列，列变行）。

**参考解答**：

```python
def transpose_matrix(matrix):
    # 检查是否是有效的矩阵
    if not matrix or not matrix[0]:
        return []
    
    # 获取矩阵的行数和列数
    rows = len(matrix)
    cols = len(matrix[0])
    
    # 创建转置后的矩阵（初始化为0）
    transposed = [[0 for _ in range(rows)] for _ in range(cols)]
    
    # 执行转置操作
    for i in range(rows):
        for j in range(cols):
            transposed[j][i] = matrix[i][j]
    
    return transposed

# 测试函数
original = [
    [1, 2, 3],
    [4, 5, 6]
]

transposed = transpose_matrix(original)
print("原始矩阵:")
for row in original:
    print(row)

print("\n转置后的矩阵:")
for row in transposed:
    print(row)
```

### 练习8：列表去重并保持原顺序

**题目描述**：编写一个函数，去除列表中的重复元素，但保持剩余元素的原始顺序。

**参考解答**：

```python
def remove_duplicates(items):
    seen = set()
    result = []
    
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    
    return result

# 测试函数
test_list = [1, 5, 2, 1, 9, 1, 5, 10]
print(f"原始列表: {test_list}")
no_duplicates = remove_duplicates(test_list)
print(f"去重后的列表: {no_duplicates}") 