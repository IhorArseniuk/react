export type Reactions = {
  likes: number;
  dislikes: number;
}

export type PostType  = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export type PostFetchType={
    posts: PostType[],
    total:number,
    skip: number,
    limit:number,

}
