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
    words:
      "A forward or attacking midfielder, Messi is blessed with outstanding ball control and pace and he's one of the finest players the game has seen.",
  },
  {
    id: 4,
    slug: "goat",
    name: "Goat",
    price: 333,
    image: "/images/4e72ac167620351.Y3JvcCwxMTk2LDkzNSwzMzQsNjIx.webp",
    words:
      "Lionel Messi—probably the best player in the world today. He is one of the finest and most exciting footballing talents in the world. He had this never ending comparison with the former Manchester United Winger Cristiano Ronaldo but he kind of shrugged off it by helping his team defeat Manchester United convincingly in the UEFA Champions League finals at Rome 2009.",
  },
  {
    id: 5,
    slug: "world-class",
    name: "World Class",
    price: 350,
    image: "/images/ebce1e73940305.5c1a8f2cd55fc.webp",
    words:
      "He is the best player I have ever seen. The best thing about him is not what he does, but how simple he makes everything look. He is not just the best player because he can dribble past three or four players, it is because he does it better than anyone in the world.",
  },
  {
    id: 6,
    slug: "skillful",
    name: "Skillful",
    price: 400,
    image: "/images/af92d6159152353.6398df9b81db3.webp",
    words:
      "Lionel Messi is one of the best dribblers of all time. The unique thing about Messi as opposed to the other players on this list is that he is not one to do flashy tricks. The record seven-time Ballon d'Or winner uses his incredible close control, drop of the shoulder and hip swivels to get the better of his opponents.",
  },
  {
    id: 7,
    slug: "class",
    name: "Class",
    price: 250,
    image: "/images/5b13f8159414699.Y3JvcCw4MDgsNjMyLDAsMA.webp",
    words:
      "Messi rarely does stepovers and La Croqueta, a move popularized by his former teammate and legendary midfielder Andres Iniesta, is one of his go-to moves. He simply shifts the ball from one foot to the other to evade a challenge before heading past the on-rushing defender with his burst of pace.",
  },
  {
    id: 8,
    slug: "sorcerer",
    name: "Sorcerer",
    price: 777,
    image: "/images/eb62a3169368255.Y3JvcCwxNTAwLDExNzMsMCw0NjQ.webp",
    words:
      "Lionel Messi has earned the title of a magician. For what he produces on the football pitch. Zig zag dribbles, cutting edge passes that no one else sees, and astonishing goals.",
  },
  {
    id: 9,
    slug: "baller",
    name: "Baller",
    price: 450,
    image: "/images/48e100160199357.Y3JvcCwzMTM0LDI0NTIsMTg2LDA.webp",
    words:
      "At 22, Messi got his first FIFA World Player of the Year award. After that, he made efforts to keep that award in his possession by winning the award for the next 3 years.",
  },
  {
    id: 10,
    slug: "unbelievable",
    name: "Unbelievable",
    price: 250,
    image: "/images/b88a99163774347.Y3JvcCwxOTgzLDE1NTEsMCwyNzk.webp",
    words:
      "He was diagnosed with a growth hormone deficiency as a child, which required expensive treatment and put a strain on his family's finances. In 2021, he won his first major international trophy, guiding Argentina to a Copa America triumph. He helped his country lift their third World Cup title in Qatar a year later.",
  },
  {
    id: 11,
    slug: "idan",
    name: "Idan",
    price: 500,
    image: "/images/e4e7e766347343.Y3JvcCw0MzksMzQzLDI4OCw2NA.webp",
    words:
      "At the age of 17, he made his league debut against RCD Espanyol and became the third youngest person ever to play on Barcelona. At that time he was also the youngest player to ever score for Barcelona.",
  },
  {
    id: 12,
    slug: "new-era",
    name: "New Era",
    price: 550,
    image: "/images/4cdfab116614271.Y3JvcCwxMTY5LDkxNCwxMDksNjMw.webp",
    words:
      "Lionel Messi has finally signed his eagerly anticipated Paris Saint-Germain (PSG) contract to complete the move that confirms the end of a career-long association with Barcelona and sends PSG into a new era.",
  },
  {
    id: 13,
    slug: "genius",
    name: "Genius",
    price: 650,
    image: "/images/2bbb3a95114393.Y3JvcCwxNDAwLDEwOTUsMCwzMQ.webp",
    words:
      "According to sources and the Guinness website, Lionel Messi possesses as many as 60 Guinness World records to his name. Argentine superstar Lionel Messi is arguably the greatest footballer of his generation and one of the best players of all time",
  },
  {
    id: 14,
    slug: "the-best",
    name: "The Best",
    price: 750,
    image: "/images/73b09532789969.Y3JvcCwyNzczLDIxNjksMzUzLDQ4Mw.webp",
    words:
      "Argentinian footballer Lionel Messi, widely regarded as one of the greatest players of all time, has received seven Ballon d'Or awards, the most for any football player, as well as the 2009 FIFA World Player of the Year, and the 2019 and 2022 The Best FIFA Men's Player",
  },
  {
    id: 15,
    slug: "a-new-beginning",
    name: "A New Beginning",
    price: 550,
    image: "/images/8d92ce159658003.Y3JvcCwxNDAwLDEwOTUsMCwyMTg.webp",
    words:
      "The defining image of this World Cup was just about its last one. There was a kiss for the trophy. Lionel Messi finally became acquainted with the World Cup. On a night high on drama and higher on emotion, it had the perfect ending for the greatest of them all",
  },
  {
    id: 16,
    slug: "alien",
    name: "Alien",
    price: 450,
    image: "/images/8107af146610383.62b34b3634853.webp",
    words:
      "When you think he is going to lose it, he comes away with it. When you think he doesn’t see you, he leaves you 1vs1 against the keeper.",
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
