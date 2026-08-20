# jcfausto.com

Personal website for Julio Cesar Fausto — Head of Engineering, writer, and photographer in Berlin.

Built with [Jekyll](https://jekyllrb.com/). The visual design is a custom theme (not a third-party Jekyll theme).

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Or with Docker:

```bash
docker compose up
```

The site is at [http://localhost:4000](http://localhost:4000).

## Adding content

**Writing** (long-form) — create a file in `_posts/`:

```text
_posts/2026-08-19-the-slug.md
```

```yaml
---
title: "The title"
language: en
description: "One or two sentences for search results and social previews."
image: /assets/images/writing/the-slug.jpg
own_writing: true
---

Body of the post.
```

Published at `/writing/the-slug/`. Use `language: pt` for Portuguese (Open Graph locale is set to `pt_BR` automatically).

`description` and `image` are optional but worth setting. Without them, search snippets are taken from the start of the post, and shares fall back to the site portrait.

Do not repeat the title as a `# Heading` in the body — the layout already renders it as the page `<h1>`.

Set `own_writing: true` when the post was written by you and AI was used only for grammar and structure. That shows a short authorship note at the bottom of the post. Omit it, or set `own_writing: false`, to hide the note.

**Thoughts** (short notes) — create a file in `_thoughts/`:

```text
_thoughts/2026-08-19-a-short-note.md
```

```yaml
---
date: 2026-08-19 14:30:00
link: https://example.com
link_title: Optional linked page
---

The thought itself. No title needed.
```

Published at `/thoughts/2026-08-19-a-short-note/`. `link` / `link_title` are optional.

## Photography

Collections live at `/photography/`. Each collection is a file in `_galleries/` and its images are listed in `_data/photos.yml`.

### Add a photo

1. Save a web-sized JPEG in `assets/images/photography/{collection-slug}/the-file.jpg`.
2. Burn in the corner copyright (skipped if the file is already marked):

```bash
./scripts/watermark-photos
```

That writes **© Julio Cesar Fausto** in the bottom-right of collection JPEGs. Use `--journal` to mark images under `assets/images/photography/journal/` as well. Needs ImageMagick (`magick`).
3. Add a row to `_data/photos.yml`:

```yaml
- src: /assets/images/photography/woodlands-and-landscapes/the-file.jpg
  alt: "A short description of the picture"
  caption: "Tuscany, Italy"
  collection: woodlands-and-landscapes
```

Collection slugs:

- `woodlands-and-landscapes`
- `architectural-and-cityscapes`
- `nature-and-animal-life`

To feature a photo on the homepage mosaic, add `featured: true` and a mosaic class (`p1`–`p8`).

A collection’s cover image is `cover:` in `_galleries/{slug}.md`.

### Photography journal

Notes from the old photography site live at `/photography/journal/`. Add a file in `_photo_journal/`:

```text
_photo_journal/the-slug.md
```

```yaml
---
title: "The title"
date: 2026-08-19
language: en
description: "One or two sentences for search results and social previews."
image: /assets/images/photography/journal/the-slug/cover.jpg
---

The post.
```

Published at `/photography/journal/the-slug/`. These do **not** appear in Writing or the writing feeds (`/atom.xml`, `/rss.xml`).

## Books

Create `_books/the-slug.md`. The page lives at `/bookshelf/the-slug/`.

### Import from CSV

Catalog books in `books_to_process.csv` (one row per book), then from the repo root:

```bash
./scripts/process-books
```

That creates `_books/<slug>.md` and **removes the row from the CSV**. Rows that fail (missing title, bad status) stay in the file. If the page already exists, it is left untouched and the row is still removed so you can re-run a full catalog safely.

Cover images named `<slug>.jpg` in `assets/images/books/` are picked up automatically. Run `./scripts/process-book-covers` first if you dropped unprocessed files.

CSV columns:

```text
title,author,status,genre,language,cover,started,finished,origin,notes,slug
```

| Column | Required | Notes |
|---|---|---|
| `title` | yes | Used to build the slug when `slug` is blank |
| `author` | no | |
| `status` | no | `reading` · `read` · `unread` (default `unread`) |
| `genre` | no | One value, or several separated by `;` |
| `language` | no | `en` is the site default and is omitted from the file |
| `cover` | no | Path or filename; otherwise uses `assets/images/books/<slug>.jpg` if present |
| `started` | no | `YYYY-MM-DD` |
| `finished` | no | `YYYY-MM-DD` |
| `origin` | no | How you got to the book |
| `notes` | no | Body of the book page |
| `slug` | no | Filename without `.md`. Example: `filterworld` |

Quote cells that contain commas. Example row:

```csv
"Filterworld: How Algorithms Flattened Culture",Kyle Chayka,reading,Culture,en,,2026-08-01,,"A quote in a YouTube video.",,filterworld
```

### Processing cover images

Drop the original photo or download (JPEG, PNG, HEIC, or WebP), then convert it locally. Do not put the original in the processed folder.

**Option A — prefix in the books folder**

```text
assets/images/books/_unprocessed-the-slug.jpg
```

**Option B — drop folder**

```text
assets/images/books/_unprocessed/the-slug.jpg
```

From the repo root:

```bash
./scripts/process-book-covers
```

That writes `assets/images/books/the-slug.jpg` (JPEG, longest side at most 900px, never upscaled). Originals are gitignored and are not published.

Then set `cover: /assets/images/books/the-slug.jpg` on the book.

### Front matter

```yaml
---
title: "The book title"
author: Author Name
status: reading
genre: Novel
language: en
cover: /assets/images/books/the-slug.jpg
image: /assets/images/books/the-slug.jpg
description: "Notes on The book title by Author Name — on Julio Cesar Fausto’s bookshelf."
started: 2026-08-19
finished: 2026-09-01
origin: |
  Who mentioned it, a footnote in another book, a chance find.
---

Optional notes. Leave empty if this is only a shelf entry.
```

| Tag | Required | Values | Where it shows |
|---|---|---|---|
| `title` | yes | string | Book page and cards |
| `author` | no | string | Book page and cards |
| `status` | yes | `reading` · `read` · `unread` | Eyebrow and shelf grouping |
| `genre` | no | string, or a list: `[Fiction, Philosophy]` | Eyebrow (`EN · Novel · Reading`) |
| `language` | no | `en` (default) · `pt` · … | Eyebrow, uppercased |
| `cover` | no | `/assets/images/books/the-slug.jpg` | Cover image |
| `image` | no | same as `cover` | Open Graph / Twitter preview |
| `description` | no | string | Search snippet and social card |
| `started` | no | `YYYY-MM-DD` | `Started Aug 2026` |
| `finished` | no | `YYYY-MM-DD` | `Finished Sep 2026` |
| `origin` | no | markdown | “How did I get to this book?” |
| *(body)* | no | markdown | Notes, below origin |

- `reading` books appear on the homepage and at the top of `/bookshelf/`.
- `read` and `unread` (“On the shelf”) appear only on `/bookshelf/`.
- Notes and `origin` do **not** show up in Writing or the writing feeds (`/atom.xml`, `/rss.xml`).
- `redirect_from` is supported if an old URL should keep working.

## Feeds

- Writing (Atom): `/atom.xml` — `/feed.xml` redirects here
- Writing (RSS): `/rss.xml`
- Thoughts (Atom): `/thoughts.xml`

## License

All rights reserved. See [LICENSE](LICENSE). The site and its content may not be used commercially or to train AI models. Permissions: jcfausto@gmail.com.
