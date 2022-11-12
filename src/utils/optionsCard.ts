import { ICharacterDetail } from '../types/api'
import { ICharacter, IWeapon } from '../types/constant'
import { IOptionsCardAf, IOptionsCardChar } from '../types/optionsCard'
import { colors } from './constant'
import { capitalizeFirstLetter } from './helper'

const elements: any = {
  type: 'carousel',
  contents: [
    {
      type: 'bubble',
      size: 'micro',
      body: {
        backgroundColor: '#3d3e4a',
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/elements/anemo/icon',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Anemo',
                        size: 'xl',
                        color: '#ffffff',
                        decoration: 'none',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'anemo',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        backgroundColor: '#3d3e4a',
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/elements/cryo/icon',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Cryo',
                        size: 'xl',
                        color: '#ffffff',
                        decoration: 'none',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'cryo',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        backgroundColor: '#3d3e4a',
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/elements/dendro/icon',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Dendro',
                        size: 'xl',
                        color: '#ffffff',
                        decoration: 'none',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'dendro',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        backgroundColor: '#3d3e4a',
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/elements/electro/icon',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Electro',
                        size: 'xl',
                        color: '#ffffff',
                        decoration: 'none',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'electro',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        backgroundColor: '#3d3e4a',
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/elements/geo/icon',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Geo',
                        size: 'xl',
                        color: '#ffffff',
                        decoration: 'none',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'geo',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        backgroundColor: '#3d3e4a',
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/elements/hydro/icon',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Hydro',
                        size: 'xl',
                        color: '#ffffff',
                        decoration: 'none',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'hydro',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        backgroundColor: '#3d3e4a',
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/elements/pyro/icon',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Pyro',
                        size: 'xl',
                        color: '#ffffff',
                        decoration: 'none',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'pyro',
      },
    },
  ],
}

const weaponsType = {
  type: 'carousel',
  contents: [
    {
      type: 'bubble',
      size: 'micro',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Sword.png/',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Sword',
                        size: 'xl',
                        color: '#ffffff',
                        decoration: 'none',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'sword',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://static.wikia.nocookie.net/gensin-impact/images/6/66/Icon_Claymore.png/',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Claymores',
                        size: 'xl',
                        color: '#ffffff',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'claymore',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Icon_Polearm.png/',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Polearms',
                        size: 'xl',
                        color: '#ffffff',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'polearm',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://static.wikia.nocookie.net/gensin-impact/images/2/27/Icon_Catalyst.png/',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Catalysts',
                        size: 'xl',
                        color: '#ffffff',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'catalyst',
      },
    },
    {
      type: 'bubble',
      size: 'micro',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://static.wikia.nocookie.net/gensin-impact/images/8/81/Icon_Bow.png/',
            size: 'full',
            aspectMode: 'cover',
            aspectRatio: '1:1',
            gravity: 'center',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'Bows',
                        size: 'xl',
                        color: '#ffffff',
                      },
                    ],
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
      },
      action: {
        type: 'message',
        label: 'action',
        text: 'bow',
      },
    },
  ],
}

const charactersPick = (data: ICharacter[]) => {
  const mapArray = data.map((data) => {
    const rarityArrayIcon: any[] = []
    const rarityIcon = {
      type: 'icon',
      url:
        'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
    }
    for (let index = 0; index < data.rarity; index++) {
      rarityArrayIcon.push(rarityIcon)
    }

    const findColors = colors.find((el) => el.element === data.elements)

    return {
      type: 'bubble',
      size: 'micro',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: `https://api.genshin.dev/characters/${data.name}/card`,
            aspectMode: 'cover',
            aspectRatio: '2:4',
            gravity: 'center',
            size: 'full',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [],
            position: 'absolute',
            background: {
              type: 'linearGradient',
              angle: '0deg',
              endColor: '#00000000',
              startColor: '#00000099',
            },
            width: '100%',
            height: '40%',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
          },
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: capitalizeFirstLetter(data.name),
                        size: 'lg',
                        color: '#ffffff',
                      },
                    ],
                  },
                  {
                    type: 'box',
                    layout: 'baseline',
                    contents: rarityArrayIcon,
                    spacing: 'xs',
                  },
                ],
                spacing: 'xs',
              },
            ],
            position: 'absolute',
            offsetBottom: '0px',
            offsetStart: '0px',
            offsetEnd: '0px',
            paddingAll: '20px',
          },
        ],
        paddingAll: '0px',
        backgroundColor: findColors ? findColors.hex : '#ffffff',
      },
      action: {
        type: 'message',
        label: 'action',
        text: data.name,
      },
    }
  })

  return {
    type: 'carousel',
    contents: mapArray,
  }
}

