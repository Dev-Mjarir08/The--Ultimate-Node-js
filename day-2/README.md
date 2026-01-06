
---

# 🚀 Day 2: Node.js Installation & Modules

## 📌 Day 2 Overview

Aaj ke din humne **Node.js ko install karna**, uska version check karna, aur **Node.js Modules** ka basic concept samjha.

---

## 🛠️ Node.js Installation

### 🔹 Step 1: Download Node.js

Node.js ko official website se download kiya jata hai:
👉 Node.js Official Website

### 🔹 Step 2: Install

* Windows / macOS: `.exe` ya `.pkg` file run karo
* Linux: package manager (apt, yum, etc.)

### 🔹 Step 3: Verify Installation

```bash
node -v
npm -v
```

---

## 📦 What is npm?

npm ka full form **Node Package Manager** hai.
Yeh Node.js ke sath automatically install ho jata hai.

### npm ke uses:

* Packages install karna
* Project dependencies manage karna
* Scripts run karna

Example:

```bash
npm init -y
```

---

## 📁 What are Modules in Node.js?

Module ka matlab hota hai **code ko small reusable parts me divide karna**.

Node.js me 3 types ke modules hote hain:

1. **Core Modules**
2. **Local (Custom) Modules**
3. **Third-party Modules**

---

## 🔹 Core Modules

Node.js ke built-in modules hote hain, jaise:

* `fs` (File System)
* `http`
* `path`
* `os`

Example:

```js
const fs = require("fs");

fs.writeFileSync("test.txt", "Hello Node.js");
```

---

## 🔹 Local (Custom) Modules

Hum apna khud ka module bana sakte hain.

**math.js**

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

**index.js**

```js
const add = require("./math");
console.log(add(5, 3));
```

---

## 🔹 Third-party Modules

npm se install hone wale modules.

Example:

```bash
npm install express
```

```js
const express = require("express");
```

---

## 📂 Important Files & Folders

| File / Folder       | Use                         |
| ------------------- | --------------------------- |
| `node_modules/`     | Installed packages          |
| `package.json`      | Project info & dependencies |
| `package-lock.json` | Exact dependency versions   |

---

## 🧪 First Node.js Program

```js
console.log("Welcome to Node.js Day 2 🚀");
```

Run:

```bash
node index.js
```

---

## 🎯 Learning Outcome (Day 2)

✔ Node.js installation complete
✔ npm commands samjhe

