<template>
  <div>
    <h2>로그인</h2>
    <!-- <form v-on:submit.prevent="submitForm"> 버튼클릭시 새로고침 되는 현상 막기 event modifier -->
      <form>
      <div class="login_frm">
        <div>
          <label for="username">아이디 : </label>
          <input id="username" type="text" v-model="username">
        </div>
        <div>
          <label for="password">비밀번호 : </label>
          <input id="password" type="password" v-model="password">
        </div>
      </div>
      <button type="submit" @click.prevent="submitForm">로그인</button>
    </form>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import axios from 'axios';


export default {
  name: 'App',
  data: function () { //컴포넌트간에 데이터가 공유되지않게 이렇게 변경되어 적는것!★★★
    return {
      username: '',
      password:'',
    }
  },
  methods: {
    submitForm: function () {
      // event.preventDefault();
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password: this.password
      }
      axios.post(url, data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>

</style>

<!--
[자식컴포넌트.vue 설명]
1. App.vue 에 포함된 자식 컴포넌트입니다

2. template : 
   - 화면 상에 표시할 요소 작성 실시
   - 컴포넌트의 모든 마크업 구조와 디스플레이 로직 작성

3. script : 
   - import 구문을 사용해 template에서 사용할 컴포넌트 불러온다
   - export default 구문에서 모듈의 함수, 객체, 변수 등을 다른 모듈에서 가져다 사용 할 수 있도록 내보냅니다

4. style : 
   - 스타일 지정 실시

5. props : 부모가 전달한 데이터를 받을 때 사용합니다 (부모 쪽에서 자식 객체 생성 필요) : 자식쪽에서 동적 변경 불가능

6. {{ message }} : 데이터 바인딩 시 사용

7. @click : 클릭 이벤트 적용 약어 (원본 : v-on:click)

8. data : 컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)

9. methods : 메소드 정의 실시

10. this.$parent.부모 메소드 명칭 : 부모 메소드 호출 실시

11. v-model : 데이터 양방향 바인드를 실시합니다 (ex: input text 수정 시 <h1> 태그 값도 동시 변경)

12. v-html : 원시 HTML 형식 문자열 데이터를 실제 HTML 로 변경해줍니다

13. v-bind : disabled : 버튼 사용 가능 여부 (클릭) 처리 설정

14. v-for : 배열 데이터를 for 반복문을 돌면서 순차적으로 확인합니다

15. v-bind:class : 특정 조건을 만족 (true) 할 시 삼항식을 사용해 클래스 지정 분기 처리 실시

16. v-bind:style : css 스타일 코드를 지정할 수 있습니다

17. v-if : 조건 값에 따라서 렌더링 (표시) 를 수행합니다

18. v-if v-else : 조건 값이 true 일 경우 if 분기 처리 false 일 경우 else 분기 처리를 수행합니다

19. v-show : v-if 문과 유사 하지만, 초기 렌더링 시 true, false 상관 없이 무조건 dom에 렌더링 됩니다

20. @click.prevent : 원래 동작하는 클릭 이벤트 막고 , 지정한 메소드로 이벤트 핸들링 수행

  // [컴포넌트 생성 시 초기 데이터 설정 (리턴 값 지정)]
  data () {
    return {
      data: "DATA" // [데이터 정의]
    }    
  },
  
// [html 최초 로드 및 이벤트 상시 대기 실시] 
window.onload = function() {
    console.log("");
    console.log("[MainComponent] : [window onload] : [start]");
    console.log("");
};
https://kkh0977.tistory.com/
-->