import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";


export default defineConfig({

  plugins:[

    react(),

    VitePWA({

      registerType:"autoUpdate",

      manifest:{

        name:"Be Money Wise",

        short_name:"MoneyWise",

        description:"Personal finance tracker",

        theme_color:"#705E8A",

        background_color:"#FFFDF8",

        display:"standalone",

        icons:[

          {
            src:"/icon-192.png",
            sizes:"192x192",
            type:"image/png"
          },

          {
            src:"/icon-512.png",
            sizes:"512x512",
            type:"image/png"
          }

        ]

      }

    })

  ]

});