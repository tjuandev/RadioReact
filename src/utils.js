import { v4 as uuid } from "uuid";

import StevePerry from "./music/steveP.mp3";
import BillieJean from "./music/mj.mp3";
import DontStop from "./music/q.mp3";
import EveryBreath from "./music/evbyt.mp3";

function chillHop() {
  return [
    {
      name: "Billie Jean",
      cover: "https://pbs.twimg.com/media/DXk9toEX0AAV4wh.jpg",
      artist: "Michael Jackson",
      audio: BillieJean,
      color: ["#EDF0E9", "#2F2D21"],
      id: uuid(),
      active: false,
    },
    {
      name: "Every Breath You Take",
      cover: "https://i1.sndcdn.com/artworks-000578148152-55g4iq-t500x500.jpg",
      artist: "The Police",
      audio: EveryBreath,
      color: ["#79BEE6", "#AC212C"],
      id: uuid(),
      active: false,
    },
    {
      name: "Don't Stop Me Now",
      cover:
        "https://dvfnvgxhycwzf.cloudfront.net/media/SharedImage/imageFull/.fdcCMS6U/SharedImage-53604.jpg?t=efbe08dbd4e46ac03bce",
      artist: "Queen",
      audio: DontStop,
      color: ["#EDF0E9", "#2F2D21"],
      id: uuid(),
      active: false,
    },
    {
      name: "Foolish Heart",
      cover:
        "https://e.snmc.io/i/600/w/5ef90aa8fe661471fb735edf7d459765/1760055",
      artist: "Steve Perry",
      audio: StevePerry,
      color: ["#C11F3A", "#4F3925"],
      id: uuid(),
      active: false,
    },
  ];
}

export default chillHop;
