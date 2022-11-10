import { IOptionsCardAf } from '../types/optionsCard'

const elements: any = {
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
        text: 'Geo',
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
        text: 'Hydro',
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

const weapons = {
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
        text: 'Sword',
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
        text: 'Claymore',
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
        text: 'Polearm',
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
        text: 'Catalyst',
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
          url: `https://api.genshin.dev/artifacts/${name}/flower-of-life`,
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

export { elements, weapons, artifactsDetails }
