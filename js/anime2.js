function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top; //要素より、100px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
            // 画面内に入ったらfadeInというクラス名を追記
        }
    });

    $('.fadeLeftTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top; //要素より、100px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeLeft');
            // 画面内に入ったらfadeInというクラス名を追記
            
        }
    });
}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定



// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述