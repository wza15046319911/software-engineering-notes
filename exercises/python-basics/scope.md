# Variable Scope and References

**1.** What is the value of a after the following is evaluated?

```python
def f(x, y):
    y = y + [x]
    return y

a = [1,3]
a = f(2,a) + a
```

(a) [1, 3, 1, 2]

(b) [1, 3, 2, 1, 3]

(c) [2, 1, 3, 3, 1, 2]

(d) [1, 2, 3, 1, 2, 3]

(e) None of the above

**2.** What is the value of a after the following is evaluated?

```python
def f(x, y):
    y = y + [x]
    return y

a = [2,1]
a = f(1,a) + 2 * a
```

(a) [1, 3, 1, 2]

(b) [2, 1, 1, 2, 1, 2, 1]

(c) [2, 1, 1, 4, 2]

(d) [1, 2, 3, 1, 2, 3, 2]

(e) None of the above

**3.** What is the value of a after the following code is executed?

```python
def f(x):
    a = 70
    x += a
    return a

a = 50
f(a)
```

(a) 50

(b) 70

(c) 120

(d) None of the above

**4.** What is the value of x after the following code is executed?

```python
def f(l, a, b):
    l.append(a)
    l = l + [b]
    return l

x = [5, 9]
x = f(x, 2, 1) + x
```

(a) [5, 9, 2, 1]

(b) [5, 9, 2, 1, 5, 9]

(c) [5, 9, 2, 1, 5, 9, 2]

(d) [5, 9, 2, 1, 5, 9, 2, 1]

(e) Error

**5.** What is the value of y after the following code is executed?

```python
def g(x):
    a = 11
    x += [2]
    return a

a = 10
b = [3, 4]
g(b)
y = b + [a]
```

(a) [3, 4, 2, 10]

(b) [3, 4, 2, 11]

(c) [3, 4, 10]

(d) [3, 4, 11]

(e) None of the above

**6.** What is the value of x after the following code is executed?

```python
def f(v, u, b):
    v.pop(u)
    v = v + [b]
    return v

x = [2, 3, 5]
x = f(x, 2, 3) + x
```

(a) [2, 3, 3, 2, 3, 5]

(b) [2, 3, 5, 2, 3]

(c) [2, 3, 5, 3, 2]

(d) [2, 3, 3, 2, 3]

**7.** What is the value of the global variable a after the following code is executed?

```python
def f(x):
    a = 100
    x += a
    return x + a

a = 1
f(a)
```

(a) 1

(b) 100

(c) 101

(d) 201

(e) Error

**8.** What is the value of x after the following code is executed?

```python
def f(l, a, b):
    l.append(a)
    l = l + [b]
    return l

x = [5, 9]
x = f(x, 2, 1) + x
```

(a) [5, 9, 2, 1]

(b) [5, 9, 2, 1, 5, 9]

(c) [5, 9, 2, 1, 5, 9, 2]

(d) [5, 9, 2, 1, 5, 9, 2, 1]

(e) Error

**9.** What is the value of the global variable a after the following code is executed?

```python
def f(x):
    a = 3
    x = x / a
    return (a + x) % x

a = 9
f(a)
```

(a) 9

(b) 3

(c) 0

(d) 0.0

(e) Error

**10.** What is the value of x after the following code is executed?

```python
def f1(a, b):
    return a / b

def f2(a, b):
    b = 10
    return f1(b, a)

x = f2(8, 4)
```

(a) 0.5

(b) 1.25

(c) 2.0

(d) 2.5
