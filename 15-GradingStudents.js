// Barbar
function gradingStudents(grades) {
  let result = [];
  grades.forEach((grade) => {
    if (grade >= 38) {
      let round = grade + (5 - (grade % 5));
      round - grade < 3 ? result.push(round) : result.push(grade);
    } else {
      result.push(grade);
    }
  });
  return result;
}

// Brainstorm AI
function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38 || grade % 5 < 3) {
      return grade;
    } else {
      return grade + (5 - (grade % 5));
    }
  });
}

// Inspired by Forum
function gradingStudents(grades) {
  return grades.map((grade) =>
    grade < 38 || grade % 5 < 3 ? grade : grade + (5 - (grade % 5))
  );
}

let arr = [73, 67, 38, 33];

console.log(gradingStudents(arr));
