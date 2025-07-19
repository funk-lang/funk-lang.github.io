---
layout: doc
title: Getting Started
description: Learn the basics and get your first Funk program running in minutes
---

# Getting Started with Funk

Welcome to Funk! This guide will help you install Funk and write your first program.

## Installation

### Using the installer script

The easiest way to install Funk is using our installer script:

```bash
curl -fsSL https://get.funk-lang.org | sh
```

### Manual installation

1. Download the latest release for your platform from [GitHub Releases](https://github.com/funk-lang/funk/releases)
2. Extract the archive to a directory in your PATH
3. Verify the installation by running `funk --version`

### Platform-specific instructions

#### Windows

```powershell
# Using winget (coming soon)
winget install funk-lang.funk

# Or download the installer
# Run funk-installer.exe and follow the instructions
```

#### macOS

```bash
# Using Homebrew
brew install funk-lang/tap/funk

# Or using the installer script
curl -fsSL https://get.funk-lang.org | sh
```

#### Linux

```bash
# Download and install
wget https://github.com/funk-lang/funk/releases/latest/download/funk-linux-x64.tar.gz
tar -xzf funk-linux-x64.tar.gz
sudo mv funk /usr/local/bin/
```

## Your First Program

Create a new file called `hello.funk`:

```funk
fn main() {
    println("Hello, Funk!")
}
```

Run your program:

```bash
funk run hello.funk
```

You should see:

```
Hello, Funk!
```

## Project Structure

For larger projects, create a new Funk project:

```bash
funk new my-project
cd my-project
```

This creates a directory structure:

```
my-project/
├── Funk.toml          # Project configuration
├── src/
│   └── main.funk      # Main source file
├── tests/
│   └── main_test.funk # Test files
└── README.md
```

## Next Steps

- Read the [Language Reference]({% link _docs/reference.md %}) to learn about Funk's syntax
- Check out [Examples]({% link _docs/examples.md %}) for common patterns
- Browse the [API Documentation]({% link _docs/api.md %}) for the standard library

## Getting Help

- Join our [Discord community](https://discord.gg/funk-lang)
- Ask questions on [Stack Overflow](https://stackoverflow.com/questions/tagged/funk-lang)
- Report issues on [GitHub](https://github.com/funk-lang/funk/issues)
