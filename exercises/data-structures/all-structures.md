# Data Structures

**1.** What is the value of x after the following statements are evaluated?

```python
x = [1, 2, 3]
x.pop(1)
y = x.extend([4, 5, 6])
x.pop(3)
```

(a) [1, 2]

(b) [5, 6]

(c) [2, 4, 5, 6]

(d) [1, 3, 4, 6]

(e) Error

**2.** The next 2 questions refer to the following definition:

```python
def g(x, z):
    x.append(z)
    return x
```

What is the value of y after the following is evaluated?

```python
y = [1, 2, 3]
g(y, 4).extend(g(y[:], 4))
```

(a) [1, 2, 3, 4]

(b) [1, 2, 3, 4, 4]

(c) [1, 2, 3, 4, 1, 2, 3, 4]

(d) [1, 2, 3, 4, 1, 2, 3, 4, 4]

(e) [1, 2, 3, 4, 4, 1, 2, 3, 4, 4]

**3.** What is the value of y after the following is evaluated?

```python
y = [1, 2, 3]
g(y[:], 4).extend(g(y, 4))
```

(a) [1, 2, 3, 4]

(b) [1, 2, 3, 4, 4]

(c) [1, 2, 3, 4, 1, 2, 3, 4]

(d) [1, 2, 3, 4, 1, 2, 3, 4, 4]

(e) [1, 2, 3, 4, 4, 1, 2, 3, 4, 4]

**4.** The next 2 questions refer to the following definition:

```python
def g(p):
    w = p.pop(1)
    p.extend(w)
    return p
```

What is the value of y after the following is evaluated?

```python
y = ['d','e','f']
g(y[:]).extend(g(y))
```

(a) ['e','f','d']

(b) ['d','f','e']

(c) ['e','f','d','e','f','d']

(d) ['d','f','e','f','d','e']

(e) Error

**5.** What is the value of y after the following is evaluated?

```python
y = ['d','e','f']
g(y).extend(g(y[:]))
```

(a) ['e','f','d']

(b) ['d','f','e']

(c) ['e','f','d','e','f','d']

(d) ['d','f','e','d','e','f']

(e) Error

**6.** The next 2 questions refer to the following definition:

```python
def g(x, z):
    x = x + [z]
    return x
```

What is the value of y after the following is evaluated?

```python
y = [1, 2, 3]
y.extend(g(y, 4))
```

(a) [1, 2, 3, 4]

(b) [1, 2, 3, 4, 4]

(c) [1, 2, 3, 1, 2, 3, 4]

(d) [1, 2, 3, 4, 1, 2, 3, 4]

(e) [1, 2, 3, 4, 1, 2, 3, 4, 4]

**7.** What is the value of y after the following is evaluated?

```python
y = [1, 2, 3]
y.extend(g(list(y), 4))
```

(a) [1, 2, 3, 4]

(b) [1, 2, 3, 4, 4]

(c) [1, 2, 3, 1, 2, 3, 4]

(d) [1, 2, 3, 4, 1, 2, 3, 4]

(e) [1, 2, 3, 4, 1, 2, 3, 4, 4]

**8.** The next 2 questions refer to the following definition:

```python
def g(p):
    w = p.pop(1)
    p.extend(w)
    return p
```

What is the value of y after the following is evaluated?

```python
y = ['k','l','m']
g(y[:]).extend(g(y))
```

(a) ['l','m','k']

(b) ['k','m','l']

(c) ['l','m','k','l','m','k']

(d) ['k','m','l','k','m','l']

(e) Error

**9.** What is the value of y after the following is evaluated?

```python
y = ['k','l','m']
g(y).extend(g(y[:]))
```

(a) ['l','m','k']

(b) ['k','m','l']

(c) ['l','m','k','l','m','k']

(d) ['k','m','l','k','l','m']

(e) Error

**10.** What is the value of z after the following is evaluated?

```python
y = ['a', 'b']
z = ['t']
y.extend(['c'])
z.append(y)
```

