# Proxy Design Pattern in TypeScript

This project demonstrates the Proxy Design Pattern using a real-world example: simulating image loading where a proxy controls access to an expensive resource (loading an image from disk).

---

## What is the Proxy Design Pattern?

The Proxy Design Pattern is a structural design pattern that provides a surrogate or placeholder for another object to control access to it. The proxy implements the same interface as the real object and can add additional behavior such as lazy loading, access control, logging, or caching.

**This is useful when:**
- You want to delay the creation or loading of expensive resources until they are actually needed (lazy loading).
- You need to control access to sensitive or resource-intensive objects.
- You want to add logging, monitoring, or other cross-cutting concerns transparently.
- You want to represent remote or virtual resources in your application.

---

## 🗂️ Project Structure

```
behavioral/
└── proxy_pattern/
    ├── Proxy.ts         # Proxy and real object implementation
```

---

## 📦 Description of Classes

| Class         | Role                                                                 |
|---------------|----------------------------------------------------------------------|
| `Image`       | Interface defining the common behavior (`display`)                   |
| `RealImage`   | The real object that loads and displays an image (expensive to load) |
| `ProxyImage`  | The proxy that controls access and defers loading until needed       |

---

## 💡 How It Works

- `Image` defines a common interface for all image objects.
- `RealImage` implements `Image` and simulates an expensive operation (loading from disk) in its constructor.
- `ProxyImage` also implements `Image` and holds a reference to a `RealImage`. It only creates and loads the real image when `display()` is called for the first time.
- The client interacts with `ProxyImage` as if it were a real image, but the proxy handles the loading logic transparently.

---

## ✅ Sample Output

```
App started. Image not yet loaded.

User clicks to view image:
Loading image from disk: mountains.jpg
Displaying image: mountains.jpg

User clicks again:
Displaying image: mountains.jpg
```

---

## ▶️ How to Compile and Run

```sh
tsc Proxy.ts
node Proxy.js
```

---

## Benefits Demonstrated

- Controls access to an expensive resource (image loading)
- Supports lazy loading (resource is loaded only when needed)
- Client code is simplified and decoupled from resource management
- Easy to add additional logic (e.g., access control, logging) in the proxy

---

## Summary

The Proxy Pattern is ideal for managing access to objects that are expensive to create or require additional control. It provides a flexible and transparent way to extend or optimize object access without modifying