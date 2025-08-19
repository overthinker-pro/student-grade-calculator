document.addEventListener("DOMContentLoaded", () => {
  const gradeForm = document.getElementById("gradeForm");
  const studentNameInput = document.getElementById("studentName");
  const subject1Input = document.getElementById("subject1");
  const subject2Input = document.getElementById("subject2");
  const subject3Input = document.getElementById("subject3");
  const resultParagraph = document.getElementById("result");

  gradeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const studentName = studentNameInput.value.trim();
    const mark1 = subject1Input.value.trim();
    const mark2 = subject2Input.value.trim();
    const mark3 = subject3Input.value.trim();

    if (!studentName || !mark1 || !mark2 || !mark3) {
      resultParagraph.textContent = "Please fill in all fields.";
      return;
    }

    const numMark1 = parseFloat(mark1);
    const numMark2 = parseFloat(mark2);
    const numMark3 = parseFloat(mark3);

    const marks = [numMark1, numMark2, numMark3];
    if (marks.some(isNaN) || marks.some((m) => m < 0 || m > 100)) {
      resultParagraph.textContent =
        "Please enter valid marks between 0 and 100.";
      return;
    }

    const totalMarks = numMark1 + numMark2 + numMark3;
    const average = totalMarks / 3;

    let grade;
    if (average >= 80) {
      grade = "A";
    } else if (average >= 60) {
      grade = "B";
    } else if (average >= 40) {
      grade = "C";
    } else {
      grade = "Fail";
    }

    resultParagraph.textContent = `Hello ${studentName}, your average mark is ${average.toFixed(
      2
    )}. Your final grade is ${grade}.`;
  });
});
