# Tutorial on Strings in C

Strings are one of the most commonly used data types in C programming. A string in C is essentially an array of characters terminated by a null character (`'\0'`). This tutorial will guide you through the basics of working with strings in C.

## Table of Contents
1. [Declaring and Initializing Strings](#declaring-and-initializing-strings)
2. [Reading and Printing Strings](#reading-and-printing-strings)
3. [String Functions in C](#string-functions-in-c)
4. [Common String Operations](#common-string-operations)
5. [Example Programs](#example-programs)

---

## 1. Declaring and Initializing Strings

In C, strings are arrays of characters. You can declare and initialize a string in several ways:

### Declaring a String
```c
char str[50]; // Declares a string that can hold up to 49 characters plus the null terminator
```

### Initializing a String
```c
char str1[] = "Hello, World!"; // Automatically calculates the size and includes the null terminator
char str2[20] = "Hello";       // Initializes with "Hello" and reserves space for more characters
char str3[] = {'H', 'e', 'l', 'l', 'o', '\0'}; // Manually initializing with a null terminator
```

---

## 2. Reading and Printing Strings

### Reading a String from the User
You can use `scanf()` or `fgets()` to read a string from the user.

- **Using `scanf()`**:
  ```c
  char name[50];
  printf("Enter your name: ");
  scanf("%s", name); // Reads a single word (stops at whitespace)
  ```

- **Using `fgets()`**:
  ```c
  char name[50];
  printf("Enter your name: ");
  fgets(name, sizeof(name), stdin); // Reads an entire line including spaces
  ```

### Printing a String
Use `printf()` to print a string:
```c
printf("Your name is: %s\n", name);
```

---

## 3. String Functions in C

The C standard library (`<string.h>`) provides several useful functions for working with strings. Here are some of the most commonly used ones:

### `strlen()` - String Length
Returns the length of the string (excluding the null terminator).
```c
#include <string.h>
char str[] = "Hello";
int length = strlen(str); // length = 5
```

### `strcpy()` - String Copy
Copies one string to another.
```c
char src[] = "Hello";
char dest[50];
strcpy(dest, src); // dest now contains "Hello"
```

### `strcat()` - String Concatenation
Appends one string to the end of another.
```c
char str1[50] = "Hello";
char str2[] = " World!";
strcat(str1, str2); // str1 now contains "Hello World!"
```

### `strcmp()` - String Compare
Compares two strings lexicographically.
```c
char str1[] = "apple";
char str2[] = "banana";
int result = strcmp(str1, str2); // result < 0 because "apple" comes before "banana"
```

### `strchr()` - Find Character in String
Finds the first occurrence of a character in a string.
```c
char str[] = "Hello";
char *ptr = strchr(str, 'e'); // ptr points to the 'e' in "Hello"
```

### `strstr()` - Find Substring in String
Finds the first occurrence of a substring in a string.
```c
char str[] = "Hello, World!";
char *ptr = strstr(str, "World"); // ptr points to "World" in the string
```

---

## 4. Common String Operations

### Iterating Through a String
You can use a loop to iterate through each character in a string:
```c
char str[] = "Hello";
for (int i = 0; str[i] != '\0'; i++) {
    printf("%c\n", str[i]);
}
```

### Converting a String to Uppercase or Lowercase
You can use `toupper()` and `tolower()` from `<ctype.h>` to convert characters:
```c
#include <ctype.h>
char str[] = "Hello";
for (int i = 0; str[i] != '\0'; i++) {
    str[i] = toupper(str[i]); // Converts to uppercase
}
printf("%s\n", str); // Outputs "HELLO"
```

---

## 5. Example Programs

### Example 1: Reverse a String
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello";
    int length = strlen(str);
    for (int i = 0; i < length / 2; i++) {
        char temp = str[i];
        str[i] = str[length - i - 1];
        str[length - i - 1] = temp;
    }
    printf("Reversed string: %s\n", str); // Outputs "olleH"
    return 0;
}
```

### Example 2: Check if a String is a Palindrome
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "madam";
    int length = strlen(str);
    int isPalindrome = 1;
    for (int i = 0; i < length / 2; i++) {
        if (str[i] != str[length - i - 1]) {
            isPalindrome = 0;
            break;
        }
    }
    if (isPalindrome) {
        printf("%s is a palindrome.\n", str);
    } else {
        printf("%s is not a palindrome.\n", str);
    }
    return 0;
}
```

---

## Conclusion

Strings are a fundamental part of C programming. By understanding how to declare, initialize, and manipulate strings, you can perform a wide range of tasks in your programs. The `<string.h>` library provides many useful functions to simplify string operations. Practice these concepts to become proficient in working with strings in C.

Happy coding! 🚀
