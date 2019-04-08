const withTypescript = require('@zeit/next-typescript')
const path = require('path');

module.exports = withTypescript({
    webpack(config) {
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "svg-react-loader",
                }
            ]
        });
        return config;
    }
})
