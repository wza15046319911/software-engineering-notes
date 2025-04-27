---
id: practice-answers
title: Python基础练习题答案
sidebar_position: 6
---

# Python基础练习题答案

## 选择题答案

1. C（array不是Python的基本数据类型，而是NumPy库中的类型）
2. D（Python中字符串可以用单引号、双引号或三引号表示）
3. B（bool(0)为False，其他选项都是True）
4. A（Python列表索引从0开始）
5. C（字符串不支持减法运算）
6. C（幂运算是右结合的，所以计算顺序是3 ** (2 ** 3) = 3 ** 8 = 6561）
7. C（不能将数字和字符串直接相加）
8. A（短路求值是一种优化技术，例如在`a and b`中，如果a为False，则不会计算b）
9. C（Python函数可以没有参数）
10. B（x和y引用同一个列表对象，修改y也会影响x）
11. B（`is`运算符用于检查两个变量是否引用同一个对象）
12. B（lambda表达式用于创建匿名函数）
13. D（char不是Python的容器类型，Python没有单独的char类型）
14. B（函数默认参数在定义时创建，多次调用会共享同一个默认参数对象）
15. B（`//`是整除运算符，执行向下取整的除法）
16. C（None是Python的关键字，表示空值）
17. A（使用global关键字可以在函数内修改全局变量）
18. B（切片[1:5:2]表示从索引1开始，到索引4结束，步长为2）
19. B（"py"是"python"的子串，所以结果为True）
20. D（tuple（元组）是不可变的数据类型）

## 填空题答案

1. `int()`
2. `try...except`
3. `append()`
4. `get()`
5. `value_if_true if condition else value_if_false`

## 变量与数据类型练习答案

### 练习1：变量定义与类型转换

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

### 练习2：变量交换

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

### 练习3：数据类型操作

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

## 运算符与表达式练习答案

### 练习4：算术运算符

```python
result1 = 15 + 7 * 3 - 4 / 2
result2 = (15 + 7) * 3 - 4 / 2
result3 = 15 + 7 * (3 - 4) / 2

print(f"result1 = {result1}")  # 输出: 33.0
print(f"result2 = {result2}")  # 输出: 64.0
print(f"result3 = {result3}")  # 输出: 11.5
```

### 练习5：表达式计算

1. `2 ** 3 ** 2` = `2 ** (3 ** 2)` = `2 ** 9` = `512`（幂运算是右结合的）
2. `4 ** 2 // 3 + 1` = `16 // 3 + 1` = `5 + 1` = `6`
3. `0.1 + 0.2 == 0.3` 的结果是 `False`（因为浮点数精度问题，0.1 + 0.2 ≈ 0.30000000000000004）
4. `"A" + "B" * 2` = `"A" + "BB"` = `"ABB"`
5. `(5 > 3) + (2 < 1) * 2` = `True + False * 2` = `1 + 0` = `1`

## 控制流练习答案

### 练习6：成绩分级

```python
score = 85

if score >= 90:
    grade = 'A'
elif score >= 80:
    grade = 'B'
elif score >= 70:
    grade = 'C'
elif score >= 60:
    grade = 'D'
else:
    grade = 'F'

print(f"分数: {score}, 等级: {grade}")  # 输出: 分数: 85, 等级: B
```

### 练习7：判断闰年

```python
year = 2024

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year}是闰年")  # 输出: 2024是闰年
else:
    print(f"{year}不是闰年")
```

### 练习8：循环计算

```python
# 使用for循环计算1到100的和
sum_for = 0
for i in range(1, 101):
    sum_for += i
print(f"使用for循环计算1到100的和: {sum_for}")  # 输出: 5050

# 使用while循环计算1到100的和
sum_while = 0
i = 1
while i <= 100:
    sum_while += i
    i += 1
print(f"使用while循环计算1到100的和: {sum_while}")  # 输出: 5050
```

### 练习9：九九乘法表

```python
# 打印九九乘法表
for i in range(1, 10):
    for j in range(1, i+1):
        # 格式化输出，使用制表符对齐
        print(f"{j} × {i} = {i*j}\t", end="")
    # 每一行结束后换行
    print()
```

### 练习10：质数检测

```python
def is_prime(num):
    # 特殊情况处理
    if num <= 1:
        return False
    if num <= 3:
        return True
    if num % 2 == 0 or num % 3 == 0:
        return False
    
    # 从5开始检查，步长为6
    i = 5
    while i * i <= num:
        if num % i == 0 or num % (i + 2) == 0:
            return False
        i += 6
        
    return True

# 测试函数
test_numbers = [2, 3, 17, 20, 97, 100]
for num in test_numbers:
    if is_prime(num):
        print(f"{num}是质数")
    else:
        print(f"{num}不是质数")
```

## 函数练习答案

### 练习11：基本函数定义与调用

```python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 7)
print(f"5 + 7 = {result}")  # 输出: 5 + 7 = 12
```

### 练习12：斐波那契数列

```python
def fibonacci(n):
    # 生成斐波那契数列的前n个数字
    fib_sequence = []
    
    if n <= 0:
        return []
    elif n == 1:
        return [1]
    
    # 首先添加前两个数字
    fib_sequence = [1, 1]
    
    # 生成剩余的数字
    for i in range(2, n):
        next_num = fib_sequence[i-1] + fib_sequence[i-2]
        fib_sequence.append(next_num)
    
    return fib_sequence

# 生成斐波那契数列的前10个数字
n = 10
fib_numbers = fibonacci(n)
print(f"斐波那契数列的前{n}个数字:")
print(fib_numbers)  # 输出: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
``` 