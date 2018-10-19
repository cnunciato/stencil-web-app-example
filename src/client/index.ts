export class Client {

  static api(path: string) {
    return `http://localhost:3000${path}`;
  }

  static fetchPosts() {
    return fetch(this.api('/posts'));
  }

  static fetchPost(id: number) {
    return fetch(this.api(`/posts/${id}`));
  }
}
