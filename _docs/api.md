---
layout: doc
title: API Documentation
description: Auto-generated documentation for the standard library and core modules
---

# Funk Standard Library API

This page provides documentation for Funk's built-in modules and functions.

## Core Types

### Basic Types

#### `int`
```funk
// Integer operations
let x: int = 42
let y = x.abs()        // Absolute value
let z = x.pow(2)       // Power
let s = x.to_string()  // Convert to string
```

#### `float`
```funk
// Floating point operations
let pi: float = 3.14159
let rounded = pi.round()     // Round to nearest integer
let ceiling = pi.ceil()      // Round up
let floor = pi.floor()       // Round down
let sqrt_val = pi.sqrt()     // Square root
```

#### `string`
```funk
// String operations
let text = "Hello, Funk!"
let length = text.len()           // Get length
let upper = text.to_uppercase()   // Convert to uppercase
let lower = text.to_lowercase()   // Convert to lowercase
let trimmed = text.trim()         // Remove whitespace
let parts = text.split(",")       // Split by delimiter
let contains = text.contains("Funk")  // Check if contains substring
```

#### `bool`
```funk
// Boolean operations
let flag = true
let negated = !flag          // Logical NOT
let result = flag && true    // Logical AND
let result2 = flag || false  // Logical OR
```

## Collections

### `Array<T>`
```funk
// Fixed-size arrays
let numbers: [int; 5] = [1, 2, 3, 4, 5]
let length = numbers.len()
let first = numbers[0]
let last = numbers[numbers.len() - 1]

// Array methods
let doubled = numbers.map(|x| x * 2)
let evens = numbers.filter(|x| x % 2 == 0)
let sum = numbers.fold(0, |acc, x| acc + x)
```

### `Slice<T>`
```funk
// Dynamic arrays
let mut items: [string] = []
items.push("Hello")          // Add element
items.push("World")
let popped = items.pop()     // Remove last element
let length = items.len()     // Get length
let is_empty = items.is_empty()  // Check if empty

// Slice operations
let sub_slice = items[1..3]  // Get sub-slice
let contains = items.contains(&"Hello")  // Check if contains
items.sort()                 // Sort in place
items.reverse()              // Reverse in place
```

### `HashMap<K, V>`
```funk
use std::collections::HashMap

let mut map = HashMap::new()
map.insert("key1", "value1")     // Insert key-value pair
map.insert("key2", "value2")

let value = map.get("key1")      // Get value by key
let exists = map.contains_key("key1")  // Check if key exists
let removed = map.remove("key1") // Remove key-value pair

// Iteration
for (key, value) in map {
    println("{key}: {value}")
}
```

### `HashSet<T>`
```funk
use std::collections::HashSet

let mut set = HashSet::new()
set.insert("apple")              // Add element
set.insert("banana")
set.insert("apple")              // Duplicate ignored

let contains = set.contains("apple")  // Check membership
let removed = set.remove("banana")    // Remove element
let length = set.len()               // Get size

// Set operations
let set2 = HashSet::from(["apple", "cherry"])
let union = set.union(&set2)         // Union
let intersection = set.intersection(&set2)  // Intersection
```

## Result and Option Types

### `Option<T>`
```funk
enum Option<T> {
    Some(T),
    None
}

// Option methods
let maybe_value: Option<int> = Some(42)
let is_some = maybe_value.is_some()      // Check if Some
let is_none = maybe_value.is_none()      // Check if None
let unwrapped = maybe_value.unwrap()     // Get value (panics if None)
let or_default = maybe_value.unwrap_or(0)  // Get value or default

// Pattern matching
match maybe_value {
    Some(x) => println("Value: {x}"),
    None => println("No value")
}
```

### `Result<T, E>`
```funk
enum Result<T, E> {
    Ok(T),
    Err(E)
}

// Result methods
let result: Result<int, string> = Ok(42)
let is_ok = result.is_ok()           // Check if Ok
let is_err = result.is_err()         // Check if Err
let unwrapped = result.unwrap()      // Get value (panics if Err)
let or_default = result.unwrap_or(0) // Get value or default

// Error propagation
fn might_fail() -> Result<int, string> {
    let value = another_function()?  // Propagate error with ?
    Ok(value * 2)
}
```

## I/O Operations

