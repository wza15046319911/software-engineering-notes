# Recursion

**1.** This question relates to the incomplete recursive function definition below that calculates the prime factors of an integer in non-decreasing order. The following gives examples of calling the function:

```python
>>> prime_factors(12)
[2, 2, 3]
>>> prime_factors(17)
[17]
>>> prime_factors(25)
[5, 5]
>>> prime_factors(15)
[3, 5]
```

What expression needs to replace `####` in order to complete the following recursive definition for the following `prime_factors` function?

```python
def prime_factors(n):
    """Return the prime factors of n in non-decreasing order
    prime_factors(int) -> list(int)
    Precondition: n > 1
    """
    for i in range(2, n):
        if n % i == 0:
            ####
    return [n]
```

(a) `return prime_factors(n//i) + [i]`

(b) `return [i] + prime_factors(n//i)`

(c) `return [i].extend(prime_factors(n//i))`

(d) `return prime_factors(n//i).append(i)`

(e) More than one of the above is correct.

**2.** For the following function:

```python
def rec(x):
    if x == 1:
        return x
    else:
        return rec(x-1) * x
```

What will `rec(4)` return?

(a) 0

(b) 4

(c) 8

(d) 24

**3.** For the following function:

```python
def r(x):
    if x == 0:
        return x
    else:
        return r(x-1) + x
```

What will `r(5)` return?

(a) 0

(b) 10

(c) 15

(d) 21

(e) Error

**4.** The following is a recursive function to calculate the product of a list of numbers. Example usage:

```python
product([]) = 0
product([4, 2]) = 8        # 4 * 2
product([3, 2, 4]) = 18    # 3 * 2 * 4
product([2, 3, 4, 5, 6]) = 720  # 2 * 3 * 4 * 5 * 6
```

```python
def product(nums):
    total = 0
    if len(nums) == 0:
        return 0
    elif len(nums) == 1:
        return nums[0]
    return ## TODO: what goes here
```

Which line of code will correctly complete the function above?

(a) `(product(nums[:len(nums) // 2]) * product(nums[len(nums) // 2:]))`

(b) `product(nums[1:]) * product(nums[:-1])`

(c) `(product(nums[1:len(nums) / 2]) * product(nums[len(nums) / 2:-1]))`

(d) `(product(nums[1:len(nums)]) * product(nums[len(nums):-1]))`

**5.** What expression needs to replace `####` in order to complete the following recursive definition for converting a list of binary bits into a positive integer?

```python
def binary2int(digits):
    """ Return the integer represented by the binary digits.
    Example: binary2int([1,1,0,1]) = 13
    binary2int(list(int)) => int
    """
    if digits == []:
        return 0
    else:
        return ####
```

(a) `digits[0] + 2*binary2int(digits[1:])`

(b) `digits[0] + 2*binary2int(digits[:-1])`

(c) `digits[-1] + 2*binary2int(digits[1:])`

(d) `digits[-1] + 2*binary2int(digits[:-1])`

(e) None of the above

**6.** This question relates to the incomplete recursive function definition below that provides indexing into a nested list. The following gives examples of calling the function:

```python
>>> nested = [[[1, 2], 3], 7, [4, [5, 6]], [8, 9, 10]]
>>> recursiveIndex(nested, [])
[[[1, 2], 3], 7, [4, [5, 6]], [8, 9, 10]]
>>> recursiveIndex(nested, [2,1,0])
5
```

The first example above shows what happens when the second argument (the indexing list) is empty. The second example indexes the 0'th element of the 1'th element of the 2'th element of nested.

What expression needs to replace `####` in order to complete the following recursive definition for indexing a nested list?

```python
def recursiveIndex(nested, indexes):
    """Return the element of the required sublist of the nested list
    (nested) at the position specified by indexes
    Precondition: indexes specifies a "valid" element of the nested list """
    if indexes == []:
        return nested
    else:
        return ####
```

(a) `recursiveIndex(nested[indexes[0]], indexes[:-1])`

(b) `recursiveIndex(nested[indexes[0]], indexes[1:])`

