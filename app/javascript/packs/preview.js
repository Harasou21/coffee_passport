if (document.URL.match( /drinks/ ) ) {
document.addEventListener('DOMContentLoaded', function(){


// input要素の値に変更があった場合、関数が発火すること
// 値の変更があった要素から、画像の情報を取得すること
// 取得した画像情報のURLを生成すること

  const ImageList = document.getElementById('image-list');
  // 画像のプレビューを表示する場所の要素を取得
  document.getElementById('drink_image').addEventListener('change', function(e){
    // input要素に変化があったときにイベント発火
    // console.log(e);
    // 選択した画像は発火したイベントeの中のtargetの中の
    // filesのいう配列に格納されてる

    // 画像が表示されている場合のみ、すでに存在している画像を削除する
    const imageContent = document.getElementById('drink-img');
    if (imageContent){
      imageContent.remove();
    }

    const file = e.target.files[0];
    // 次は、取得できた画像情報をプレビューとして表示させるために
    // 、img要素に付与するsrc属性のURLを生成します。
    // 取得した画像情報のURLを生成するには、
    // createObjectURLメソッドを使います。
    const blob = window.URL.createObjectURL(file);
    // おさらいになりますが、
    // windowはブラウザの情報を持つオブジェクトです。
    // こちらも、先ほど確認した発火イベントeのようにハッシュ構造になっており
    // 、オブジェクトやメソッドが格納されています。

    // 今回はその中の、URLオブジェクトのcreateObjectURLメソッドを呼び出し、
    // 変数fileを引数として渡すことで、
    // 画像のURLを生成しています。

        // 画像を表示するためのdiv要素を生成
        const imageElement = document.createElement('div');
        // 表示する画像を生成
        const blobImage = document.createElement('img');
        blobImage.setAttribute('src', blob);
        blobImage.setAttribute('id', 'drink-img');
        
        // => <div><input></div>

        // 生成したHTMLの要素をブラウザに表示させる
        imageElement.appendChild(blobImage);
        ImageList.appendChild(imageElement);

        

  });
});
 }else if(document.URL.match( /users/ ) || document.URL.match( /edit/ )){
  document.addEventListener('DOMContentLoaded', function(){

  
      const ImageList = document.getElementById('image-list');
      // 画像のプレビューを表示する場所の要素を取得
      document.getElementById('user_image').addEventListener('change', function(e){

        const imageContent = document.getElementById('drink-img');
       
        if (imageContent){
          imageContent.remove();
        }
    
        const file = e.target.files[0];

        const blob = window.URL.createObjectURL(file);

            const imageElement = document.createElement('div');

            const blobImage = document.createElement('img');
            blobImage.setAttribute('src', blob);
            blobImage.setAttribute('id', 'drink-img');
            
            imageElement.appendChild(blobImage);
            ImageList.appendChild(imageElement);


           
      });
    });
  }