### File System (`fs`)
```funk
use std::fs

// Reading files
let content = fs::read_to_string("file.txt")?    // Read entire file
let bytes = fs::read("binary_file.dat")?         // Read as bytes

// Writing files
fs::write("output.txt", "Hello, World!")?       // Write string to file
fs::write("data.dat", &[1, 2, 3, 4])?          // Write bytes to file

// File metadata
let metadata = fs::metadata("file.txt")?
let size = metadata.len()
let is_file = metadata.is_file()
let is_dir = metadata.is_dir()

// Directory operations
fs::create_dir("new_directory")?                // Create directory
fs::create_dir_all("path/to/nested/dir")?      // Create nested directories
fs::remove_file("file.txt")?                   // Remove file
fs::remove_dir("empty_dir")?                   // Remove empty directory
fs::remove_dir_all("directory_tree")?          // Remove directory recursively

// List directory contents
let entries = fs::read_dir(".")?
for entry in entries {
    let path = entry?.path()
    println("{path}")
}
```

### HTTP Client (`http`)
```funk
use std::http

async fn make_requests() -> Result<(), http::Error> {
    // GET request
    let response = http::get("https://api.example.com/users").await?
    let status = response.status()
    let body = response.text().await?
    
    // POST request with JSON
    let json_data = json!({
        "name": "John Doe",
        "email": "john@example.com"
    })
    
    let response = http::post("https://api.example.com/users")
        .header("Content-Type", "application/json")
        .body(json_data.to_string())
        .send()
        .await?
    
    // Custom headers
    let response = http::get("https://api.example.com/protected")
        .header("Authorization", "Bearer token123")
        .header("User-Agent", "FunkApp/1.0")
        .send()
        .await?
    
    Ok(())
}
```

## Concurrency

### Async/Await
```funk
use std::time::Duration

async fn delayed_task(delay: Duration, message: string) -> string {
    sleep(delay).await
    message
}

async fn run_concurrent_tasks() {
    let task1 = delayed_task(Duration::from_secs(1), "First")
    let task2 = delayed_task(Duration::from_secs(2), "Second")
    let task3 = delayed_task(Duration::from_secs(1), "Third")
    
    // Run tasks concurrently
    let results = futures::join!(task1, task2, task3)
    println("Results: {results.0}, {results.1}, {results.2}")
    
    // Run tasks and get first completed
    let first = futures::select!(
        result1 = task1 => result1,
        result2 = task2 => result2,
        result3 = task3 => result3,
    )
    println("First completed: {first}")
}
```

### Channels
```funk
use std::sync::mpsc

async fn producer_consumer_example() {
    let (tx, rx) = mpsc::channel()
    
    // Producer task
    spawn(async move {
        for i in 0..10 {
            tx.send(i).await.unwrap()
            sleep(Duration::from_millis(100)).await
        }
    })
    
    // Consumer task
    spawn(async move {
        while let Some(value) = rx.recv().await {
            println("Received: {value}")
        }
    })
}
```

## Math Module

```funk
use std::math

// Constants
let pi = math::PI
let e = math::E

// Basic functions
let abs_val = math::abs(-5.0)        // Absolute value
let min_val = math::min(10, 20)      // Minimum
let max_val = math::max(10, 20)      // Maximum
let clamped = math::clamp(15, 0, 10) // Clamp to range

// Trigonometry
let sin_val = math::sin(pi / 2.0)    // Sine
let cos_val = math::cos(0.0)         // Cosine
let tan_val = math::tan(pi / 4.0)    // Tangent
let asin_val = math::asin(1.0)       // Arc sine

// Exponential and logarithm
let exp_val = math::exp(1.0)         // e^x
let ln_val = math::ln(e)             // Natural logarithm
let log10_val = math::log10(100.0)   // Base-10 logarithm
let pow_val = math::pow(2.0, 3.0)    // Power

// Rounding
let rounded = math::round(3.7)       // Round to nearest
let ceiling = math::ceil(3.1)        // Round up
let floor = math::floor(3.9)         // Round down
```

## Time and Date

```funk
use std::time::{Duration, Instant, SystemTime}

// Duration
let duration = Duration::from_secs(30)
let millis = Duration::from_millis(500)
let nanos = duration.as_nanos()

// Instant (monotonic time)
let start = Instant::now()
// ... do some work ...
let elapsed = start.elapsed()
println("Operation took: {elapsed:?}")

// System time
let now = SystemTime::now()
let timestamp = now.duration_since(SystemTime::UNIX_EPOCH)?
println("Unix timestamp: {timestamp.as_secs()}")
```

## JSON Handling

```funk
use std::json

// Parsing JSON
let json_str = r#"{"name": "John", "age": 30, "active": true}"#
let parsed: json::Value = json::parse(json_str)?

// Accessing values
let name = parsed["name"].as_string()?
let age = parsed["age"].as_int()?
let active = parsed["active"].as_bool()?

// Creating JSON
let data = json!({
    "users": [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"}
    ],
    "total": 2
})

let json_string = data.to_string()
```

For complete API documentation including all available methods and examples, visit our [online API reference](https://docs.funk-lang.org/api/).
