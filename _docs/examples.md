---
layout: doc
title: Examples
description: Real-world examples and best practices for common programming tasks
---

# Funk Examples

This page contains practical examples of Funk code for common programming tasks.

## Functions & Pattern Matching

Pattern matching is one of Funk's most powerful features. Here's how to use it effectively:

```funk
fn fibonacci(n: int) -> int {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2)
    }
}

let result = fibonacci(10)
println("Fibonacci(10) = {result}")
```

### Advanced Pattern Matching

```funk
enum Result<T, E> {
    Ok(T),
    Err(E)
}

fn handle_result<T>(result: Result<T, string>) {
    match result {
        Ok(value) => println("Success: {value}"),
        Err(error) => println("Error: {error}")
    }
}

// Pattern matching with guards
fn classify_grade(score: int) -> string {
    match score {
        s if s >= 90 => "A",
        s if s >= 80 => "B",
        s if s >= 70 => "C",
        s if s >= 60 => "D",
        _ => "F"
    }
}
```

## Structs & Methods

Organize your data and behavior with structs and implementations:

```funk
struct Rectangle {
    width: float,
    height: float
}

impl Rectangle {
    fn new(width: float, height: float) -> Rectangle {
        Rectangle { width, height }
    }
    
    fn area(self) -> float {
        self.width * self.height
    }
    
    fn perimeter(self) -> float {
        2.0 * (self.width + self.height)
    }
    
    fn is_square(self) -> bool {
        self.width == self.height
    }
    
    fn scale(mut self, factor: float) {
        self.width *= factor
        self.height *= factor
    }
}

let mut rect = Rectangle::new(10.0, 5.0)
println("Area: {rect.area()}")
println("Perimeter: {rect.perimeter()}")
println("Is square: {rect.is_square()}")

rect.scale(2.0)
println("After scaling - Area: {rect.area()}")
```

## Async Programming

Funk makes asynchronous programming simple and intuitive:

```funk
async fn fetch_data(url: string) -> Result<string> {
    let response = http.get(url).await?
    let text = response.text().await?
    Ok(text)
}

async fn fetch_multiple_urls(urls: [string]) -> Result<[string]> {
    let tasks = urls.map(|url| fetch_data(url))
    let results = futures::join_all(tasks).await
    
    let mut data = []
    for result in results {
        data.push(result?)
    }
    Ok(data)
}

async fn main() {
    let urls = [
        "https://api.example.com/users",
        "https://api.example.com/posts",
        "https://api.example.com/comments"
    ]
    
    match fetch_multiple_urls(urls).await {
        Ok(data) => {
            for (i, content) in data.enumerate() {
                println("Response {i}: {content.len()} bytes")
            }
        },
        Err(e) => println("Error: {e}")
    }
}
```

## Error Handling

Robust error handling with the Result type:

```funk
enum FileError {
    NotFound,
    PermissionDenied,
    InvalidFormat
}

fn read_config_file(path: string) -> Result<Config, FileError> {
    let content = fs::read_to_string(path)
        .map_err(|_| FileError::NotFound)?
    
    let config = parse_config(content)
        .map_err(|_| FileError::InvalidFormat)?
    
    Ok(config)
}

fn main() {
    match read_config_file("config.toml") {
        Ok(config) => println("Config loaded: {config}"),
        Err(FileError::NotFound) => println("Config file not found"),
        Err(FileError::PermissionDenied) => println("Permission denied"),
        Err(FileError::InvalidFormat) => println("Invalid config format")
    }
}
```

## Collections and Iterators

Working with collections efficiently:

```funk
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Filter even numbers, square them, and sum
let sum = numbers
    .iter()
    .filter(|&x| x % 2 == 0)
    .map(|x| x * x)
    .fold(0, |acc, x| acc + x)

println("Sum of squares of even numbers: {sum}")

// Group by condition
let (evens, odds): ([int], [int]) = numbers
    .iter()
    .partition(|&x| x % 2 == 0)

println("Evens: {evens}")
println("Odds: {odds}")

// Working with hashmaps
let mut word_count = HashMap::new()
let text = "the quick brown fox jumps over the lazy dog"

for word in text.split_whitespace() {
    *word_count.entry(word).or_insert(0) += 1
}

for (word, count) in word_count {
    println("{word}: {count}")
}
```

