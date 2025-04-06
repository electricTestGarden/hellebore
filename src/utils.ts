import { getCollection, type CollectionEntry } from 'astro:content';
const base = import.meta.env.BASE ? `${import.meta.env.BASE}/` : "";

/**
 * Image Path helpers
 */
export const comicImageBasePath = `${base}assets/images/comics/`;
export const characterImageBasePath = `${base}assets/images/characters/`;
export const comicBasePath = `${base}comic/`;
export const characterBasePath = `${base}comic/character/`;

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

/**
 * Returns characters in character collection sorted by number of comic appearances 
 */
export const getSortedCharacters = async () => {
    const comics = await getCollection('comics');
    const characters = await getCollection('characters');

    characters.sort((a, b) => {
        return getComicsWithChar(b.data.id, comics).length - getComicsWithChar(a.data.id, comics).length;
    });

    return characters;
}

/**
 * Gets collection of comics that contain a particular character
 * @param character 
 * @param comics 
 * @returns 
 */
export const getComicsWithChar = (character: string, comics: CollectionEntry<"comics">[]) => {
    return comics.filter((comic) => comicHasCharacter(comic, character));
}

/**
 * Returns true if a character exists on a comic
 * 
 * @param comic 
 * @param title 
 * @returns 
 */
export const comicHasCharacter = (comic: CollectionEntry<"comics">, title: string) => {
    return comic.data.characters
        .map((a: string) => a.toLowerCase())
        .includes(title);
}

/**
 * Returns true if a named slot has content in it 
 * 
 * @param slot 
 * @param name 
 * @returns boolean
 */
export const hasSlot = async (slot: AstroGlobal['slots'], name: string) => {
  const renderedContent = await slot.render(name);
  return !!renderedContent?.trim().length;
}