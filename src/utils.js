import { v4 as uuid } from "uuid";
import stevePerry from "./music/st.mp3";

function chillHop() {
  return [
    {
      name: "Far From Home",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
      artist: "toonorth",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11735",
      color: ["#edb073", "#3b4653"],
      id: uuid(),
      active: true,
    },
    {
      name: "Witch Hat",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10017",
      color: ["#58B0C8", "#2B2B47"],
      id: uuid(),
      active: false,
    },
    {
      name: "Lax License",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-300x300.jpg",
      artist: "Mama Aiuto, Daphné",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
      color: ["#AE656E", "#143211"],
      id: uuid(),
      active: false,
    },
    {
      name: "Foolish Heart",
      cover:
        "https://e.snmc.io/i/600/w/5ef90aa8fe661471fb735edf7d459765/1760055",
      artist: "Steve Perry",
      audio: stevePerry,
      color: ["#C11F3A", "#4F3925"],
      id: uuid(),
      active: false,
    },
  ];
}

export default chillHop;
