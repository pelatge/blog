import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      title: post.title,
      tags: post.tags,
      slug: post.slug,
      excerpt: post.excerpt,
      printDate: post.printDate,
      description: post.description,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
