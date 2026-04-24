# nx-openapi-scaffolder

An Nx workspace schematic that scaffolds a complete Angular feature — models, services, state, and components — from a Swagger/OpenAPI spec, in a single command.

![Demo](https://github.com/tedwin007/nx-openapi-scaffolder/raw/master/tw/example-4.gif)

---

## Why

Every project that consumes a REST API ends up writing the same boilerplate: typed models that mirror the schema, a service layer with the endpoint calls, and the glue that wires them into the UI. When the spec changes, all of it drifts.

This schematic takes the spec as the source of truth. Point it at a `swagger.json`, give it a feature name, and it generates the typed scaffolding for you — so the starting point of every new feature is consistent, typed, and aligned with the contract.

## What it generates

Given a Swagger/OpenAPI spec and a feature name, the schematic produces:

- **Typed models** derived from `definitions` in the spec
- **Service methods** for each `paths` endpoint
- **A feature module** wired into the Nx workspace
- **Starter components** following the workspace's conventions

## Usage

```bash
node node_modules/@nrwl/cli/bin/nx.js workspace-schematic feature-generator \
  --name=store \
  --singleItemName=product
```

Flags:

| Flag | Description |
| --- | --- |
| `--name` | Feature name (plural / collection-level) |
| `--singleItemName` | Singular item name, used for model and service generation |

The schematic expects a valid `swagger.json` in the workspace. See [`/examples`](./examples) for a sample Uber API spec used in testing.

## How it works

The schematic parses the OpenAPI `definitions` block into TypeScript interfaces, maps each `paths` entry to a typed service method, and emits the files into the standard Nx feature layout. Template resolution and file generation use Nx's schematic APIs — the generator itself is a small TypeScript program under `/tw`.

## Status

Personal/experimental project. Built against Nx 12 and `@nrwl/cli`; note that Nx has since renamed its CLI package to `@nx/cli`, so the invocation command would need updating for use against current Nx versions.

The core idea — OpenAPI-driven Nx scaffolding — still holds and the approach transfers cleanly to newer Nx APIs.

## License

MIT
