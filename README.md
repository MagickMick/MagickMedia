### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Magick Media'
  site: 'https://magickmedia.nl'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Magick Media'
    template: 'Magick Media - Online Marketing Bureau'
  description: 'Magick Media - Online Marketing Bureau'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Magick Media'
    images:
      - url: '~/assets/images/default.jpg'
        width: 1200
        height: 628
    type: website

i18n:
  language: nl
  textDirection: ltr

apps:
  blog:
    isEnabled: true
    postsPerPage: 6

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

analytics:
  vendors:
    googleAnalytics:
      id: G-WEFRMSEP18 # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>
