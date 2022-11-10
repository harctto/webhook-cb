import { ICharacter, IHexColor } from "../types/constant"

const colors: IHexColor[] = [
  {
    element: "anemo",
    hex: "#74c4ac"
  },
  {
    element: "cryo",
    hex: "#ec7c3c"
  },
  {
    element: "dendro",
    hex: "#a4cc44"
  },
  {
    element: "electro",
    hex: "#ac8cc4"
  },
  {
    element: "geo",
    hex: "#74c4ac"
  },
  {
    element: "hydro",
    hex: "#4cccf8"
  },
  {
    element: "pyro",
    hex: "#fcb43c"
  },
]

const recieveHello: string[] = [
  'สวัสดี',
  'ดีจ้า',
  'ดี',
  'แคทเทอรีน',
  'โย่',
  'ฮัลโหล',
  'โหล',
  'มุ่งสู่ดวงดาว',
  'มุ่งสู่ดวงดาวและก้นเหว',
  'สวีดัด',
  'hi',
  'hello',
  'Katheryne',
  'ก้นเหว',
  'ดวงดาว',
  'fu',
  'l;ylfu',
  '้ร',
  '้ำสสน',
]

const responseHello: string[] = [
  'สวัสดีนักเดินทาง อยากให้ฉันแนะนำอะไรกดที่เมนูได้เลยนะคะ',
  'สวัสดีนักเดินทาง เป็นอย่างไรบ้างช่วงนี้ มีคำถามอะไรหรือป่าวคะ',
  'สวัสดีนักเดินทาง มีอะไรให้ฉันช่วยกดเมนูได้เลยนะ',
]

const noAnswer: string[] = [
  'ฉันไม่เข้าใจที่คุณนักเดินทางพูดค่ะ หากสงสัยเรื่องใด กดช่องเมนูได้นะคะ',
  'Katheryne ไม่เข้าใจ หากสงสัยเรื่องใด กดช่องเมนูได้นะคะ',
]
const elementsConstant: string[] = [
  'anemo',
  'cryo',
  'dendro',
  'electro',
  'geo',
  'hydro',
  'pyro',
]

//ประเภทอาวุธ
const typeConstant: string[] = [
  'sword',
  'claymore',
  'polearm',
  'catalyst',
  'bow'
]

