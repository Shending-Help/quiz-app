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
