# Practice Midterm Exam

Question 1  
What is the value of ys after the following is evaluated?

```python
ys = [34, 56, 11]
xs = ys.copy()
xs[1][1] = 6
```

A. `[34, 56, 11]`  
B. `[34, 66, 11]`  
C. `[64, 56, 11]`  
D. Error  
E. None of the above

<details>
  <summary>查看答案与解析</summary>

**解析：**

- `ys` 是整数列表
- `xs[1]` 是整数 56
- 整数不支持索引操作
- 会触发 `TypeError`

**答案：D. Error**

</details>

---

Question 2  
What is the value of x after running the following code?

```python
cs = ['Python Programming']
x = cs[1][-13:8]
```

A. 'n Pro'  
B. 'n Pr'  
C. 'n P'  
D. ''  
E. Error

<details>
  <summary>查看答案与解析</summary>

**解析：**

- `cs` 只有一个元素
- `cs[1]` 索引越界
- 会触发 `IndexError`

**答案：E. Error**

</details>

---  

Question 3  
Consider the function foo defined below that computes the average of three numbers. What type of value is stored in x?

```python
def foo(num1: int, num2: int, num3: int):
    average = (num1 + num2 + num3)/3
    print(average)
    return
    return average

x = foo(1, 2, 3)
```

A. int  
B. float  
C. char  
D. string  
E. NoneType

<details>
  <summary>查看答案与解析</summary>

**解析：**

- 函数在第一个 `return` 就返回
- 没有返回值，返回 `None`
- 所以 `x` 是 `NoneType`

**答案：E. NoneType**

</details>

---

Question 4  
Which statement evaluates to False?

A. `bool('' in 'Hello')`  
B. `bool([''] or 'False')`  
C. `bool('False' and '')`  
D. `bool(True > 0)`  
E. More than one of the above

<details>
  <summary>查看答案与解析</summary>

**解析：**

- A. `'' in 'Hello'` → `True` → `bool(True)` → `True`
- B. `[''] or 'False'` → `['']` → `bool([''])` → `True`
- C. `'False' and ''` → `''` → `bool('')` → `False`
- D. `True > 0` → `True` → `bool(True)` → `True`

**答案：C. bool('False' and '')**

</details>

---

Question 5  
What is the appropriate type-hint for the following function?

```python
def foo(matrix):
    acc = []
    for row in matrix:
        acc.append(sum(row))
    return sum(acc)/(len(matrix) * len(matrix[0]))
```

A. `foo(matrix: list[list[int]]) -> float`  
B. `foo(matrix: list[int]) -> float`  
C. `foo(matrix: list[float]) -> float`  
D. `foo(matrix: list[list[float]]) -> int`  
E. More than one of the above

<details>
  <summary>查看答案与解析</summary>

**解析：**

- `matrix` 是二维列表
- `sum(row)` 说明元素是数字
- 除法 `/` 返回浮点数
- 所以是 `list[list[int]] -> float`

**答案：A. foo(matrix: list[list[int]]) -> float**

</details>

---

Question 6  
Which if the following is a valid python statement when `x = {'': 'empty'}`?

A. `x[x] = 1`  
B. `x[' '] = 1`  
C. `x[[]] = 1`  
D. `'empty' in x`  
E. More than one of the above

<details>
  <summary>查看答案与解析</summary>

**解析：**

- A. `x[x]` ❌ 字典不能作为字典的key
- B. `x[' ']` ✅ 合法
- C. `x[[]]` ❌ 列表不能作为字典的key
- D. `'empty' in x` ✅ 合法，检查值是否存在

**答案：E. More than one of the above**

</details>

---

Question 7  
What is the value of y after only the following code is run?

```python
def foo(y) -> str:
    global y
    return 2*y

y = 'drake'
foo(y)
foo(y)
```

A. 'drake'  
B. 'drakedrake'  
C. 'drakedrakedrakedrake'  
D. Error  
E. None of the above

<details>
  <summary>查看答案与解析</summary>

**解析：**

- 函数参数名和全局变量名都是 `y`
- 会触发 `SyntaxError`

**答案：D. Error**

</details>

---

Question 8  
What is the value of ys after only the following code has been executed?

```python
ys = {'a': [1, 2, 3]}
xs = ys['a'].append([4])
ys['a'] *= 2
```

A. `[[0, 1], [0, 1]]`  
B. `{'a': [1, 2, 3, 4, 1, 2, 3, 4]}`  
C. `{'a': [1, 2, 3, [4], 1, 2, 3, [4]]}`  
D. `{'a': [1, 2, 3, 4]}`  
E. Error

<details>
  <summary>查看答案与解析</summary>

**解析：**

- `ys['a'].append([4])` 修改列表为 `[1, 2, 3, [4]]`
- `ys['a'] *= 2` 将列表重复两次
- 最终 `ys = {'a': [1, 2, 3, [4], 1, 2, 3, [4]]}`

**答案：C. `{'a': [1, 2, 3, [4], 1, 2, 3, [4]]}`**

</details>

---

Question 9  
What is the value of ans after only the following has been executed?

```python
ans = []
for x in range(5):
    if x == 1 or 0 or 2:
        ans.append(x)
    else:
        ans.append(2*x)
```

