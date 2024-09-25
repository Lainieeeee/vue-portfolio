// ページのコンテンツが完全に読み込まれた後にLoding画面を非表示にする
$(window).on('load',function(){
    setTimeout(function(){
        $('.allLoading').fadeOut();
    }, 2000);
});