const characters: ICharacter[] = [
  {
    id: 'Char1',
    name: 'albedo',
    elements: 'geo',
    rarity: 5,
  },
  {
    id: 'Char2',
    name: 'aloy',
    elements: 'cryo',
    rarity: 5,
  },
  {
    id: 'Char3',
    name: 'amber',
    elements: 'pyro',
    rarity: 4,
  },
  {
    id: 'Char4',
    name: 'arataki-itto',
    elements: 'geo',
    rarity: 5,
  },
  {
    id: 'Char5',
    name: 'ayaka',
    elements: 'cryo',
    rarity: 5,
  },
  {
    id: 'Char6',
    name: 'ayato',
    elements: 'hydro',
    rarity: 5,
  },
  {
    id: 'Char7',
    name: 'barbara',
    elements: 'hydro',
    rarity: 4,
  },
  {
    id: 'Char8',
    name: 'beidou',
    elements: 'electro',
    rarity: 4,
  },
  {
    id: 'Char9',
    name: 'bennett',
    elements: 'pyro',
    rarity: 4,
  },
  {
    id: 'Char10',
    name: 'chongyun',
    elements: 'cryo',
    rarity: 4,
  },
  {
    id: 'Char11',
    name: 'collei',
    elements: 'dendro',
    rarity: 4,
  },
  {
    id: 'Char12',
    name: 'diluc',
    elements: 'pyro',
    rarity: 5,
  },
  {
    id: 'Char13',
    name: 'diona',
    elements: 'cryo',
    rarity: 4,
  },
  {
    id: 'Char14',
    name: 'eula',
    elements: 'cryo',
    rarity: 5,
  },
  {
    id: 'Char15',
    name: 'fischl',
    elements: 'electro',
    rarity: 4,
  },
  {
    id: 'Char16',
    name: 'ganyu',
    elements: 'cryo',
    rarity: 5,
  },
  {
    id: 'Char17',
    name: 'gorou',
    elements: 'geo',
    rarity: 4,
  },
  {
    id: 'Char18',
    name: 'hu-tao',
    elements: 'pyro',
    rarity: 5,
  },
  {
    id: 'Char19',
    name: 'jean',
    elements: 'anemo',
    rarity: 5
  },
  {
    id: 'Char20',
    name: 'keaya',
    elements: 'cyro',
    rarity: 4,
  },
  {
    id: 'Char21',
    name: 'kazuha',
    elements: 'anemo',
    rarity: 5,
  },
  {
    id: 'Char22',
    name: 'keqing',
    elements: 'electro',
    rarity: 5,
  },
  {
    id: 'Char23',
    name: 'klee',
    elements: 'pyro',
    rarity: 5,
  },
  {
    id: 'Char24',
    name: 'kokomi',
    elements: 'hydro',
    rarity: 5,
  },
  {
    id: 'char25',
    name: 'kuki-shinobu',
    elements: 'electro',
    rarity: 4,
  },
  {
    id: 'Char26',
    name: 'lisa',
    elements: 'electro',
    rarity: 4,
  },
  {
    id: 'Char27',
    name: 'mona',
    elements: 'hydro',
    rarity: 5,
  },
  {
    id: 'Char28',
    name: 'ningguang',
    elements: 'geo',
    rarity: 4,
  },
  {
    id: 'Char29',
    name: 'nolle',
    elements: 'geo',
    rarity: 4,
  },
  {
    id: 'Char30',
    name: 'qiqi',
    elements: 'cryo',
    rarity: 5,
  },
  {
    id: 'Char31',
    name: 'raiden',
    elements: 'electro',
    rarity: 5,
  },
  {
    id: 'Char32',
    name: 'razor',
    elements: 'electro',
    rarity: 4,
  },
  {
    id: 'Char33',
    name: 'rosaria',
    elements: 'cryo',
    rarity: 4,
  },
  {
    id: 'Char34',
    name: 'sara',
    elements: 'electro',
    rarity: 4,
  },
  {
    id: 'Char35',
    name: 'sayu',
    elements: 'anemo',
    rarity: 4,
  },
  {
    id: 'Char36',
    name: 'shenhe',
    elements: 'cryo',
    rarity: 5,
  },
  {
    id: 'Char37',
    name: 'shikanoin-heizou',
    elements: 'anemo',
    rarity: 4,
  },
  {
    id: 'Char38',
    name: 'surcrose',
    elements: 'anemo',
    rarity: 4,
  },
  {
    id: 'Char39',
    name: 'tartaglia',
    elements: 'hydro',
    rarity: 5,
  },
  {
    id: 'Char40',
    name: 'thoma',
    elements: 'pyro',
    rarity: 4,
  },
  {
    id: 'Char41',
    name: 'tighnari',
    elements: 'dendro',
    rarity: 5,
  },
  {
    id: 'Char42',
    name: 'traveler-anemo',
    elements: 'anemo',
    rarity: 5,
  },
  {
    id: 'Char43',
    name: 'traveler-dendro',
    elements: 'dendro',
    rarity: 5,
  },
  {
    id: 'Char44',
    name: 'traveler-electro',
    elements: 'electro',
    rarity: 5,
  },
  {
    id: 'Char45',
    name: 'traveler-geo',
    elements: 'geo',
    rarity: 5,
  },
  {
    id: 'Char46',
    name: 'venti',
    elements: 'anemo',
    rarity: 5,
  },
  {
    id: 'Char47',
    name: 'xiangling',
    elements: 'pyro',
    rarity: 4,
  },
  {
    id: 'Char48',
    name: 'xiao',
    elements: 'anemo',
    rarity: 5,
  },
  {
    id: 'Char49',
    name: 'xingqiu',
    elements: 'hydro',
    rarity: 4,
  },
  {
    id: 'Char50',
    name: 'xinyan',
    elements: 'pyro',
    rarity: 4,
  },
  {
    id: 'Char51',
    name: 'yae-miko',
    elements: 'electro',
    rarity: 5,
  },
  {
    id: 'Char52',
    name: 'yanfei',
    elements: 'pyro',
    rarity: 4,
  },
  {
    id: 'Char53',
    name: 'yelan',
    elements: 'hydro',
    rarity: 5,
  },
  {
    id: 'Char54',
    name: 'yoimiya',
    elements: 'pyro',
    rarity: 5,
  },
  {
    id: 'Char55',
    name: 'yun-jin',
    elements: 'geo',
    rarity: 4,
  },
  {
    id: 'Char56',
    name: 'zhongli',
    elements: 'geo',
    rarity: 5,
  },
]

