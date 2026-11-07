/* ============ EDIT YOUR CONTENT HERE ============ */
const SITE = {
  email: "kentzaulda1@gmail.com",
  instagram: "https://www.instagram.com/kimihiko679/",
  tiktok: "https://www.tiktok.com/@greymiko1"
};

// Promotional ad video (Google Drive file id). Sharing must be "Anyone with the link".
const PROMO = {
  id: "1OAIwtxok0zDISH-GCihP4u2d8phOD-N6",
  title: "Promotional advertisement video",
  desc: "A promotional video that introduces me as a digital artist and shares the passion and continuous growth behind every piece I create."
};

// Filters appear only when they have at least one work. Order below is the display order.
const CATEGORIES = ["Digital Artworks", "Flyer and Poster Designs", "Promotional Advertisements", "Design Proposals", "Game Character Designs", "Animation", "Academic and Other Creative Projects"];

// Add real works here. Images go in assets/art. Leave desc empty if you have no description yet.
const WORKS = [
 {
  "src": "assets/art/digital-01.jpg",
  "thumb": "assets/art/thumbs/digital-01.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 1",
  "desc": ""
 },
 {
  "src": "assets/art/digital-02.jpg",
  "thumb": "assets/art/thumbs/digital-02.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 2",
  "desc": ""
 },
 {
  "src": "assets/art/digital-03.jpg",
  "thumb": "assets/art/thumbs/digital-03.jpg",
  "w": 536,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 3",
  "desc": ""
 },
 {
  "src": "assets/art/digital-04.jpg",
  "thumb": "assets/art/thumbs/digital-04.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 4",
  "desc": ""
 },
 {
  "src": "assets/art/digital-05.jpg",
  "thumb": "assets/art/thumbs/digital-05.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 5",
  "desc": ""
 },
 {
  "src": "assets/art/digital-06.jpg",
  "thumb": "assets/art/thumbs/digital-06.jpg",
  "w": 536,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 6",
  "desc": ""
 },
 {
  "src": "assets/art/digital-07.jpg",
  "thumb": "assets/art/thumbs/digital-07.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 7",
  "desc": ""
 },
 {
  "src": "assets/art/digital-08.jpg",
  "thumb": "assets/art/thumbs/digital-08.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 8",
  "desc": ""
 },
 {
  "src": "assets/art/digital-09.jpg",
  "thumb": "assets/art/thumbs/digital-09.jpg",
  "w": 536,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 9",
  "desc": ""
 },
 {
  "src": "assets/art/digital-10.jpg",
  "thumb": "assets/art/thumbs/digital-10.jpg",
  "w": 537,
  "h": 760,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 10",
  "desc": ""
 },
 {
  "src": "assets/art/digital-11.jpg",
  "thumb": "assets/art/thumbs/digital-11.jpg",
  "w": 560,
  "h": 725,
  "categories": [
   "Digital Artworks"
  ],
  "title": "Digital Artwork 11",
  "desc": ""
 },
 {
  "src": "assets/art/character-01.jpg",
  "thumb": "assets/art/thumbs/character-01.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Game Character Designs"
  ],
  "title": "Game Character Design 1",
  "desc": ""
 },
 {
  "src": "assets/art/character-02.jpg",
  "thumb": "assets/art/thumbs/character-02.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Game Character Designs"
  ],
  "title": "Game Character Design 2",
  "desc": ""
 },
 {
  "src": "assets/art/character-03.jpg",
  "thumb": "assets/art/thumbs/character-03.jpg",
  "w": 560,
  "h": 432,
  "categories": [
   "Game Character Designs"
  ],
  "title": "Game Character Design 3",
  "desc": ""
 },
 {
  "src": "assets/art/character-04.jpg",
  "thumb": "assets/art/thumbs/character-04.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Game Character Designs"
  ],
  "title": "Game Character Design 4",
  "desc": ""
 },
 {
  "src": "assets/art/character-05.jpg",
  "thumb": "assets/art/thumbs/character-05.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Game Character Designs"
  ],
  "title": "Game Character Design 5",
  "desc": ""
 },
 {
  "src": "assets/art/flyer-01.jpg",
  "thumb": "assets/art/thumbs/flyer-01.jpg",
  "w": 538,
  "h": 760,
  "categories": [
   "Flyer and Poster Designs"
  ],
  "title": "Open for Commissions flyer 1",
  "desc": "A flyer advertising commission services."
 },
 {
  "src": "assets/art/flyer-02.jpg",
  "thumb": "assets/art/thumbs/flyer-02.jpg",
  "w": 560,
  "h": 725,
  "categories": [
   "Flyer and Poster Designs"
  ],
  "title": "Open for Commissions flyer 2",
  "desc": "A flyer advertising commission services."
 },
 {
  "type": "video",
  "id": "1uDm6Fb8EbW7ZZcdv3tO9KaOZ1vMD7LoL",
  "categories": [
   "Animation"
  ],
  "title": "Animation Sample 1",
  "desc": ""
 },
 {
  "type": "video",
  "id": "1iAjvH2xcAh-JwP0n3dkC7Ai3HwQ82chy",
  "categories": [
   "Animation"
  ],
  "title": "Animation Sample 2",
  "desc": ""
 }
];