const charactersDetails = async (data: ICharacterDetail, urlName: string) => {
  const imgType = urlName.includes('traveler') ? 'portrait' : 'gacha-splash'
  const aspectType = urlName.includes('traveler') ? 'fit' : 'cover'

  return {
    type: 'bubble',
    size: 'giga',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: `https://api.genshin.dev/characters/${urlName}/${imgType}`,
          size: 'full',
          aspectMode: aspectType,
          aspectRatio: '1:1',
          gravity: 'center',
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          position: 'absolute',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            endColor: '#00000000',
            startColor: '#00000099',
          },
          width: '100%',
          height: '40%',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: data.name,
                      size: 'xl',
                      color: '#ffffff',
                    },
                  ],
                },
                {
                  type: 'box',
                  layout: 'vertical',
                  contents: [
                    {
                      type: 'text',
                      text: data.title ? data.title : data.affiliation,
                      color: '#ffffff',
                      size: 'xs',
                      flex: 0,
                      align: 'start',
                      style: 'italic',
                    },
                  ],
                },
              ],
              spacing: 'xs',
            },
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          paddingAll: '20px',
        },
      ],
      paddingAll: 'xs',
      background: {
        type: 'linearGradient',
        angle: '0deg',
        startColor: '#20222B',
        endColor: '#423032',
      },
    },
    styles: {
      body: {
        backgroundColor: '#21222B',
      },
    },
  }
}

const artifactsDetails = ({ name, fullname }: IOptionsCardAf) => {
  return {
    type: 'bubble',
    size: 'kilo',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: `https://api.genshin.dev/artifacts/${name}/circlet-of-logos`,
          size: '80%',
          aspectMode: 'cover',
          aspectRatio: '2:3',
          gravity: 'top',
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: fullname,
                  size: 'sm',
                  color: '#ffffff',
                  weight: 'bold',
                  wrap: true,
                },
              ],
            },
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          paddingAll: '10px',
          paddingTop: '10px',
          backgroundColor: '#ffffff22',
        },
      ],
      paddingAll: '0px',
      backgroundColor: '#122556',
    },
  }
}

const weaponDetail = (data: IWeapon, fullname: string) => {
  const rarityArrayIcon: any[] = []
  const rarityIcon = {
    type: 'icon',
    url:
      'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png',
  }
  for (let index = 0; index < data.rarity; index++) {
    rarityArrayIcon.push(rarityIcon)
  }

  return {
    type: 'bubble',
    size: 'giga',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: `https://api.genshin.dev/weapons/${data.name}/icon`,
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '1:1',
          gravity: 'center',
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [],
          position: 'absolute',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            endColor: '#00000000',
            startColor: '#00000099',
          },
          width: '100%',
          height: '40%',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: fullname,
                      size: 'xl',
                      color: '#ffffff',
                    },
                  ],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: rarityArrayIcon,
                  spacing: 'xs',
                },
              ],
              spacing: 'xs',
            },
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          paddingAll: '20px',
        },
      ],
      paddingAll: '0px',
    },
  }
}

export {
  elements,
  weaponsType,
  charactersPick,
  charactersDetails,
  artifactsDetails,
  weaponDetail,
}
