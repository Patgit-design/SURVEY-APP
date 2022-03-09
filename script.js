console.log('hello World');

Survey
  .StylesManager
  .applyTheme("bootstrap");
Survey
  .JsonObject
  .metaData
  .addProperty("question", {
    name: "score:number"
  });

Survey.JsonObject.metaData.addProperty("itemvalue", {
  name: "score:number"
});


var json = {
  "locale": "fr",
  "title": "GIP Web Service",
  "pages": [{
      name: "page1",
      questions: [{
        type: "radiogroup",
        name: "myradiogroup",
        title: "Radio question with the score",
        colCount: 1,
        isRequired: true,
        choices: [{
            value: "one",
            score: 1
          },
          {
            value: "two",
            score: 2
          },
          {
            value: "three",
            score: 3
          }
        ]
      }]
    },
    {
      name: "page2",
      questions: [{
        type: "radiogroup",
        name: "myradiogroup1",
        title: "Radio question with the score",
        colCount: 1,
        choices: [{
            value: "one",
            score: 1
          },
          {
            value: "two",
            score: 2
          },
          {
            value: "three",
            score: 3
          }
        ]
      }]
    },
    {
      name: "page3",
      questions: [{
        type: "radiogroup",
        name: "myradiogroup2",
        title: "Radio question with the score",
        colCount: 1,
        choices: [{
            value: "one",
            score: 1
          },
          {
            value: "two",
            score: 2
          },
          {
            value: "three",
            score: 3
          }
        ]
      }]
    },
    {
      name: "page4",
      questions: [{

        type: "radiogroup",
        name: "myradiogroup3",
        title: "Radio question with the score",
        colCount: 1,
        choices: [{
            value: "one",
            score: 1
          },
          {
            value: "two",
            score: 2
          },
          {
            value: "three",
            score: 3
          }
        ]
      }]
    },
    {
      name: "page5",
      questions: [{

        type: "radiogroup",
        name: "myradiogroup4",
        title: "Radio question with the score",
        colCount: 1,
        choices: [{
            value: "one",
            score: 1
          },
          {
            value: "two",
            score: 2
          },
          {
            value: "three",
            score: 3
          }
        ]
      }]
    },
    {
      name: "page6",
      questions: [{

        type: "radiogroup",
        name: "myradiogroup5",
        title: "Radio question with the score",
        colCount: 1,
        choices: [{
            value: "one",
            score: 1
          },
          {
            value: "two",
            score: 2
          },
          {
            value: "three",
            score: 3
          }
        ]
      }]
    },
    {

      name: "page7",
      questions: [{
        name: "name",
        type: "text",
        title: "Nom du contact:",
        placeHolder: "Jon Snow",
        isRequired: true,
        autoComplete: "name",
        score: 0
      }, {
        name: "company",
        type: "text",
        inputType: "text",
        title: "Société:",
        isRequired: true,
        autoComplete: "company",
        score: 0
      }, {
        name: "email",
        type: "text",
        inputType: "email",
        title: "e-mail:",
        placeHolder: "jon.snow@nightwatch.org",
        isRequired: true,
        score: 0,
        autoComplete: "email",
        validators: [{
          type: "email"
        }]
      },  {
        name: "phone",
        type: "text",
        inputType: "tel",
        title: "Téléphone:",
        placeHolder: "+32 470 86 32 99",
        isRequired: true,
        score: 0,
        autoComplete: "tel"
      }],
    }
  ],
};

window.survey = new Survey.Model(json);
var totalScore = 0;
var companyName = "";
var phone = "";
var name ="";
var PDF = document.getElementById("HiddenPDF");



survey
  .onComplete
  .add(function score(survey) {
  
    var data = survey.data;

    Object.keys(data).forEach(function (qName) {
      var question = survey.getQuestionByName(qName);
      var qValue = data[qName];

      if (question.choices) {
        question.choices.forEach(function (choice) {
          if (choice.value === qValue) {
            totalScore += +choice.score;
          }
        });
      } else {
        totalScore += +question.score;
      }
  
    });

  
   

    var els = document.querySelector('#surveyResult');
    document
      .querySelector('#surveyElement')
      .innerHTML = "Votre résultat: " + JSON.stringify(totalScore);

    if (totalScore <= 5) {
      console.log('5');
      els.innerHTML = '<h3>Voici le plan parfait:</h3><p>Pack bienvenue</p>';
    } else if (totalScore >= 6 && totalScore <= 9) {
      console.log('9');
      els.innerHTML = '<h3>Voici le plan parfait:</h3><p>Plan B</p>';
    } else if (totalScore >= 10 && totalScore <= 15) {
      console.log('15');
      els.innerHTML = '<h3>Voici le plan parfait:</h3><p>Plan C</p>';
    }else {
      els.innerHTML = '<h3>Voici le plan parfait:</h3><p>Plan D</p>';
    }
  });
  


$("#surveyElement").Survey({
  model: survey
});




function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight, totalScore) {

  var options = {
    fontSize: 14,
    margins: {
      left: 10,
      right: 10,
      top: 10,
      bot: 10
    },
    format: [pdfWidth, pdfHeight]
  };
  var surveyPDF = new SurveyPDF.SurveyPDF(json, options, survey, totalScore);
  surveyPDF.data = surveyModel.data;
  surveyPDF.save(filename);

}


document
  .getElementById("saveToPDFbtn")
  .onclick = function () {
    var companyName=survey.getValue('company');
    document
      .querySelector('#company_name')
      .innerHTML = "Cher " +"<h2>"+ companyName +"</h2> merci d'avoir répondu.";
      var phone=survey.getValue('phone');
      var name=survey.getValue('name');
    var pdfWidth = survey.pdfWidth || 210;
    var pdfHeight = survey.pdfHeight || 297;
    saveSurveyToPdf( totalScore +"_"+ companyName +"_" + name + "_"+ phone +".pdf", survey, pdfWidth, pdfHeight);

  };

