import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import viteCompression from 'vite-plugin-compression'
import { viteVConsole } from 'vite-plugin-vconsole'
import viteEslint from 'vite-plugin-eslint'
import { resolve } from 'path'

const Timestamp = new Date().getTime()
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    define: {
      'process.env': env
    },
    base: `/${env.VITE_PUBLIC_PATH}/`,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1300,
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      // minify默认esbuild，esbuild模式下terserOptions将失效
      // vite3变化：Terser 现在是一个可选依赖，如果你使用的是 build.minify: 'terser'，你需要手动安装它 `npm add -D terser`
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: Boolean(env.VITE_DROP_CONSOLE),
          drop_debugger: Boolean(env.VITE_DROP_DEBUGGER)
        }
      },
      rollupOptions: {
        output: {
          entryFileNames: `assets/js/[name].${Timestamp}.js`,
          chunkFileNames: `assets/js/[name].${Timestamp}.js`,
          assetFileNames: `assets/css/[name].${Timestamp}.[ext]`
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          additionalData: '@import "./src/style/global.less";@import "@/style/vant.less";'
        }
      }
    },
    plugins: [
      vue(),
      vueJsx({}),
      // viteEslint(),
      createHtmlPlugin(),
      visualizer({ open: true, gzipSize: true, brotliSize: true, emitFile: false }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      }),
      Components({
        dirs: ['src/components'],
        deep: true,
        resolvers: [VantResolver()]
      }),
      AutoImport({
        dts: 'src/auto-import.d.ts',
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            axios: [['default', 'axios']]
          }
        ],
        eslintrc: {
          enabled: true
        }
      }),
      viteVConsole({
        entry: resolve(__dirname, 'src/main.ts'),
        localEnabled: true,
        enabled: Boolean(env.VITE_APP_VCONSOLE),
        config: {
          maxLogNumber: 1000,
          theme: 'dark'
        }
      })
    ],
    server: {
      port: 10086,
      open: true,
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api', '/api')
        }
      }
    }
  }
})
