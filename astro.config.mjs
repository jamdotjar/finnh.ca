import { defineConfig, fontProviders } from "astro/config";
// https://astro.build/config

export default defineConfig({
    site: 'https://finnh.ca',
    image: {
        responsiveStyles: true
    },
    experimental: {
        fonts: [
            {
                name: "Switzer",
                cssVariable: "--font-switzer",
                provider: fontProviders.fontshare(),
                weights: [100, 200, 300, 400, 500, 600, 700, 800],
            },
            {
                name: "Manrope",
                cssVariable: "--font-manrope",
                provider: fontProviders.google(),
                weights: [200, 300, 400, 500, 600, 700, 800, 900],

            },
            {
                name: "IBM Plex Mono",
                cssVariable: "--font-ibmplexmono",
                provider: fontProviders.google(),
            }

        ]
    }
});
