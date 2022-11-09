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

const artifacts = {
  type: 'carousel',
  contents: [
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/artifacts/adventurer/flower-of-life',
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
                        text: 'Adventurer',
                        size: '3xl',
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
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/artifacts/berserker/flower-of-life',
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
                        text: 'Berserker',
                        size: '3xl',
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
    },
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://api.genshin.dev/artifacts/blizzard-strayer/flower-of-life',
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
                        text: 'Blizzard Strayer',
                        size: '3xl',
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
    },
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://api.genshin.dev/artifacts/bloodstained-chivalry/flower-of-life',
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
                        text: 'Bloodstained Chivalry',
                        size: '3xl',
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
    },
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url: 'https://api.genshin.dev/artifacts/brave-heart/flower-of-life',
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
                        text: 'Brave Heart',
                        size: '3xl',
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
    },
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://api.genshin.dev/artifacts/crimson-witch-of-flames/flower-of-life',
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
                        text: 'Crimson Witch of Flames',
                        size: '3xl',
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
    },
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'image',
            url:
              'https://api.genshin.dev/artifacts/deepwood-memories/flower-of-life',
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
                        text: 'Deepwood Memories',
                        size: '3xl',
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
    },
  ],
}

module.exports = {
  weapons,
  artifacts,
}
