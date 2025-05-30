# Classes and Objects

**1.** The five questions below refer to the class definitions and assignments given below:

```python
class A(object):
    def __init__(self, x):
        self.x = x

    def f(self, x):
        return self.g(x) + 1

    def g(self, x):
        return x + 1

class B(A):
    def g(self, y):
        return y + self.x

class C(B):
    def __init__(self, x, y):
        super().__init__(x)
        self.y = y
        self.x += y
    def g(self, y):
        return y
    def f(self, x):
        return super().g(x) + self.y

class D(C):
    def __init__(self, x, y):
        super().__init__(x, y)
        self.y = y + x

    def g(self, x):
        return x + self.x

a = A(2)
b = B(2)
c = C(2, 2)
d = D(2, 0)
```

What does the expression `b.g(3)` evaluate to?

(a) 5

(b) 6

(c) 7

(d) 9

(e) Error

**2.** What does the expression `a.f(3)` evaluate to?

(a) 5

(b) 6

(c) 7

(d) 9

(e) Error

**3.** What does the expression `b.f(3)` evaluate to?

(a) 5

(b) 6

(c) 7

(d) 9

(e) Error

**4.** What does the expression `c.f(3)` evaluate to?

(a) 5

(b) 6

(c) 7

(d) 9

(e) Error

**5.** What does the expression `d.f(3)` evaluate to?

(a) 5

(b) 6

(c) 7

(d) 9

(e) Error

**6.** The five questions below refer to the class definitions and assignments given below:

```python
class A(object):
    def __init__(self, x):
        self.x = x

    def g(self, x):
        return self.f(x)

    def f(self, x):
        return 2 * x

class B(A):
    def g(self, y):
        return 2 * y + self.x

class C1(B):
    def __init__(self, x, y):
        super().__init__(x)
        self.y = y

    def f(self, x):
        return super().f(x) + self.y

class C2(B):
    def __init__(self, x, y):
        super().__init__(x)
        self.y = y + x

    def g(self, x):
        return x + self.x

a = A(2)
b = B(2)
c1 = C1(2, 1)
c2 = C2(1, 2)
```

What does the expression `b.g(2)` evaluate to?

(a) 3

(b) 4

(c) 6

(d) 7

(e) Error

**7.** What does the expression `a.f(3)` evaluate to?

(a) 3

(b) 4

(c) 6

(d) 7

(e) Error

**8.** What does the expression `b.f(2)` evaluate to?

(a) 3

(b) 4

(c) 6

(d) 7

(e) Error

**9.** What does the expression `c1.f(3)` evaluate to?

(a) 3

(b) 4

(c) 6

(d) 7

(e) Error

**10.** What does the expression `c2.g(2)` evaluate to?

(a) 3

(b) 4

(c) 6

(d) 7

(e) Error

**11.** The next five questions refer to the class definitions and assignments given below:

```python
class A(object):
    def __init__(self, x):
        self.x = x

    def g(self, x):
        return self.f(x)

    def f(self, x):
        return 2 * x

class B(A):
    def g(self, y):
        return self.x + 3 * y

class C1(B):
    def __init__(self, x, y):
        B.__init__(self, x)
        self.y = y

    def f(self, x):
        return self.x + self.y

class C2(B):
    def __init__(self, x, y):
        B.__init__(self, x)
        self.y = y

    def f(self, x):
        return x + self.x + self.y

a = A(3)
b = B(2)
c1 = C1(3, 5)
c2 = C2(3, 5)
```

What does the expression `b.g(2)` evaluate to?

(a) 6

(b) 7

(c) 8

(d) 9

(e) None of the above

**12.** What does the expression `a.f(4)` evaluate to?

(a) 5

(b) 6

(c) 7

(d) 8

(e) None of the above

**13.** What does the expression `b.f(5)` evaluate to?

(a) 5

(b) 8

(c) 10

(d) 12

(e) None of the above

**14.** What does the expression `c1.g(2)` evaluate to?

(a) 9

(b) 12

(c) 14

(d) 16

(e) None of the above

**15.** What does the expression `c2.f(4)` evaluate to?

(a) 9

(b) 12

(c) 14

(d) 16

(e) None of the above

**16.** The next five questions refer to the class definitions and assignments given below:

```python
class A(object):
    def __init__(self, x):
        self.x = x

    def g(self, x):
        return self.f(x)

    def f(self, x):
        return 3 * x

class B(A):
    def g(self, y):
        return self.x + 2 * y

class C1(B):
    def __init__(self, x, y):
        B.__init__(self, x)
        self.y = y

    def f(self, x):
        return self.x + self.y

class C2(B):
    def __init__(self, x, y):
        B.__init__(self, x)
        self.y = y

    def f(self, x):
        return x + self.x + 2 * self.y

a = A(2)
b = B(1)
c1 = C1(2, 4)
c2 = C2(2, 4)
```

