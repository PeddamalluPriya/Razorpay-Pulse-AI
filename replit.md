# Razorpay Pulse AI

Explainable payments intelligence for merchants to understand failures, reduce fraud, and recover revenue.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/razorpay-pulse-ai` — responsive React/Vite merchant dashboard
- `artifacts/api-server/src/routes/pulse.ts` — analytics and copilot API
- `lib/api-spec/openapi.yaml` — source-of-truth API contract
- `artifacts/razorpay-pulse-ai/src/index.css` — product theme and visual tokens

## Architecture decisions

- The dashboard uses typed OpenAPI-generated hooks so UI and server payloads stay aligned.
- Demo analytics are deterministic and exposed through the same endpoints planned for model-backed scoring.
- The visual language uses a dark command-center surface with signal teal and amber to distinguish health from leakage.

## Product

Merchants can monitor approval health, inspect payment and fraud risk signals, review alerts, ask a grounded copilot for recommendations, and model recovered revenue from lower failure rates.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
