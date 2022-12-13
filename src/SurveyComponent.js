import React from 'react';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.css';
import './index.css';
import { json } from './Questions';

StylesManager.applyTheme('defaultV2');

function SurveyComponent() {
  // const [test, setTest] = React.useState({});
  // const Data = ['Master','Diploma']
  // const Sec = {
  //   "elements": [
  //   {
  //     "type": "dropdown",
  //     "name": "Study",
  //     "title": "What is your academic qualification?",
  //     "isRequired": true,
  //     "showNoneItem": true,
  //     "colCount": 4,
  //     "choices": [
  //       "Bachelor's degree",
  //       Data[0],
  //       "Postgraduate study",
  //       Data[1],  
  //     ]
  //   },
  // ],
  // "showQuestionNumbers": false

  // }
  // const editData = Data.map((item)=>{
  //   // console.log(item)
  //   item.push('nice job')
  // })

  // console.log(editData)
//  const handleComplete= (data)=>{
// // setTest(data.valuesHash)

//    console.log(data.valuesHash)
//    if (data.valuesHash.Study === 'Master'){
//     return setTest({...data.valuesHash, Study:3})
//    } else {
//     return setTest({...data.valuesHash, Study:1})
//    }
//   }
//   console.log('test', test)

  const survey = new Model(json);
  return (
    <div className='App'>
      <Survey
        model={survey}
        onComplete={(data)=> console.log(data.valuesHash)}
      />
    </div>
  );
}
export default SurveyComponent;
