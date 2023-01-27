const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   devServer: {
    client: {
      overlay: false
    }
  }
})
//CLI 버전이 업데이트되면서 기본적으로 ESLint 오류가 나면 화면을 조작할 수 없게 되었습니다. ESLint 에러를 화면에 표시하지 않으려면 아래와 같이 설정