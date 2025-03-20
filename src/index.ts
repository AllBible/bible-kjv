/**
 author: M2K Developments
 github: https://github.com/m2kdevelopments
 */

const books = require("./content/books.json");

/**
 * Get the text of a specific verse.
 *
 * @param {BOOK} book - The book of the Bible.
 * @param {number} chapter - The chapter number.
 * @param {number} verse - The verse number.
 * @returns {string} The text of the requested verse.
 */
export function getVerse(book: BOOK, chapter: number, verse: number): string {
    const verses = require(`./resources/${book.toString()}/${chapter}.json`);
    return verses[verse - 1];
}

/**
 * Get an array of verses within a specific range.
 *
 * @param {BOOK} book - The book of the Bible.
 * @param {number} chapter - The chapter number.
 * @param {number} verseStart - The starting verse number.
 * @param {number} verseEnd - The ending verse number.
 * @returns {Array<string>} An array of verse texts within the specified range.
 */
export function getVerses(book: BOOK, chapter: number, verseStart: number, verseEnd: number): Array<string> {
    const verses = require(`./resources/${book.toString()}/${chapter}.json`);
    return verses.slice(verseStart - 1, verseEnd);
}


/**
 * Get an array of verses from a specific chapter of a book in the Chichewa Bible.
 *
 * @param {BOOK} book - The book of the Bible.
 * @param {number} chapter - The chapter number.
 * @returns {Array<string>} An array of verse texts from the requested chapter.
 */
export function getChapter(book: BOOK, chapter: number): Array<string> {
    return require(`./resources/${book.toString()}/${chapter}.json`);
}


/**
 * Get the number of chapters in a book.
 *
 * @param {BOOK} book - The book of the Bible.
 * @returns {number} The number of chapters in the requested book.
 */
export function getChapterCount(book: BOOK): number {
    return books[book - 1].chapters as number;
}

/**
 * Get the number of verses in a specific chapter.
 *
 * @param {BOOK} book - The book of the Bible.
 * @param {number} chapter - The chapter number.
 * @returns {number} The number of verses in the requested chapter.
 */
export function getVerseCount(book: BOOK, chapter: number): number {
    const verses = require(`./resources/${book.toString()}/${chapter}.json`);
    return verses.length;
}

/**
 * Get an array of book names.
 *
 * @returns {Array<string>} An array of book names.
 */
export function getBooks(): Array<string> {
    return books.map((book: any) => book.name);
}

/**
 * Enum representing books of the Bible.
 * @enum {number}
 */
export enum BOOK {
    Genesis = 1,
    Exodus,
    Leviticus,
    Numbers,
    Deuteronomy,
    Joshua,
    Judges,
    Ruth,
    FirstSamuel,
    SecondSamuel,
    FirstKings,
    SecondKings,
    FirstChronicles,
    SecondChronicles,
    Ezra,
    Nehemiah,
    Esther,
    Job,
    Psalms,
    Proverbs,
    Ecclesiastes,
    SongOfSolomon,
    Isaiah,
    Jeremiah,
    Lamentations,
    Ezekiel,
    Daniel,
    Hosea,
    Joel,
    Amos,
    Obadiah,
    Jonah,
    Micah,
    Nahum,
    Habakkuk,
    Zephaniah,
    Haggai,
    Zechariah,
    Malachi,
    Matthew,
    Mark,
    Luke,
    John,
    Acts,
    Romans,
    FirstCorinthians,
    SecondCorinthians,
    Galatians,
    Ephesians,
    Philippians,
    Colossians,
    FirstThessalonians,
    SecondThessalonians,
    FirstTimothy,
    SecondTimothy,
    Titus,
    Philemon,
    Hebrews,
    James,
    FirstPeter,
    SecondPeter,
    FirstJohn,
    SecondJohn,
    ThirdJohn,
    Jude,
    Revelation
}