
// ジャンケンを判定
$(function(){
    'use strict';

    const $els   = $('button'),
          hand   = new Map(),
          result = new Map([
              [0, 'あいこ'],
              [1, '負け'],
              [2, '勝ち']
          ]);

    $els.each(function(){
        const num = parseInt($(this).val()),
              val = $(this).text();

        hand.set(num, val);
    });

    $els.on('click', function(){

        const playerChoice = parseInt($(this).val()),
              enemyChoice  = Math.floor(Math.random() * 3 + 1),
              judge        = (playerChoice - enemyChoice + 3) % 3;

        $('#result').html(
            `<h2 class="info">結果</h2>` +
            `<p><b>あなた:</b> ${hand.get(playerChoice)}<br>` +
            `<b>あいて:</b> ${hand.get(enemyChoice)}</p>` +
            `<p><b>「${result.get(judge)}」</b>です</p>`
        );
    });
});