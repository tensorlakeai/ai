"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://nuxt.com/docs/api/configuration/nuxt-config
exports.default = defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    nitro: {
        preset: 'vercel-edge', // you can use 'vercel' or other providers here
    },
    runtimeConfig: {
        openaiApiKey: '',
        assistantId: '',
    },
    compatibilityDate: '2024-07-05',
    telemetry: false,
});
