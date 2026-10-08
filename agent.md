# AGENTS.md

## Main rule
Do only what I ask in the prompt, and nothing more. Work only on the section or part I name.

## Before you change anything
- First analyze the project and find exactly where the code for the section I named is. Check all related files carefully.
- Check if something like it already exists anywhere in the project. If it does, reuse it and work on the existing code. Never create it again.
- Check if pages share a common file or template. If they do, edit only that one place.
- Never create duplicate code, duplicate components, or duplicate files.

## Content
- Never change, rewrite, reword, shorten, or reorder any existing content.
- Never add any extra content: no new text, headings, paragraphs, buttons, icons, images, or sections.
- Only add or change content when I clearly ask for it in the prompt.
- If I ask you to add content, add only what I asked for.

## SEO (protect it)
- Never change or remove the page title, meta description, meta tags, canonical link, or Open Graph tags.
- Never change or remove existing headings (h1, h2, h3...) or their order. Do not change a heading into a different level.
- Never change or remove image alt text, image file names, or links (URLs).
- Never change or remove schema / structured data (JSON-LD).
- Do not change page URLs, slugs, or redirects.
- Do not hide existing content in a way that search engines cannot read. Content inside things like accordions or tabs must stay in the page's HTML.
- Do not add or remove noindex, nofollow, or robots settings.
- Use proper, meaningful HTML tags for whatever you build (for example buttons for clickable items, lists for lists).
- Only add or change SEO items (titles, descriptions, alt text, schema) when I clearly ask for it.

## Scope
- Edit only the section I mention. Do not touch any other section, page, or component.
- Do not change fonts, colors, spacing, or layout unless I ask.
- Use the same fonts and colors already used on the site.
- Whatever you build must look good on mobile, tablet, and laptop.
- Do not refactor, rename, or "clean up" anything on your own.

## Files and libraries
- Do not create new files if the code is already there.
- Only create a new file if it is truly needed, and tell me why before doing it.
- Do not install or add any libraries, packages, or plugins.
- Do not delete or rename existing files.

## Commands
- Do not run build, check, test, or git commands until I approve.

## If unsure
- If the request is unclear, or you think something else needs to change, ask me first. Do not guess.

## After finishing: explain it to me
When you finish, write a simple explanation guide so I can learn from what you did. I am a beginner, so explain everything in an easy, friendly way.

Style:
- Use short sentences. One idea per sentence.
- Use bold text for the most important words.
- Use simple words. If you must use a technical word, explain it right away in plain language.
- Use real-world examples and analogies (for example: "the brain", "the skeleton", "the muscles", "the clothes" of a file).
- Use emojis for section headings to make the guide easy to scan.
- Explain the "why", not only the "what". Tell me the idea behind the change.

What to include, in this order:
1. **The Big Picture:** what problem you fixed and the idea behind the solution, in a few simple sentences.
2. **A diagram:** a visual map showing how it was before and how it is now (a flow diagram or a simple ASCII diagram).
3. **A comparison table:** old way vs. new way, so I can see why the change is better.
4. **Line-by-line code breakdown:** go through the code in small parts. For each part, show the code, then explain "What is happening here?" in simple bullet points.
5. **How it connects:** show how the new code is used or plugged into the page.
6. **Files changed:** list every file you edited and what you changed in each, in simple words.
7. **What to learn:** tell me which parts of the code are worth learning next.

Also:
- If you noticed other problems, SEO issues, or missing content, only mention them. Do not fix or add them.
- Do not skip this explanation, even for small changes. Keep it shorter for small changes.
