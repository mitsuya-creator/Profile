import { defineConfig } from "vitest/config"

export default defineConfig({
    test: {
        dir: "src/__test__",
        globals: true,
        environment: "jsdom"
    }
})
