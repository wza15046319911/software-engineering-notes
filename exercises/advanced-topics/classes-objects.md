---
sidebar_position: 1
title: 类与对象练习
---

# 类与对象练习

:::note
此页面正在建设中。敬请期待更多练习题和解析。
:::

## 示例练习

### 练习1：创建简单类

**题目描述**：创建一个表示矩形的类，包含长度和宽度属性，以及计算面积和周长的方法。

```python
class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
    
    def area(self):
        return self.length * self.width
    
    def perimeter(self):
        return 2 * (self.length + self.width)
    
    def __str__(self):
        return f"Rectangle(length={self.length}, width={self.width})"

# 测试代码
rect1 = Rectangle(5, 3)
print(f"矩形: {rect1}")
print(f"面积: {rect1.area()}")
print(f"周长: {rect1.perimeter()}")
``` 