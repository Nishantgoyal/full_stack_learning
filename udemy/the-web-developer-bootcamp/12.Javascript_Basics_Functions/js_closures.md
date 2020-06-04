# JS Closure

A *closure* is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). A closure gives you access to an outer function's scope from an inner function. In JS, closures are created everytime a function is created, at function created time.

## Lexical Scoping

It describes how, parser resolves variable names when functions are nested. It uses the location where the variable is declared within the source code to determine where that variable is available. Nested variables have access to variables declared in their outer scope.

## Closure Scope Chain

Every closure has three scopes:

- Local Scope
- Outer Function Scope
- Global Scope
