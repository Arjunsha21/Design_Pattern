# Adapter Design Pattern

## Definition

The **Adapter Pattern** is a structural design pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by wrapping an existing class with a new interface that the client expects.

## Use Cases

- When you want to use an existing class, but its interface does not match the one you need.
- When you want to integrate a third-party or legacy library into your application without modifying its source code.
- When you need to reuse several existing subclasses that lack some common functionality or interface.

## Comparison: With Adapter vs. Without Adapter

### With Adapter Pattern

- **Interface Compatibility:** The adapter makes an external or legacy API compatible with your application's expected interface.
- **Decoupling:** The client code depends only on the target interface, not on the external library's implementation.
- **Flexibility:** You can easily swap out or update the underlying library without changing client code.
- **Maintainability:** Changes to the external library are isolated within the adapter.

### Without Adapter Pattern

- **Direct Dependency:** The client code is tightly coupled to the external library's interface.
- **Incompatibility:** If the external library's interface changes, all client code must be updated.
- **Reduced Flexibility:** Harder to replace or upgrade the external library.
- **Code Duplication:** If multiple parts of the application need to adapt the library, similar adaptation code may be repeated.

## Example Scenario

Suppose your application expects a `MapService` interface with a `showLocation(lat, lng)` method, but you want to use the `GoogleMapsAPI` library, which provides a `renderMap({lat, lng})` method.
- **With Adapter:** You create a `GoogleMapsAdapter` that implements `MapService` and internally calls `GoogleMapsAPI.renderMap`. The rest of your app uses the `MapService` interface and is unaware of the underlying library.
- **Without Adapter:** Your app directly uses `GoogleMapsAPI` and must adapt its interface everywhere you need to show a location, leading to tight coupling and less maintainable code.

## Summary

The Adapter Pattern is ideal for integrating third-party or legacy code into your application when their interfaces do not match your requirements. It promotes loose coupling, flexibility, and maintainability by introducing a layer that translates between interfaces.