(a) ['t', ['a', 'b', 'c']]

(b) ['t', 'a', 'b', 'c']

(c) ['t', ['c', 'a', 'b']]

(d) ['t', 'c', 'a', 'b']

**11.** What will be the value of x after evaluating these statements?

```python
x = [1, 2, 3, 4]
x.append(x.pop(1))
x.insert(2, x.pop(3))
```

(a) [1, 2, 3, 4]

(b) [2, 4, 3, 1]

(c) [1, 3, 2, 4]

(d) [3, 2, 1, 4]

**12.** The next 2 questions refer to the following definition:

```python
def g(p):
    z = p.pop(0)
    p.extend(z)
    return p
```

What is the value of y after the following is evaluated?

```python
y = ['h','i','j']
g(y[:]).extend(g(y))
```

(a) ['h','i','j']

(b) ['i','j','h']

(c) ['i','j','h','j','h','i']

(d) ['i','j','h','i','j','h']

(e) Error

**13.** What is the value of y after the following is evaluated?

```python
y = ['h','i','j']
g(y).extend(g(y[:]))
```

(a) ['h','i','j']

(b) ['i','j','h']

(c) ['i','j','h','j','h','i']

(d) ['i','j','h','i','j','h']

(e) Error

**14.** What is the value after the following is evaluated?

```python
y = [4, 5, 6, 7]
y.insert(3, y.pop(2))
```

(a) [4, 5, 7, 6]

(b) [4, 6, 7, 5]

(c) [4, 5, 6, 7]

(d) [4, 5, 6, 4]

(e) None of the above

**15.** After the assignment `x = 'a\t\tb\tc\td\t\n'`, what does the expression `x.strip().split()` evaluate to?

(a) ['a', '', 'b', 'c', 'd', '']

(b) ['a', '', 'b', 'c', 'd', '\n']

(c) ['a', 'b', 'c', 'd']

(d) ['a', 'b', 'c', 'd', '']

(e) ['a', 'b', 'c', 'd', '\n']

**16.** After the assignment `z='the big \n dog'` what does the expression `sorted(z.split())` evaluate to?

(a) ['big', 'dog', 'the']

(b) ['\n', 'big', 'dog', 'the']

(c) 'the big \n dog'

(d) ['the', 'big', 'dog']

(e) Error

**17.** After the assignment `z='the big \n dog'` what does the expression `sorted(z.split(sep=' '))` evaluate to?

(a) ['big', 'dog', 'the']

(b) ['\n', 'big', 'dog', 'the']

(c) 'the big \n dog'

(d) '\n', 'big', 'dog', 'the'

(e) Error

**18.** After the assignment `x = 'a,,b,c,d,\n'`, what does the expression `x.strip().split(',')` evaluate to?

(a) ['a', '', 'b', 'c', 'd', '']

(b) ['a', '', 'b', 'c', 'd', '\n']

(c) ['a', 'b', 'c', 'd']

(d) ['a', 'b', 'c', 'd', '']

(e) ['a', 'b', 'c', 'd', '\n']

**19.** What is the value of v after the following assignments are made?

```python
z='roses are red'
v=':'.join(z.split())
```

(a) [ 'roses ': 'are ': 'red ']

(b) 'roses:are:red'

(c) 'roses':'are':'red'

(d) ['roses:are:red']

(e) Error

**20.** After the assignment `z='one \n life'` what does the expression `sorted(z.split())` evaluate to?

(a) ['\n', 'life', 'one']

(b) ['life', 'one', '\n']

(c) ['life', 'one']

(d) '\n', 'life', 'one'

(e) Error

**21.** After the assignment `z='two \t \t pairs'` what does the expression `'\t'.join(z.split('\t'))` evaluate to?

(a) 'two \t pairs'

(b) 'two \t \t pairs'

(c) 'two\tpairs'

(d) None of the above

**22.** What will be in sum after the following loop has completed executing?

