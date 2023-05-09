const items = [
  {
    id: 1,
    slug: "world-cup",
    name: "World Cup",
    price: 500,
    image: "/images/aba649160354591.Y3JvcCwxMDAwMCw3ODIxLDAsNjE4.webp",
    words:
      "After Argentina's victory over France in Sunday's thriller and jaw-dropping World Cup final held in Qatar’s Doha, there shouldn’t be any noise surrounding the maestro. In a glittering career that has spanned three decades, the footballer has bagged a record 37 club trophies, seven Ballon D'Or awards and six European Golden Boots.",
  },
  {
    id: 2,
    slug: "copa-america",
    name: "Copa America",
    price: 333,
    image: "/images/4f97bf153781437.Y3JvcCw1NTUwLDQzNDEsMTM0Niww.webp",
    words:
      "2021 Copa America Win. Messi, 34, went into the tournament after four failed attempts for Argentina in finals, and the Albiceleste lifted the Copa America after a 1-0 win over Brazil at the Maracana stadium on July 11.",
  },
  {
    id: 3,
    slug: "original",
    name: "Original",
    price: 700,
    image: "/images/2c4fbe160815683.Y3JvcCwxOTIwLDE1MDEsMCwzMTg.webp",
    words: "helo",
  },
  {
    id: 4,
    slug: "goat",
    name: "Goat",
    price: 333,
    image: "/images/4e72ac167620351.Y3JvcCwxMTk2LDkzNSwzMzQsNjIx.webp",
    words: "helo",
  },
  {
    id: 5,
    slug: "world-class",
    name: "World Class",
    price: 350,
    image: "/images/ebce1e73940305.5c1a8f2cd55fc.webp",
    words: "helo",
  },
  {
    id: 6,
    slug: "skillful",
    name: "Skillful",
    price: 400,
    image: "/images/af92d6159152353.6398df9b81db3.webp",
    words: "helo",
  },
  {
    id: 7,
    slug: "class",
    name: "Class",
    price: 250,
    image: "/images/5b13f8159414699.Y3JvcCw4MDgsNjMyLDAsMA.webp",
    words: "helo",
  },
  {
    id: 8,
    slug: "soccerer",
    name: "Soccerer",
    price: 777,
    image: "/images/eb62a3169368255.Y3JvcCwxNTAwLDExNzMsMCw0NjQ.webp",
    words: "helo",
  },
  {
    id: 9,
    slug: "baller",
    name: "Baller",
    price: 450,
    image: "/images/48e100160199357.Y3JvcCwzMTM0LDI0NTIsMTg2LDA.webp",
    words: "helo",
  },
  {
    id: 10,
    slug: "unbelievable",
    name: "Unbelievable",
    price: 250,
    image: "/images/b88a99163774347.Y3JvcCwxOTgzLDE1NTEsMCwyNzk.webp",
    words: "helo",
  },
  {
    id: 11,
    slug: "idan",
    name: "Idan",
    price: 500,
    image: "/images/e4e7e766347343.Y3JvcCw0MzksMzQzLDI4OCw2NA.webp",
    words: "helo",
  },
  {
    id: 12,
    slug: "new-era",
    name: "New Era",
    price: 550,
    image: "/images/4cdfab116614271.Y3JvcCwxMTY5LDkxNCwxMDksNjMw.webp",
    words: "helo",
  },
  {
    id: 13,
    slug: "genius",
    name: "Genius",
    price: 650,
    image: "/images/2bbb3a95114393.Y3JvcCwxNDAwLDEwOTUsMCwzMQ.webp",
    words: "helo",
  },
  {
    id: 14,
    slug: "the-best",
    name: "The Best",
    price: 750,
    image: "/images/73b09532789969.Y3JvcCwyNzczLDIxNjksMzUzLDQ4Mw.webp",
    words: "helo",
  },
  {
    id: 15,
    slug: "a-new-beginning",
    name: "A New Beginning",
    price: 550,
    image: "/images/8d92ce159658003.Y3JvcCwxNDAwLDEwOTUsMCwyMTg.webp",
    words: "helo",
  },
  {
    id: 16,
    slug: "alien",
    name: "Alien",
    price: 450,
    image: "/images/8107af146610383.62b34b3634853.webp",
    words: "helo",
  },
];

export async function getData(slug?: string): Promise<Array<any>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (slug) {
        const data = items.filter((x) => x.slug === slug);
        resolve(data);
      } else {
        resolve(items);
      }
    }, 1000);
  });
}
