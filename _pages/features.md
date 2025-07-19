---
layout: page
title: Features
description: Discover what makes Funk a powerful and expressive programming language
permalink: /features/
---

# Why Choose Funk?

Funk is designed to be A friendly, higher-kinded functional programming language. Here are the key features that make Funk special:

<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">🚀</div>
    <h3>Fast & Efficient</h3>
    <p>Compiled to native code with zero-cost abstractions and memory safety without garbage collection.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🎨</div>
    <h3>Expressive Syntax</h3>
    <p>Clean, readable syntax that makes complex concepts simple and intuitive to express.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🔧</div>
    <h3>Modern Tooling</h3>
    <p>Built-in package manager, formatter, and comprehensive development tools out of the box.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🌐</div>
    <h3>Cross-Platform</h3>
    <p>Write once, run anywhere. Supports Windows, macOS, Linux, and WebAssembly targets.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🔒</div>
    <h3>Memory Safe</h3>
    <p>Prevent common programming errors with compile-time memory safety guarantees.</p>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">⚡</div>
    <h3>Concurrent</h3>
    <p>Built-in support for async/await and lightweight threading for high-performance applications.</p>
  </div>
</div>

## Deep Dive into Features

### Memory Safety Without Garbage Collection

Funk uses advanced static analysis to ensure memory safety at compile time:

```funk
fn safe_memory_example() {
    let data = vec![1, 2, 3, 4, 5]
    let slice = &data[1..4]  // Borrow checking ensures safety
    
    // This would be caught at compile time:
    // drop(data)  // Error: cannot drop while borrowed
    
    println("Slice: {slice}")
    // slice goes out of scope, borrow ends
    // data can now be safely dropped
}
```

### Zero-Cost Abstractions

High-level features compile down to efficient machine code:

```funk
// This iterator chain...
let result = numbers
    .iter()
    .filter(|&x| x % 2 == 0)
    .map(|x| x * x)
    .sum()

// ...compiles to something like this loop:
let mut result = 0
for x in numbers {
    if x % 2 == 0 {
        result += x * x
    }
}
```

### Pattern Matching

Powerful pattern matching for control flow and data destructuring:

```funk
enum Message {
    Quit,
    Move { x: int, y: int },
    Write(string),
    ChangeColor(int, int, int)
}

fn process_message(msg: Message) {
    match msg {
        Message::Quit => {
            println("Quitting...")
        },
        Message::Move { x, y } => {
            println("Moving to ({x}, {y})")
        },
        Message::Write(text) => {
            println("Text message: {text}")
        },
        Message::ChangeColor(r, g, b) => {
            println("Changing color to RGB({r}, {g}, {b})")
        }
    }
}
```

### Async/Await

Built-in support for asynchronous programming:

```funk
use std::time::Duration

async fn fetch_and_process() -> Result<string> {
    let data = fetch_data("https://api.example.com").await?
    let processed = process_data(data).await?
    Ok(processed)
}

async fn main() {
    let tasks = vec![
        fetch_and_process(),
        fetch_and_process(),
        fetch_and_process(),
    ]
    
    let results = futures::join_all(tasks).await
    for result in results {
        match result {
            Ok(data) => println("Success: {data}"),
            Err(e) => println("Error: {e}")
        }
    }
}
```

### Modern Tooling

Funk comes with everything you need:

#### Package Manager
```bash
# Create a new project
funk new my-project

# Add dependencies
funk add http-client json-parser

# Build and run
funk build
funk run
```

#### Formatter
```bash
# Format your code
funk fmt

# Check formatting without changing files
funk fmt --check
```

#### Testing Framework
```bash
# Run tests
funk test

# Run tests with coverage
funk test --coverage

# Run specific test
funk test test_name
```

#### Documentation Generator
```bash
# Generate documentation
funk doc

# Serve documentation locally
funk doc --serve
```

### Cross-Platform Support

Funk targets multiple platforms from a single codebase:

```toml
# Funk.toml
[package]
name = "my-app"
version = "1.0.0"

[targets]
default = "native"

[targets.native]
# Compiles to native executable

[targets.wasm]
# Compiles to WebAssembly
target = "wasm32-unknown-unknown"

[targets.android]
# Cross-compile for Android
target = "aarch64-linux-android"
```

Build for different targets:
```bash
funk build --target native
funk build --target wasm
funk build --target android
```

## Performance Characteristics

Funk is designed for performance:

- **Zero-cost abstractions**: High-level features have no runtime overhead
- **Ahead-of-time compilation**: No JIT compilation delays
- **Memory efficient**: No garbage collector, predictable memory usage
- **SIMD support**: Automatic vectorization where possible
- **Link-time optimization**: Aggressive optimization across module boundaries

## Comparison with Other Languages

| Feature | Funk | Rust | Go | TypeScript |
|---------|------|------|----|-----------
| Memory Safety | ✅ | ✅ | ❌ | ❌ |
| Garbage Collector | ❌ | ❌ | ✅ | ✅ |
| Pattern Matching | ✅ | ✅ | ❌ | ❌ |
| Async/Await | ✅ | ✅ | ✅ | ✅ |
| Zero-cost Abstractions | ✅ | ✅ | ❌ | ❌ |
| Learning Curve | Medium | Hard | Easy | Easy |

## Getting Started

Ready to experience these features yourself? 

1. **[Install Funk]({% link _docs/getting-started.md %})** - Get up and running in minutes
2. **[Try Examples]({% link _docs/examples.md %})** - See Funk's features in action
3. **[Read the Reference]({% link _docs/reference.md %})** - Learn the language in depth

---

*Have questions about Funk's features? Join our [Discord community](https://discord.gg/funk-lang) for help and discussion.*
