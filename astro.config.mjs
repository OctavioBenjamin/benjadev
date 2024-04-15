import { defineConfig } from 'astro/config';
import animations from "@midudev/tailwind-animations"
// https://astro.build/config
export default defineConfig({
    plugins: [animations]
});
