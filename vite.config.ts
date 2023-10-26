import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr'
import { viteCommonjs, esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env
    },
    resolve: {
      // alias: aliases,
      alias: [
        {
          // /@/xxxx  =>  src/xxx
          find: /^~/,
          replacement: pathResolve('node_modules') + '/',
        },
        {
          // /@/xxxx  =>  src/xxx
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    optimizeDeps: {
      include: [
        '@ant-design/colors',
        '@ant-design/icons',
      ],
      esbuildOptions:{
        plugins:[
          esbuildCommonjs(['react-leaflet-cluster']) 
        ]
      }
    },
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://127.0.0.1:7770',
    //       changeOrigin: true,
    //       rewrite: path => path.replace(/^\/api/, '')
    //     }
    //   },
    // },
    plugins: [
      reactRefresh(),
      svgr(),
      viteCommonjs(),
      // styleImport({
      //   libs: [
      //     {
      //       libraryName: 'antd',
      //       esModule: true,
      //       resolveStyle: (name) => {
      //         return `antd/es/${name}/style/index`;
      //       },
      //     },
      //   ],
      // }),
    ],
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
  }
}
)
