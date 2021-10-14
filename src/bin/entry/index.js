const createEntry = (config) => {
  const entry = {
    app: './lib/app.js',
    vendor: ["react", "react-dom"]
  };
  console.log('config ====== ', config)
  if (config && config.main) {
    entry.app = config.main
  }
  return entry
}

export default createEntry;