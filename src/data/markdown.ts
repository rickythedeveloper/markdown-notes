export const example = `
# H1
## H2
### H3

**bold text**

*italicized text*

> blockquote

Ordered list
1. First item
1. Second item
1. Third item

Unordered List
- First item
- Second item
- Third item

\`code\`

[link title](https://www.example.com)

![alt text](image.jpg)

Horizontal Rule

---

## Additional features
### Fenced code block
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

---

## Does not work

### Table
| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |


Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading with ID {#custom-id}

term
: definition

~~strikethrough~~

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

Emoji :joy:

I need to highlight these ==very important words==.

Subscript: H~2~O
Superscript: X^2^
`;

export const files: {[name: string]: string} = {
  'File 1': `
# File 1
This is file 1
	`,
  'File 2': `
# File 2
		
This is file 2 heyyy
	`,
  'File 3': `
# File 3
		
This is file 3 hahha
	`,
};
