


Survey
    .StylesManager
    .applyTheme("modern");

Survey
    .JsonObject
    .metaData
    .addProperty("question", {name: "score:number"});
    
Survey.JsonObject.metaData.addProperty("itemvalue", {name: "score:number"});

var json = {
    questions: [
        {
            "type": "ranking",
            "name": "myrank",
            "score": 10,
            "choices": [
                {
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
        },
        {
            "type": "boolean",
            "name": "myboolean",
            "label": "ten",
            "score": 10
        },
        {
            type: "radiogroup",
            name: "myradiogroup",
            title: "Radio question with the score",
            colCount: 4,
            choices: [
                {
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
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (survey) {
       var totalScore = 0;
       var data = survey.data;
        
       Object.keys(data).forEach(function(qName) {
          var question = survey.getQuestionByName(qName);
          var qValue = data[qName];
          
          if (question.choices) {
            question.choices.forEach(function(choice) {
              if (choice.value === qValue) {
                totalScore += +choice.score;
              }
              if (question.getType() !== "ranking" && Array.isArray(qValue) && qValue.indexOf(choice.value) !== -1) {
                totalScore += +choice.score;
              }
              if (question.getType() === "ranking" && Array.isArray(qValue) && qValue.indexOf(choice.value) !== -1) {
                // Or implement your own algorithm for ranking question scoring
                totalScore += +choice.score;
              }
            });
          } else {
            totalScore += +question.score;
          }
          
        });
        
        document
            .querySelector('#surveyResult')
            .innerHTML = "total score: " + JSON.stringify(totalScore);
    })
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(totalScore,sender.data, null, 3);
    });;

$("#surveyElement").Survey({model: survey});


survey.render("surveyElement");

function saveSurveyToPdf(filename, surveyModel, pdfWidth, pdfHeight) {
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
    var surveyPDF = new SurveyPDF.SurveyPDF(json, options);
    surveyPDF.data = surveyModel.data;
    surveyPDF.save(filename);
}

document
    .getElementById("saveToPDFbtn")
    .onclick = function () {
        var pdfWidth = survey.pdfWidth || 210;
        var pdfHeight = survey.pdfHeight || 297;
        saveSurveyToPdf("surveyResult.pdf", survey, pdfWidth, pdfHeight);
    };

