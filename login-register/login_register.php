<?php

session_start();
require_once 'config.php';    

if (isset($_POST['register'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);


    $checkEmail = $conn->query("SELECT email FROM admin WHERE email = '$email'");
    if ($checkEmail->num_rows > 0) {
        $_SESSION['register_error'] = 'Email já foi registrado!';
        $_SESSION['active_form'] = 'register';
    } else {
        $conn->query("INSERT INTO admin (name, email, password) VALUES ('$name', '$email', '$password')");
    }

    header("Location: index.php");
    exit();
}

if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $result = $conn->query("SELECT * FROM admin WHERE email = '$email'");

    if ($result->num_rows > 0) {

        
        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {
            $_SESSION['name'] = $user['name'];
            $_SESSION['email'] = $user['email'];

            header("Location: admin_page.php");
            exit();
        }
    }

    $_SESSION['login_error'] = 'Email ou Senha incorrecto!';
    $_SESSION['active_form'] = 'login';
    header("Location: index.php");
    exit();
}
?>
