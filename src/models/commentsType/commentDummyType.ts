export type User = {
  id: number;
  username: string;
  fullName: string;
}

export type CommentDummyType = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}
