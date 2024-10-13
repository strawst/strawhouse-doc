---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Strawhouse"
  text: "File storage redefined"
  tagline: Bare minimal file store engine ecosystem with built-in API and signature-based access.
  actions:
    - theme: brand
      text: Backend Deployment
      link: /backend/index
    - theme: alt
      text: API Documentation
      link: /api/
    - theme: alt
      text: Driver Documentation
      link: /driver/
    - theme: alt
      text: Command-line Documentation
      link: /command/

features:
  - title: Overhead Free
    details: Backed directly by the filesystem, reengineered file structure and metadata store for nearly zero overhead.
  - title: Stateless Access
    details: With signature-based permission, server just sign a token and client can access the file directly without any middleware.
  - title: Event Feed
    details: Even using stateless API access, server can still push event feed for state synchronization.
---

