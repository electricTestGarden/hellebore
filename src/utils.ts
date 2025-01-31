import { getCollection } from 'astro:content';

/**
 * Image Path helpers
 */
export const comicImageBasePath = "/assets/images/comics/";
export const characterImageBasePath = "/assets/images/characters/";
export const comicBasePath = "/comic/";
export const characterBasePath = "/comic/character/";

// TODO: These isFirst / isLast may be able to be combined 
/**
 * Returns true if this is the first comic by pubDate
 * 
 * @param comicSlug 
 * @returns 
 */
export const isFirstComic = async ( comicSlug: string ) => {
    const firstComic = await getFirstComic();
    return firstComic.data.slug === comicSlug;
}

/**
 * Gets the first comic by pubDate from the `comics` collection
 * @returns 
 */
export const getFirstComic = async () => {
    const allComicPosts = await getCollection('comics');
    return allComicPosts.reduce(function(prev, current) {
        return (prev && prev.data.pubDate < current.data.pubDate) ? prev : current
    });
}

/**
 * Returns true if this is the last comic by pubDate
 * @param comicSlug 
 * @returns 
 */
export const isLastComic = async ( comicSlug: string ) => {
    const lastComic = await getLastComic();
    return lastComic.data.slug === comicSlug;
}

/**
 * Returns the last comic according to pubDate
 * @returns 
 */
export const getLastComic = async () => {
    const allComicPosts = await getCollection('comics');
    return allComicPosts.reduce(function(prev, current) {
        return (prev && prev.data.pubDate > current.data.pubDate) ? prev : current
    });  
}

/**
 * Returns the next comic (or undefined) to the comic from the comic slug
 * 
 * @param comicSlug 
 * @returns
 */
export const getNextComic = async ( comicSlug: string ) => {
    const allSortedComics = (await getCollection('comics')).sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());;

    const currentComicsIndex = allSortedComics.findIndex((post) => post.id == comicSlug);
    return (currentComicsIndex + 1 === allSortedComics.length) ? undefined : allSortedComics[currentComicsIndex + 1];
}

/**
 * Returns the previous comic (or false) to the comic from the comic slug 
 * @param comicSlug 
 */
export const getPrevComic = async ( comicSlug: string ) => {
    const allSortedComics = (await getCollection('comics')).sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf());;

    const currentComicsIndex = allSortedComics.findIndex((post) => post.id == comicSlug);
    return (currentComicsIndex - 1 === allSortedComics.length) ? undefined : allSortedComics[currentComicsIndex - 1];
}