```python
sum=''
for e,f in ('ab','cd'):
    sum+=2*e+f
```

(a) ('ababcd')

(b) 'ababcd'

(c) 'aabccd'

(d) Error

(e) None of the other choices are correct

**23.** What will be printed after the following code is executed:

```python
x = input("Please enter a two digit number: ")
x1 = int(x)
x1 = x1[0]
print("The first digit is:", x1)
```

(a) The first digit is: 1

(b) The first digit is: 15

(c) An Error message

(d) The first digit is:

**24.** What is the value of g after the following is evaluated?

```python
y = ['a', 'b']
g= [2]
y.extend([4])
g.append(y)
```

(a) [2, ['a', 'b', 4]]

(b) [2, 'a', 'b', [4]]

(c) None

(d) Error

**25.** What will be the value of x after evaluating these statements?

```python
x = [1, 2, 3, 4]
x.append(x.pop(2))
x.insert(2, x.pop(1))
```

(a) [1, 2, 3, 4]

(b) [2, 4, 3, 1]

(c) [1, 3, 2, 4]

(d) [1, 4, 2, 3]

(e) None of the other options are correct

**26.** What will be printed out after the following code is executed?

```python
for i,j in (['fr','qt'],):
    j,i=i,j
    print(i,j)
```

(a) fr qt

(b) qt fr

(c) f r
q t

(d) r f
t q

(e) None of the other choices are correct

**27.** Consider the following code:

```python
x = input("Please enter a number: ")
x1 =  x[:-1]
print("The number you entered was:", x1)
```

What will be printed after the above code is executed, assuming that you enter 236 when prompted?

(a) The number you entered was: 236

(b) The number you entered was: 23

(c) The number you entered was: 632

(d) An error message

**28.** Assume `y = [3,4,5]` and `z= [1,2]`. What will be popped from y after the following statement is executed?

```python
y.pop(z.extend([1,2])[2])
```

(a) 4

(b) 5

(c) 3

(d) Nothing. An error message will be produced

**29.** What will be the value of x after evaluating these statements?

```python
x = [4, 5, 6, 7]
x.extend(x)
x.insert(1, x.pop(3))
```

(a) [4,7,5,6,[4,5,6,7]]

(b) [4, 7, 5, 6, 4, 5, 6, 7]

(c) None

(d) Error

(e) None of the other options is correct

**30.** What is the value of y after the following is evaluated?

```python
d = {'Brisbane': {2013:24.1, 2014:24.2},'Adelaide': {2012:22.1, 2013:22.6, 2014:22.8}}
y = d.get('Brisbane', {}).get(2012)
```

(a) None

(b) `{}`

(c) [24.1, 22.8]

(d) `{2013:24.1, 2014:24.2}`

(e) Error

**31.** What is the value of y after the following is evaluated?

```python
d = {'Brisbane': {2013:24.1, 2014:24.2},
'Adelaide': {2012:22.1, 2013:22.6, 2014:22.8}}
y = d.get('Adelaide', {}).get(2012)
```

(a) None

(b) `{}`

(c) 22.1

(d) `{2012:22.1, 2013:22.6, 2014:22.8}`

(e) Error

**32.** What is the value of y after the following is evaluated?

```python
d = {0:'Zero', 1:'One', 4:'Four', 5:'Unknown'}
d[3] = 'Three'
y = str(d[0])+str(d[3])+str(d[2])
```

(a) 'UnknownUnknownNone'

(b) 'ZeroThreeUnknown'

(c) 'ZeroThreeTwo'

(d) 'ZeroThreeNone'

(e) Error

**33.** What is the value of y after the following is evaluated?

```python
d = {0:'Zero', 1:'One', 4:'Four', 5:'Unknown'}
d[3] = 'Three'
y = str(d.get(0))+str(d.get(3))+str(d.get(2))
```

(a) 'UnknownUnknownNone'

(b) 'ZeroThreeUnknown'

