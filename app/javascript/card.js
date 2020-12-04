const pay = () => {
  Payjp.setPublicKey(process.env.PAYJP_PUBLIC_KEY);
  // 公開鍵を設定
  const form = document.getElementById("charge-form");
  // 要素取得
  form.addEventListener("submit",(e)=>{
    // eにはイベントに関する情報が格納されてる状態
    e.preventDefault();
    // 通常のrailsにおけるフォーム送信処理はキャンセルされる

    const formResult = document.getElementById("charge-form");
    // 要素取得
    const formData = new FormData(formResult);
    // FormDataはフォームに入力された値を取得できるオブジェクト
    // その引数にフォームに要素を渡すことでフォームに入力された値を取得できます

    const card = {
      number: formData.get("number"),
      cvc: formData.get("cvc"),
      exp_month: formData.get("exp_month"),
      exp_year: `20${formData.get("exp_year")}`,
    };
    // 入力した内容がカード情報になる
    Payjp.createToken(card,(status,response)=>{
      // カード情報をトークン化,
      // statusはHTTPステータスコード
      // responseはレスポンスの内容
      if (status == 200){
        // HTTPステータスコードが200のとき、すなわち上手く処理が
        // 上手くいったとき
        const token = response.id;
        // トークンの値を取得することができます
        const renderDom = document. getElementById("charge-form");
        const tokenObj = `<input value=${token} type="hidden" name='token'>`;
        // valueは実際に送られる値なので、params[:name]のように取得できる
        // token情報をブラウザに表示するとショルダーハッキング
        // されそうなので、hidden
        renderDom.insertAdjacentHTML("beforeend",tokenObj);
        // トークンの値をフォームに埋め込む
      }
      document.getElementById("card-number").removeAttribute("name");
      document.getElementById("card-cvc").removeAttribute("name");
      document.getElementById("card-exp-month").removeAttribute("name");
      document.getElementById("card-exp-year").removeAttribute("name");
      // フォームにクレカの情報が残ってるので、クレカの情報を
      // トークンにした意味が無くなる、トークン生成が完了してるので
      // いらない
      
      document.getElementById("charge-form").submit();
      // フォームの情報をサーバーサイドに送信
      // e.preventDefault();で通常のRails
      // におけるフォーム処理はキャンセルされてるので
      document.getElementById("charge-form").reset();
      
    })
    
  })

}
window.addEventListener("load",pay);