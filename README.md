### README.md

```markdown
# Regex Constructor for Excluding URL Paths

This project is a simple web-based tool that allows users to generate regular expressions for excluding specific URL paths. It is designed for environments like plugins or systems that use regex patterns to exclude certain pages from optimization.

---

## Features

- Input full URLs (e.g., `https://mysites.com/one/`).
- Automatically extracts paths from the provided URLs.
- Generates exclusion regex in the format `!@^one/@ & !@^two/@`.
- Easy-to-use interface with a clean design.
- Supports multiline input.

---

## How to Use

1. Enter full URLs into the input box (one per line).
2. Click **"Generate Regex"**.
3. Copy the generated regex output and use it in your desired environment.

Example Input:
```

https://mysites.com/one/
https://mysites.com/two/
https://mysites.com/three/
https://mysites.com/four/

```

Example Output:
```

!@^one/@ & !@^two/@ & !@^three/@ & !@^four/@

````

---

## Technologies Used
- **HTML5**: Markup structure.
- **CSS3**: Styling and layout.
- **JavaScript**: Logic for extracting paths and generating regex.

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/regex-constructor.git
````

2. Open the `index.html` file in your favorite browser.

---

## Future Enhancements

- Add support for additional regex formats.
- Include validation for invalid URLs.

---

## Contribution

Feel free to fork this project, submit issues, or contribute new features via pull requests.

---

## License

This project is licensed under the MIT License.

```

---

### GitHub Description
**"A simple web tool to generate exclusion regex for specific URL paths. Input full URLs, and get clean regex output for your optimization needs."**
```
