import { ICharacter, IHexColor, IWeapon } from "../types/constant"

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
  'สวัสดีนักเดินทาง 😊  อยากให้ฉันแนะนำอะไรกดที่เมนูด้านล่างได้เลยนะคะ 👇🏻👇🏻👇🏻',
  'สวัสดีนักเดินทาง 😊  มีอะไรให้ฉันช่วยกดเมนูด้านล่างได้เลยนะ 👇🏻👇🏻👇🏻',
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
const weaponConstant: string[] = [
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

const weapons: IWeapon[] = [
  {
    id: 'W1',
    name: 'akuoumaru',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W2',
    name: 'alley-hunter',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W3',
    name: 'amber-catalyst',
    type: 'catalyst',
    rarity: 3
  },
  {
    id: 'W4',
    name: 'amenoma-kageuchi',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W5',
    name: 'amos-bow',
    type: 'bow',
    rarity: 5
  },
  {
    id: 'W6',
    name: 'apprentice-s-notes',
    type: 'catalyst',
    rarity: 1
  },
  {
    id: 'W7',
    name: 'aquila-favonia',
    type: 'sword',
    rarity: 5
  },
  {
    id: 'W8',
    name: 'beginner-s-protector',
    type: 'polearm',
    rarity: 1
  },
  {
    id: 'W9',
    name: 'black-tassel',
    type: 'polearm',
    rarity: 3
  },
  {
    id: 'W10',
    name: 'blackcliff-amulet',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W11',
    name: 'blackcliff-longsword',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W12',
    name: 'blackcliff-pole',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W13',
    name: 'blackcliff-slasher',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W14',
    name: 'blackcliff-warbow',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W15',
    name: 'bloodtainted-greatsword',
    type: 'claymore',
    rarity: 3
  },
  {
    id: 'W16',
    name: 'calamity-queller',
    type: 'polearm',
    rarity: 5
  },
  {
    id: 'W17',
    name: 'cinnabar -spindle',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W18',
    name: 'compound-bow',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W19',
    name: 'cool-steel',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W20',
    name: 'crescent-pike',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W21',
    name: 'dark-iron-sword',
    type: 'sword',
    rarity: 3
  },
  {
    id: 'W22',
    name: 'deathmatch',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W23',
    name: 'debate-club',
    type: 'claymore',
    rarity: 3
  },
  {
    id: 'W24',
    name: 'dodoco-tales',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W25',
    name: 'dragon-s-bane',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W26',
    name: 'dragonspine-spear',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W27',
    name: 'dull-blade',
    type: 'sword',
    rarity: 1
  },
  {
    id: 'W28',
    name: 'eberlasting-moonglow',
    type: 'catalyst',
    rarity: 5
  },
  {
    id: 'W29',
    name: 'ebony-bow',
    type: 'bow',
    rarity: 3
  },
  {
    id: 'W30',
    name: 'elegy-for-the-end',
    type: 'bow',
    rarity: 5
  },
  {
    id: 'W31',
    name: 'emerald-orb',
    type: 'catalyst',
    rarity: 3
  },
  {
    id: 'W32',
    name: 'engulfing-lightning',
    type: 'polearm',
    rarity: 5
  },
  {
    id: 'W33',
    name: 'everlasting-moonglow',
    type: 'catalyst',
    rarity: 5
  },
  {
    id: 'W34',
    name: 'eye-of-perception',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W35',
    name: 'ambfavonius-codex',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W36',
    name: 'favonius-greatsword',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W37',
    name: 'favonius-lance',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W38',
    name: 'favonius-sword',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W39',
    name: 'favonius-warbow',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W40',
    name: 'ferrous-shadow',
    type: 'claymore',
    rarity: 3
  },
  {
    id: 'W41',
    name: 'festering-desire',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W42',
    name: 'fillet-blade',
    type: 'sword',
    rarity: 3
  },
  {
    id: 'W43',
    name: 'freedom-sworn',
    type: 'sword',
    rarity: 5
  },
  {
    id: 'W44',
    name: 'frostbearer',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W45',
    name: 'hakushin-ring',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W46',
    name: 'halberd',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W47',
    name: 'hamayumi',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W48',
    name: 'haran-geppaku-futsu',
    type: 'sword',
    rarity: 5
  },
  {
    id: 'W49',
    name: 'harbinger-of-dawn',
    type: 'sword',
    rarity: 3
  },
  {
    id: 'W50',
    name: 'hunter-s-bow',
    type: 'bow',
    rarity: 1
  },
  {
    id: 'W51',
    name: 'iron-point',
    type: 'polearm',
    rarity: 2
  },
  {
    id: 'W52',
    name: 'iron-sting',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W53',
    name: `kagura's-verity`,
    type: 'catalyst',
    rarity: 5
  },
  {
    id: 'W54',
    name: 'katsuragikiri-nagamasa',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W55',
    name: 'kitain-cross-spear',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W56',
    name: 'lion-s-roar',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W57',
    name: 'lithic-blade',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W58',
    name: 'lithic-spear',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W59',
    name: 'lost-prayer-to-the-sacred-winds',
    type: 'catalyst',
    rarity: 5
  },
  {
    id: 'W60',
    name: 'luxurious-sea-lord',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W61',
    name: 'magic-guide',
    type: 'catalyst',
    rarity: 3
  },
  {
    id: 'W62',
    name: 'mappa-mare',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W63',
    name: 'memory-of-dust',
    type: 'catalyst',
    rarity: 5
  },
  {
    id: 'W64',
    name: 'messenger',
    type: 'Bow',
    rarity: 3
  },
  {
    id: 'W65',
    name: 'mistsplitter-reforged',
    type: 'sword',
    rarity: 5
  },
  {
    id: 'W66',
    name: 'mitternachts-waltz',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W67',
    name: `mouun's-moon`,
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W68',
    name: 'oathsworn-eye',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W69',
    name: 'old-merc-s-pal',
    type: 'claymore',
    rarity: 2
  },
  {
    id: 'W70',
    name: 'otherworldly-story',
    type: 'catalyst',
    rarity: 3
  },
  {
    id: 'W71',
    name: 'pocket-grimoire',
    type: 'catalyst',
    rarity: 2
  },
  {
    id: 'W72',
    name: 'polar-star',
    type: 'bow',
    rarity: 5
  },
  {
    id: 'W73',
    name: 'predator',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W74',
    name: 'primordial-jade-cutter',
    type: 'sword',
    rarity: 5
  },
  {
    id: 'W75',
    name: 'primordial-jade-winged-spear',
    type: 'polearm',
    rarity: 5
  },
  {
    id: 'W76',
    name: 'prototype-archaic',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W77',
    name: 'prototype-crescent',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W78',
    name: 'prototype-grudge',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W79',
    name: 'prototype-malice',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W80',
    name: 'prototype-rancour',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W81',
    name: 'quartz',
    type: 'claymore',
    rarity: 3
  },
  {
    id: 'W82',
    name: 'rainslasher',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W83',
    name: 'raven-bow',
    type: 'bow',
    rarity: 3
  },
  {
    id: 'W84',
    name: 'recurve-bow',
    type: 'bow',
    rarity: 3
  },
  {
    id: 'W85',
    name: 'redhorn-stonethresher',
    type: 'claymore',
    rarity: 5
  },
  {
    id: 'W86',
    name: 'royal-bow',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W87',
    name: 'royal-greatsword',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W88',
    name: 'royal-grimoire',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W89',
    name: 'royal-longsword',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W90',
    name: 'royal-spear',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W91',
    name: 'rust',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W92',
    name: 'sacrificial-bow',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W93',
    name: 'sacrificial-fragments',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W94',
    name: 'sacrificial-greatsword',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W95',
    name: 'sacrificial-sword',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W96',
    name: 'seasoned-hunter-s-bow',
    type: 'bow',
    rarity: 2
  },
  {
    id: 'W97',
    name: 'serpent-spine',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W98',
    name: 'sharpshooter-s-oath',
    type: 'bow',
    rarity: 3
  },
  {
    id: 'W99',
    name: 'silver-sword',
    type: 'sword',
    rarity: 2
  },
  {
    id: 'W100',
    name: 'skyrider-greatsword',
    type: 'claymore',
    rarity: 3
  },
  {
    id: 'W101',
    name: 'skyrider-sword',
    type: 'sword',
    rarity: 3
  },
  {
    id: 'W102',
    name: 'skyward-atlas',
    type: 'catalyst',
    rarity: 5
  },
  {
    id: 'W103',
    name: 'skyward-blade',
    type: 'sword',
    rarity: 5
  },
  {
    id: 'W104',
    name: 'skyward-harp',
    type: 'catalyst',
    rarity: 5
  },
  {
    id: 'W105',
    name: 'skyward-pride',
    type: 'claymore',
    rarity: 5
  },
  {
    id: 'W106',
    name: 'skyward-spine',
    type: 'polearm',
    rarity: 5
  },
  {
    id: 'W107',
    name: 'slingshot',
    type: 'bow',
    rarity: 3
  },
  {
    id: 'W108',
    name: 'snow-tombed-starsilver',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W109',
    name: 'solar-pearl',
    type: 'catalyst',
    rarity: 5
  },
  {
    id: 'W110',
    name: 'song-of-broken-pines',
    type: 'claymore',
    rarity: 5
  },
  {
    id: 'W111',
    name: 'staff-of-homa',
    type: 'polearm',
    rarity: 5
  },
  {
    id: 'W112',
    name: 'summit-shaper',
    type: 'sword',
    rarity: 5
  },
  {
    id: 'W113',
    name: 'sword-of-descension',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W114',
    name: 'the-alley-flash',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W115',
    name: 'the-bell',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W116',
    name: 'the-black-sword',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W117',
    name: 'the-catch',
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W118',
    name: 'the-flute',
    type: 'sword',
    rarity: 4
  },
  {
    id: 'W119',
    name: 'the-stringless',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W120',
    name: 'the-unforged',
    type: 'claymore',
    rarity: 5
  },
  {
    id: 'W121',
    name: 'the-viridescent-hunt',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W122',
    name: 'the-widsith',
    type: 'catalst',
    rarity: 4
  },
  {
    id: 'W123',
    name: 'thrilling-tales-of-dragon-slayers',
    type: 'catalyst',
    rarity: 3
  },
  {
    id: 'W124',
    name: 'thundering-pulse',
    type: 'bow',
    rarity: 5
  },
  {
    id: 'W125',
    name: 'traveler-s-handy-sword',
    type: 'sword',
    rarity: 3
  },
  {
    id: 'W126',
    name: 'twin-nephrite',
    type: 'catalyst',
    rarity: 3
  },
  {
    id: 'W127',
    name: 'vortex-vanquisher',
    type: 'polearm',
    rarity: 5
  },
  {
    id: 'W128',
    name: 'waster-greatsword',
    type: 'claymore',
    rarity: 1
  },
  {
    id: 'W129',
    name: `wavebreaker's-fin`,
    type: 'polearm',
    rarity: 4
  },
  {
    id: 'W130',
    name: 'white-iron-greatsword',
    type: 'claymore',
    rarity: 3
  },
  {
    id: 'W131',
    name: 'white-tassel',
    type: 'polearm',
    rarity: 3
  },
  {
    id: 'W132',
    name: 'whiteblind',
    type: 'claymore',
    rarity: 4
  },
  {
    id: 'W133',
    name: 'windblume-ode',
    type: 'bow',
    rarity: 4
  },
  {
    id: 'W134',
    name: 'wine-and-song',
    type: 'catalyst',
    rarity: 4
  },
  {
    id: 'W135',
    name: 'wolf-s-gravestone',
    type: 'claymore',
    rarity: 5
  },
]

export {
  colors,
  recieveHello,
  responseHello,
  noAnswer,
  elementsConstant,
  weaponConstant,
  characters,
  artifacts,
  weapons,
}
