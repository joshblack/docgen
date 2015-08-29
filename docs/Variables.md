# Variables

> Brief writeup on variables in ES2015, their syntax, and how we can grab relevant properties from their AST's.

## Introduction

In ES2015, we can write variables now using three separate keywords: `var`, `let`, and `const`. They take on the following interface:

```
extend interface VariableDeclaration {
    kind: "var" | "let" | "const";
}
```

We can write variables the same way we always have, we can just use these additional keywords instead. For example:

```
var a = 1;
let b = 2;
const c = 3;
```

With the difference being that the `let` and `const` keyword have block-scoping, and that usage of the keyword `const` prevents reassignment of the variable.

## Traversal

When we are traversing our AST, we can specify that we want to visit a Variable Declaration by writing the following code:

```js
import { parse, traverse } from 'babel';

const ast = {
  type: 'File',
  program: parse(code)
};

traverse(ast, { VariableDeclaration(node) {} });
```

Where the `node` parameter will give us access to any Variable Declaration that we visit in the AST.

## Gathering Information

The most important information that we can gain from Variable Declarations is the name (or `id`) of the variable, as well as it's value (or `init`, what value it's initialized with). After visiting an Variable Declaration, we'll be given access to the AST that represents the node. We can gather this type of information by doing the following:

```
var a = 1;

// Approximate AST representation
VariableDeclaration {
  declarations {
    VariableDeclarator {
      id: Identifier {
        name: 'a'
      },
      init: Literal {
        value: 1
      }
    }
  }
  kind: 'var'
}
```

```
let b = 2;

// Approximate AST representation
VariableDeclaration {
  declarations {
    VariableDeclarator {
      id: Identifier {
        name: 'b'
      },
      init: Literal {
        value: 2
      }
    }
  }
  kind: 'let'
}
```

```
const c = 3;

// Approximate AST representation
VariableDeclaration {
  declarations {
    VariableDeclarator {
      id: Identifier {
        name: 'c'
      },
      init: Literal {
        value: 3
      }
    }
  }
  kind: 'const'
}
```

## Further Usage

There are situations where people will have multiple Variable Declarators for a Variable Declaration. For example, writing `const a = 1, b = 2;` instead of `const a = 1; const b = 2;`. In order to capture these, we'll have to traverse the declarations property of a VariableDeclaration node, or we could visit a Variable Declarator directly.
