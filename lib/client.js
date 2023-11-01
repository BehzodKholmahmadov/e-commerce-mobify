import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client=createClient({
    projectId:'k2pxmhej',
    dataset:'productions',
    apiVersion:'2023-07-23',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true
});

const builder=imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source)

