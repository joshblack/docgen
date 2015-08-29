# Importing

> Brief writeup on how to import modules in ES2015, what syntax they have, and how we can grab relevant properties from their AST's.

## Introduction

In ES2015, we can import modules into a file using an Import Declaration. An Import Declaration takes on the following interface:

```
interface ImportDeclaration <: ModuleDeclaration {
    type: "ImportDeclaration";
    specifiers: [ ImportSpecifier | ImportDefaultSpecifier ];
    source: Literal;
}
```

We can write these Import Declarations in a variety of ways, some common ones include:

```js
// Default Imports
import Foo from 'foo';
import Foo as Bar from 'foo';

// Import Specifiers
import { Foo } from 'foo';
import { Foo as Bar } from 'foo';
```

## Traversal

When we are traversing our AST, we can specify that we want to visit an Import Declaration by writing the following code:

```js
import { parse, traverse } from 'babel';

const ast = {
  type: 'File',
  program: parse(code)
};

traverse(ast, { ImportDeclaration(node) {} });
```

Where the `node` parameter will give us access to any Import Declaration that we visit in the AST.

## Gathering Information

Probably the most important information that we can gather from Import Declarations is what we are importing and from where. After visiting an Import Declaration, we'll be given access to the AST that represents the node. We can gather this type of information for the following common types from these AST representations of Import Declarations.

_TODO: Add how to retrieve from visitor method from previous section_

For a Default Import Specifier:

```js
// Import Declaration
import Foo from 'bar';

// Approximate AST representation
ImportDeclaration {
  specifiers: [
    ImportDefaultSpecifier {
      local: Identifier {
        name: 'Foo'
      }
    }
  ],
  source: Literal {
    value: 'bar'
  }
}
```

For an Import Specifier:

```js
// Import Declaration
import { Foo } from 'bar';

// Approximate AST representation
ImportDeclaration {
  specifiers: [
    ImportSpecifier {
      imported: Identifier {
        name: 'Foo'
      }
    }
  ],
  source: Literal {
    value: 'bar'
  }
}
```

For an Import Specifier that's being renamed:

```js
// Import Declaration
import { Foo as baz} from 'bar';

// Approximate AST representation
ImportDeclaration {
  specifiers: [
    ImportSpecifier {
      imported: Identifier {
        name: 'Foo'
      },
      local: Identifier {
        name: 'baz'
      }
    }
  ],
  source: Literal {
    value: 'bar'
  }
}
```
