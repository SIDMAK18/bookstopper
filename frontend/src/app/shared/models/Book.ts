export class Book {
    id!: string;
    title!: string;
    author!: string;
    price!: number;
    favorite!: boolean;
    stars!: number;
    imageUrl!: string;
    tags?: string[];
    description!: string;
  }