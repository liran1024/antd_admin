const {
    override,
    fixBabelImports, addLessLoader
} = require("customize-cra")
// const path = require("path")

module.exports = override(
    // // 添加装饰器
    // addDecoratorsLegacy(), 

    // disableEsLint(),

    // // 设置路径别名
    // addWebpackAlias({ 
    //   '@': path.resolve(__dirname, 'src'),
    // }),

    fixBabelImports("import", {
        libraryName: 'antd',
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    })
);