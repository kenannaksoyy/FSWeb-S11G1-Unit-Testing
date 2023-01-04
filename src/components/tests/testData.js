// ----- ÖRNEK EPISODE TEST NESNESİ -----

 export const exampleEpisodeData = {
   airdate: "2016-07-15",
   airstamp: "2016-07-15T12:00:00+00:00",
   airtime: "",
   id: 553946,
   image: "https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg",
   name: "Chapter One: The Vanishing of Will Byers",
   number: 1,
   rating: { average: 8.2 },
   runtime: 49,
   season: 1,
   summary:
     "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
   type: "regular",
   url: "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
 };

 export const exampleEpisodeDataV2 = {
    ...exampleEpisodeData,
    name:"Chapter One: Recep İvedik Afrikada",
    season: 4,
    number:2,
  };
  delete exampleEpisodeDataV2["image"];

  export const defImg= 'https://i.ibb.co/2FsfXqM/stranger-things.png';