(c) 'ZeroThreeTwo'

(d) 'ZeroThreeNone'

(e) Error

**34.** What is the value of y after the following is evaluated?

```python
d = {0:'Zero', 1:'One', 4:'Four', 5:'Unknown'}
d[3] = 'Three'
y = str(d.get(0,'Unknown'))+str(d.get(3,'Unknown'))+str(d.get(2,'Unknown'))
```

(a) 'UnknownUnknownNone'

(b) 'ZeroThreeUnknown'

(c) 'ZeroThreeTwo'

(d) 'ZeroThreeNone'

(e) Error

**35.** What is the value of y after the following is evaluated?

```python
d = {'id_1': {'type':'animal', 'name':'Wallaby', 'pos': [[[100,200], 1460245992.4755974]], 'id':'id_1', 'gender':'female', 'tracker_id':'1234'},
'id_2': {'type':'plant', 'id':'id_2', 'pos':[150,500], 'name':'Blackbutt'}}
y = d.get('id_1', {}).get('tracker_id', '')
```

(a) None

(b) `{}`

(c) ''

(d) '1234'

(e) Error

**36.** What is the value of y after the following is evaluated?

```python
d = {'id_1': {'type':'animal', 'name':'Wallaby',
'pos':[[[100,200], 1460245992.4755974]],
'id':'id_1', 'gender':'female', 'tracker_id':'1234'},
'id_2': {'type':'plant', 'id':'id_2', 'pos':[150,500], 'name':'Blackbutt'}}
y = d.get('id_2', {}).get('tracker_id', '')
```

(a) None

(b) `{}`

(c) ''

(d) '1234'

(e) Error

**37.** What is the value of y after the following is evaluated?

```python
d = {'aaa': [1,2], 'bbb':[3], 'ddd':[]}
d['ddd'] = [4]
y = d['aaa'] + d['bbb'] + d['ccc']
```

(a) [1, 2, 3]

(b) [1, 2, 4]

(c) [1, 2, None]

(d) Error

**38.** What is the value of y after the following is evaluated?

```python
d = {'aaa': [1,2], 'bbb':[3], 'ddd':[]}
d['ddd'] = [4]
y = d.get('aaa') + d.get('bbb') + d.get('ccc')
```

(a) [1, 2, 3]

(b) [1, 2, 4]

(c) [1, 2, None]

(d) Error

**39.** What is the value of y after the following is evaluated?

```python
d = {'aaa': [1,2], 'bbb':[3], 'ddd':[]}
d['ddd'] = [4]
y = d.get('aaa', []) + d.get('bbb', []) + d.get('ccc', [])
```

(a) [1, 2, 3]

(b) [1, 2, 4]

(c) [1, 2, None]

(d) Error

**40.** What is the value of d after the following is evaluated?

```python
d = {'a':1, 'b':2}
d[['a','b']] = 34
```

Note: for a dictionary the ordering of the elements does not matter.

(a) `{'a':1, 'b':2, ['a','b']:34}`

(b) `{'a':1, 'b':2, 'a':3, 'b':4}`

(c) `{'a':3, 'b':4}`

(d) Error

**41.** What is the value of y after the following is evaluated?

```python
d = {'Brisbane': {2013:24.1, 2014:24.2},
     'Adelaide': {2012:22.1, 2013:22.6, 2014:22.8}}
y = d.get('Brisbane', {}).get(2012)
```

(a) None

(b) `{}`

(c) [24.1, 22.8]

(d) `{2013:24.1, 2014:24.2}`

(e) Error

**42.** What is the value of y after the following is evaluated?

```python
d = {'Brisbane': {2013:24.1, 2014:24.2},
     'Adelaide': {2012:22.1, 2013:22.6, 2014:22.8}}
y = d.get('Adelaide', {}).get(2012)
```

(a) None

(b) `{}`

(c) 22.1

(d) `{2012:22.1, 2013:22.6, 2014:22.8}`

(e) Error