A. `[0, 1, 2, 3, 4]`  
B. `[6, 8]`  
C. `[0, 2, 4, 6, 8]`  
D. `[0, 1, 2]`  
E. None of the above

<details>
  <summary>查看答案与解析</summary>

**解析：**

- `if x == 1 or 0 or 2` 等价于 `if (x == 1) or (0) or (2)`
- 非零数字 `0` 和 `2` 都是 `True`
- 所以条件总是为 `True`
- 循环执行 5 次，每次 `ans.append(x)`
- 最终 `ans = [0, 1, 2, 3, 4]`

**答案：A. [0, 1, 2, 3, 4]**

</details>

---

Question 10  
What is the best description of the behaviour of the following function?

```python
def foo(xs: list) -> bool:
    for i in range(len(xs)):
        for j in range(i + 1, len(xs)):
            if xs[i] == xs[j]:
                return False
    return True
```

A. foo only returns False when all members of xs are unique.  
B. foo only returns True when all members of xs are unique.  
C. foo always returns True  
D. foo always returns False  
E. foo always throws errors

<details>
  <summary>查看答案与解析</summary>

**解析：**

- 函数检查列表是否有重复元素
- 如果发现重复，返回 False
- 否则返回 True
- 所以只有当所有元素都唯一时才返回 True

**答案：B. foo only returns True when all members of xs are unique.**

</details>

---

Question 11  
What does the following arithmetic expression evaluate to?

```python
1 - 4**5 // 2**3 - -6 - 7 % 8**9
```

<details>
  <summary>查看答案与解析</summary>

**解析：**

运算符优先级：
1. `**`（指数）
2. `//`（整除）
3. `%`（取余）
4. `-`（减法）

计算顺序：
1. `4**5 = 1024`
2. `2**3 = 8`
3. `1024 // 8 = 128`
4. `8**9` 太大，会触发 `OverflowError`

**答案：Error**

</details>

---

Question 12  
Re-factor (simplify without effecting behaviour) the following code so that it uses a single if-elif-else expression.

```python
if not (x > a or y > b):
    print("A")

if x <= a or y > 100:
    print("B")

if y >= b:
    print("C")
```

<details>
  <summary>查看答案与解析</summary>

**解析：**

```python
if y >= b:
    print("C")
elif x <= a:
    print("B")
elif y <= b:
    print("A")
```

</details>

---

Question 13  
Suppose we have run the following code and the user has typed something.

```python
value = input("Type anything: ")
```

Write a Python expression that evaluates to True only when the user has typed a string that contains at least two consecutive spaces.

<details>
  <summary>查看答案与解析</summary>

**解析：**

```python
'  ' in value
```

</details>

---

Question 14  
Implement the following function according to its specification.

```python
def foo(xs: str) -> str:
    """
    Return a string where the vowels of have been reversed.
    
    The vowels are 'a', 'e', 'i', 'o', 'u' and 'A', 'E', 'I', 'O', 'U'.
    
    >>> foo("drake")
    "dreka"
    
    >>> foo("aAeEiIoOuU")
    "UuOoIiEeAa"
    
    >>> foo("xAyEz")
    "xEyAz"
    
    >>> foo("SaTeXiY")
    "SiTeXaY"
    """
```

<details>
  <summary>查看答案与解析</summary>

**解析：**

```python
def foo(xs: str) -> str:
    vowels = []
    for char in xs:
        if char.lower() in 'aeiou':
            vowels.append(char)
    
    result = []
    vowel_index = len(vowels) - 1
    for char in xs:
        if char.lower() in 'aeiou':
            result.append(vowels[vowel_index])
            vowel_index -= 1
        else:
            result.append(char)
    
    return ''.join(result)
```

</details>

---

Question 15  
Implement the following function according to its specification.

```python
def word_pattern(pattern: str, words: list[str]) -> bool:
    """
    Given a pattern and a word list, determine if the word
    list follows the same pattern. That is to say, ensure
    pattern[j] == pattern[k] only when words[j] == words[k]
    and
    pattern[j] != pattern[k] means words[j] != words[k]
    
    Precondition
    Assume patten is all lowercase letters.
    
    >>> word_patten('aaaa', ['cat', 'cat', 'cat', 'cat'])
    True
    >>> word_pattern('xoox', ['dog', 'cat', 'cat', 'dog'])
    True
    >>> word_pattern('xy', ['cat', 'cat'])
    False
    >>> word_pattern('xooy', ['dog', 'cat', 'cat', 'fish'])
    True
    """
```

<details>
  <summary>查看答案与解析</summary>

**解析：**

```python
def word_pattern(pattern: str, words: list[str]) -> bool:
    if len(pattern) != len(words):
        return False
    
    pattern_to_word = {}
    word_to_pattern = {}
    
    for p, w in zip(pattern, words):
        if p in pattern_to_word:
            if pattern_to_word[p] != w:
                return False
        else:
            pattern_to_word[p] = w
            
        if w in word_to_pattern:
            if word_to_pattern[w] != p:
                return False
        else:
            word_to_pattern[w] = p
            
    return True
```

</details>