(c) `recursiveIndex(nested[indexes[-1]], indexes[:-1])`

(d) `recursiveIndex(nested[indexes[-1]], indexes[1:])`

(e) None of the above

**7.** This question relates to the incomplete recursive function definition below that provides indexing into a nested list. The following gives examples of calling the function:

```python
>>> nested = [[[3, 6], 3], 11, [4, [3, 6]], [12, 2, 10]]
>>> recursive_index(nested, [])
[[[3, 6], 3], 11, [4, [3, 6]], [12, 2, 10]]
>>> recursive_index(nested, [2,1,0])
3
```

The first example above shows what happens when the second argument (the indexing list) is empty. The second example indexes the 0'th element of the 1'th element of the 2'th element of nested.

What expression needs to replace `####` in order to complete the following recursive definition for indexing a nested list?

```python
def recursiveIndex(nested, indexes):
    """Return the element of the required sublist of the nested list
    (nested) at the position specified by indexes
    Precondition: indexes specifies a "valid" element of the nested list """
    if indexes == []:
        return nested
    else:
        return ####
```

(a) `recursive_index(nested[indexes[0]], indexes[:-1])`

(b) `recursive_index(nested[indexes[0]], indexes[1:])`

(c) `recursive_index(nested[indexes[-1]], indexes[:-1])`

(d) `recursive_index(nested[indexes[-1]], indexes[1:])`

(e) None of the above

**8.** The following recursive function definition is used in the next two questions:

```python
def fn1(x):
    if len(x) == [0]:
        return x
    return fn1(x[3:] + x[0])
```

What will the function call `fn1([2, 4, 1, 1, 5])` return?

(a) [5, 2, 1, 4, 1]

(b) [2,5]

(c) [1]

(d) RecursionError will be raised due to maximum recursion depth being exceeded.

**9.** What will the function call `fn1([4, 1, 3, 2, 6])` return?

(a) [7, 4, 1, 3, 2]

(b) [7, 1, 2]

(c) [3, 7]

(d) RecursionError will be raised due to maximum recursion depth being exceeded.

**10.** The following is a recursive function to check to see if an item is in a list of numbers. It assumes that the values in alist are stored in ascending order:

```python
def in_list(alist, item):
    if len(alist) == 0:
        return False
    else:
        midpoint = len(alist) // 2
        if alist[midpoint] == item:
            return ## Fragment 1
        else:
            if item < alist[midpoint]:
                return ## Fragment 2
            else:
                return ## Fragment 3
```

Example usage:

```python
in_list([1, 4, 9, 13, 25], 13) == True
in_list([1, 4, 9, 13, 25], 17) == False
```

Which code fragments will correctly complete the function above?

(a) Fragment 1 is: `True`
Fragment 2 is: `in_list(alist[:midpoint], item)`
Fragment 3 is: `in_list(alist[midpoint+1:], item)`

(b) Fragment 1 is: `True`
Fragment 2 is: `in_list(alist[midpoint+1:], item)`
Fragment 3 is: `in_list(alist[:midpoint], item)`

(c) Fragment 1 is: `False`
Fragment 2 is: `in_list(alist[:midpoint], item)`
Fragment 3 is: `in_list(alist[midpoint+1:], item)`

(d) Fragment 1 is: `False`
Fragment 2 is: `in_list(alist[midpoint+1:], item)`
Fragment 3 is: `in_list(alist[:midpoint], item)`

(e) None of the code fragments would implement the function correctly.

**11.** The following recursive function definition is used in the next two questions:

```python
def rec(x):
    if len(x) == x[0]:
        return x
    return rec(x[2:] + [x[0]])
```

What will the function call `rec([1, 2, 2, 1, 4])` return?

(a) [5, 3, 3, 2, 1]

(b) [5, 3, 1]

(c) [2, 4]

(d) RecursionError will be raised due to maximum recursion depth being exceeded.

(e) None of the above

**12.** What will the function call `rec([4, 2, 3, 8, 6])` return?

(a) [7, 4, 1, 3, 2]

(b) [7, 1, 2]

(c) [3, 7]

