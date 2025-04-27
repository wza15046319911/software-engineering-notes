---
sidebar_position: 2
title: 布局与组件练习
---

# 布局与组件练习

:::note
此页面正在建设中。敬请期待更多练习题和解析。
:::

## 示例练习

### 练习1：网格布局

**题目描述**：使用Tkinter的Grid布局创建一个简单的计算器界面。

```python
import tkinter as tk

# 创建主窗口
window = tk.Tk()
window.title("简易计算器")
window.geometry("300x200")

# 创建显示结果的文本框
entry = tk.Entry(window, width=20, font=("Arial", 14))
entry.grid(row=0, column=0, columnspan=4, padx=10, pady=10)

# 定义按钮文本
buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
]

# 添加按钮函数
def add_button(text, row, col):
    button = tk.Button(window, text=text, width=5, height=2)
    button.grid(row=row, column=col, padx=5, pady=5)
    return button

# 创建按钮网格
row, col = 1, 0
for button_text in buttons:
    add_button(button_text, row, col)
    col += 1
    if col > 3:
        col = 0
        row += 1

# 运行应用
window.mainloop()
``` 