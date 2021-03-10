module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'Note',
    themeColor: "#333",
    iconPaths: {
      favicon32: './public/img/note_icons/favicon-32x32-dunplab-manifest-37607.png',
      favicon16: './public/img/note_icons/favicon-16x16-dunplab-manifest-37607.png',
      appleTouchIcon: './public/img/note_icons/apple-icon-152x152-dunplab-manifest-37607.png',
      msTileImage: './public/img/note_icons/apple-icon-144x144-dunplab-manifest-37607.png'
    },
    manifestOptions: {
      background_color: "#333",
      icons: [
        {
          src: "./public/img/note_icons/android-icon-192x192-dunplab-manifest-37607.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./public/img/note_icons/apple-icon-152x152-dunplab-manifest-37607.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "./public/img/note_icons/android-icon-192x192-dunplab-manifest-37607.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "./public/img/note_icons/apple-icon-152x152-dunplab-manifest-37607.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    }
  }
}
