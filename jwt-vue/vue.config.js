module.exports = {
    devServer: {
        proxy: {
            "^/api*": {
                target: "http://localhost:8000",
                pathRewrite: { "^/api": "/api" },
                changeOrigin: true,
                logLevel: "debug",
            }
        },
    },
};
