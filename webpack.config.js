import  {ForkTsCheckerWebpackPlugin} from "fork-ts-checker-webpack-plugin";

module.exports = {
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 4096,
      },
    }),
  ],
}