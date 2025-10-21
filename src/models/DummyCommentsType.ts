export type User = {
  id: number;
  username: string;
  fullName: string;
}

export type DummyCommentsType = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}