What does the expression `b.f(3)` evaluate to?

(a) 6

(b) 7

(c) 8

(d) 9

(e) None of the above

**17.** What does the expression `a.f(3)` evaluate to?

(a) 6

(b) 7

(c) 8

(d) 9

(e) None of the above

**18.** What does the expression `b.g(2)` evaluate to?

(a) 5

(b) 6

(c) 7

(d) 8

(e) None of the above

**19.** What does the expression `c1.g(3)` evaluate to?

(a) 6

(b) 7

(c) 8

(d) 9

(e) None of the above

**20.** What does the expression `c2.f(2)` evaluate to?

(a) 10

(b) 11

(c) 12

(d) 13

(e) None of the above

**21.** The next five questions refer to the class definitions and assignments given below:

```python
class A(object):
    def __init__(self, x):
        self.x = x

    def g(self, x):
        return self.f(x)

    def f(self, x):
        return 2 * x - 1

class B(A):
    def g(self, y):
        return self.x + 2 * y

class C1(B):
    def __init__(self, x, y):
        B.__init__(self, x)
        self.y = y

    def f(self, x):
        return self.x + self.y

class C2(B):
    def __init__(self, x, y):
        B.__init__(self, x)
        self.y = y

    def f(self, x):
        return x + self.x + self.y

a = A(2)
b = B(3)
c1 = C1(3, 2)
c2 = C2(3, 2)
```

What does the expression `b.g(3)` evaluate to?

(a) 6

(b) 7

(c) 8

(d) 9

(e) None of the above

**22.** What does the expression `a.f(3)` evaluate to?

(a) 5

(b) 6

(c) 7

(d) 8

(e) None of the above

**23.** What does the expression `b.f(3)` evaluate to?

(a) 4

(b) 5

(c) 6

(d) 7

(e) None of the above

**24.** What does the expression `c1.f(3)` evaluate to?

(a) 4

(b) 5

(c) 6

(d) 7

(e) None of the above

**25.** What does the expression `c2.f(3)` evaluate to?

(a) 6

(b) 7

(c) 8

(d) 9

(e) None of the above

**26.** The next five questions refer to the following class definitions:

```python
class A(object):
    def __init__(self, x, y):
        self._x = x
        self._y = y
    def a1(self, x, y):
        return self.a2(x, y) + 3
    def a2(self, x, y):
        return y - x

class B(A):
    def a2(self, x, y):
        return x + 2 * y

class C(B):
    def __init__(self, x, y):
        super().__init__(x, y)
        self._x = x
        self._y = 2 * y + x
    def a1(self, x, y):
        return self._x + self._y

class D(B):
    def __init__(self, x, y):
        super().__init__(x, y)
        self._x = x
        self._y = y - 1
    def a1(self, x, y):
        return x + y + 1
    def a2(self, x, y):
        return super().a2(x, y)

a = A(1, 3)
b = B(1, 2)
c = C(2, 1)
d = D(2, 2)
```

What does `a.a2(2, 1)` return?

(a) -1

(b) 0

(c) 2

(d) 5

**27.** What does `b.a1(1, 1)` return?

(a) 2

(b) 4

(c) 6

(d) 8

**28.** What does `c.a1(2, 2)` return?

(a) 4

(b) 5

(c) 6

(d) 7

**29.** What does `d.a1(1, 1)` return?

(a) 2

(b) 3

(c) 4

(d) 5

**30.** What does `d.a2(2, 1)` return?

(a) 0

(b) 2

(c) 4

(d) 6

**31.** The next five questions refer to the following class definitions:

```python
class A(object):
    def __init__(self, x):
        self._x = x

    def m1(self, x):
        return self.m2(x) * 2

    def m2(self, x):
        return x + 1

class B(A):
    def m2(self, y):
        return self._x + y

class C(B):
    def __init__(self, x, y):
        super().__init__(x)
        self._y = y

    def m1(self, x):
        return self._x - self._y

class D(B):
    def __init__(self, x, y):
        super().__init__(x)
        self._x += y
        self._y = y

    def m1(self, y):
        return self._y - y

    def m2(self, x):
        return super().m2(x) + x

a = A(3)
b = B(2)
c = C(2, 4)
d = D(1, 3)
```

What does `a.m1(2)` return?

(a) 2

(b) 4

(c) 5

(d) 6

**32.** What does `b.m1(3)` return?

(a) 4

(b) 5

(c) 6

(d) 10

**33.** What does `c.m2(3)` return?

(a) 3

(b) 4

(c) 5

(d) 6

**34.** What does `d.m1(2)` return?

(a) 0

(b) 1

(c) 5

(d) 6

**35.** What does `d.m2(2)` return?