## Modules and Imports

Organizing code across modules:

```funk
// math/mod.funk
pub mod geometry {
    pub struct Point {
        pub x: float,
        pub y: float
    }
    
    impl Point {
        pub fn new(x: float, y: float) -> Point {
            Point { x, y }
        }
        
        pub fn distance_to(self, other: Point) -> float {
            let dx = self.x - other.x
            let dy = self.y - other.y
            (dx * dx + dy * dy).sqrt()
        }
    }
}

pub mod algebra {
    pub fn solve_quadratic(a: float, b: float, c: float) -> Option<(float, float)> {
        let discriminant = b * b - 4.0 * a * c
        if discriminant < 0.0 {
            None
        } else {
            let sqrt_d = discriminant.sqrt()
            let x1 = (-b + sqrt_d) / (2.0 * a)
            let x2 = (-b - sqrt_d) / (2.0 * a)
            Some((x1, x2))
        }
    }
}

// main.funk
use math::geometry::Point
use math::algebra::solve_quadratic

fn main() {
    let p1 = Point::new(0.0, 0.0)
    let p2 = Point::new(3.0, 4.0)
    println("Distance: {p1.distance_to(p2)}")
    
    if let Some((x1, x2)) = solve_quadratic(1.0, -5.0, 6.0) {
        println("Solutions: {x1}, {x2}")
    }
}
```

## Testing

Writing tests in Funk:

```funk
#[cfg(test)]
mod tests {
    use super::*
    
    #[test]
    fn test_fibonacci() {
        assert_eq!(fibonacci(0), 0)
        assert_eq!(fibonacci(1), 1)
        assert_eq!(fibonacci(5), 5)
        assert_eq!(fibonacci(10), 55)
    }
    
    #[test]
    fn test_rectangle_area() {
        let rect = Rectangle::new(10.0, 5.0)
        assert_eq!(rect.area(), 50.0)
        assert_eq!(rect.perimeter(), 30.0)
        assert!(!rect.is_square())
    }
    
    #[test]
    async fn test_async_function() {
        let result = fetch_data("https://httpbin.org/get").await
        assert!(result.is_ok())
    }
}
```

Run tests with:
```bash
funk test
```

## Performance Tips

Writing efficient Funk code:

```funk
// Use iterators instead of collecting when possible
let sum: int = numbers.iter().sum()  // Good
let sum: int = numbers.iter().collect::<Vec<_>>().iter().sum()  // Avoid

// Prefer borrowing over cloning
fn process_string(s: &string) {  // Good
    // Process string
}

fn process_string(s: string) {  // Use only when ownership is needed
    // Process string
}

// Use pattern matching for efficiency
match value {
    Some(x) if x > 10 => process_large(x),
    Some(x) => process_small(x),
    None => handle_none()
}
```

## Advanced Type System: Monads

Funk's sophisticated type system supports higher-kinded types and advanced abstractions like monads:

```funk
trait Monad (m :: * -> *) {
  return: forall a . (a -> m a),
  bind: forall a b . (m a -> ((a -> m b) -> m b))
}

let bindInfix = \ma f -> bind ma f;
let bindFlipped = \f ma -> bind ma f;
let sequence = \ma mb -> bind ma (\_ -> mb);
let join = \mma -> bind mma (\ma -> ma);
let whenM = \p action -> #ifThenElse p
  action
  (return #Unit);
```

This example demonstrates:
- **Higher-kinded types**: `m :: * -> *` for type constructor polymorphism
- **Universal quantification**: `forall` for truly polymorphic functions
- **Lambda expressions**: Concise function syntax with `\`
- **Conditional expressions**: `#ifThenElse` for functional control flow

These examples showcase Funk's expressive syntax and powerful features. For more advanced topics, check out our [Language Reference]({% link _docs/reference.md %}) and [API Documentation]({% link _docs/api.md %}).
