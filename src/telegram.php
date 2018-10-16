<?php
  $name = $_POST['name'];
  $phone = $_POST['phone-number'];
  $viber = $_POST['viber-number'];
  $telegram = $_POST['telegram-number'];
  $description = $_POST['description'];
  $token = "660066455:AAEWePjXKnBozFz_fU4WX7tvlmwj_8R0qRM";
  $chat_id = "-1001342896645";
  if($phone == "" || !$phone || strlen($phone) == 0) {
    $phone = "❌";
  };
  if($viber == "" || !$viber || strlen($viber) == 0) {
    $viber = "❌";
  };
  if($telegram == "" || !$telegram || strlen($telegram) == 0) {
    $telegram = "❌";
  };
  $message = "❗❗❗ Новая заявка 🔥🔥🔥%0A💼 Тема сообщения: {$description}%0A🤑 Имя пользователя:  {$name}%0A💠 Номер Телефона:  {$phone}%0A💠 Номер Viber:  {$viber}%0A💠 Номер Telegram:  {$telegram}";
  $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$message}","r");
  if ($sendToTelegram) {
    header('Location: thank-you.html');
  } else {
    header('Location: error.html');
  }
?>