# Yazeed Training - Survey (Next.js + Supabase)

This repo contains a Next.js survey app that stores submissions in Supabase, plus an embedded Google Form.

Deployment quick steps:

1. Create a Supabase project (free tier). Run `sql/create_table.sql` in Supabase SQL editor.
2. Get `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from Supabase Settings -> API.
3. Create a GitHub repo (already created) and push this code.
4. Create a Vercel project and import this repo. In Vercel Project Settings add Environment Variables:
   - `SUPABASE_URL` = your Supabase URL
   - `SUPABASE_SERVICE_ROLE_KEY` = your Supabase service role key (keep secret)
   - `ADMIN_PASSWORD` = 2026
5. Deploy. Access `/` for the form and `/admin` for results.

Security notes:
- Do not expose `SUPABASE_SERVICE_ROLE_KEY` in the browser. Store it only in server env vars.
- Change `ADMIN_PASSWORD` to a stronger password in production.
