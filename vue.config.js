module.exports={
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        port: 3004,
        proxy: {
            // "/^api":{
            //     target:"http://tingapi.ting.baidu.com",
            //     changeOrigin: true
            // }
            "/v1/restserver/ting": {
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true
            },
            "/taihe-api":{
                target: "http://music.taihe.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/taihe-api': ''
                }
            },
            "/data/song/lrc": {
                target: "http://music.taihe.com",
                changeOrigin: true,
            },
            "/v1/restserver": {
                target: "http://musicapi.taihe.com",
                changeOrigin: true,
            },


        },
    },

}