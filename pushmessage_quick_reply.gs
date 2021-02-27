const TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';
const DEBUGID = 'LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)';

//LINEBOTでクイックリプライボタンを設定したメッセージを送るサンプル
function pushmessage_quick_reply() {
  //クイックリプライボタンを設定したメッセージを送る
  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + TOKEN, //LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)
    },
    'method': 'POST',
    'payload': JSON.stringify({
      'to': DEBUGID, //LINEのユーザIDを指定(取得方法：https://arukayies.com/gas/line_bot/get-userid)
      'messages': [
        {
          'type': 'text',
          'text': 'お気に入りの食べ物のカテゴリを選択してください！',
          'quickReply': {
            'items': [
              {
                'type': 'action',
                'imageUrl': 'https://example.com/sushi.png',
                'action': {
                  'type': 'message',
                  'label': '寿司',
                  'text': '寿司'
                }
              },
              {
                'type': 'action',
                'imageUrl': 'https://example.com/sushi.png',
                'action': {
                  'type': 'message',
                  'label': '天ぷら',
                  'text': '天ぷら'
                }
              }
            ]
          }
        }
      ],
      'notificationDisabled': false //trueだとユーザーに通知されない
    }),
  });
}