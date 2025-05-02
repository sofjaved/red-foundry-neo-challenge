## AI Disclosure

### 1. AI Usage
I used Claude as a tutor and learning resource during this challenge. Since this was my first time building a React Native app, and I've been working primarily with Vue for the past four years, I needed to refresh my React knowledge and learn React Native basics. After exploring the React Native documentation, I used AI in a few key ways:

- I asked Claude to explain the fundamentals of React Native development and point me toward helpful resources online to get started.
- I asked for step-by-step instructions to set up my development environment for a React Native application.
- I requested example template code for a generic basic React Native app that retrieves and displays data from an external API. I used this code as a learning reference.
- I used Claude to clarify React Native concepts when I encountered something unfamiliar, much like I would ask a senior developer questions during pair programming. I mostly asked Claude to explain the WHYs and HOWs behind concepts/conventions that were unfamiliar to me.
- I used most of Claude's suggestions for CSS styling because I like CSS, but I don't love it.
- I asked for a template to organize the README documentation.

### 2. Manual Work
I completed the majority of the actual coding myself, including:
- Writing the component code after understanding the patterns
- Implementing the API integration with NASA's endpoints
- Creating the state management logic
- Building the UI layout and adjusting styling according to my tastes
- Debugging and problem-solving throughout the development process

I approached this as a learning opportunity, so it was important to me that I wrote the code myself once I understood the concepts.

### 3. Evaluating AI Suggestions
Working with AI as a tutor meant sometimes receiving explanations or examples that weren't quite right for my specific case or preferences. 

When this happened, I asked for clarification, then I'd research the topic further, look at official documentation, and then implement my own solution. This process actually helped deepen my understanding of React Native, as I had to critically evaluate what would work best for this specific application.

For example, Claude recommended the datepicker used in this application, but that datepicker does not work in the web application. So I researched and learned that I had to include a separate datepicker for the web app. The requirements did not ask for a web application, so I kept it simple and added a native `<input type="date">` element. 

### 4. Modifications
The example code Claude provided served mostly as a reference point, not as code to directly use. I made substantial modifications including:
- Building a component structure that made sense for this specific project
- Implementing error handling for the NASA API
- Creating an intuitive UI flow
- Adjusting styles, according to my tastes

### 5. AI in My Workflow
For me, AI served as an on-demand tutor/study guide to help bridge knowledge gaps as I worked on a platform I wasn't familiar with. Rather than spending hours watching tutorials or reading documentation on every concept, I could ask targeted questions and get explanations tailored to my needs.

This approach allowed me to learn React Native quickly while still building the application myself. It's similar to how I might learn a new technology from a mentor, but with the advantage of being able to ask questions without feeling like I'm taking up someone's time. The actual implementation decisions and coding were still my own, with AI simply accelerating the learning process.