**43.** What is the value of x after the following is evaluated?

```python
d = {'John' : {'ID': 234, 'Orders': ['soap', 'bath mat']}, 'Lavinia': {'ID': 732, 'Orders':
['mouthwash', 'toothpaste']}}
x=d.get('John').get('Orders',[])
```

(a) []

(b) ['soap', 'bath mat']

(c) `{}`

(d) Error

**44.** What is the value of x after the following is evaluated?

```python
d = {'John' : {'ID': 234, 'Orders': ['soap', 'bath mat']}, 'Lavinia': {'ID': 732, 'Orders':
['mouthwash', 'toothpaste']}}
x=d.get('Mary',{}).get('Orders',[])
```

(a) ['soap', 'bath mat']

(b) []

(c) ['mouthwash', 'toothpaste']

(d) Error

**45.** What is the value of x after the following is evaluated?

```python
d = {'John' : {'ID': 234, 'Orders': ['soap', 'bath mat']}, 'Lavinia': {'ID': 732, 'Orders':
['mouthwash', 'toothpaste']}}
x=d.get('John',{}).get('Orders',[]).append('toothbrush')
```

(a) ['soap', 'bath mat', ['toothbrush']]

(b) ['soap', 'bath mat', 'toothbrush']

(c) None

(d) Error

**46.** What will be the value of y after the following statements are executed?

```python
d1={1:'a', 2:'b'}
d2=d1
d2[3]='c'
y=d1.get(3,'e')
```

(a) 'e'

(b) 'c'

(c) 'b'

(d) None

(e) Error

**47.** After executing the following code:

```python
a={1:"A",2:"B",3:"C"}
b={3:"D",5:"E"}
a.update(b.get(4,'Error'))
```

what would be the contents of a?

(a) `{1: 'A', 2: 'B', 3: 'C', 5: 'E'}`

(b) `{1: 'A', 2: 'B', 3: 'D', 5: 'Error'}`

(c) `{1: 'A', 2: 'B', 3: 'C', 4: 'Error'}`

(d) Error

(e) None of the above

**48.** What is the value of d2 after the following statements are evaluated?

```python
d = {1:'a', 2:'b', 3:'c'}
d2=d.update({5:['def']})
```

(a) `{1:'a', 2:'b', 3:'c'}`

(b) `{1: 'a', 2: 'b', 3: 'c', 5: ['def']}`

(c) `{1: 'a', 2: 'b', 3: 'c', 5: 'def'}`

(d) None

(e) Error

**49.** What is the value of d after the following statements are evaluated?

```python
d = {1:'a', 2:'b', 3:'c'}
d[4] = 'd'
d.get(5, 'e')
```

(a) `{5:'e'}`

(b) `{1:'a', 2:'b', 3:'c'}`

(c) `{1:'a', 2:'b', 3:'c', 4:'d'}`

(d) `{1:'a', 2:'b', 3:'c', 4:'d', 5:'e'}`

(e) Error

**50.** What is the value of x after the following is evaluated?

```python
d = {'Jack Brown' : {'Student No': 532762, 'Courses':
['CSSE1001', 'ECON1010']}, 'Edith Slin': {'Student No':
743672, 'Courses': ['CSSE1001', 'SCIE1000']}}
x=d.get('Jack Brown').get('Courses',[])
```

(a) []

(b) ['CSSE1001', 'ECON1010']

(c) None

(d) `{}`

(e) Error

**51.** What is the value of x after the following is evaluated?

```python
d = {'Jack Brown' : {'Student No': 532762, 'Courses':
['CSSE1001', 'ECON1010']}, 'Edith Slin': {'Student No':
743672, 'Courses': ['CSSE1001', 'SCIE1000']}}
x=d.get('Matthew Gown',{}).get('Courses',[])
```

(a) ['CSSE1001', 'ECON1010']

(b) []

(c) None

(d) `{}`

(e) Error

**52.** What is the value of x after the following is evaluated?

