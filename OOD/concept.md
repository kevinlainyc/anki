# Interview::OOD::Concept

## Principles of OOP

%

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

## Why/How does OOP hide data?

%

- Data hiding prevents unauthorized access to or modification of the original contents of a class by its instances (or objects)
- Data hiding can be divided into two primary components:
  - Encapsulation
  - Abstraction

## Encapsulation vs Abstraction?

%

- Encapsulation: a fundamental programming technique used to achieve data hiding in OOP. In OOP refers to binding data and the methods to manipulate that data together in a single unit—class (eg. class).
  - It focuses on the application level of the system.
  - It restricts access to data to prevent its misuse.
  - It deals with the internal working of the object.
  - Encapsulation means to hide data using getter and setter functions.

- Abstraction, focuses on simplifying complex systems by providing a conceptual model or representation of real-world entities. It involves capturing the essential characteristics of an object while omitting the irrelevant or non-essential details (eg. interface).
  - It focuses on the design level of the system.
  - It hides unnecessary data to simplify the structure.
  - It highlights the work that the object performs.
  - Abstraction means to hide implementation using interface and abstract classes.

## Type of polymorphism

%

- Compile time polymorphism (static)
  - Method overloading: same method name, different parameters
  - Operator overloading: same operator, different parameters
- Runtime polymorphism (dynamic)
  - Method overriding: same method name, same parameters