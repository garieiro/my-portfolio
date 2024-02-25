/** @type {import('next').NextConfig} */

module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-hello',
            value: 'there',
          },
        ],
      },
    ]
  },
}
