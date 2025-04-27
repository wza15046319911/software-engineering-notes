# 类与对象（Classes and Objects）

## 类与对象的基本概念

- **类（Class）** 是**对象的蓝图**，定义了对象应具备的属性和行为。
- **对象（Object）** 是根据类创建的实例，是具体存在的实体。

面向对象三大核心概念：

- **封装（Encapsulation）**：将数据和方法包装在一起，控制对内部数据的访问
- **继承（Inheritance）**：子类可以继承父类的属性和方法，实现代码重用
- **多态（Polymorphism）**：同一操作可以作用于不同类型的对象，产生不同的行为

## 定义类与创建对象

### 定义类的基本语法：

```
class 类名:
    属性定义
    方法定义
```

### 创建对象：

```
obj = 类名()
```

### 完整示例：

```
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

- 在创建对象时自动调用
- 用于初始化对象的属性
- 第一个参数必须是`self`，表示实例本身

```
def __init__(self, 参数):
    self.属性名 = 参数值
```

## 实例变量与实例方法

### 实例变量

- 每个对象独有的数据，通过 `self.变量名` 定义和访问
- 在`__init__`方法或其他实例方法中定义
- 使用`对象名.变量名`访问

### 实例方法

- 定义在类中、操作实例数据的函数
- 第一个参数必须是`self`，表示调用该方法的实例
- 通过`对象名.方法名()`调用

```
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

在Python中使用约定俗成的下划线前缀表示变量的访问限制：

- `_变量名`：单下划线前缀表示"受保护"的变量（约定不直接访问）
- `__变量名`：双下划线前缀表示"私有"变量（Python会进行名称改写）

```
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

## 属性装饰器（@property）

使用`@property`装饰器可以将方法转换为属性，实现对属性的控制访问：

```
class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if value < 0 or value > 150:
            raise ValueError("年龄必须在0到150之间")
        self._age = value
    
    @property
    def name(self):
        return self._name

person = Person("李四", 25)
print(person.age)    # 使用property访问: 25
person.age = 30      # 使用setter修改
# person.age = -10   # 错误!触发验证
# person.name = "王五" # 错误!没有setter方法
```

## 类变量与类方法、静态方法

### 类变量

- 属于整个类，所有对象共享
- 定义在类的直接命名空间中
- 通过`类名.变量名`或`实例.变量名`访问

```
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

### 类方法（`@classmethod`）

- 第一个参数是 `cls`，表示类本身
- 可访问和修改类变量
- 通过类名或实例调用

```
class Student:
    count = 0  # 类变量，记录学生总数
    
    def __init__(self, name):
        self.name = name
        Student.count += 1
    
    @classmethod
    def get_count(cls):
        return cls.count
    
    @classmethod
    def create_student(cls, name):
        return cls(name)  # 创建类的实例

s1 = Student("小明")
s2 = Student("小红")
print(Student.get_count())  # 输出: 2

# 通过类方法创建实例
s3 = Student.create_student("小张")
print(Student.get_count())  # 输出: 3
```

### 静态方法（`@staticmethod`）

- 不依赖对象或类的任何状态
- 没有 `self` 或 `cls` 参数，类似普通函数
- 通过类名或实例调用

```
class MathUtils:
    @staticmethod
    def add(a, b):
        return a + b
    
    @staticmethod
    def is_prime(n):
        if n <= 1:
            return False
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                return False
        return True

# 通过类调用静态方法
print(MathUtils.add(5, 3))     # 输出: 8
print(MathUtils.is_prime(17))  # 输出: True

# 也可以通过实例调用
math = MathUtils()
print(math.add(2, 3))  # 输出: 5
```

## 继承与方法重写（Override）

### 基本继承语法

```
class 子类(父类):
    # 子类特有的属性和方法
```

### 多重继承

```
class 子类(父类1, 父类2, ...):
    # 子类的定义
```

### 方法重写与super()调用

```
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

## 多重继承与Mixin模式

Python支持多重继承，但需要谨慎使用。Mixin是一种设计模式，用于将功能混入到类中：

```
class Flyable:
    def fly(self):
        return f"{self.name}正在飞行"

class Swimmable:
    def swim(self):
        return f"{self.name}正在游泳"

class Duck(Animal, Flyable, Swimmable):
    def speak(self):
        return "嘎嘎!"

duck = Duck("唐老鸭")
print(duck.speak())  # 输出: 嘎嘎!
print(duck.fly())    # 输出: 唐老鸭正在飞行
print(duck.swim())   # 输出: 唐老鸭正在游泳
```

## 方法解析顺序（MRO：Method Resolution Order）

- 当类发生继承时，Python 按照 MRO 决定调用哪个类的方法。
- 可以通过 `类名.__mro__` 或 `help(类名)` 查看解析顺序。

### Python 的 MRO 使用 **C3 线性化算法**，规则如下：

1. 自己优先
2. 从左到右（多重继承时）
3. 子类优先于父类
4. 避免重复调用（优先采用线性合并）

### 示例结构：

```
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass

