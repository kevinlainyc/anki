# IT::Terms

## Normalized vs Denormalized data

Let's say we have three json entries: `users`, `posts`, `comments`
How are we going to store the data (normalized vs denormalized)?

%

- Normalized: one table for each entity, use key to reference data from other tables
- Denormalized: user contains posts, posts contains comments

```json
// normalized
User: {
  id: 1,
  name: "John",
  posts: [1, 2]
}

Post: {
  id: 1,
  title: "Post 1",
  comments: [1, 2]
}

Comment: {
  id: 1,
  content: "Comment 1"
}

// denormalized
User: { 
  id: 1,
  name: "John",
  posts: [
    {
      title: "Post 1",
      comments: [
        {
          content: "Comment 1"
        },
        {
          content: "Comment 2"
        }
      ]
    },
    {
      title: "Post 2",
      comments: [
        {
          content: "Comment 3"
        },
        {
          content: "Comment 4"
        }
      ]
    }
  ]
}
```

## what are the pro/cons of using normalized/denormalized data?

%

- Normalized:
  - pro:
    - less data duplication
    - easier to update data
    - flexible (when ui changes, it's just a matter how we reconstruct the data on the ui)
  - con:
    - more queries to get data
    - more complex queries
- Denormalized:
  - pro:
    - less queries to get data
    - simpler queries
    - better performance
  - con:
    - more data duplication
    - harder to update data
    - less flexible (when ui changes, we either have to change the data structure or make some complex remapping to the data)
