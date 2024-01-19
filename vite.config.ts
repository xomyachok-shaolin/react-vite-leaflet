import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { resolve } from 'path';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      svgr(),
      viteCommonjs(),
    ],
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: pathResolve('node_modules') + '/',
        },
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    optimizeDeps: {
      include: [
        '@ant-design/colors',
        '@ant-design/icons',
        'screenfull',
      ],
    },
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {
            '@primary-color': '#1890ff',
          },
        },
      },
    },
    build: {
      rollupOptions: {
        external: ['@ant-design/icons', 'leaflet.fullscreen/Control.FullScreen.css']
      }
    }
  };
});
