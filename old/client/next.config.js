module.exports = {
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  }
}
