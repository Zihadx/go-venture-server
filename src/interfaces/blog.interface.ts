interface IBlog {
    id: string;
    title: string;
    author: string;
    authorImage: string;
    date: Date;
    excerpt: string;
    content: string;
    image: string;
    tags: string[];
  }
  
  export{IBlog}