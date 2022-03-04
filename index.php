<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://unpkg.com/jquery"></script><script src="https://surveyjs.azureedge.net/1.0.50/survey.jquery.js"></script>
    <script src="https://unpkg.com/knockout@3.5.1/build/output/knockout-latest.js"></script>
        <script src="https://unpkg.com/survey-core@1.9.18/survey.core.min.js"></script>
        <script src="https://unpkg.com/survey-core@1.9.18/survey.i18n.min.js"></script>
        <script src="https://unpkg.com/survey-knockout-ui@1.9.18/survey-knockout-ui.min.js"></script>
        <link rel="stylesheet" href="style.css"><link href="https://unpkg.com/survey-core@1.9.18/modern.css" type="text/css" rel="stylesheet"/>
        <script src="https://unpkg.com/jspdf/dist/polyfills.umd.js"></script>
        <script src="https://unpkg.com/jspdf@2.3.0/dist/jspdf.umd.min.js"></script>
        <script src="https://unpkg.com/survey-pdf@1.9.18/survey.pdf.min.js"></script>
    <!-- Bootstrap theme -->
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet"> 
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito:wght@700&display=swap" rel="stylesheet">

   
   
   
</head>
    <title>Document</title>
</head>
<body>
    <header>
    <nav class="navbar navbar-light bg-light">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">
      <img src="GIP bleu.png" alt="" width="100" height="auto">
    </a>
  </div>
</nav>
</nav>
    </header>
    <main>
    <div class="container-fluid mb-5">
        <div class="row text-center">
<h1 class="title-app">Quel Plan ?</h1>
        </div>
</div>
    <div class="container-fluid bg-app ">
        <div class="row">
            <div class="col-sm-8 col-md-8 bg-survey ">
                <div id="surveyElement"></div>
                    <div id="surveyResult"></div>
                    <div id = "company_name"></div>
                    <button class="btn btn-pdf" id="saveToPDFbtn">Save to PDF</button>
                    <?php     
$to_email = 'patgit.design@gmail.com';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: patricia.corduant@gmail.com';
mail($to_email,$subject,$message,$headers);
?>
            </div>
           
        </div>
    </div>
    </main>
    <script type="text/javascript" src="script.js"></script>
</body>
</html>