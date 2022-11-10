import { ICharacter } from "../types/constant"

const colors: any[] = [
  {
    element: "anemo",
    hex: "#74c4ac"
  },
  {
    element: "cryo",
    hex: "#ac8cc4"
  },
  {
    element: "dendro",
    hex: "#74c4ac"
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
    hex: "#74c4ac"
  },
  {
    element: "pyro",
    hex: "#74c4ac"
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
  },
  {
    id: 'Char2',
    name: 'aloy',
    elements: 'cryo',
  },
  {
    id: 'Char3',
    name: 'amber',
    elements: 'pyro',
  },
  {
    id: 'Char4',
    name: 'arataki-itto',
    elements: 'geo',
  },
  {
    id: 'Char5',
    name: 'ayaka',
    elements: 'cryo',
  },
  {
    id: 'Char6',
    name: 'ayato',
    elements: 'hydro',
  },
  {
    id: 'Char7',
    name: 'barbara',
    elements: 'hydro',
  },
  {
    id: 'Char8',
    name: 'beidou',
    elements: 'electro',
  },
  {
    id: 'Char9',
    name: 'bennett',
    elements: 'pyro',
  },
  {
    id: 'Char10',
    name: 'chongyun',
    elements: 'cryo',
  },
  {
    id: 'Char11',
    name: 'collei',
    elements: 'dendro',
  },
  {
    id: 'Char12',
    name: 'diluc',
    elements: 'pyro',
  },
  {
    id: 'Char13',
    name: 'diona',
    elements: 'cryo',
  },
  {
    id: 'Char14',
    name: 'eula',
    elements: 'cryo',
  },
  {
    id: 'Char15',
    name: 'fischl',
    elements: 'electro',
  },
  {
    id: 'Char16',
    name: 'ganyu',
    elements: 'cryo',
  },
  {
    id: 'Char17',
    name: 'gorou',
    elements: 'geo',
  },
  {
    id: 'Char18',
    name: 'hu-tao',
    elements: 'pyro',
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
  },
  {
    id: 'Char21',
    name: 'kazuha',
    elements: 'anemo',
  },
  {
    id: 'Char22',
    name: 'keqing',
    elements: 'electro',
  },
  {
    id: 'Char23',
    name: 'klee',
    elements: 'pyro',
  },
  {
    id: 'Char24',
    name: 'kokomi',
    elements: 'hydro',
  },
  {
    id: 'char25',
    name: 'kuki-shinobu',
    elements: 'electro',
  },
  {
    id: 'Char26',
    name: 'lisa',
    elements: 'electro',
  },
  {
    id: 'Char27',
    name: 'mona',
    elements: 'hydro',
  },
  {
    id: 'Char28',
    name: 'ningguang',
    elements: 'geo',
  },
  {
    id: 'Char29',
    name: 'nolle',
    elements: 'geo',
  },
  {
    id: 'Char30',
    name: 'qiqi',
    elements: 'cryo',
  },
  {
    id: 'Char31',
    name: 'raiden',
    elements: 'electro',
  },
  {
    id: 'Char32',
    name: 'razor',
    elements: 'electro',
  },
  {
    id: 'Char33',
    name: 'rosaria',
    elements: 'cryo',
  },
  {
    id: 'Char34',
    name: 'sara',
    elements: 'electro',
  },
  {
    id: 'Char35',
    name: 'sayu',
    elements: 'anemo',
  },
  {
    id: 'Char36',
    name: 'shenhe',
    elements: 'cryo',
  },
  {
    id: 'Char37',
    name: 'shikanoin-heizou',
    elements: 'anemo',
  },
  {
    id: 'Char38',
    name: 'surcrose',
    elements: 'anemo',
  },
  {
    id: 'Char39',
    name: 'tartaglia',
    elements: 'hydro',
  },
  {
    id: 'Char40',
    name: 'thoma',
    elements: 'pyro'
  },
  {
    id: 'Char41',
    name: 'tighnari',
    elements: 'dendro',
  },
  {
    id: 'Char42',
    name: 'traveler-anemo',
    elements: 'anemo',
  },
  {
    id: 'Char43',
    name: 'traveler-dendro',
    elements: 'dendro',
  },
  {
    id: 'Char44',
    name: 'traveler-electro',
    elements: 'electro',
  },
  {
    id: 'Char45',
    name: 'traveler-geo',
    elements: 'geo',
  },
  {
    id: 'Char46',
    name: 'venti',
    elements: 'anemo',
  },
  {
    id: 'Char47',
    name: 'xiangling',
    elements: 'pyro',
  },
  {
    id: 'Char48',
    name: 'xiao',
    elements: 'anemo',
  },
  {
    id: 'Char49',
    name: 'xingqiu',
    elements: 'hydro',
  },
  {
    id: 'Char50',
    name: 'xinyan',
    elements: 'pyro',
  },
  {
    id: 'Char51',
    name: 'yae-miko',
    elements: 'electro',
  },
  {
    id: 'Char52',
    name: 'yanfei',
    elements: 'pyro',
  },
  {
    id: 'Char53',
    name: 'yelan',
    elements: 'hydro',
  },
  {
    id: 'Char54',
    name: 'yoimiya',
    elements: 'pyro',
  },
  {
    id: 'Char55',
    name: 'yun-jin',
    elements: 'geo',
  },
  {
    id: 'Char56',
    name: 'zhongli',
    elements: 'geo',
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
    type: 'Claymore'
  },
  {
    id: 'W2',
    name: 'alley-hunter',
    type: 'Bow'
  },
]

export {
  recieveHello,
  responseHello,
  noAnswer,
  elementsConstant,
  characters,
  artifacts,
  weapons,
}
