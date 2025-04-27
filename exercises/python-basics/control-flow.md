---
sidebar_position: 3
title: 控制流练习
---

# 控制流练习

以下是关于Python控制流（条件语句和循环）的练习题，帮助你巩固这些概念并提升编程能力。

## 条件语句练习

### 练习1：成绩分级

**题目描述**：编写一个程序，根据输入的成绩给出相应的等级评价。

- 90-100: A级
- 80-89: B级
- 70-79: C级
- 60-69: D级
- 60以下: F级

**参考解答**：

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

print(f"分数: {score}, 等级: {grade}")
```

### 练习2：判断闰年

**题目描述**：编写一个程序，判断给定的年份是否为闰年。

闰年规则：
- 能被4整除但不能被100整除的年份，或者
- 能被400整除的年份

**参考解答**：

```python
year = 2024

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year}是闰年")
else:
    print(f"{year}不是闰年")
```

## 循环练习

### 练习3：求和计算

**题目描述**：使用for循环和while循环分别计算1到100的和。

**参考解答**：

使用for循环:
```python
sum_for = 0
for i in range(1, 101):
    sum_for += i
print(f"使用for循环计算1到100的和: {sum_for}")
```

使用while循环:
```python
sum_while = 0
i = 1
while i <= 100:
    sum_while += i
    i += 1
print(f"使用while循环计算1到100的和: {sum_while}")
```

### 练习4：九九乘法表

**题目描述**：使用嵌套循环打印出九九乘法表。

**参考解答**：

```python
# 打印九九乘法表
for i in range(1, 10):
    for j in range(1, i+1):
        # 格式化输出，使用制表符对齐
        print(f"{j} × {i} = {i*j}\t", end="")
    # 每一行结束后换行
    print()
```

### 练习5：猜数字游戏

**题目描述**：创建一个简单的猜数字游戏，计算机随机选择一个1到100之间的数字，用户有多次机会猜测这个数字。每次猜测后，计算机会提示"太大"、"太小"或"猜对了"。

**参考解答**：

```python
import random

# 生成1到100之间的随机数
target_number = random.randint(1, 100)
max_attempts = 7
attempts = 0

print("欢迎参加猜数字游戏！")
print(f"我已经想好了一个1到100之间的数字，你有{max_attempts}次机会猜测。")

while attempts < max_attempts:
    try:
        # 获取用户输入
        guess = int(input("请猜一个数字: "))
        attempts += 1
        
        # 判断猜测结果
        if guess < target_number:
            print(f"太小了！你还有{max_attempts - attempts}次机会。")
        elif guess > target_number:
            print(f"太大了！你还有{max_attempts - attempts}次机会。")
        else:
            print(f"恭喜你，猜对了！答案就是{target_number}。")
            print(f"你用了{attempts}次就猜到了。")
            break
            
        # 判断是否用完所有机会
        if attempts == max_attempts:
            print(f"很遗憾，你已用完所有{max_attempts}次机会。")
            print(f"正确答案是{target_number}。")
    
    except ValueError:
        print("请输入有效的数字！")
```

## 综合练习

### 练习6：质数检测

**题目描述**：编写一个程序，检测给定的数字是否为质数（只能被1和自身整除的数）。

**参考解答**：

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

### 练习7：斐波那契数列

**题目描述**：编写一个程序，生成斐波那契数列的前n个数字。斐波那契数列是一个数列，其中每个数字是前两个数字的和（第一个和第二个数字都是1）。

**参考解答**：

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
print(fib_numbers)
``` 