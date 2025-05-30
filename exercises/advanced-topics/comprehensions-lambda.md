# Comprehensions and Lambda Functions

**1.** What is the value of y after the following has been evaluated?

```python
def t(xs):
    return [[xs[i][j] for i in range(len(xs))] for j in range(len(xs[0]))]
y = t([[1,2,3],[4,5,6]])
```

(a) [1,2,3,4,5,6]

(b) [[1,2,3], [4,5,6]]

(c) [[1,4],[2,5], [3, 6]]

(d) [[1], [2], [3], [4], [5], [6]]

(e) Error

**2.** What is the value of y after the following has been evaluated?

```python
g = lambda x,y: (x-y)
f = lambda x,y: x > y
xs = [1,2,3,4]
y = [g(x,y) for x in xs for y in xs if f(x,y)]
```

(a) [1, 1, 1, 2, 2, 3]

(b) [1, 2, 1, 1, 2, 3]

(c) [1, 2, 1, 3, 2, 1]

(d) [1, 2, 3, 1, 2, 1]

(e) Error

**3.** What is the value of y after the following has been evaluated?

```python
def s(xs):
    return [''.join([xs[i][j] for i in range(len(xs))]) for j in range(len(xs[0]))]
y = s(["Hi", "There"])
```

(a) ['Hi', 'Th']

(b) ['HiTh']

(c) ['HT', 'ih']

(d) ['TH', 'hi']

(e) Error

**4.** What is the value of y after the following has been evaluated?

```python
g = lambda x,y: (x-y)
f = lambda x,y: y > x
xs = [0, 2, 4, 6]
y = [g(x,y) for x in xs for y in xs if f(x,y)]
```

(a) [2, 4, 2, 6, 4, 2]

(b) [-2, -4, -6, -2, -4, -2]

(c) [-2, 2, -4, 4, -6, 6]

(d) [2, 2, -4, 4, -6, 6]

(e) Error

**5.** What is the value of y after the following has been evaluated?

```python
x = lambda u,v: (u*v)
y = lambda u,v: u-v
ug = [0, 1, 2]
z = [x(u,v) for u in ug for v in ug if y(u,v)]
```

(a) [0, 0, 2, 2]

(b) [0, 0, 2, 4]

(c) [0, 0, 0, 2, 0, 2]

(d) [0, 0, 0, 2, 4, 6]

(e) Error

**6.** What is the value of y after the following has been evaluated?

```python
g = lambda x,y: (x+y)
f = lambda x,y: x > y
xs = [0,1,2,3]
y = [g(x,y) for x in xs for y in xs if f(x,y)]
```

(a) [1, 1, 2, 2, 3, 3]

(b) [1, 2, 4, 5, 3, 1]

(c) [1, 2, 3, 3, 2, 1]

(d) [1, 2, 3, 3, 4, 5]

(e) Error

**7.** What is the value of z after the following has been evaluated?

```python
g = lambda x,y: (x+y)
xs = 'lots'
z = [g(x,y) for x in 'maze' for y in xs if y > 't']
```

(a) []

(b) ['mt', 'at', 'zt', 'et']

(c) ['m', 'ml', 'mo', 'mt', 'ms']

(d) ['ml', 'ao', 'zt', 'es']

(e) None of the above

**8.** After running the following code:

```python
import random
xs=[1,2,3,4]
new_list=[(x,random.random()) for x in xs]
new_list.sort()
z=[(x,y) for y,x in new_list]
```

Which of the following represents the most plausible contents of z?

(a) Error

(b) [(1, 0.3656826997131658), (2, 0.4789711218283632), (3, 0.20367358828920812), (4, 0.4651024789182844)]

(c) [(0.23845323656036166, 2), (0.5411763744080424, 4), (0.7368067435015173, 3), (0.9585633916983842, 1)]

(d) [(0.7070150251404196, 1), (0.9635956493452444, 2), (0.5960013756836279, 3), (0.9623962721301965, 4)]

(e) None

**9.** What will be returned after the following commands are entered?

```python
import operator
print(sum(list(map(operator.mul, [1,2,3,4],[5,6,7,8]))))
```

(a) 70

(b) [5, 12, 21, 32]

(c) 260

(d) [50, 60, 70, 80]

(e) None of the other options are correct

**10.** What will be returned after the following commands are entered?

```python
import operator
print(sum(tuple(map(operator.add, [3,4,5,6],[4,5,6,7]))))
```

(a) 40

(b) (18, 22)

(c) (7, 9, 11, 13)

(d) `<map object at 0x0370C3D0>`

(e) Error
