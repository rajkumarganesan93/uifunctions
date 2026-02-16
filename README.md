```markdown
# @rajkumarganesan93/uifunctions

A lightweight TypeScript utility library that wraps **Axios** with a configurable client and strongly‑typed helpers for GET, POST, PUT, and DELETE requests.  
Also includes a **timezone conversion utility** powered by Luxon.  
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

## 🚀 Usage (Axios Helpers)

### GET
```ts
import { get } from "@rajkumarganesan93/uifunctions";

type User = { id: number; name: string };

const response = await get<User[]>("/users");
console.log(response.data); // typed as User[]
```

### POST
```ts
import { post } from "@rajkumarganesan93/uifunctions";

const response = await post<User>("/users", { name: "Rajkumar" });
console.log(response.data);
```

### PUT
```ts
import { put } from "@rajkumarganesan93/uifunctions";

const response = await put<User>("/users/1", { name: "Updated Name" });
console.log(response.data);
```

### DELETE
```ts
import { del } from "@rajkumarganesan93/uifunctions";

await del<void>("/users/1");
console.log("Deleted successfully");
```

---

## 🛡️ Type Safety

All helpers are generic, so you can pass your own types for full IntelliSense and compile‑time safety:

```ts
type Product = { id: string; price: number };

const response = await get<Product[]>("/products");
const products: Product[] = response.data;
```

---

## 🌍 Timezone Utilities

The library also includes a helper to convert dates between timezones using [Luxon](https://moment.github.io/luxon/).

### Installation (Luxon types)

```bash
npm install luxon
npm install --save-dev @types/luxon
```

### Usage

```ts
import { convertTimezone } from "@rajkumarganesan93/uifunctions";

const utcDate = "2026-02-16T12:00:00Z";

// Convert UTC → Asia/Kolkata
const istDate = convertTimezone(utcDate, "UTC", "Asia/Kolkata");
console.log(istDate); 
// "2026-02-16T17:30:00+05:30"

// Convert UTC → America/New_York
const nyDate = convertTimezone(utcDate, "UTC", "America/New_York");
console.log(nyDate); 
// "2026-02-16T07:00:00-05:00"
```

### API

```ts
convertTimezone(
  date: string | Date,   // Input date
  fromZone: string,      // Source timezone (IANA string, e.g. "UTC")
  toZone: string         // Target timezone (IANA string, e.g. "Asia/Kolkata")
): string
```

- **date**: Accepts either a `Date` object or an ISO string.
- **fromZone**: The timezone of the input date.
- **toZone**: The timezone you want to convert to.
- Returns an ISO string in the target timezone.
- Throws an error if the date or zone is invalid.

---

## 📂 Typical Project Structure

```
my-app/
  src/
    api/
      client.ts        <-- configureClient for axios
    features/
      users.ts         <-- use axios helpers
      timezoneDemo.ts  <-- use convertTimezone
  .env
  package.json
```

---

## 🔑 Summary
- Install with `npm install @rajkumarganesan93/uifunctions`.
- Call `configureClient()` once at startup with your app’s `.env` values.
- Use `get`, `post`, `put`, `del` anywhere in your app with type safety.
- Use `convertTimezone` for reliable timezone conversions.
```

---
