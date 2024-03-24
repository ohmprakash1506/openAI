const { OpenAI } = require('openai')

// const openAi = new OpenAI({apiKey: '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'})
const Ai = async () => {
    const resposne = await openAi.chat.completions.create({
        messages: [{ role: "system", content: "Hello World" }],
        model: "gpt-3.5-turbo",
      })
      console.log(resposne.choices[0])
}
Ai()