(a) 5

(b) 6

(c) 7

(d) 8

**36.** The next four questions refer to the following class definitions:

```python
class A:
    def __init__(self, x):
        self._x = x

    def f(self, x):
        return self.g(x) + 1

    def g(self, x):
        return x * x

class B(A):
    def g(self, y):
        return self._x * y

class C(B):
    def __init__(self, x, y):
        super().__init__(x)
        self._y = y

    def f(self, x):
        return x * self._y

class D(B):
    def __init__(self, x, y):
        super().__init__(x)
        self._x -= y
        self._y = y

    def f(self, x):
        return super().f(x) * x

    def g(self, y):
        return self._y * y

a = A(4)
b = B(2)
c = C(4, 3)
d = D(4, 1)
```

What does `a.g(2)` return?

(a) 2

(b) 3

(c) 4

(d) 16

**37.** What does `b.f(3)` return?

(a) 7

(b) 9

(c) 10

(d) 13

**38.** What does `c.g(2)` return?

(a) 4

(b) 6

(c) 8

(d) 9

**39.** What does `d.f(2)` return?

(a) 2

(b) 6

(c) 8

(d) 10

**40.** The next five questions refer to the following class definitions:

```python
class A(object):
    def __init__(self, x):
        self._x = x
    def m1(self, x):
        return self.m2(x) * 2
    def m2(self, x):
        return x + 1

class B(A):
    def m2(self, y):
        return self._x + y

class C(B):
    def __init__(self, x, y):
        super().__init__(x)
        self._y = y
    def m1(self, x):
        return self._x - self._y

class D(B):
    def __init__(self, x, y):
        super().__init__(x)
        self._x += y
        self._y = y
    def m1(self, y):
        return self._y - y
    def m2(self, x):
        return super().m2(x) + x

a = A(1)
b = B(2)
c = C(2, 3)
d = D(2, 1)
```

What does `a.m1(2)` return?

(a) 2

(b) 4

(c) 5

(d) 6

(e) None of the above

**41.** What does `b.m1(3)` return?

(a) 4

(b) 6

(c) 8

(d) 10

(e) None of the above

**42.** What does `c.m2(3)` return?

(a) 3

(b) 4

(c) 5

(d) 6

(e) None of the above

**43.** What does `d.m1(2)` return?

(a) -2

(b) -1

(c) 1

(d) 2

(e) None of the above

**44.** What does `d.m2(2)` return?

(a) 5

(b) 6

(c) 7

(d) 8

(e) None of the above

**45.** The next five questions refer to the following class definitions:

```python
class A:
    def __init__(self, x):
        self.x = x

    def f(self, x):
        return self.g(x) - 1

    def g(self, x):
        return 2 * x

class B(A):
    def g(self, y):
        return self.x + y

class C(B):
    def __init__(self, x, y):
        super().__init__(x)
        self.y = y

    def f(self, x):
        return self.x + self.y

class D(B):
    def __init__(self, x, y):
        super().__init__(x)
        self.x += y
        self.y = y

    def g(self, y):
        return self.y + y

    def f(self, x):
        return super().f(x) - x

a = A(3)
b = B(2)
c = C(2, 4)
d = D(1, 3)
```

What does `a.g(2)` return?

(a) 2

(b) 3

(c) 4

(d) 5

**46.** What does `a.f(2)` return?

(a) 2

(b) 3

(c) 4

(d) 5

**47.** What does `c.g(3)` return?

(a) 2

(b) 3

(c) 4

(d) 5

**48.** What does `b.f(3)` return?

(a) 2

(b) 3

(c) 4

(d) 5

**49.** What does `d.f(2)` return?

(a) 2

(b) 3

(c) 4

(d) 5

**50.** The next four questions refer to the following class definitions and object instantiations:

```python
class A:
    def __init__(self, x: int):
        self._x = x

    def f(self, a: int) -> int:
        return self.g(a) + self._x

    def g(self, a: int) -> int:
        return a * 2

class B(A):
    def g(self, a: int) -> int:
        return self._x * a

    def h(self, a: int) -> int:
        return super().g(a)

class C(B):
    def __init__(self, a: int, b: int):
        super().__init__(a)
        self._y = b

    def f(self, a: int) -> int:
        return self.h(self._y) + a

a = A(2)
b = B(3)
c = C(4, 6)
```

What does `a.f(2)` return?

(a) 4

(b) 6

(c) 8

(d) 10

(e) Error

**51.** What does `b.f(3)` return?

(a) 6

(b) 9

(c) 12

(d) 15

(e) Error

**52.** What does `b.h(4)` return?

(a) 4

(b) 8

(c) 11

(d) 12

(e) Error

**53.** What does `c.f(5)` return?

(a) 14

(b) 15

(c) 17

(d) 29

(e) Error
