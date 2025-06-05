# 缩进（Indentation）

---

## ✨ 为什么缩进很重要？

在 Python 中，**缩进是用来表示代码块的边界**，比如 `if` 语句、循环、函数体等，**没有缩进或缩进不一致会导致语法错误**。

不像 C、Java 等语言使用 `{}` 来包裹代码块，Python 仅通过缩进来区分结构。

---

## 🔍 缩进的规则

- 每个**代码块下的语句**必须缩进（至少一个缩进层级）
- **同一代码块内缩进必须一致**
- Python 社区推荐每一级使用 **4 个空格**

---

### ❌ 错误示例（将导致错误）

```python
if True:
print("Hello")  # 没有缩进

```

```
IndentationError: expected an indented block

```

---

### ✅ 正确示例：

```python
if True:
    print("Hello")

```

---

## 🧱 常见缩进结构

### `if` 语句

```python
x = 10
if x > 5:
    print("Greater than 5")
else:
    print("Not greater")

```

---

### `for` 循环

```python
for i in range(3):
    print("Number:", i)

```

---

### 函数定义

```python
def greet():
    print("Hello")

greet()

```

---

## ⚠️ 混用空格和 Tab 是错误高发区！

- 千万不要**混用空格和 Tab**，否则可能导致看起来对齐但运行报错。
- 使用文本编辑器时，应设置为**使用空格缩进**，并统一为**4 个空格**。


## 🎯 快速检查技巧

1. 保持所有代码缩进**风格一致**
2. 所有控制结构（`if`, `for`, `while`, `def`, `class` 等）**下属语句必须缩进**
3. 代码块结束时缩进回到上一层


## 📚 小节小结

| 内容 | 说明 |
| --- | --- |
| 缩进是语法 | 不是风格建议，**必须使用** |
| 推荐空格数 | 每层缩进 **4 个空格** |
| 禁止混用 | 禁止 Tab 和空格混用 |
| 出现在哪些结构 | `if`, `for`, `while`, `def`, `class`, ... | 