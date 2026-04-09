# Claude Instructions for winkler.dev

## Commit & Branch Naming Conventions

### Commits

- **Format**: `#XXX commit message in lowercase imperative mood`
- **Examples**:
  - `#5 rename project to winkler.dev`
  - `#6 add about section with bio and skills`
- **Rules**:
  - Always prefix with issue number
  - Use lowercase only
  - Use imperative mood (add, fix, update — not added, fixed, updated)
  - No colon after issue number
  - Always include `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` trailer
  - Commit each logical unit of work separately

### Branches

- **Format**: `XXX-short-description`
- **Examples**:
  - `5-rename-to-winkler-dev`
  - `6-about-section`
  - `7-claude-md`

### Pull Requests

- **Format**: `#XXX Short Title In Title Case`
- **Assignees**: Always assign `b-at-neu` (`--assignee "b-at-neu"`)
- **Issue Linking**: Use `Closes #XXX` in the PR body

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Database**: Prisma ORM (v7) + PostgreSQL
- **Prisma Client**: Uses `@prisma/adapter-pg` — always pass the adapter when constructing `PrismaClient`
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript (strict mode)

## Architecture & Patterns

### API Layer

- **No API routes** — use Server Actions for all mutations
- **Server components** for data fetching
- Data access functions live in `lib/`

### File Organization

```
app/
  layout.tsx
  page.tsx
components/       # one file per component, PascalCase
lib/
  prisma.ts       # Prisma singleton with pg adapter
  projects.ts     # data access functions
prisma/
  schema.prisma
prisma.config.ts
```

### Prisma

- Always use `npx prisma` (not `node_modules/.bin/prisma`)
- Schema datasource has no `url` — connection is passed via `@prisma/adapter-pg` at runtime
- `DATABASE_URL` env var provides the connection string

### Components

- Default to server components
- Only use `'use client'` when needed (interactivity, hooks, browser APIs)
- Named exports preferred over default exports — exception: page/layout files (Next.js requires default)

### Code Style

- No `useEffect` for data fetching — use server components
- No `eslint-disable` comments — fix the underlying issue
- No custom CSS — Tailwind only
- For single-line conditionals/loops, omit curly braces

## Quality Checks

Before pushing, run:

```bash
npx eslint .
npx tsc --noEmit
```
