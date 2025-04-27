---
sidebar_position: 3
title: 事件处理练习
---

# 事件处理练习

:::note
此页面正在建设中。敬请期待更多练习题和解析。
:::

## 示例练习

### 练习1：鼠标和键盘事件

**题目描述**：创建一个Tkinter应用，响应不同的鼠标和键盘事件。

```python
import tkinter as tk

# 创建主窗口
window = tk.Tk()
window.title("事件处理示例")
window.geometry("400x300")

# 创建标签显示事件信息
event_label = tk.Label(window, text="事件将显示在这里", font=("Arial", 12))
event_label.pack(pady=20)

# 创建画布
canvas = tk.Canvas(window, width=300, height=150, bg="white")
canvas.pack(pady=10)

# 鼠标事件处理函数
def mouse_click(event):
    event_label.config(text=f"鼠标点击坐标: ({event.x}, {event.y})")
    canvas.create_oval(event.x-5, event.y-5, event.x+5, event.y+5, fill="blue")

def mouse_move(event):
    canvas.create_oval(event.x-2, event.y-2, event.x+2, event.y+2, fill="red")

# 键盘事件处理函数
def key_press(event):
    event_label.config(text=f"按键: {event.char}")
    if event.char == 'c':
        canvas.delete("all")  # 清空画布

# 绑定事件
canvas.bind("<Button-1>", mouse_click)
canvas.bind("<B1-Motion>", mouse_move)
window.bind("<Key>", key_press)

# 添加说明
instruction = tk.Label(window, text="点击或拖动鼠标在画布上绘制。按'c'键清空画布。")
instruction.pack(pady=10)

# 运行应用
window.mainloop()
``` 