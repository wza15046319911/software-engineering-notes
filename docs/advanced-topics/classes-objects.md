---
title: Python面向对象编程详解
description: 全面介绍Python面向对象编程的核心概念，包括类与对象、继承与多态、封装、魔术方法、属性装饰器等高级特性，帮助开发者掌握面向对象编程范式。
keywords: [Python面向对象, 类与对象, 继承多态, 封装, 魔术方法]
sidebar_position: 4
---

# 类与对象（Classes and Objects）

## 类与对象的基本概念

-   **类（Class）** 是**对象的蓝图**，定义了对象应具备的属性和行为。
-   **对象（Object）** 是根据类创建的实例，是具体存在的实体。

面向对象三大核心概念：

-   **封装（Encapsulation）**：将数据和方法包装在一起，控制对内部数据的访问
-   **继承（Inheritance）**：子类可以继承父类的属性和方法，实现代码重用
-   **多态（Polymorphism）**：同一操作可以作用于不同类型的对象，产生不同的行为

## 定义类与创建对象

### 定义类的基本语法：

```python
class 类名:
    属性定义
    方法定义
```

### 创建对象：

```python
obj = 类名()
```

### 完整示例：

```python
class Dog:
    # 类变量（所有实例共享）
    species = "Canis familiaris"

    # 构造方法
    def __init__(self, name, age):
        # 实例变量（每个实例独有）
        self.name = name
        self.age = age

    # 实例方法
    def bark(self):
        return f"{self.name}正在汪汪叫！"

# 创建Dog类的实例
dog1 = Dog("旺财", 3)
dog2 = Dog("来福", 2)

# 访问实例变量
print(dog1.name)  # 输出: 旺财

# 调用实例方法
print(dog1.bark())  # 输出: 旺财正在汪汪叫！

# 访问类变量
print(dog1.species)  # 输出: Canis familiaris
print(Dog.species)   # 输出: Canis familiaris
```

## 构造方法 `__init__`

-   在创建对象时自动调用
-   用于初始化对象的属性
-   第一个参数必须是`self`，表示实例本身

```python
def __init__(self, 参数):
    self.属性名 = 参数值
```

## 实例变量与实例方法

### 实例变量

-   每个对象独有的数据，通过 `self.变量名` 定义和访问
-   在`__init__`方法或其他实例方法中定义
-   使用`对象名.变量名`访问

### 实例方法

-   定义在类中、操作实例数据的函数
-   第一个参数必须是`self`，表示调用该方法的实例
-   通过`对象名.方法名()`调用

```python
class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def get_grade(self):
        if self.score >= 90:
            return 'A'
        elif self.score >= 80:
            return 'B'
        else:
            return 'C'

student = Student("小明", 85)
print(student.get_grade())  # 输出: B
```

## 封装与私有变量

在 Python 中使用约定俗成的下划线前缀表示变量的访问限制：

-   `_变量名`：单下划线前缀表示"受保护"的变量（约定不直接访问）
-   `__变量名`：双下划线前缀表示"私有"变量（Python 会进行名称改写）

```python
class Account:
    def __init__(self, owner, balance):
        self.owner = owner         # 公开变量
        self._account_type = "储蓄" # 受保护变量
        self.__balance = balance   # 私有变量

    def deposit(self, amount):
        self.__balance += amount
        return self.__balance

    def withdraw(self, amount):
        if amount > self.__balance:
            return "余额不足"
        self.__balance -= amount
        return self.__balance

    def check_balance(self):
        return self.__balance

account = Account("张三", 1000)
print(account.owner)           # 可以访问: 张三
print(account._account_type)   # 可以访问但不推荐: 储蓄
# print(account.__balance)     # 错误!无法直接访问
print(account.check_balance()) # 应通过方法访问: 1000

# 实际上私有变量被改名为:
print(account._Account__balance)  # 可以这样访问: 1000
```

## 类变量与类方法、静态方法

### 类变量

-   属于整个类，所有对象共享
-   定义在类的直接命名空间中
-   通过`类名.变量名`或`实例.变量名`访问

```python
class Circle:
    pi = 3.14159  # 类变量

    def __init__(self, radius):
        self.radius = radius  # 实例变量

    def area(self):
        return Circle.pi * self.radius ** 2

c1 = Circle(5)
c2 = Circle(10)
print(Circle.pi)  # 通过类访问类变量
print(c1.pi)      # 通过实例访问类变量

# 修改类变量
Circle.pi = 3.14
# 所有实例的pi都会改变
print(c1.pi)  # 3.14
print(c2.pi)  # 3.14
```

## 继承与方法重写（Override）

### 基本继承语法

```python
class 子类(父类):
    # 子类特有的属性和方法
```

### 多重继承

```python
class 子类(父类1, 父类2, ...):
    # 子类的定义
```

### 方法重写与 super()调用

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "一些声音"

class Dog(Animal):
    def __init__(self, name, breed):
        # 调用父类的__init__方法
        super().__init__(name)
        self.breed = breed

    def speak(self):
        # 重写父类的speak方法
        return "汪汪!"

class Cat(Animal):
    def speak(self):
        return "喵喵!"

dog = Dog("旺财", "哈士奇")
print(dog.name)    # 输出: 旺财
print(dog.breed)   # 输出: 哈士奇
print(dog.speak()) # 输出: 汪汪!

cat = Cat("咪咪")
print(cat.speak()) # 输出: 喵喵!
```

## 方法解析顺序（MRO：Method Resolution Order）

-   当类发生继承时，Python 按照 MRO 决定调用哪个类的方法。
-   可以通过 `类名.__mro__` 或 `help(类名)` 查看解析顺序。

### 简单继承中，Python 的 MRO 使用如下规则：

1. 自己优先；
2. 如果自己没有该方法，向最近的父类查找；
3. 重复步骤 2，直到最顶部的父类没有该方法，抛出异常；
4. 整个过程中，**self**始终指向当前的实例
   :::tips
   配套习题中有相关练习
   :::

## 魔术方法（Magic Methods 或 Dunder Methods）

Python 内建了一些以 `__` 开头和结尾的方法，定义这些方法可以实现特殊行为。

### 常见的魔术方法：

| 方法                  | 说明                               | 示例                 |
| --------------------- | ---------------------------------- | -------------------- |
| `__init__(self, ...)` | 构造函数                           | 初始化对象           |
| `__str__(self)`       | 字符串显示（`str()`和`print()`时） | 用户友好的字符串表示 |
| `__repr__(self)`      | 开发者的字符串表示（`repr()`）     | 开发调试用字符串表示 |

### 示例：

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Point({self.x}, {self.y})"

    def __repr__(self):
        return f"Point({self.x}, {self.y})"


p1 = Point(3, 4)
p2 = Point(1, 2)

print(p1)           # 输出: Point(3, 4)
```

## 📚 总结

| 内容             | 说明                                      |
| ---------------- | ----------------------------------------- |
| 类与对象         | 类是模板，对象是实例                      |
| 面向对象三大特性 | 封装、继承、多态                          |
| `__init__`       | 构造方法，用于初始化对象                  |
| 实例变量与方法   | 通过`self`引用，对象独有                  |
| 继承与方法重写   | 子类可继承父类，使用`super()`调用父类方法 |
| MRO              | 调用类方法时，查找顺序遵循 MRO 规则       |
| 封装与私有变量   | 使用`__`前缀创建私有变量，实现数据保护    |
| 魔术方法         | 定义特殊行为的双下划线方法                |
