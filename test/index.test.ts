import { describe, expect, it } from 'vitest'
import MarkdownIt from 'markdown-it'
import callout from '../src/index'

const md = new MarkdownIt()
md.use(callout)

describe('suite', () => {
  it('exported', () => {
    expect(
      md.render(`
  > [!note] This is a note
  > Here is the content
  `),
    ).toMatchInlineSnapshot(`
      "<details class=\\"custom-callout note\\" open><summary class=\\"callout-title\\"><div>This is a note</div>
      <div class=\\"callout-fold\\"></div></summary><blockquote>
      <p>Here is the content</p>
      </blockquote>
      </details>"
    `)
    expect(
      md.render(`
  > [!tip|closed] This is a closed Tip
  > The body is folded by default.
  `),
    ).toMatchInlineSnapshot(`
      "<details class=\\"custom-callout tip\\"><summary class=\\"callout-title\\"><div>This is a closed Tip</div>
      <div class=\\"callout-fold\\"></div></summary><blockquote>
      <p>The body is folded by default.</p>
      </blockquote>
      </details>"
    `)
  })
})
