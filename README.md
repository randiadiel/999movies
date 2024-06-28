# 999Movies

## Getting Started

I'm using pnpm by default, to start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## If I Had Given More Time

- I'm using react query for caching purposes (performance) and currently only support modern browsers, therefore I should use polyfills for the old browsers.
- I'm going to create more abstraction within the code to prevent any inconsistency while fetching and handling queryprefetch in the server.
- I'm going to restructure error handling.
