## Using `document.getElementsByClassName()`

It returns an **array-like collection** (`HTMLCollection`).
If multiple elements have the same class, access one by index.

### Example HTML

```html
<div class="container">0 class</div>
<div class="container">1 class</div>
<div class="container">2 class</div>
```

### JavaScript

```javascript
const items = document.getElementsByClassName("container");
console.log(items[0]); // first element
```

### Import and Export
```javascript
import {username} from './app.js' => this give the name export 
import username from './app.js' => this give default export

export const username = 'kaif'  // named export 

const username = 'kaif'
export default username // this is default export and can be acces by any name from import side
```

### What is JSX

```html 
It is the combinaiton of JavaScript + Html
```

