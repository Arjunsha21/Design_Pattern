# Factory Method Design Pattern

## Definition

The **Factory Method Pattern** is a creational design pattern that defines an interface for creating an object, but lets subclasses decide which class to instantiate. It allows a class to defer instantiation to its subclasses, promoting loose coupling and flexibility in object creation.

## Use Cases

- When a class cannot anticipate the type of objects it needs to create beforehand.
- When you want to delegate the responsibility of instantiating objects to subclasses.
- When you want to localize the knowledge of which helper subclass is the delegate.
- When you want to avoid tight coupling between the creator and the concrete products.

## Comparison: With Factory Method vs. Without Factory Method

### With Factory Method Pattern

- **Object Creation:** The creation logic is encapsulated in a factory method, often in a creator class or interface.
- **Extensibility:** Adding new product types only requires creating new subclasses or factories, not modifying existing code.
- **Decoupling:** The client code works with interfaces or abstract classes, not concrete implementations.
- **Single Responsibility:** The creation logic is separated from the business logic.

### Without Factory Method Pattern

- **Object Creation:** The client code directly instantiates concrete classes using constructors.
- **Tight Coupling:** The client must know about all concrete classes, making the code harder to maintain and extend.
- **Less Flexible:** Adding new product types requires modifying client code.
- **Duplication:** Object creation logic may be duplicated in multiple places.

## Example Scenario

Suppose you are building a notification system that can send notifications via email or SMS.
- **With Factory Method:** You define a `NotificationCreator` abstract class with a factory method `createSender()`. Subclasses like `EmailNotificationCreator` and `SMSNotificationCreator` implement this method to return the appropriate sender. The client uses the creator interface and is unaware of the concrete sender classes.
- **Without Factory Method:** The client code uses conditional logic (e.g., `if` or `switch` statements) to instantiate either `EmailSender` or `SMSSender` directly, leading to tight coupling and less maintainable code.

## Summary

The Factory Method Pattern is ideal when you need to delegate the instantiation of objects to subclasses and want to keep your code flexible and loosely coupled. It centralizes object creation, making it easier to add new types and