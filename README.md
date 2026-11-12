# LaunchPad Demo Shop

A small fictional Next.js storefront (prices are in US dollars) used to demonstrate **LaunchCare**, the AI support engineer for
the fictional hosting platform LaunchPad Cloud. All data here is fictional demo data.

`main` is healthy: it type-checks, passes its tests, and builds. Each `scenario/*` branch is `main`
plus one commit that breaks CI in a different, deliberate way. LaunchCare investigates the failed run
and opens a **draft** pull request with a fix. It never merges.

| Branch                              | What breaks                                              |
| ----------------------------------- | -------------------------------------------------------- |
| `scenario/1-cross-file-type-error`  | A function signature changed; one caller was not updated |
| `scenario/2-missing-dependency`     | An import of a package that is not in `package.json`     |
| `scenario/3-failing-unit-test`      | A refactor changed a boundary condition                  |
| `scenario/4-missing-secret`         | A deploy step needs a secret that is not configured      |

The scripts: `npm run typecheck`, `npm test`, `npm run build`. CI installs with `npm install` on
every branch, so no lockfile is committed.
