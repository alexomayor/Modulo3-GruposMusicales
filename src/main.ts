const nameformat =
  "background-color:green; font-weight:bold; font-size:large; color:white;";
var PopRock = "🎵 Pop Rock";
var Rock = "🎸 Rock";
var HardRock = "🤘 Hard Rock";
var Clasica = "🎼 Clásica";
interface MusicBand {
  name: string;
  year: number;
  active: boolean;
  Genre: string;
}

const TheBeatles: MusicBand = {
  name: "The Beatles",
  year: 1960,
  active: true,
  Genre: PopRock,
};

const Queen: MusicBand = {
  name: "Queen",
  year: 1970,
  active: false,
  Genre: Rock,
};

const ACDC: MusicBand = {
  name: "AC DC",
  year: 1973,
  active: true,
  Genre: HardRock,
};

const LudwinvanBeethoven: MusicBand = {
  name: "Ludwin van Beethoven",
  year: 1770,
  active: false,
  Genre: Clasica,
};

const TheRollingStones: MusicBand = {
  name: "The Rolling Stones",
  year: 1962,
  active: true,
  Genre: Rock,
};

console.log(`%c ${Queen.name}`, nameformat);
console.log(`Año de fundación: ${Queen.year}
Activo: ${Queen.active}
Género musical: ${Queen.Genre}`);
console.log(`%c ${TheBeatles.name}`, nameformat);
console.log(`Año de fundación: ${TheBeatles.year}
Activo: ${TheBeatles.active}
Género musical:${TheBeatles.Genre}`);
console.log(`%c ${ACDC.name}`, nameformat);
console.log(`Año de fundación: ${ACDC.year}
Activo: ${ACDC.active}
Género musical:${ACDC.Genre}`);
console.log(`%c ${LudwinvanBeethoven.name}`, nameformat);
console.log(`Año de fundación: ${LudwinvanBeethoven.year}
Activo: ${LudwinvanBeethoven.active}
Género musical:${LudwinvanBeethoven.Genre}`);
console.log(`%c ${TheRollingStones.name}`, nameformat);
console.log(`Año de fundación: ${TheRollingStones.year}
Activo: ${TheRollingStones.active}
Género musical:${TheRollingStones.Genre}`);
