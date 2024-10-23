// Artículo que aún no se ha publicado
function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.vies = 0;
  this.comments = [];
  this.isLive = false;
}
