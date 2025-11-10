
export type Reactions = {
  likes: number;
  dislikes: number;
}

export type PostsDummyType  = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}
