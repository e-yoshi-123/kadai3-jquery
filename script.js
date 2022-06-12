$(function () {
  const fortuneResults = {
    money: [
      {
        stars: "★★★",
        detail: "最高の金運です！いつの間にかお金が溜まっているかも・・・？",
      },
      {
        stars: "★★",
        detail: "まずまず金運です！使いすぎには注意しましょう！",
      },
      {
        stars: "★",
        detail: "悪い傾向が見られます！財布の紐は絞めておくと吉です！",
      },
    ],
    work: [
      {
        stars: "★★★",
        detail:
          "最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？",
      },
      {
        stars: "★★",
        detail: "まずまず仕事運です！普段通り仕事が進むでしょう！",
      },
      {
        stars: "★",
        detail: "悪い傾向が見られます！自信過剰にならないように注意しましょう",
      },
    ],
    health: [
      {
        stars: "★★★",
        detail: "最高の健康運です！ランニングの距離を伸ばしても良いですね！",
      },
      {
        stars: "★★",
        detail: "まずまず健康運です！無理せず体を動かしましょう！",
      },
      {
        stars: "★",
        detail: "悪い傾向が見られます！ケガにご注意を・・・",
      },
    ],
  };
  $(document).on("click", ".js-fortune-start", function () {
    for (let mvh in fortuneResults) {
      const stars = $("." + mvh).find(".stars");
      const details = $("." + mvh).find(".detail");
      // 乱数1～3を生成
      const rand = Math.floor(Math.random() * 3);
      stars.text(fortuneResults[mvh][rand]["stars"]);
      details.text(fortuneResults[mvh][rand]["detail"]);
    }
    $(".result").fadeIn(1000);
    setButtonText($(".js-fortune-start"), "もう一度占う");
  });
  $(document).on("click", ".js-fortune-retry", function () {
    $(".result").fadeOut(500);
    setButtonText($(".js-fortune-retry"), "運勢を占う！");
  });

  function setButtonText(buttonObj, text) {
    buttonObj.toggleClass("js-fortune-start");
    buttonObj.toggleClass("js-fortune-retry");
    buttonObj.text(text);
  }
});
