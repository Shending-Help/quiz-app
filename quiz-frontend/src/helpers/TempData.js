/* this performs a get request to the server to get the questions and answers
   from the backend and then stores them in the Questions array */
let Questions = [];
fetch("http://localhost:5000/questions")
  .then((response) => response.json())
  .then((data) => {
    data.map((question) => {
      Questions.push(question);
    });
  })
  .catch((error) => console.log(error));

export default Questions;
