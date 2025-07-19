# Funk Programming Language Website

This is the official website for the Funk programming language, built with Jekyll and hosted on GitHub Pages.

## Quick Start

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler gem

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/funk.github.io.git
   cd funk.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Start the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and visit `http://localhost:4000`

### Adding Content

#### Documentation Pages

Add new documentation pages in the `_docs` directory:

```markdown
---
layout: doc
title: Your Page Title
description: A brief description
---

# Your Content Here

Write your documentation using Markdown syntax.
```

#### Blog Posts

Add new blog posts in the `_posts` directory with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-19
categories: [category1, category2]
author: Your Name
description: "A brief description"
---

# Your Blog Post Content

Write your blog post using Markdown syntax.
```

#### Static Pages

Add static pages in the `_pages` directory:

```markdown
---
layout: page
title: Page Title
permalink: /your-page/
---

# Your Page Content
```

## Site Structure

```
funk.github.io/
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   ├── default.html     # Base layout
│   ├── page.html        # Static pages
│   └── doc.html         # Documentation pages
├── _includes/           # Reusable components
│   ├── header.html      # Site header
│   └── footer.html      # Site footer
├── _docs/               # Documentation pages
├── _posts/              # Blog posts
├── _pages/              # Static pages
├── assets/              # CSS, JS, images
│   ├── css/
│   └── js/
├── index.html           # Homepage
└── README.md            # This file
```

## Writing in Markdown

You can use standard Markdown syntax throughout the site:

### Code Blocks

\`\`\`funk
fn main() {
    println("Hello, Funk!")
}
\`\`\`

### Tables

| Feature | Description |
|---------|-------------|
| Memory Safety | Compile-time guarantees |
| Performance | Zero-cost abstractions |

### Lists

- Feature 1
- Feature 2
- Feature 3

### Links

- [Internal link]({% link _docs/getting-started.md %})
- [External link](https://github.com/funk-lang/funk)

## Customization

### Configuration

Edit `_config.yml` to customize site settings:

```yaml
title: Your Site Title
description: Your site description
url: "https://your-username.github.io"
github_username: your-username
twitter_username: your-twitter
```

### Styling

The main stylesheet is located at `assets/css/style.css`. You can modify the CSS variables at the top of the file to change colors and other design elements:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #10b981;
    /* ... */
}
```

### Navigation

Update the navigation menu in `_config.yml`:

```yaml
navigation:
  - title: Home
    url: /
  - title: Documentation
    url: /docs/
  - title: Blog
    url: /blog/
```

## Deployment

This site is designed to work with GitHub Pages. Simply push your changes to the `main` branch and GitHub will automatically build and deploy your site.

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the root directory with your domain name
2. Configure your DNS provider to point to GitHub Pages
3. Enable "Enforce HTTPS" in your repository settings

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- [GitHub Issues](https://github.com/your-username/funk.github.io/issues)
- [Funk Discord Community](https://discord.gg/funk-lang)
- [Documentation](/docs/)
