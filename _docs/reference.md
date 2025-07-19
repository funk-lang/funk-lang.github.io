---
layout: doc
title: Language Reference
description: Complete reference for Funk's syntax, types, and standard library
---

# Funk Language Reference

This is the complete reference for the Funk programming language.

## Table of Contents

- [Basic Syntax](#basic-syntax)
- [Variables and Constants](#variables-and-constants)
- [Data Types](#data-types)
- [Functions](#functions)
- [Control Flow](#control-flow)
- [Pattern Matching](#pattern-matching)
- [Structs and Methods](#structs-and-methods)
- [Enums](#enums)
- [Error Handling](#error-handling)
- [Modules](#modules)

## Basic Syntax

Funk uses a clean, expressive syntax inspired by modern programming languages.

### Comments

```funk
// Single line comment

/* 
   Multi-line comment
   can span multiple lines
*/

/// Documentation comment
/// Used for generating docs
fn documented_function() {
    // Function body
}
```

### Identifiers

```funk
// Valid identifiers
let variable_name = 42
let camelCase = "hello"
let PascalCase = true
let _private = "hidden"
let name2 = "valid"

// Invalid identifiers
// let 2name = "invalid"  // Cannot start with number
// let fn = "invalid"     // Cannot use keywords
```

## Variables and Constants

### Variable Declaration

```funk
// Mutable variables
let mut counter = 0
counter = counter + 1

// Immutable variables (default)
let name = "Funk"
// name = "Other"  // Error: cannot assign to immutable variable

// Type annotations
let age: int = 25
let height: float = 5.9
let is_active: bool = true
```

### Constants

```funk
// Compile-time constants
const PI: float = 3.14159
const MAX_SIZE: int = 1000
const APP_NAME: string = "My App"
```

## Data Types

### Primitive Types

```funk
// Integer types
let byte_val: i8 = 127
let short_val: i16 = 32767
let int_val: i32 = 2147483647
let long_val: i64 = 9223372036854775807
let size_val: isize = 1000  // Platform-dependent

// Unsigned integers
let ubyte_val: u8 = 255
let ushort_val: u16 = 65535
let uint_val: u32 = 4294967295
let ulong_val: u64 = 18446744073709551615
let usize_val: usize = 1000  // Platform-dependent

// Floating point
let float_val: f32 = 3.14
let double_val: f64 = 3.141592653589793

// Boolean
let is_true: bool = true
let is_false: bool = false

// Character and String
let char_val: char = 'A'
let string_val: string = "Hello, World!"
```

### Collection Types

```funk
// Arrays (fixed size)
let numbers: [int; 5] = [1, 2, 3, 4, 5]
let mut arr = [0; 10]  // Array of 10 zeros

// Slices (dynamic arrays)
let slice: [int] = [1, 2, 3, 4, 5]
let mut dynamic = []  // Empty slice

// Strings
let text = "Hello"
let multiline = """
    This is a
    multiline string
"""

// Tuples
let point: (int, int) = (10, 20)
let person: (string, int, bool) = ("Alice", 30, true)
```

## Functions

### Function Declaration

```funk
// Basic function
fn greet(name: string) {
    println("Hello, {name}!")
}

// Function with return type
fn add(a: int, b: int) -> int {
    a + b  // Last expression is returned
}

// Function with explicit return
fn multiply(a: int, b: int) -> int {
    return a * b
}

// Multiple parameters
fn calculate(x: float, y: float, operation: string) -> float {
    match operation {
        "add" => x + y,
        "subtract" => x - y,
        "multiply" => x * y,
        "divide" => x / y,
        _ => 0.0
    }
}
```

### Function Features

```funk
// Default parameters
fn greet_with_title(name: string, title: string = "Mr.") {
    println("Hello, {title} {name}!")
}

// Variable arguments
fn sum(numbers: ...int) -> int {
    let mut total = 0
    for num in numbers {
        total += num
    }
    total
}

// Higher-order functions
fn apply_twice(f: fn(int) -> int, x: int) -> int {
    f(f(x))
}

let double = |x| x * 2
let result = apply_twice(double, 5)  // Result: 20
```

## Control Flow

### Conditional Statements

```funk
// If-else
let age = 18
if age >= 18 {
    println("Adult")
} else if age >= 13 {
    println("Teenager")
} else {
    println("Child")
}

// If expressions
let status = if age >= 18 { "adult" } else { "minor" }
```

### Loops

```funk
// For loops
for i in 0..10 {
    println("Number: {i}")
}

// For with collections
let numbers = [1, 2, 3, 4, 5]
for num in numbers {
    println("Value: {num}")
}

// While loops
let mut count = 0
while count < 5 {
    println("Count: {count}")
    count += 1
}

// Loop with break and continue
loop {
    let input = read_line()
    if input == "quit" {
        break
    }
    if input.is_empty() {
        continue
    }
    println("You entered: {input}")
}
```

## Pattern Matching

```funk
// Basic match
fn classify_number(n: int) -> string {
    match n {
        0 => "zero",
        1..=10 => "small",
        11..=100 => "medium",
        _ => "large"
    }
}

// Match with guards
fn describe_number(n: int) -> string {
    match n {
        x if x < 0 => "negative",
        0 => "zero",
        x if x % 2 == 0 => "even positive",
        _ => "odd positive"
    }
}

// Destructuring tuples
let point = (3, 4)
match point {
    (0, 0) => println("Origin"),
    (x, 0) => println("On x-axis at {x}"),
    (0, y) => println("On y-axis at {y}"),
    (x, y) => println("Point at ({x}, {y})")
}
```

This is just the beginning of the language reference. Each section would be expanded with more detailed examples and explanations.
