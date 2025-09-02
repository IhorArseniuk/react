export type User = {
  id: number;
  username: string;
  fullName: string;
}

export type CommentType = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}

export type CommentsDummyType={
    comments:CommentType[],
    total:number,
    skip:number,
    limit:number,
}
