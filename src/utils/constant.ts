import { ICharacter, IHexColor } from "../types/constant"

const colors: IHexColor[] = [
  {
    element: "anemo",
    hex: "#74c4ac"
  },
  {
    element: "cryo",
    hex: "#9cd4e4"
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
    hex: "#fcb43c"
  },
  {
    element: "hydro",
    hex: "#4cccf8"
  },
  {
    element: "pyro",
    hex: "#ec7c3c"
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
  'สวัสดีนักเดินทาง อยากให้ฉันแนะนำอะไรกดที่เมนูได้เลยนะคะ ',
  'สวัสดีนักเดินทาง มีอะไรให้ฉันช่วยกดเมนูได้เลยนะ',
]

const noAnswer: string[] = [
  'ฉันไม่เข้าใจที่คุณนักเดินทางพูดค่ะ หากสงสัยเรื่องใด กดช่องเมนูได้นะคะ 😊👍',
  'Katheryne ไม่เข้าใจ 😵‍💫  หากสงสัยเรื่องใด กดช่องเมนูได้นะคะ 😊👍',
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
    name: 'noelle',
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
    name: 'sucrose',
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
    id: 'W15',
    name: 'bloodtainted-greatsword',
    type: 'claymore'
  },
  {
    id: 'W16',
    name: 'calamity-queller',
    type: 'polearm'
  },
  {
    id: 'W17',
    name: 'cinnabar -spindle',
    type: 'sword'
  },
  {
    id: 'W18',
    name: 'compound-bow',
    type: 'bow'
  },
  {
    id: 'W19',
    name: 'cool-steel',
    type: 'sword'
  },
  {
    id: 'W20',
    name: 'crescent-pike',
    type: 'polearm'
  },
  {
    id: 'W21',
    name: 'dark-iron-sword',
    type: 'sword'
  },
  {
    id: 'W22',
    name: 'deathmatch',
    type: 'polearm'
  },
  {
    id: 'W23',
    name: 'debate-club',
    type: 'claymore'
  },
  {
    id: 'W24',
    name: 'dodoco-tales',
    type: 'catalyst'
  },
  {
    id: 'W25',
    name: 'dragon-s-bane',
    type: 'polearm'
  },
  {
    id: 'W26',
    name: 'dragonspine-spear',
    type: 'polearm'
  },
  {
    id: 'W27',
    name: 'dull-blade',
    type: 'sword'
  },
  {
    id: 'W28',
    name: 'eberlasting-moonglow',
    type: 'catalyst'
  },
  {
    id: 'W29',
    name: 'ebony-bow',
    type: 'bow'
  },
  {
    id: 'W30',
    name: 'elegy-for-the-end',
    type: 'bow'
  },
  {
    id: 'W31',
    name: 'emerald-orb',
    type: 'catalyst'
  },
  {
    id: 'W32',
    name: 'engulfing-lightning',
    type: 'polearm'
  },
  {
    id: 'W33',
    name: 'everlasting-moonglow',
    type: 'catalyst'
  },
  {
    id: 'W34',
    name: 'eye-of-perception',
    type: 'catalyst'
  },
  {
    id: 'W35',
    name: 'ambfavonius-codex',
    type: 'catalyst'
  },
  {
    id: 'W36',
    name: 'favonius-greatsword',
    type: 'claymore'
  },
  {
    id: 'W37',
    name: 'favonius-lance',
    type: 'polearm'
  },
  {
    id: 'W38',
    name: 'favonius-sword',
    type: 'sword'
  },
  {
    id: 'W39',
    name: 'favonius-warbow',
    type: 'bow'
  },
  {
    id: 'W40',
    name: 'ferrous-shadow',
    type: 'claymore'
  },
  {
    id: 'W41',
    name: 'festering-desire',
    type: 'sword'
  },
  {
    id: 'W42',
    name: 'fillet-blade',
    type: 'sword'
  },
  {
    id: 'W43',
    name: 'freedom-sworn',
    type: 'sword'
  },
  {
    id: 'W44',
    name: 'frostbearer',
    type: 'catalyst'
  },
  {
    id: 'W45',
    name: 'hakushin-ring',
    type: 'catalyst'
  },
  {
    id: 'W46',
    name: 'halberd',
    type: 'polearm'
  },
  {
    id: 'W47',
    name: 'hamayumi',
    type: 'bow'
  },
  {
    id: 'W48',
    name: 'haran-geppaku-futsu',
    type: 'sword'
  },
  {
    id: 'W49',
    name: 'harbinger-of-dawn',
    type: 'sword'
  },
  {
    id: 'W50',
    name: 'hunter-s-bow',
    type: 'bow'
  },
  {
    id: 'W51',
    name: 'iron-point',
    type: 'polearm'
  },
  {
    id: 'W52',
    name: 'iron-sting',
    type: 'sword'
  },
  {
    id: 'W53',
    name: `kagura's-verity`,
    type: 'catalyst'
  },
  {
    id: 'W54',
    name: 'katsuragikiri-nagamasa',
    type: 'claymore'
  },
  {
    id: 'W55',
    name: 'kitain-cross-spear',
    type: 'polearm'
  },
  {
    id: 'W56',
    name: 'lion-s-roar',
    type: 'sword'
  },
  {
    id: 'W57',
    name: 'lithic-blade',
    type: 'claymore'
  },
  {
    id: 'W58',
    name: 'lithic-spear',
    type: 'polearm'
  },
  {
    id: 'W59',
    name: 'lost-prayer-to-the-sacred-winds',
    type: 'catalyst'
  },
  {
    id: 'W60',
    name: 'luxurious-sea-lord',
    type: 'claymore'
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