print(D.__mro__)  
# 输出: (<class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)
```

## 抽象基类（Abstract Base Classes）

抽象基类定义接口但不实现所有方法，子类必须实现这些方法：

```
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
        
    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
        
    def area(self):
        return self.width * self.height
        
    def perimeter(self):
        return 2 * (self.width + self.height)

# shape = Shape()  # 错误!不能实例化抽象类
rect = Rectangle(5, 3)
print(rect.area())       # 输出: 15
print(rect.perimeter())  # 输出: 16
```

## 魔术方法（Magic Methods或Dunder Methods）

Python 内建了一些以 `__` 开头和结尾的方法，定义这些方法可以实现特殊行为。

### 常见的魔术方法：

| 方法 | 说明 | 示例 |
| --- | --- | --- |
| `__init__(self, ...)` | 构造函数 | 初始化对象 |
| `__str__(self)` | 字符串显示（`str()`和`print()`时） | 用户友好的字符串表示 |
| `__repr__(self)` | 开发者的字符串表示（`repr()`） | 开发调试用字符串表示 |
| `__len__(self)` | 定义 `len()` 行为 | 对象的长度或大小 |
| `__getitem__(self, key)` | 定义索引访问行为 `obj[key]` | 获取元素 |
| `__setitem__(self, key, value)` | 定义索引赋值行为 `obj[key]=value` | 设置元素 |
| `__eq__(self, other)` | 重载等于号 `==` | 比较两个对象是否相等 |
| `__lt__(self, other)` | 重载小于号 `<` | 比较两个对象大小 |
| `__add__(self, other)` | 重载加号 `+` | 定义加法行为 |
| `__call__(self, ...)` | 使实例可调用 `obj()` | 将对象当作函数调用 |

### 示例：

```
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"Point({self.x}, {self.y})"
    
    def __repr__(self):
        return f"Point({self.x}, {self.y})"
    
    def __eq__(self, other):
        if not isinstance(other, Point):
            return False
        return self.x == other.x and self.y == other.y
    
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)
    
    def __len__(self):
        return int((self.x ** 2 + self.y ** 2) ** 0.5)
    
    def __call__(self):
        return (self.x, self.y)

p1 = Point(3, 4)
p2 = Point(1, 2)

print(p1)           # 输出: Point(3, 4)
print(p1 == p2)     # 输出: False
print(p1 + p2)      # 输出: Point(4, 6)
print(len(p1))      # 输出: 5
print(p1())         # 输出: (3, 4)
```

## 类和类型注解

在现代Python中，可以使用类型注解提高代码的可读性和类型检查：

```
from typing import List, Optional

class Person:
    def __init__(self, name: str, age: int, friends: Optional[List['Person']] = None):
        self.name: str = name
        self.age: int = age
        self.friends: List['Person'] = friends or []
    
    def add_friend(self, friend: 'Person') -> None:
        self.friends.append(friend)
    
    def get_friends_names(self) -> List[str]:
        return [friend.name for friend in self.friends]

# 使用类型注解
person1: Person = Person("张三", 25)
person2: Person = Person("李四", 30)
person1.add_friend(person2)
```

## 数据类（Python 3.7+）

使用`@dataclass`装饰器可以简化类的定义，自动生成`__init__`、`__repr__`等方法：

```
from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int
    
    def distance_from_origin(self) -> float:
        return (self.x ** 2 + self.y ** 2) ** 0.5

p = Point(3, 4)
print(p)  # 输出: Point(x=3, y=4)
print(p.distance_from_origin())  # 输出: 5.0
```

## 📚 总结

| 内容 | 说明 |
| --- | --- |
| 类与对象 | 类是模板，对象是实例 |
| 面向对象三大特性 | 封装、继承、多态 |
| `__init__` | 构造方法，用于初始化对象 |
| 实例变量与方法 | 通过`self`引用，对象独有 |
| 类变量与方法 | 所有实例共享，可通过`@classmethod`访问 |
| 静态方法 | 与类和实例无关，通过`@staticmethod`定义 |
| 继承与方法重写 | 子类可继承父类，使用`super()`调用父类方法 |
| 多重继承 | 一个类可继承多个父类，遵循MRO规则 |
| 封装与私有变量 | 使用`__`前缀创建私有变量，实现数据保护 |
| 属性装饰器 | 使用`@property`控制属性的访问和修改 |
| 抽象基类 | 使用`abc`模块定义接口规范 |
| 魔术方法 | 定义特殊行为的双下划线方法 |
| 数据类 | 使用`@dataclass`简化类定义 |