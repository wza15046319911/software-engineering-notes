# 字典（Dictionary）

## 字典的基本概念

- 字典是**键值对（key-value）**的集合
- 使用 `{}` 创建，键与值之间用冒号 `:` 分隔

```python
student = {
    "name": "Alice",
    "age": 20,
    "is_enrolled": True
}
```

## 访问与修改元素

### 📌 通过键访问值

```python
print(student["name"])  # Alice
```

### 📌 修改 / 添加键值对

```python
student["age"] = 21
student["grade"] = "A"
```

## 删除元素

```python
del student["is_enrolled"]
student.pop("age")
```

## 遍历字典

```python
for key in student:
    print(key, "=>", student[key])
```

```python
for key, value in student.items():
    print(key, value)
```

## 常用方法（含示例）

### 🔹 `.get(key[, default])` — 安全访问键

```python
print(student.get("name"))          # Alice
print(student.get("address", "N/A"))  # N/A
```

### 🔹 `.keys()` / `.values()` / `.items()`

```python
print(student.keys())    # dict_keys(['name', 'grade'])
print(student.values())  # dict_values(['Alice', 'A'])
print(student.items())   # dict_items([('name', 'Alice'), ('grade', 'A')])
```

### 🔹 `.update()` — 批量更新键值对

```python
student.update({"age": 22, "city": "Brisbane"})
```

### 🔹 `.clear()` — 清空字典

```python
student.clear()
print(student)  # {}
```

## 嵌套字典（进阶）

```python
students = {
    "001": {"name": "Alice", "age": 20},
    "002": {"name": "Bob", "age": 21}
}
print(students["001"]["name"])  # Alice
```

## 📚 总结

| 操作 | 示例 |
| --- | --- |
| 创建字典 | `{"a": 1, "b": 2}` |
| 访问键 | `dict["a"]` or `dict.get("a")` |
| 添加/更新 | `dict["c"] = 3` or `.update({...})` |
| 删除键 | `del dict["a"]`, `dict.pop("a")` |
| 遍历 | `for k, v in dict.items()` |
| 嵌套结构 | `dict["key1"]["key2"]` |
