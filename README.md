# Docgen

> Toolchain used for automatically developing documentation for your library.

## Objective

The documentation generator's initial goal is to support documentation of the following component information:

- Name
- Static Methods
- Static Properties
- Constructor
- Lifecycle Methods
- Custom Methods
- Custom Properties
- Render Method

It looks to document each method available on the component class using a combination of support for both `JSDoc` and `flow` syntax.

## Opt-in

For a file to be consider part of the doc generator, have the following @-pragrma:

```js
/**
 * Copyright (c) 2015 IBM Corp.
 * All Rights Reserved.
 *
 * @doc [option]
 */
```

`[option]` defaults to a General section in the generated doc site.

## CLI

Usage:

```
docgen src docs
```

## Future

The goal of this project is to ultimately create a living styleguide that will host instances of each component that will render next to the documentation and will be editable by users viewing the document site.

It will also make sense to figure out a sensible way to group related components, right now the project will assume a flat project hierarchy. In addition, the ability to publish documentation to a centralized service that subscribers could pull down definitions of component libraries to make use of in an editor of their choice.

Finally, another goal at an application level is to integrate routing into the generated documentation. If a set routing structure is determined, it will be useful to see the entry points into an application and the data requirements at every point established by `graphql` queries.

Future `@`-pragma possibility: `@doc [engine] [section/subsection]`, where the engine could be `react` or just `jsdoc`, etc.

## Checklist

- [ ] Deploy to GHE Pages
- [ ] Find way to colocate tests, hook into a CI build to see if passing (webhooks?)
