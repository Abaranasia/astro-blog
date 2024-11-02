import { defineCollection, reference, z } from "astro:content";

const blogCollection= defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        //image: z.string(),
        image: image().refine( (img) => img.width > 500, {
            message: 'Image should be greater than 500px',
        }),
        author: reference('author'), // Relation with Author collection
       
        tags: z.array(z.string()), // Relation with tags collection
    }),
});

const authorCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        name: z.string(),
        avatar: image(),
        twitter: z.string(),
        linkedIn: z.string(),
        github: z.string(),
        bio: z.string(),
        subtitle: z.string(),
    })
});

export const collections ={
    blog: blogCollection,
    author: authorCollection,
};