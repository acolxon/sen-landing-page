<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $full_name = htmlspecialchars($_POST['full_name']);
    $phone = htmlspecialchars($_POST['phone']);
    $feedback = htmlspecialchars($_POST['feedback']);
    $date = date("d-m-Y H:i");

    $to = "asylkhantleulin2004@gmail.com";
    $subject = "Новый отзыв с сайта";

    $message = "
    <html>
    <body style='font-family: Arial,sans-serif; background:#ffffff; color:#ffffff; margin:0; padding:0;'>
    <table align='center' width='600' cellpadding='0' cellspacing='0' style='background:#2c2c2f; border-radius:12px; padding:20px;'>
        <tr>
            <td align='center' style='padding-bottom:30px;'>
                <img src='https://registrschool102.softstudio.kz/back/Logo.png' width='150' alt='Logo' style='display:block;'/>
            </td>
        </tr>
        <tr>
            <td style='text-align:center; font-size:32px; color:#ecb241; font-weight:bold; padding-bottom:20px;'>
                НОВОЕ ПИСЬМО С САЙТА
            </td>
        </tr>
        <tr >
            <td style='padding-bottom:10px; font-size:16px; color:#656565;'>Дата: {$date}</td>
        </tr>
        <tr style='padding-bottom:30px;'>
            <td style='background:#19191b; color:#ecb241; padding:15px; border-radius:8px; margin-bottom:10px;'>
                <strong>Имя:</strong> {$full_name}
            </td>
        </tr>
        <tr style='padding-bottom:30px;'>
            <td style='background:#19191b; color:#ecb241; padding:15px; border-radius:8px; margin-bottom:10px;'>
                <strong>Телефон:</strong> {$phone}
            </td>
        </tr>
        <tr>
            <td style='background:#19191b; color:#ecb241; padding:15px; border-radius:8px;'>
                <strong>Отзыв:</strong><br>{$feedback}
            </td>
        </tr>
    </table>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: no-reply@softstudio.kz\r\n";
    $headers .= "Reply-To: info@softstudio.kz\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Спасибо! Ваш отзыв отправлен.";
    } else {
        echo "Ошибка. Попробуйте позже.";
    }
}
?>
