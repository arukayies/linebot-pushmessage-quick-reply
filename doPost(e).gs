//LINEで選択したクイックリプライボタンの結果によってメッセージを分ける
function doPost(e) {
  //レスポンスを取得 */
  const responseLine = e.postData.getDataAsString();
  //JSON形式に変換する
  const event = JSON.parse(responseLine).events[0];
  //イベントへの応答に使用するトークンを取得
  const replyToken = event.replyToken;

  //寿司か天ぷらでメッセージを分ける
  let sendMessage;
  if (event.message.text == '天ぷら') {
    sendMessage = '天ぷらをタップしました！';
    replyLine(sendMessage, replyToken);
  }
  if (event.message.text == '寿司') {
    sendMessage = '寿司をタップしました！';
    replyLine(sendMessage, replyToken);
  }
}

//LINEに返信する処理
function replyLine(sendMessage, replyToken) {
  //LINEのメッセージ形式にする
  const LineMessageObject = [{
    'type': 'text',
    'text': sendMessage
  }];
  const replyHeaders = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + TOKEN
  };
  const replyBody = {
    'replyToken': replyToken,
    'messages': LineMessageObject
  };
  const replyOptions = {
    'method': 'POST',
    'headers': replyHeaders,
    'payload': JSON.stringify(replyBody)
  };
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/reply', replyOptions);
}