
# 🌍 Global Object in Node.js

## 📌 Introduction

In **Node.js**, the **Global Object** is a special object that is available **everywhere in your application**, without importing or requiring it.

Just like `window` in the browser, Node.js has its own global object called **`global`**.

---

## 🔹 What is Global Object?

The **Global Object**:

* Is accessible in **all modules**
* Does **not need to be imported**
* Provides built-in variables, functions, and objects

```js
console.log(global);
```

---

## 🔹 `global` vs `window`

| Browser      | Node.js     |
| ------------ | ----------- |
| `window`     | `global`    |
| DOM access   | No DOM      |
| Browser APIs | Server APIs |

---

## 🔹 Common Global Objects & Variables

### 1️⃣ `__dirname`

Gives the directory path of the current file.

```js
console.log(__dirname);
```

📤 Output:

```
/users/project/src
```

---

### 2️⃣ `__filename`

Gives the full path of the current file.

```js
console.log(__filename);
```

---

### 3️⃣  `setTimeout()`

Executes code after a delay.

```js
setTimeout(() => {
  console.log("Hello Node.js");
}, 2000);
```



### 4️⃣`setInterval()`

Executes code repeatedly.

```js
setInterval(() => {
  console.log("Running...");
}, 1000);
```


### 5️⃣ clearTimeout()` & `clearInterval()`

Used to stop timers.