const artifacts: any[] = [
  {
    id: 'A1',
    name: 'adventurer',
  },
  {
    id: 'A2',
    name: 'archaic-petra',
  },
  {
    id: 'A3',
    name: 'berserker',
  },
  {
    id: 'A4',
    name: 'blizzard-strayer',
  },
  {
    id: 'A5',
    name: 'bloodstained-chivalry',
  },
  {
    id: 'A6',
    name: 'brave-heart',
  },
  {
    id: 'A7',
    name: 'crimson-witch-of-flames',
  },
  {
    id: 'A8',
    name: 'deepwood-memories',
  },
  {
    id: 'A9',
    name: 'defender-s-will',
  },
  {
    id: 'A10',
    name: 'emblem-of-severed-fate',
  },
  {
    id: 'A11',
    name: 'gambler',
  },
  {
    id: 'A12',
    name: 'gilded-dreams',
  },
  {
    id: 'A13',
    name: 'glacier-and-snowfield',
  },
  {
    id: 'A14',
    name: 'gladiator-s-finale',
  },
  {
    id: 'A15',
    name: 'heart-of-depth',
  },
  {
    id: 'A16',
    name: 'husk-of-opulent-dreams',
  },
  {
    id: 'A17',
    name: 'instructor',
  },
  {
    id: 'A18',
    name: 'lavawalker',
  },
  {
    id: 'A19',
    name: 'lucky-dog',
  },
  {
    id: 'A20',
    name: 'maiden-beloved',
  },
  {
    id: 'A21',
    name: 'martial-artist',
  },
  {
    id: 'A22',
    name: 'noblesse-oblige',
  },
  {
    id: 'A23',
    name: 'ocean-hued-clam',
  },
  {
    id: 'A24',
    name: 'pale-flame',
  },
  {
    id: 'A25',
    name: 'prayers-for-destiny',
  },
  {
    id: 'A26',
    name: 'prayers-for-illumination',
  },
  {
    id: 'A27',
    name: 'prayers-for-wisdom',
  },
  {
    id: 'A28',
    name: 'prayers-to-springtime',
  },
  {
    id: 'A29',
    name: 'prayers-to-the-firmament',
  },
  {
    id: 'A30',
    name: 'resolution-of-sojourner',
  },
  {
    id: 'A31',
    name: 'retracing-bolide',
  },
  {
    id: 'A32',
    name: 'scholar',
  },
  {
    id: 'A33',
    name: 'shimenawa-s-reminiscence',
  },
  {
    id: 'A34',
    name: 'tenacity-of-the-millelith',
  },
  {
    id: 'A35',
    name: 'the-exile',
  },
  {
    id: 'A36',
    name: 'thundering-fury',
  },
  {
    id: 'A37',
    name: 'thundersoother',
  },
  {
    id: 'A38',
    name: 'tiny-miracle',
  },
  {
    id: 'A39',
    name: 'traveling-doctor',
  },
  {
    id: 'A40',
    name: 'viridescent-venerer',
  },
  {
    id: 'A41',
    name: 'wanderer-s-troupe',
  },
]

const weapons = [
  {
    id: 'W1',
    name: 'akuoumaru',
    type: 'claymore'
  },
  {
    id: 'W2',
    name: 'alley-hunter',
    type: 'bow'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W4',
    name: 'amenoma-kageuchi',
    type: 'sword'
  },
  {
    id: 'W5',
    name: 'amos-bow',
    type: 'bow'
  },
  {
    id: 'W6',
    name: 'apprentice-s-notes',
    type: 'catalyst'
  },
  {
    id: 'W7',
    name: 'aquila-favonia',
    type: 'sword'
  },
  {
    id: 'W8',
    name: 'beginner-s-protector',
    type: 'polearm'
  },
  {
    id: 'W9',
    name: 'black-tassel',
    type: 'polearm'
  },
  {
    id: 'W10',
    name: 'blackcliff-amulet',
    type: 'catalyst'
  },
  {
    id: 'W11',
    name: 'blackcliff-longsword',
    type: 'sword'
  },
  {
    id: 'W12',
    name: 'blackcliff-pole',
    type: 'polearm'
  },
  {
    id: 'W13',
    name: 'blackcliff-slasher',
    type: 'claymore'
  },
  {
    id: 'W14',
    name: 'blackcliff-warbow',
    type: 'bow'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst'
  },

]

export {
  colors,
  recieveHello,
  responseHello,
  noAnswer,
  elementsConstant,
  typeConstant,
  characters,
  artifacts,
  weapons,
}
