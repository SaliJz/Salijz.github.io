# Security Policy

## What is this repo?

A static site theme. Astro. Builds HTML. No server. No database. No user accounts. No sessions. Attack surface is small by nature, not by clever engineering.

All content is public. All output is static. The runtime is the browser, the web server, and whatever CDN you put in front of it — none of which are this project.


---

## What we are not responsible for:

- Your web server configuration
- Your CDN headers
- Your DNS
- Your GitHub token you left in plaintext somewhere
- Vulnerabilities in upstream dependencies you chose not to update
- Whatever you put in your JSON content files

HTTPS, HTTP security headers, and TLS configuration are the responsibility of the deployment environment.


---

## Supply Chain

This project takes supply chain seriously, which is more than most. pnpm 11 with `strictDepBuilds`, `blockExoticSubdeps`, `minimumReleaseAge`, `trustPolicy: no-downgrade`, and `verifyDepsBeforeRun` — all active, all the time, on every install.

If a dependency is compromised, update the lockfile. That is what the lockfile is for.


---

## Reporting a Vulnerability

**Found something? Report it.**

Open a [GitHub Security Advisory](../../security/advisories/new) — private, direct, gets seen.

Include:

- What it is
- Where it is
- How to reproduce it
- What the impact is

Do not open a public issue for a security vulnerability. Do not post it elsewhere first.

Response will be as fast as I can.

