# NewsApp — Posts

A small React news/posts app (Create React App, React 19). It loads
posts from the public [JSONPlaceholder](https://jsonplaceholder.typicode.com)
API and shows them as a grid of cards.

## What it does

- **Posts grid** — every post from
  `https://jsonplaceholder.typicode.com/posts` rendered as a card
  with its title and body
- Loading («Loading...») and error states while the request is in flight
  or fails
- A smoke test for the app shell lives in `src/App.test.js`

## Structure

```
src/
  App.jsx                     Header + Posts + Footer layout
  components/
    Header/                   page header
    Posts/                    fetches the posts, renders the grid
    PostCard/                 one post: title + body
    Footer/                   page footer
  index.js / index.css        entry point / styles
  App.css                     app layout styles
```

## Run

```bash
npm install
npm start     # http://localhost:3000
npm test      # test runner (watch mode)
npm run build # production build into build/
```
