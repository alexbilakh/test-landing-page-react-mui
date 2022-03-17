import { v4 as uuidv4 } from "uuid";

let mainContents = [
  {
    id: uuidv4(),
    title: "LOREM IPSUM LOREM",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Vivamus vestibulum lacinia ipsum quis dignissim.",
  },
  {
    id: uuidv4(),
    title: "LOREM IPSUM LOREM",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Vivamus vestibulum lacinia ipsum quis dignissim.",
  },
];

let mainCards = [
  {
    id: uuidv4(),
    title: "LOREM IPSUM LOREM",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Vivamus vestibulum lacinia ipsum quis dignissim.",
  },
  {
    id: uuidv4(),
    title: "LOREM IPSUM LOREM",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica. Vivamus vestibulum lacinia ipsum quis dignissim.",
  },
];

let detailedCards = [
  {
    id: uuidv4(),
    title: "LOREM IPSUM",
    content: "Example Text",
    image: "/images/bg-1.jpg",
  },
  {
    id: uuidv4(),
    title: "LOREM IPSUM",
    content: "Example Text",
    image: "/images/bg-1.jpg",
  },
  {
    id: uuidv4(),
    title: "LOREM IPSUM",
    content: "Example Text",
    image: "/images/bg-1.jpg",
  },
  {
    id: uuidv4(),
    title: "LOREM IPSUM",
    content: "Example Text",
    image: "/images/bg-1.jpg",
  },
];

const getMainContent = () =>
  new Promise((resolve, reject) => {
    if (!mainContents) {
      return setTimeout(() => reject(new Error("MainContents not found")), 2500);
    }

    setTimeout(() => resolve(Object.values(mainContents)), 2500);
  });

const getMainCards = () =>
  new Promise((resolve, reject) => {
    if (!mainCards) {
      return setTimeout(() => reject(new Error("mainCards not found")), 2500);
    }

    setTimeout(() => resolve(Object.values(mainCards)), 2500);
  });

const getDetailedCards = () =>
  new Promise((resolve, reject) => {
    if (!detailedCards) {
      return setTimeout(() => reject(new Error("detailedCards not found")), 2500);
    }

    setTimeout(() => resolve(Object.values(detailedCards)), 2500);
  });

export {
  getMainContent,
  getMainCards,
  getDetailedCards,
};
