import { defineCollection, z } from "astro:content";

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
        // Relation
        author: z.string(),

        // Relation
        tags: z.array(z.string()),
    }),
});

export const collections ={
    blog: blogCollection,
};