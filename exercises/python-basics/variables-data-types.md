---
sidebar_position: 1
title: 变量与数据类型练习
---

# 变量与数据类型练习

以下是关于Python变量和数据类型的练习题，帮助你巩固基本概念并提升编程能力。

## 练习1：变量定义与类型转换

**题目描述**：创建不同类型的变量并进行类型转换。

```python
# 1. 创建一个整数变量和一个浮点数变量
# 2. 创建一个字符串变量，其值为一个数字
# 3. 将字符串变量转换为整数
# 4. 将整数变量转换为浮点数
# 5. 打印所有变量及其类型
```

**参考解答**：

```python
# 创建变量
num_int = 10
num_float = 3.14
num_str = "20"

# 类型转换
converted_int = int(num_str)     # 将字符串转换为整数
converted_float = float(num_int) # 将整数转换为浮点数

# 打印结果
print(f"整数变量: {num_int}, 类型: {type(num_int)}")
print(f"浮点数变量: {num_float}, 类型: {type(num_float)}")
print(f"字符串变量: {num_str}, 类型: {type(num_str)}")
print(f"转换后的整数: {converted_int}, 类型: {type(converted_int)}")
print(f"转换后的浮点数: {converted_float}, 类型: {type(converted_float)}")
```

**输出**：
```
整数变量: 10, 类型: <class 'int'>
浮点数变量: 3.14, 类型: <class 'float'>
字符串变量: 20, 类型: <class 'str'>
转换后的整数: 20, 类型: <class 'int'>
转换后的浮点数: 10.0, 类型: <class 'float'>
```

## 练习2：变量交换

**题目描述**：编写代码交换两个变量的值，分别使用临时变量和不使用临时变量两种方法。

**参考解答**：

方法1：使用临时变量
```python
# 初始化变量
a = 5
b = 10

print(f"交换前: a = {a}, b = {b}")

# 使用临时变量交换
temp = a
a = b
b = temp

print(f"交换后: a = {a}, b = {b}")
```

方法2：不使用临时变量（Python特有方法）
```python
# 重置变量
a = 5
b = 10

print(f"交换前: a = {a}, b = {b}")

# 不使用临时变量
a, b = b, a

print(f"交换后: a = {a}, b = {b}")
```

**输出**：
```
交换前: a = 5, b = 10
交换后: a = 10, b = 5
```

## 练习3：数据类型操作

**题目描述**：创建不同的Python基本数据类型，并尝试对它们进行基本操作。

```python
# 创建以下数据类型的变量
# 1. 整数
# 2. 浮点数
# 3. 字符串
# 4. 布尔值
# 5. 列表
# 6. 元组
# 7. 字典
# 8. 集合

# 对每种类型执行适当的操作
```

**参考解答**：

```python
# 1. 整数
my_int = 42
print(f"整数: {my_int}, 加5: {my_int + 5}, 乘2: {my_int * 2}")

# 2. 浮点数
my_float = 3.14
print(f"浮点数: {my_float}, 平方: {my_float ** 2}, 除以2: {my_float / 2}")

# 3. 字符串
my_string = "Hello"
print(f"字符串: {my_string}, 重复: {my_string * 3}, 拼接: {my_string + ' World'}")

# 4. 布尔值
my_bool = True
print(f"布尔值: {my_bool}, 非: {not my_bool}, 与False: {my_bool and False}")

# 5. 列表
my_list = [1, 2, 3, 4, 5]
print(f"列表: {my_list}, 第一个元素: {my_list[0]}, 添加6后: {my_list + [6]}")

# 6. 元组
my_tuple = (10, 20, 30)
print(f"元组: {my_tuple}, 第二个元素: {my_tuple[1]}, 长度: {len(my_tuple)}")

# 7. 字典
my_dict = {"name": "张三", "age": 25}
print(f"字典: {my_dict}, 姓名: {my_dict['name']}, 年龄+5: {my_dict['age'] + 5}")

# 8. 集合
my_set = {1, 2, 3, 3, 4}  # 注意：重复元素会被去除
print(f"集合: {my_set}, 添加5后: {my_set.union({5})}, 与{1, 3, 5}的交集: {my_set.intersection({1, 3, 5})}")
```

## 练习4：常量使用

**题目描述**：创建一个模块级常量，并在计算中使用它。

**参考解答**：

```python
# 定义常量
PI = 3.14159
GRAVITY = 9.8
TAX_RATE = 0.1

# 使用常量进行计算
radius = 5
circle_area = PI * radius ** 2
print(f"圆的面积: {circle_area}")

mass = 10
weight = mass * GRAVITY
print(f"物体重量: {weight} 牛顿")

price = 100
tax = price * TAX_RATE
total_price = price + tax
print(f"商品价格: {price}，税额: {tax}，总价: {total_price}")
```

**输出**：
```
圆的面积: 78.53975
物体重量: 98.0 牛顿
商品价格: 100，税额: 10.0，总价: 110.0
```

## 练习5：多变量处理

**题目描述**：编写一个程序，从用户那里接收姓名、年龄和身高，然后以格式化的方式输出这些信息。

**参考解答**：

```python
# 获取用户输入
name = input("请输入您的姓名: ")
age_str = input("请输入您的年龄: ")
height_str = input("请输入您的身高(cm): ")

# 类型转换
age = int(age_str)
height = float(height_str)

# 格式化输出
print(f"\n个人信息摘要:")
print(f"姓名: {name}")
print(f"年龄: {age}岁")
print(f"身高: {height}cm")

# 附加信息
if age < 18:
    print("您还未成年")
else:
    print("您已成年")
    
# 身高分类
if height < 160:
    height_category = "较矮"
elif height < 175:
    height_category = "中等"
else:
    height_category = "较高"
    
print(f"相对身高: {height_category}")
```

**注意**：这个程序需要用户输入，运行结果将取决于用户的输入。 