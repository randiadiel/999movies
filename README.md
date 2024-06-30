# 999Movies

## Getting Started

I'm using pnpm by default, to start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Explanation

- Since there are requirements for SEO so i use nextjs witch currently have the most stable SSR System.
- Using React Query to easily manage caches of the query done in the client. It also support prefetching before it being hydrated in the client.
- Separate reusable logics of movie into features or SDK
- Create necessary utils and helpers for the app
- Using context as the state management for global state
- Deploy using vercel
- Hook it up to my personal DNS 

## If I Had Given More Time

- I'm using react query for caching purposes (performance) and currently only support modern browsers, therefore I should use polyfills for the old browsers.
- I'm going to create more abstraction within the code to prevent any inconsistency while fetching and handling queryprefetch in the server.
- I'm going to restructure error handling.
- I'm going to implement pagination.


## Improvement
- We can use protobuf files to define contract from BE and use code generator to generate every contract types.
