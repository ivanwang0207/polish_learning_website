# Polish Study Reference — editable website

A small, no-build-step website. Open `index.html` in any browser (double-click
it, or use VS Code's "Live Server" extension) and it just works — no server,
no npm install, no compiler.

## Files

```
index.html   the page skeleton (title, header text, empty containers) — rarely needs edits
style.css    all visual styling (colors, fonts, spacing, light/dark theme)
app.js       the rendering engine — reads data.js and draws tabs/lessons/tables
data.js      <-- YOUR CONTENT LIVES HERE. This is the only file you'll usually touch.
```

You almost never need to touch `app.js` or `index.html`. Everything you'll
want to change day-to-day — adding lesson 9 material, adding a new lesson,
adding a new tab — is done by editing the `CONTENT` object in `data.js`.

## The `CONTENT` object

`data.js` defines one object:

```js
const CONTENT = {
  tabs: [ ... ],      // which tabs exist across the top (Grammar, Vocabulary, ...)
  lessons: [ ... ]    // the actual lesson content, one entry per lesson
};
```

### Adding content to an existing lesson (e.g. Lesson 9)

Find the lesson in `CONTENT.lessons` by its `number`, e.g.:

```js
{
  number: 9,
  title: "Z kim mieszkasz?",
  subtitle: "Who do you live with?",
  sections: {
    grammar: [ /* array of panel HTML strings */ ],
    vocab:   [ /* array of {category, items} */ ]
  }
}
```

**To add a new grammar panel to lesson 9**, add a new string to
`sections.grammar`. Each entry is a small self-contained block of HTML using
the classes already defined in `style.css`:

```js
sections.grammar.push(`
  <div class="panel"><h3>Days of the week</h3>
  <p>poniedziałek (Monday), wtorek (Tuesday), środa (Wednesday)...</p>
  <p class="note">Optional italic note goes here.</p>
  </div>
`);
```

Useful building blocks you can reuse inside a panel:
- `<div class="tblwrap"><table>...</table></div>` — a bordered table (use `<th>` for header row, `td class="lbl"` for a shaded label cell)
- `<span class="red">text</span>` — red highlight (used for changing endings)
- `<span class="blue">text</span>` — blue highlight (used for numeral suffixes)
- `<p class="note">...</p>` — small italic note
- `<div class="ex">...<span class="en">English</span></div>` — example sentence box
- Add `class="panel full"` instead of `class="panel"` to make one panel span the full width of the row

**To add new vocabulary to lesson 9**, add items to an existing category, or
add a whole new category, inside `sections.vocab`:

```js
sections.vocab.push({
  category: "Days of the week",
  items: [
    { pl: "poniedziałek", en: "Monday" },
    { pl: "wtorek", en: "Tuesday" },
    { pl: "godzina", en: "hour", g: "fem." }   // "g" is optional (gender/note column)
  ]
});
```

### Adding a brand new lesson (e.g. Lesson 10)

Copy the shape of an existing lesson and append it to `CONTENT.lessons`:

```js
CONTENT.lessons.push({
  number: 10,
  title: "Jaka jest pogoda?",
  subtitle: "What's the weather like?",
  sections: {
    grammar: [
      `<div class="panel"><h3>Weather phrases</h3><p>Pada deszcz. (It's raining.)</p></div>`
    ],
    vocab: [
      { category: "Weather", items: [ { pl: "słońce", en: "sun" }, { pl: "deszcz", en: "rain" } ] }
    ]
  }
});
```

That's it — the "10" pill in the lesson filter, and the new lesson section in
both tabs, appear automatically. Nothing else to wire up.

### Adding a brand new tab (e.g. "Practice" or "Phrases")

Add an entry to `CONTENT.tabs`:

```js
CONTENT.tabs.push({
  id: "practice",       // must be unique, lowercase, no spaces — used internally
  label: "Practice",    // what shows on the tab button
  kind: "panels",       // "panels" (freeform cards, like Grammar) or "vocab" (word tables, like Vocabulary)
  columns: 2,            // for kind:"panels" — how many cards per row (responsive; try 1 or 2)
  searchable: false      // true = a search box filters this tab's content (used by Vocabulary)
});
```

Then give each lesson a matching `sections.practice` array (same format as
`sections.grammar` for `kind:"panels"`, or `sections.vocab` for
`kind:"vocab"`). A lesson that has no `sections.practice` simply won't show up
under that tab — you don't need to add empty arrays everywhere.

If you want a genuinely different kind of content layout (not cards, not word
tables), you can add a new renderer function in `app.js` — search for
`RENDERERS` near the top and add your own `kind` there. This is the only
case that requires touching `app.js`.

## Tips

- Reload the page in your browser after saving `data.js` to see changes — no build step, no restart needed.
- If something looks broken, open the browser's DevTools console (F12) —
  `app.js` will print a clear error if `data.js` has a syntax mistake (e.g. a
  missing comma).
- Keep the trailing commas and matching brackets `{ }` `[ ]` consistent — since
  `data.js` is plain JavaScript, a stray missing comma or quote will stop the
  whole page from rendering. VS Code will underline this kind of mistake in
  red as you type if you open the `polish_site` folder there.
- The color legend (red = changing ending, blue = numeral suffix) is just a
  styling convention — use `<span class="red">` / `<span class="blue">`
  wherever it's helpful, or don't use it at all in new content.
