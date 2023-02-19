const questions = document.querySelectorAll(".question");

questions.forEach(
  (question) =>
    (question.onclick = () => {
      if (question.classList.contains("active")) {
        question.classList.toggle("active");
      } else {
        questions.forEach((e) => {
          e.classList.remove("active");
        });
        question.classList.add("active");
      }
    })
);
