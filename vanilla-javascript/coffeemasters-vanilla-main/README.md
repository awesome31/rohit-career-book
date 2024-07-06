# Things to remember

1. The DOM and the HTML file are not the same thing. The head and the body tags can be implict.
2. View page source is different from inspect element. Inspect elemenet gives you a representation of the DOM, view page source gives you the HTML.
3. The parser puts everything in the body, after the first visible element.
4. By default if I do not add the type=module in the script tag, all the variables that we create are a part of the global object. Do avoid this and to have better code, we can use the module system.
5. Whenever we importing something from another file, we need to add the .js at the end of the import.

## Query selectors

1. I can scope down my query selectors, that will make finding an element faster.

```javascript
let nav = document.querySelector("nav");
nav.querySelector("#badge");
```

2. We can in modern browsers, we can use ES Modules and have only one script tag.

## Understanding how Javascript works in the browser.

1. When the browser is parsing the HTML file, whenever it encounters a JS script tag, it stops the execution of the parser, loads the JS files and processes the commands line by line. Once the parsing of the JS file is done, it again starts the parsing of the HTML file.

2. To make sure this does not happen we can add the defer attribute or the async attribute. The difference between async and defer is that async should be used for smaller JS files which need to downloaded and executed as soon as posible.

3. The difference between load event and DOMContentLoaded is that load waits for everything to be loaded, whereas DOMContentLoaded waits only for the DOM to be loaded.

## Event Bindings

We have the following events on the browser:

1. click
2. doubleclick
3. load
4. change
5. Keyboard and touch events.

There are 2 ways to bind to an event action. Either we attach a listener through the addEventListener property of the HTML element, OR we use the oneventname pattern. For eg: onclick. We can add multiple listeners to each action. All of the listeners are triggered.

```javascript
{
  once: true,
  capture: true,
  passive: true,
  signal: new AbortSignal(),
}
```

We can even dispatch custom events.

## Navigation using Vanilla JS

There are 2 ways to do navigation in the browser:

1. We can remove one page and add a new page.
2. We can show and hide pages.
3. Its not important to create a new HTML file to create a new page. We can use web components and the history API. With history APIs we can fake the changes of a URL.
4. data attributes help us in adding data in HTML file.

## Web Components

1. Its our own custom HTML element. Web components is a part of these standards:
   a. Custom Elements.
   b. HTML templates.
   c. Shadow DOMS.

   The idea is very similar to how any other library creates components.

### Custom Elements

1. We can create custom elements by defining a class that extends from the HTMLElement class. Also we need to register the component using the customElements API.
2. The tag that we are creating should have a hyphen.
3. IF we want to pass properties or attributes to the component, we can use the data-\* method.

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    const name = this.dataset.name
  }
}

customElements.define("my-element" MyElements)
```
