---

title: UML 类图设计详解
description: 深入讲解 UML 类图的设计原理和实践，包括类图符号、关系表示、设计模式、从需求到 UML 图的设计过程，帮助开发者掌握面向对象设计。
keywords: [UML 类图, 面向对象设计, 类图符号, 设计模式, 软件建模]
sidebar_position: 6

---

# UML 类图设计详解

## UML 类图基础

### 📌 什么是 UML 类图？

**UML 类图** 是用于描述系统中类的静态结构和类之间关系的常用图示。

### 📌 作用

1. 设计系统结构
2. 文档记录
3. 团队沟通工具

## 类的表示

### 📌 基本结构

用矩形划分为:

-   类名
-   属性
-   方法

示例：

```
┌──────────────────────────────┌
│        Student        │
├─────────────────────────├
│ - student_id: str    │
│ - name: str          │
│ + email: str         │
├─────────────────────────┘
│ + get_info(): str   │
│ + enroll(course)    │
└─────────────────────────┘
```

## 访问修饰符

| 符号 | 含义      | Python 实现      |
| ---- | --------- | ---------------- |
| `+`  | public    | 直接访问         |
| `-`  | private   | `_` 或 `__` 开头 |
| `#`  | protected | `_` 开头         |

## 类之间的关系

### 继承 (Inheritance)

```
Animal
  △
  ┌─────────────────┐
 Dog           Cat
```

### 关联 (Association)

```
Student ────────> Course
        enrolls in
```

### 聚合 (Aggregation)

```
Department ◇───> Employee
         contains
```

### 组合 (Composition)

```
House ♦───> Room
     contains
```

### 多重性 (Multiplicity)

| 表示   | 含义     |
| ------ | -------- |
| `1`    | 恰好一个 |
| `0..1` | 零或一个 |
| `*`    | 零或多个 |
| `1..*` | 一或多个 |

### 抽象类

```
<<abstract>>
   Shape
     △
     ...
```
