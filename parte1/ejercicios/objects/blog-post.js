const post = {
  title: "New Car",
  body: "By tesla...",
  author: "John White",
  views: 10,
  comments: [{ author: "Ben", body: "Good article!" }],
  isLive: true,
};

function BlogPost(title, body, author, views, comments, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.comments = comments;
  this.isLive = isLive;
}
