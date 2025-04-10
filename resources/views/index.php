<!DOCTYPE html>
<html lang="hu-HU">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="../js/index.js" type="module"></script>
    <link rel="stylesheet" href="../css/index.css">
    <title>Weinberger Péter</title>
</head>

<body>
    <main>
        <header>
            <h2>Szótár</h2>
        </header>
        <article>
            <h2>Szavak</h2>
            <div class="ujSzo"></div>
            <div id="modositSzo"></div>
            <div id="szures"></div>
            <div id="tartalom"></div>
            <div id="pontozas"></div>
        </article>
        <footer></footer>
    </main>
</body>

</html>