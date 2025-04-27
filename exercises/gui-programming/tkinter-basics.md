---
sidebar_position: 1
title: Tkinter基础练习
---

# Tkinter基础练习

:::note
此页面正在建设中。敬请期待更多练习题和解析。
:::

## 示例练习

### 练习1：创建简单窗口

**题目描述**：使用Tkinter创建一个简单的窗口，包含一个标题和一个按钮。

```python
import tkinter as tk

# 创建主窗口
window = tk.Tk()
window.title("我的第一个Tkinter应用")
window.geometry("300x200")

# 创建标签
label = tk.Label(window, text="欢迎使用Tkinter！", font=("Arial", 14))
label.pack(pady=20)

# 创建按钮
def button_click():
    label.config(text="按钮被点击了！")

button = tk.Button(window, text="点击我", command=button_click)
button.pack(pady=10)

# 运行应用
window.mainloop()
``` 