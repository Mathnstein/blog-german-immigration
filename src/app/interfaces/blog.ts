
export interface Blog {
    publishedOn?: Date;
    displayPublished?: string;
    lastEditedOn?: Date;
    displayEdited?: string;
    readTime: string;
    title: string;
    content: Array<string>;
    image: string;
    likes: number;
    url: string
}
