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
      {
        source: '/to/weather',
        destination: 'https://weather.ar-dev.cf',
        permanent: true
      },
      {
        source: '/to/meta',
        destination: 'https://meta.ar-dev.cf',
        permanent: true
      },
      {
        source: '/to/encode',
        destination: 'https://encode.ar-dev.cf',
        permanent: true
      },
      {
        source: '/to/css',
        destination: 'https://css.ar-dev.cf',
        permanent: true
      },
      {
        source: '/to/weathterm',
        destination: 'https://npm.im/weather69420',
        permanent: true
      },
      {
        source: '/to/insults',
        destination: 'https://insults.ar-dev.cf',
        permanent: true
      },
      {
        source: '/to/bbeo',
        destination: 'https://blobeo.blobby.me',
        permanent: true
      },
      {
        source: '/to/bc',
        destination: 'https://www.blobchat.ml',
        permanent: true
      },
      {
        source: '/to/pfk',
        destination: 'https://profanitykiller.ml',
        permanent: true
      },
      {
        source: '/to/fr',
        destination: 'https://www.formrocket.me',
        permanent: true
      },
      {
        source: '/to/fr_gui',
        destination: 'https://gui.formrocket.me',
        permanent: true
      }
    ]
  }
}