(d) RecursionError will be raised due to maximum recursion depth being exceeded.

**13.** This question relates to the incomplete recursive function definition below that provides indexing into a nested list. The following gives examples of calling the function:

```python
>>> nested = [[[1, 2], 3], 7, [4, [5, 6]], [8, 9, 10]]
>>> recursiveIndex(nested, [])
[[[1, 2], 3], 7, [4, [5, 6]], [8, 9, 10]]
>>> recursiveIndex(nested, [2,1,0])
5
```

The first example above shows what happens when the second argument (the indexing list) is empty. The second example indexes the 0'th element of the 1'th element of the 2'th element of nested.

What expression needs to replace `####` in order to complete the following recursive definition for indexing a nested list?

```python
def recursiveIndex(nested, indexes):
    """Return the element of the required sublist of the nested list
    (nested) at the position specified by indexes
    Precondition: indexes specifies a "valid" element of the nested list """
    if indexes == []:
        return nested
    else:
        return ####
```

(a) `recursiveIndex(nested[indexes[0]], indexes[:-1])`

(b) `recursiveIndex(nested[indexes[0]], indexes[1:])`

(c) `recursiveIndex(nested[indexes[-1]], indexes[:-1])`

(d) `recursiveIndex(nested[indexes[-1]], indexes[1:])`

(e) None of the above

**14.** The following recursive function definition is used in the next two questions:

```python
def rec(x):
    if len(x) == x[0]:
        return x
    return rec(x[2:] + [x[0]])
```

What will the function call `rec([3, 3, 2, 1, 5])` return?

(a) [5, 3, 3, 2, 1]

(b) [5, 3, 1]

(c) [2, 5]

(d) RecursionError will be raised due to maximum recursion depth being exceeded.

**15.** What will the function call `rec([4, 1, 3, 2, 7])` return?

(a) [7, 4, 1, 3, 2]

(b) [7, 1, 2]

(c) [3, 7]

(d) RecursionError will be raised due to maximum recursion depth being exceeded.

**16.** The following is a recursive function to calculate the sum of a list of numbers. Example usage:

```python
sum([])      # 0
sum([1])     # 1
sum([1, 2])  # 3  (1 + 2)
sum([1, 2, 3])  # 6  (1 + 2 + 3)
```

```python
def sum(nums):
    total = 0
    if len(nums) == 0:
        return 0
    elif len(nums) == 1:
        return nums[0]
    return ## TODO: what goes here
```

Which code fragment will correctly complete the function above?

(a) `(sum(nums[:len(nums) // 2]) + sum(nums[len(nums) // 2:]))`

(b) `(sum(nums[1:len(nums) / 2]) + sum(nums[len(nums) / 2:-1]))`

(c) `sum(nums[1:len(nums)]) + sum(nums[len(nums):-1])`

(d) `sum(nums[1:]) + sum(nums[:-1])`

**17.** The next two questions refer to the following function definition, which is missing two fragments of code. It is a recursive function to find all the positive whole number divisors of a number between the parameters i and number. The list of divisors will be returned via the parameter result:

```python
def positive_divisors(number: int, i: int, result: list[int]) -> None:
    """
    Precondition: number > 0 and i > 0
    """
    if number % i == 0:
       ## Fragment 1 ##
    if number > i:
       ## Fragment 2 ##
```

Example usage:

```python
r = []
positive_divisors(2, 1, r)
r == [1, 2]
r = []
positive_divisors(9, 1, r)
r == [1, 3, 9]
```

What code is required at `## Fragment 1 ##`?

(a) `return 0`

(b) `return i`

(c) `result += i`

(d) `result.append(i)`

(e) None of the code fragments would implement the function correctly.

**18.** When answering this question, assume that the correct code has been implemented from the previous question.

What code is required at `## Fragment 2 ##`?

(a) `positive_divisors(number, i-1, result)`

(b) `positive_divisors(number, i+1, result)`

(c) `positive_divisors(number, i, result)`

(d) `positive_divisors(number, 1, result)`

(e) None of the code fragments would implement the function correctly.
