module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/to/tua',
        destination: 'https://totallyusefulapi.ml',
        permanent: true,
      },
      {
        source: '/to/hgle',
        destination: 'https://hangle.me',
        permanent: true,
      },
    ]
  }
}
