const recieveHello: String[] = [
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

const responseHello: String[] = [
  'สวัสดีนักเดินทาง อยากให้ฉันแนะนำอะไรกดที่เมนูได้เลยนะคะ',
  'สวัสดีนักเดินทาง เป็นอย่างไรบ้างช่วงนี้',
  'สวัสดีนักเดินทาง มีอะไรให้ฉันช่วยกดเมนูได้เลยนะ',
]

const noAnswer: String[] = [
  'ฉันไม่เข้าใจที่คุณนักเดินทางพูดค่ะ',
  'Katheryne ไม่เข้าใจ พูดใหม่ได้ไหมคะ',
]

const characters: any[] = [
  {
    id: 'Char1',
    name: 'albedo'
  },
  {
    id: 'Char2',
    name: 'aloy'
  },
  {
    id: 'Char3',
    name: 'amber'
  },
  {
    id: 'Char4',
    name: 'arataki-itto'
  },
  {
    id: 'Char5',
    name: 'ayaka'
  },
  {
    id: 'Char6',
    name: 'ayato'
  },
  {
    id: 'Char7',
    name: 'barbara'
  },
  {
    id: 'Char8',
    name: 'beidou'
  },
  {
    id: 'Char9',
    name: 'bennett'
  },
  {
    id: 'Char10',
    name: 'chongyun'
  },
  {
    id: 'Char11',
    name: 'collei'
  },
  {
    id: 'Char12',
    name: 'diluc'
  },
  {
    id: 'Char13',
    name: 'diona'
  },
  {
    id: 'Char14',
    name: 'eula'
  },
  {
    id: 'Char15',
    name: 'fischl'
  },
  {
    id: 'Char16',
    name: 'ganyu'
  },
  {
    id: 'Char17',
    name: 'gorou'
  },
  {
    id: 'Char18',
    name: 'hu-tao'
  },
  {
    id: 'Char19',
    name: 'jean'
  },
  {
    id: 'Char20',
    name: 'keaya'
  },
  {
    id: 'Char21',
    name: 'kazuha'
  },
  {
    id: 'Char22',
    name: 'keqing'
  },
  {
    id: 'Char23',
    name: 'klee'
  },
  {
    id: 'Char24',
    name: 'kokomi'
  },
  {
    id: 'char25',
    name: 'kuki-shinobu'
  },
  {
    id: 'Char26',
    name: 'lisa'
  },
  {
    id: 'Char27',
    name: 'mona'
  },
  {
    id: 'Char28',
    name: 'ningguang'
  },
  {
    id: 'Char29',
    name: 'nolle'
  },
  {
    id: 'Char30',
    name: 'qiqi'
  },
  {
    id: 'Char31',
    name: 'raiden'
  },
  {
    id: 'Char32',
    name: 'razor'
  },
  {
    id: 'Char33',
    name: 'rosaria'
  },
  {
    id: 'Char34',
    name: 'sara'
  },
  {
    id: 'Char35',
    name: 'sayu'
  },
  {
    id: 'Char36',
    name: 'shenhe'
  },
  {
    id: 'Char37',
    name: 'shikanoin-heizou'
  },
  {
    id: 'Char38',
    name: 'surcrose'
  },
  {
    id: 'Char39',
    name: 'tartaglia'
  },
  {
    id: 'Char40',
    name: 'thoma'
  },
  {
    id: 'Char41',
    name: 'tighnari'
  },
  {
    id: 'Char42',
    name: 'traveler-anemo'
  },
  {
    id: 'Char43',
    name: 'traveler-dendro'
  },
  {
    id: 'Char44',
    name: 'traveler-electro'
  },
  {
    id: 'Char45',
    name: 'traveler-geo'
  },
  {
    id: 'Char46',
    name: 'venti'
  },
  {
    id: 'Char47',
    name: 'xiangling'
  },
  {
    id: 'Char48',
    name: 'xiao'
  },
  {
    id: 'Char49',
    name: 'xingqiu'
  },
  {
    id: 'Char50',
    name: 'xinyan'
  },
  {
    id: 'Char51',
    name: 'yae-miko'
  },
  {
    id: 'Char52',
    name: 'yanfei'
  },
  {
    id: 'Char53',
    name: 'yelan'
  },
  {
    id: 'Char54',
    name: 'yoimiya'
  },
  {
    id: 'Char55',
    name: 'yun-jin'
  },
  {
    id: 'Char56',
    name: 'zhongli'
  }
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

export { recieveHello, responseHello, noAnswer, characters, artifacts }
