# Razorpay Pulse AI

Razorpay Pulse AI is an explainable payments intelligence workspace for merchants. It turns transaction signals into an actionable overview of approval health, failure patterns, fraud risk, revenue leakage, smart alerts, and copilot recommendations.

## Included

- Overview dashboard with approval, failure, fraud, leakage, and chargeback metrics
- Trend visualization and SHAP-inspired risk-driver explanations
- Transaction review workspace with CSV dropzone and risk badges
- Smart alerts inbox with severity filtering and dismiss actions
- Grounded merchant copilot with dashboard-aware answers
- Revenue leakage simulator with instant recovery estimates
- Typed API contract shared between the web app and API server

## Run

```bash
pnpm install
pnpm --filter @workspace/api-server run dev
pnpm --filter @workspace/razorpay-pulse-ai run dev
```

The API is mounted at `/api` and the web app is served at `/`.

## API

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/healthz` | Service health |
| GET | `/api/pulse/overview` | KPI summary |
| GET | `/api/pulse/trends` | Daily approval/failure/revenue trend |
| GET | `/api/pulse/risk-drivers` | Explainable risk factors |
| GET | `/api/pulse/alerts` | Smart alert feed |
| POST | `/api/pulse/copilot` | Answer a merchant question |
| POST | `/api/pulse/simulate` | Estimate recovered revenue |

## Architecture

```text
CSV / transaction stream
          |
          v
  Analytics + risk service
          |
          +--> typed OpenAPI contract --> React dashboard
          |
          +--> metrics context ---------> merchant copilot
          |
          +--> risk drivers ------------> alerts + explanations
```

The current build ships with deterministic demo analytics so the product is immediately explorable. The API boundaries are ready to replace the demo calculators with PostgreSQL-backed aggregates, XGBoost scoring, SHAP values, and an AI integration without changing the dashboard contract.

## Sample data

See `sample-transactions.csv` for the expected transaction fields.