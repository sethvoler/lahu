import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { ConfigEnv, UserConfigExport } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

const config: UserConfigExport = {
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@/comp': path.resolve('./packages/ui/src/components'),
    },
  },
};

export default ({ command, mode }: ConfigEnv) => {
  return config;
};

