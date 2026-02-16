Here’s your **fully updated README.md**, ready to copy. It reflects everything we’ve scaffolded so far: **API**, **datetime**, **text**, **collections**, and **validation** groups. I’ve skipped `asyncflow` and `math` as requested.

```markdown
# @rajkumarganesan93/uifunctions

A lightweight TypeScript utility library that provides:
- **Axios client helpers** (`api.get`, `api.post`, `api.put`, `api.del`) with configuration support.
- **Datetime utilities** (`formatDate`, `timeAgo`, `convertTimezone`) powered by date-fns and Luxon.
- **Text utilities** (`capitalize`, `truncate`, `slugify`) for string manipulation.
- **Collections utilities** (`unique`, `chunk`, `deepClone`) for arrays and objects.
- **Validation utilities** (`isEmail`, `isEmpty`) for common checks.

Designed for reuse across multiple applications.

---

## 📦 Installation

```bash
npm install @rajkumarganesan93/uifunctions
```

---

## ⚙️ Setup (Axios Client)

Before making requests, configure the client once at application startup:

```ts
import { configureClient } from "@rajkumarganesan93/uifunctions";

configureClient({
  baseURL: import.meta.env.VITE_API_BASE_URL, // or process.env.API_BASE_URL in Node
  timeout: 10000,
});
```

---

## 🚀 Usage

### API Helpers
```ts
import { api } from "@rajkumarganesan93/uifunctions";

type User = { id: number; name: string };

// GET
const users = await api.get<User[]>("/users");

// POST
const newUser = await api.post<User>("/users", { name: "Rajkumar" });

// PUT
const updatedUser = await api.put<User>("/users/1", { name: "Updated Name" });

// DELETE
await api.del<void>("/users/1");
```

---

### Datetime Utilities
```ts
import { formatDate, timeAgo, convertTimezone } from "@rajkumarganesan93/uifunctions";

// Format date
console.log(formatDate("2026-02-16T12:00:00Z", "dd/MM/yyyy")); 
// "16/02/2026"

// Relative time
console.log(timeAgo(new Date(Date.now() - 3600000))); 
// "1 hour ago"

// Timezone conversion
console.log(convertTimezone("2026-02-16T12:00:00Z", "UTC", "Asia/Kolkata")); 
// "2026-02-16T17:30:00+05:30"
```

---

### Text Utilities
```ts
import { capitalize, truncate, slugify } from "@rajkumarganesan93/uifunctions";

// Capitalize
console.log(capitalize("rajkumar")); // "Rajkumar"

// Truncate
console.log(truncate("This is a long sentence", 10)); // "This is a ..."

// Slugify
console.log(slugify("Hello World Example")); // "hello-world-example"
```

---

### Collections Utilities
```ts
import { unique, chunk, deepClone } from "@rajkumarganesan93/uifunctions";

// Unique
console.log(unique([1, 1, 2, 3])); // [1, 2, 3]

// Chunk
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]

// Deep Clone
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
console.log(copy); // { a: 1, b: { c: 2 } }
```

---

### Validation Utilities
```ts
import { isEmail, isEmpty } from "@rajkumarganesan93/uifunctions";

// Email validation
console.log(isEmail("rajkumar@example.com")); // true
console.log(isEmail("not-an-email")); // false

// Empty checks
console.log(isEmpty("")); // true
console.log(isEmpty([])); // true
console.log(isEmpty({})); // true
console.log(isEmpty("Hello")); // false
```