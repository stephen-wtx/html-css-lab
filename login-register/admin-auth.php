<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login & Register Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="form-box active" id="login-form">
            <form action="">
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Senha" required>
                <button type="submit" name="login">Login</button>
                <p>Não tem um conta? <a href="#" onclick="showForm('register-form')">Registar-se</a></p>
            </form>
        </div>


        <div class="form-box" id="register-form">
            <form action="">
                <h2>Registro</h2>
                <input type="text" name="name" placeholder="Nome" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Senha" required>
                <button type="submit" name="registrar">Registrar</button>
                <p>Já tem uma conta? <a href="#" onclick="showForm('login-form')">Fazer login</a></p>
            </form>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>