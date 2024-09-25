$(function(){
    new Vivus( 'svgAnimation', {
        type: "oneByOne",  //アニメーションのタイプ // delayed, sync, oneByOne, scenario
        duration: 200, // アニメーションの時間
        forceRender: false, //パスが更新で再レンダリングさせない
    });
});