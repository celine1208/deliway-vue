
<template>
<header>
        <h1><img class="intro-logo" src="/src/assets/icon/logo.png" alt="델리웨이로고"></h1>
    </header>
  <main>
    <section class="login-wrap flex-column">
      <h2 class="hidden">로그인방식선택</h2>
      <a href="#" class="btn login-btn"><span>카카오로 간편 로그인</span></a>
      <a href="#" class="btn login-btn"><span>네이버로 간편 로그인</span></a>
      <a href="/login_email.html" class="btn login-btn"><span>델리웨이 계정 로그인</span></a>
    </section>
  </main>
</template>

<script setup>
// 아직 로직은 없음
</script>


<style scoped>
    .intro-logo {
        width: 200px;
    }

    .login-wrap {
        gap: 10px;
    }

    .login-btn:nth-child(2) {
        background: #fee500;
        color: var(--black);
    }

    .login-btn:nth-child(3) {
        background: #03c75a;
        color: var(--white);
    }

    .login-btn:nth-child(4) {
        background: var(--primary);
        color: var(--white);
    }

</style>