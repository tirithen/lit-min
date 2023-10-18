# lit-min

A buildless package for the lit library, the file `dist/lit.js` exports all 
common lit functionality and the file can therefore be copied into your project 
without the need to setup a build system like rollup to use lit.

This greatly simplifies building small web UIs where npm is not needed.

Rather than using this package as an npm dependency, you can download the lit.js 
file from https://www.unpkg.com/lit-min/dist/lit.js and put the file directly
in your web servers static directory.

```html
<!DOCTYPE html>
<html lang="en-US">
        <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Demo</title>
                <script type="module">
                        import {LitElement, html} from '/lit.js';

						// As an alternative use unpkg directly, but bewhare that using third party domains is a 
						// security risk!
                        // import {LitElement, html} from 'https://www.unpkg.com/lit-min/dist/lit.js';

                        class Test extends LitElement {
                                render() {
                                        return html`Test element`;
                                }
                        }

                        customElements.define('test-element', Test);
                </script>
        </head>
        <body>
                <test-element></test-element>
        </body>
</html>

```

# With DOMPurify

To further simplify the dompurify package is also provided through the 
`dist/dompurify.js` file. This is useful when using the `unsafeHTML` directive
to prevent XSS attacks.

```html
<!DOCTYPE html>
<html lang="en-US">
        <head>
                <meta charset="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Demo</title>
                <script type="module">
                        import {LitElement, html, unsafeHTML} from '/lit.js';
                        import {sanitize} from '/dompurify.js';

						// As an alternative use unpkg directly, but bewhare that using third party domains is a 
						// security risk!
                        // import {LitElement, html} from 'https://www.unpkg.com/lit-min/dist/lit.js';
                        // import {sanitize} from 'https://www.unpkg.com/lit-min/dist/dompurify.js';

                        class Test extends LitElement {
                                render() {
                                        const markup = sanitize('<strong>markup</strong>');
                                        return html`Test ${unsafeHTML(markup)} element`;
                                }
                        }

                        customElements.define('test-element', Test);
                </script>
        </head>
        <body>
                <test-element></test-element>
        </body>
</html>

```
