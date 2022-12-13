

export const json = {
  "title": "Course registration",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "text",
      "name": "question1",
      "title": "Name",
      "isRequired": true
     },
     {
      "type": "radiogroup",
      "name": "question4",
      "title": "Gender",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Male "
       },
       {
        "value": "Item 2",
        "text": " Female"
       }
      ]
     },
     {
      "type": "dropdown",
      "name": "question3",
      "title": "What is your academic qualification",
      "isRequired": true,
      "choices": [
       {
        "value": "item 1",
        "text": "Master "
       },
       {
        "value": "Item 2",
        "text": "Bachelor's degree"
       },
       {
        "value": "Item 3",
        "text": "Diploma"
       }
      ],
      "showNoneItem": true
     }
    ]
   }
  ]
 }

