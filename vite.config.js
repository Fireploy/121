import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import process from "process";
import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: parseInt(env.VITE_PORT),
      host: true,
      cors: true,
      allowedHosts: [env.VITE_FIREPLOY_HOST],
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      host: true,
      cors: true,
      allowedHosts: [env.VITE_FIREPLOY_HOST],
    },
  });
};
