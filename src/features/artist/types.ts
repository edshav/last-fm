type ImageSize = 'small' | 'medium' | 'large' | 'extralarge' | 'mega';

type TrackImage<T extends ImageSize> = {
  '#text'?: string;
  size: T;
};

export type TagDocument = {
  name?: string;
  url?: string;
};

export type Tag = {
  name: string;
  url: string;
};

export type ArtistDocument = {
  name?: string;
  mbid?: string;
  url?: string;
  image?: [
    TrackImage<'small'>,
    TrackImage<'medium'>,
    TrackImage<'large'>,
    TrackImage<'extralarge'>,
    TrackImage<'mega'>
  ];
  streamable?: string; // '0'
  ontour?: string; // '0'
  stats?: {
    listeners?: string; // '1316129'
    playcount?: string; // '20373996'
  };
  similar?: unknown;
  tags?: {
    tag?: TagDocument[];
  };
  bio?: {
    links?: unknown;
    published?: string; // '17 Feb 2006, 22:09';
    summary?: string; // 'Cher (born Cherilyn Sarkisian; May 20, 1946) is an Oscar- and Grammy-winning American singer and actress. A major figure for over five decades in the world of popular culture, she is often referred to as the Goddess of Pop for having first brought the sense of female autonomy and self-actualization into the entertainment industry. \n\nShe is known for her distinctive contralto and for having worked extensively across media, as well as for continuously reinventing both her music and image, the latter of which has been known to induce controversy. <a href="https://www.last.fm/music/Cher">Read more on Last.fm</a>';
    content?: string; // 'Cher (born Cherilyn Sarkisian; May 20, 1946) is an Oscar- and Grammy-winning American singer and actress. A major figure for over five decades in the world of popular culture, she is often referred to as the Goddess of Pop for having first brought the sense of female autonomy and self-actualization into the entertainment industry. \n\nShe is known for her distinctive contralto and for having worked extensively across media, as well as for continuously reinventing both her music and image, the latter of which has been known to induce controversy.\n\nCher was born Cherilyn Sarkisian in El Centro, California, on May 20, 1946. She is of Armenian-American, Irish, English, German, and Cherokee ancestry. Cher first caught the eye and ear of the public in 1965 as one-half of the pop rock duo Sonny & Cher, which popularized a peculiar smooth sound that competed successfully with the predominant British Invasion and Motown Sound of the era. After a period in which the duo became obsolete, she re-emerged in the 1970\'s as a television personality with her shows The Sonny & Cher Comedy Hour and Cher, which attained great popularity.\n\nAt the same time, she established herself as a solo artist with hits such as "Bang Bang (My Baby Shot Me Down)", "Gypsys, Tramps & Thieves", "Half-Breed", and "Dark Lady", which dealt with taboo subjects in mainstream popular music. Throughout, she cemented her status as a fashion trendsetter with her daring outfits, and was noted as being the first woman to expose her navel on television. Cher\'s impact at that time, as described by Phill Marder from Goldmine magazine, "led the way to advance feminine rebellion in the rock world," as she was "the prototype of the female rock star, setting the standard for appearance and [...] attitude[.]"\n\nIn 1983 Cher made a critically acclaimed appearance on Broadway and starred in the film Silkwood, which earned her a nomination for the Academy Award for Best Supporting Actress. In the following years, she became an acclaimed film actress by starring in a string of hit films, including Mask, The Witches of Eastwick, and Moonstruck, for which she won the Academy Award for Best Actress in 1988. At the same time, she established herself as a "serious rock and roller" by releasing a series of rock albums and hit singles such as "I Found Someone", "If I Could Turn Back Time", and "The Shoop Shoop Song (It\'s in His Kiss)".\n\nShe made her directing debut with the film If These Walls Could Talk in 1996 and released the biggest-selling single of her career thus far, "Believe", which revolutionized the recording industry because of its pioneer use of Auto-Tune (also known as the "Cher effect"). Throughout the 2000\'s she embarked on a series of concert tours that were among the highest-grossing of all-time.\n\nCher has won an Academy Award, a Grammy Award, an Emmy Award, three Golden Globe Awards, and the Best Actress Award at the Cannes Film Festival for her work in film, music and television. She is the only person  to receive all of these awards. She is also the only artist to have notched a number-one single on a Billboard chart in each of the past six decades. Recognized as one of the best-selling music artists of all time, she has sold more than 100 million solo albums worldwide and 40 million records as part of Sonny & Cher.\n\nOfficial website: http://www.cher.com/ <a href="https://www.last.fm/music/Cher">Read more on Last.fm</a>. User-contributed text is available under the Creative Commons By-SA License; additional terms may apply.';
  };
};

export type Artist = {
  name: string;
  image: string | null;
  tags: Tag[];
  bio: string | null;
};

export type ArtistGetInfoArg = {
  artistName: string;
};
export type ArtistGetInfoDocument = {
  artist: ArtistDocument;
};
export type ArtistGetInfoResult = {
  artist: Artist | null;
};
