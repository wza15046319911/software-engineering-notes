# 列表特性

**1.** What is the value of x after the following is evaluated?

```python
x = [3,2,1]
y = x
y[1] = 5
```

(a) [ ]

(b) [3, 5, 1]

(c) [5, 2, 1]

(d) [3, 2, 1]

**2.** What is the value of y after the following statements are evaluated?

```python
v = (['a', 'b'],[ 'c', 'd'])
x,y = v
z = y
z[-1] = 3
```

(a) 0

(b) ['c',3]

(c) ['a', 'b']

(d) ['a', 'b', 'c', 3]

(e) Error

**3.** What is the value of a after the following statements are evaluated?

```python
x = [1, 2, 3]
y = [4, 5, 6]
z = x + y
a = z[4]
```

(a) 4

(b) 5

(c) [4]

(d) [5]

(e) Error

**4.** What is the value of x after the following statements are evaluated?

```python
x = ['a', 'b', 'c']
y = x
y[1] = 0
```

(a) 0

(b) ['a']

(c) ['a', 0, 'c']

(d) ['a', 'b', 'c']

(e) Error

**5.** What is the value of a after the following statements are evaluated?

```python
x = ['x', 'y', 'z']
y = ['z', 'y', 'x']
z = x + y
a = z[1]
```

(a) 'x'

(b) 'y'

(c) ['x', 'y', 'z']

(d) ['z', 'y', 'x']

(e) Error

**6.** What is the value of x after the following statements are evaluated?

```python
x = [-1, 1.5, 'a']
y = x
y[2] = 0
```

(a) [-1, 1.5, 0]

(b) [-1, 0, 'a']

(c) -1

(d) 0

(e) Error

**7.** What is the value of x after the following statements are evaluated?

```python
x = ['a', 'b', 'c']
y = x
y[1] = 0
x[0] = 1
```

(a) 0

(b) ['a']

(c) [1, 0, 'c']

(d) [1, 'b', 'c']

(e) Error

**8.** What is the value of x after the following statements are evaluated?

```python
x = [23, True, False]
y = x
y[2] = 46
x[1] = 7
```

(a) [23, 7, False]

(b) [23, 7, 46]

(c) Error

(d) None of the other choices

**9.** What is the value of a after the following statements are evaluated?

```python
x = ['a', (3,4), `{1:'b'}`]
y= x
y[2] = `{2:'c'}`
a = x[2][1]
```

(a) 'b'

(b) 'c'

(c) Error

(d) None of the other choices are correct
