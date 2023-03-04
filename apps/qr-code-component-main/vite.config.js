import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/front-end-mentor/qr-code-component-main/",
  plugins: [react()],
});
