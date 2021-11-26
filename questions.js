const question1 = [
    {
      type: "list",
      name: "pet",
      message: "Hello, welcome to the petshop, what pet would you like?",
      choices: [ "Hungry hungry helicopter", "Genius sloth", "Parched camel" ],
    },
    {
      type: "input",
      name: "name",
      message: "What are you calling your new pet?"
    },
  ]

const question2 = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do today?",
    choices: ["Feed", "Drink", "Play"],
  },
]

export {question1, question2};