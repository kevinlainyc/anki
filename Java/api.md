# IT::Java::Api

## given char/String how to find first/last index of the char/String in a String/Stringbuilder?

- given char/String t
- s = "abcdefg" or = new StringBuilder("abcdefg"), t = 'e' or "e"
- what is the result if given char/String not found?

%

- s.indexOf(t)
  - need to convert char to string, before use indexOf
- s.lastIndexOf(t)
- return -1 if not found

[#Java::Api::StringManipulation]

## how to convert char to String?

- given 'a'

%

- 'a' + ""
- String.valueOf('a')
- Character.toString('a')

[#Java::Api::StringManipulation]

## given String s = "abcdefg", how to delete 'e' from s ?

- multiple ways

%

- use String.split(regex)

```java
String x = "abcdefg";
String[] res = x.split("e");
System.out.println(res[0] + res[1]);
```

- use StringBuilder.deleteCharAt(index)

```java
String x = "abcdefg";
StringBuilder sb = new StringBuilder(x);
sb.deleteCharAt(x.indexOf("e"));
System.out.println(sb.toString());
```

[#Java::Api::StringManipulation]
