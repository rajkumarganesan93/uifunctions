
# @rajkumarganesan93/uifunctions

A lightweight TypeScript utility library that wraps **Axios** with a configurable client and strongly‑typed helpers for GET, POST, PUT, and DELETE requests.  
Designed for reuse across multiple applications.

---

## 📦 Installation

npm install @rajkumarganesan93/uifunctions

---

## ⚙️ Setup

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

## 📂 Typical Project Structure

```
my-app/
  src/
    api/
      client.ts   <-- configureClient here
    features/
      users.ts    <-- use get/post/put/del here
  .env
  package.json
```