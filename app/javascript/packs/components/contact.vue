<template>
  <div>
    <form class="contact-form"  action="https://formspree.io/f/xvovebqd" method="post">
      <input type="hidden" name="_subject" value="お問い合せ" >
      <input type="hidden" name="_next" value="https://www.youtube.com/" >

      <label for="email"> メールアドレス</label>
      <input name="Email" id="email" type="email" placeholder="coffee@gmail.com" required>

      <label for="name">お名前</label>
      <input type="name"  placeholder="珈琲太郎" required>
      
      <label for="context"> お問合わせ内容</label>
      <textarea name="context" id="" cols="30" rows="10"></textarea>
      
      <button class="contact-submit"  type="submit">送信する</button>
    </form>

  </div>
</template>
