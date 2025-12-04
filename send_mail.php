<?php
// send_mail.php
// Manejador sencillo para enviar el formulario al correo joliversalamanca@gmail.com
// Recomendación: para producción usar SMTP (PHPMailer) y credenciales seguras.

// Configuración: correo destino
$to = 'joliversalamanca@gmail.com';

// Obtener y sanitizar campos
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$comments = isset($_POST['comments']) ? htmlspecialchars(trim($_POST['comments'])) : '';

$errors = [];
if (empty($name)) $errors[] = 'El nombre es requerido.';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Email inválido.';
if (empty($comments)) $errors[] = 'El mensaje está vacío.';

if (!empty($errors)) {
    // Si hay errores, puedes redirigir con mensajes (aquí simple respuesta)
    http_response_code(400);
    echo implode("\n", $errors);
    exit;
}

$subject = "Nuevo mensaje desde el portafolio: $name";

$body  = "Has recibido un nuevo mensaje desde el formulario de contacto.\n\n";
$body .= "Nombre: $name\n";
$body .= "Email: $email\n\n";
$body .= "Mensaje:\n$comments\n";

// Cabeceras
$headers  = "From: $name <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8" . "\r\n";

$sent = false;
// Intentar enviar con mail() de PHP
if (mail($to, $subject, $body, $headers)) {
    $sent = true;
}

if ($sent) {
    // Redirigir al modal de gracias (index.html debe manejar #gracias)
    header('Location: /portafolio-javascript/#gracias');
    exit;
} else {
    // En caso de fallo, devolver error y sugerir usar SMTP
    http_response_code(500);
    echo "No se pudo enviar el mensaje. Configura SMTP o revisa la configuración de XAMPP sendmail.";
    exit;
}

?>
