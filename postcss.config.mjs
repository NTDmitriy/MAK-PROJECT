/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {},
    autoprefixer: {},
    "postcss-combine-duplicated-selectors": {},
  },
};

export default config;