```python
d = {'Jack Brown' : {'Student No': 532762, 'Courses':
['CSSE1001', 'ECON1010']}, 'Edith Slin': {'Student No':743672, 'Courses': ['CSSE1001', 'SCIE1000']}}
x=d.get('Jack Brown',{}).get('Courses', []).append('ENGG1400')
```

(a) ['CSSE1001', 'ECON1010']

(b) ['CSSE1001', 'ECON1010', 'ENGG1400']

(c) None

(d) Error

**53.** What is the value of d after the following statements are evaluated?

```python
d = {'eng':'Hello', 'fre':'Bonjour', 'spa':'Hola',  'chi':'Ni Hao'}
d['spa'] = 'Buenos Dias'
d.get('jpn', 'Konichiwa')
```

(a) `{'spa': 'Buenos Dias'}`

(b) `{'eng': 'Hello', 'fre': 'Bonjour', 'spa': 'Hola', 'chi':'Ni Hao'}`

(c) `{'eng': 'Hello', 'fre': 'Bonjour', 'spa': 'Buenos Dias', 'chi': 'Ni Hao'}`

(d) `{'eng': 'Hello', 'fre': 'Bonjour', 'spa': 'Buenos Dias', 'chi': 'Ni Hao', 'jpn': 'Konichiwa'}`

(e) Error

**54.** After executing the code below, what would be the contents of a?

```python
a={1:"s",2:"t",3:"r"}
b={4:"i",5:"n"}
a.update({6:b.get(5)})
```

(a) `{1: 's', 2: 't', 3: 'r'}`

(b) `{1: 's', 2: 't', 3: 'r', 6: 'n'}`

(c) `{ }`

(d) Error

(e) None of the other choices are correct

**55.** What is the value of d2 after the following statements are evaluated?

```python
d = {1:'a', 2:'b', 3:'c'}
d2 = d.update({5:['def']})
```

(a) `{1: 'a', 2: 'b', 3: 'c', 5: 'def'}`

(b) `{1: 'a', 2: 'b', 3: 'c', 5: ['def']}`

(c) Error

(d) None

(e) `{1:'a', 2:'b', 3:'c'}`

**56.** What is the value of d2 after the following statements are evaluated?

```python
d1 = {1:'c', 2:'d', 3:'e'}
d2=d1.update({4:['f']})
```

(a) `{1:'c', 2:'d', 3:'e'}`

(b) `{1:'c', 2:'d', 3:'e', 4:['f']}`

(c) `{1:'c', 2:'d', 3:'e', 4:'f'}`

(d) None

(e) None of the other choices are correct

**57.** After executing the code below, what would be the contents of a?

```python
a={1:"s",2:"t",3:"r"}
b={4:"i",5:"n"}
a.update({6:b.get(7)})
```

(a) `{1:'s', 2:'t', 3:'r'}`

(b) `{1: 's', 2: 't', 3: 'r', 6: None}`

(c) `{1: 's', 2: 't', 3: 'r', 6: []}`

(d) Error

(e) None of the other choices are correct

**58.** What is the value of d after the following statements are evaluated?

```python
d = {'CA':'Maple Syrup', 'AU':'Vegemite', 'NZ':'Pavlova', 'FR':'Escargot'}
d['SP'] = 'Churro'
d.get('JP', 'Sushi')
```

(a) `{'JP': 'Sushi'}`

(b) `{'SP': 'Churro'}`

(c) `{'CA': 'Maple Syrup', 'AU': 'Vegemite', 'NZ': 'Pavlova', 'FR': 'Escargot'}`

(d) `{'CA': 'Maple Syrup', 'AU': 'Vegemite', 'NZ': 'Pavlova', 'FR': 'Escargot', 'SP': 'Churro'}`

(e) `{'CA': 'Maple Syrup', 'AU': 'Vegemite', 'NZ': 'Pavlova', 'FR': 'Escargot', 'SP': 'Churro', 'JP': 'Sushi'}`
