console.log('hello World');

Survey
    .StylesManager
    .applyTheme("bootstrap");
    Survey
    .JsonObject
    .metaData
    .addProperty("question", {name: "score:number"});
    
Survey.JsonObject.metaData.addProperty("itemvalue", {name: "score:number"});


var json = {
    
    "pages": [
        {
            questions: [
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
                },
                {
                    type: "radiogroup",
                    name: "myradiogroup1",
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
                },
                {
                    type: "radiogroup",
                    name: "myradiogroup2",
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
                },
                {
                    type: "radiogroup",
                    name: "myradiogroup3",
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
                },
                {
                    type: "radiogroup",
                    name: "myradiogroup4",
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
                },
                {
                    type: "radiogroup",
                    name: "myradiogroup5",
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
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function score(survey) {
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
            });
          } else {
            totalScore += +question.score;
          }
       
        });
        var els = document.querySelector('#surveyResult');
        document
            .querySelector('#surveyElement')
            .innerHTML = "total score: " + JSON.stringify(totalScore);
        
           if (totalScore <= 5) {
               console.log('5');
               els.innerHTML = '<h1>Voici le plan parfait:</h1><p>Pack bienvenue</p>';
           }else if (totalScore >= 6 && totalScore <=9) {
            console.log('9');
            els.innerHTML = '<h1>Voici le plan parfait:</h1><p>Plan B</p>';
           }else if (totalScore >=10 && totalScore <=15) {
            console.log('15');
            els.innerHTML = '<h1>Voici le plan parfait:</h1><p>Plan C</p>';
           }
    });
   
	
    
$("#surveyElement").Survey({model: survey});



   
 /* 
survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
            
           
    });

survey.render("surveyElement");
*/
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

    console.log(window.location.href);

