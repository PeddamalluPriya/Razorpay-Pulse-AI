---
name: Pulse analytics contract
description: Durable decisions for extending the payments intelligence dashboard.
---

The Pulse dashboard is intentionally built against typed analytics endpoints so demo calculators can later be replaced by PostgreSQL aggregates, model scoring, and SHAP explanations without redesigning the client.

**Why:** The product needs to feel explorable before production model infrastructure exists, while preserving a clean path to real data.

**How to apply:** Add new analytics capabilities to the OpenAPI contract first, regenerate clients, and keep the response shapes stable for the existing dashboard surfaces.