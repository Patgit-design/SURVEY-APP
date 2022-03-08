<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src="https://unpkg.com/jquery"></script>
        <script src="https://surveyjs.azureedge.net/1.0.50/survey.jquery.js"></script>
        <script src="https://unpkg.com/knockout@3.5.1/build/output/knockout-latest.js"></script>
        <script src="https://unpkg.com/survey-core@1.9.18/survey.core.min.js"></script>
        <script src="https://unpkg.com/survey-core@1.9.18/survey.i18n.min.js"></script>
        <script src="https://unpkg.com/survey-knockout-ui@1.9.18/survey-knockout-ui.min.js"></script>
        <link rel="stylesheet" href="style.css">
        <link href="https://unpkg.com/survey-core@1.9.18/modern.css" type="text/css" rel="stylesheet" />
        <script src="https://unpkg.com/jspdf/dist/polyfills.umd.js"></script>
        <script src="https://unpkg.com/jspdf@2.3.0/dist/jspdf.umd.min.js"></script>
        <script src="https://unpkg.com/survey-pdf@1.9.18/survey.pdf.min.js"></script>
        <!-- Bootstrap theme -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito:wght@700&display=swap" rel="stylesheet">
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/manifest.json">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">


    </head>
    <title>SURVEY G.I.P</title>
</head>

<body>

    <main>

        <div class="container-fluid bg-app ">
            <div class="row text-center">
                <img class="logo mt-5 pt-5" src="./img/logo-white.png" alt="Logo de Gestion Informatique Professionelle">
            </div>
            <div class="col-sm-8 col-md-8 bg-survey ">
                <div class="container-fluid mb-5">
                    <div class="row text-center">
                        <h1 class="title-app">QUEL PLAN ?</h1>
                    </div>
                </div>
                <div id="company_name"></div>

                <div id="surveyResult"></div>
                <div id="surveyElement"></div>
                <div class="container-fluid">
                    <div class="row text-center">
                        <button class="btn btn-pdf mt-5" id="saveToPDFbtn">Save to PDF</button>
                    </div>
                </div>
            </div>

        </div>
        </div>
    </main>
    <script type="text/javascript" src="script.js"></script>
</body>

</html>