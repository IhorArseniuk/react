export type Reactions = {
    likes: number;
    dislikes: number;
}

export type PostDummyType = {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: Reactions;
    views: number;
    userId: number;
}
