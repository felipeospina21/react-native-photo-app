import { rest } from 'msw';

export const handlers = [
  rest.get('https://api.unsplash.com/topics', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '1',
          title: 'office',
          cover_photo: {
            urls: {
              small: 'https://mockImage.com',
            }
          },
        },
        {
          id: '2',
          title: 'general',
          cover_photo: {
            urls: {
              small: 'https://mockImage.com',
            }
          },
        },
      ])
    );
  }),

  rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
    const query = req.url.searchParams.get('query');
    if (query === 'o') {
      return res(
        ctx.json({
          data: {
            data: {
              results: [
                {
                  id: '1',
                  user: {
                    name: 'mock user 1',
                    location: 'mock user location 1',
                    profile_image: {
                      small: 'https://mockImage.com',
                    },
                  },
                  urls: {
                    regular: 'https://mockImage.com',
                  },
                },
                {
                  id: '2',
                  user: {
                    name: 'mock user 2',
                    location: 'mock user location 2',
                    profile_image: {
                      small: 'https://mockImage.com',
                    },
                  },
                  urls: {
                    regular: 'https://mockImage.com',
                  },
                },
              ],
            },
          },
        })
      );
    }
  }),
];
