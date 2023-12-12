// grade percentages
let grades = [44, 55, 75, 95];

//loop through array of grades
for (let i = 0; i < grades.length; i++) {
  // evaluate grades and categorize

  if (grades[i] < 45) {
    console.log(`${grades[i]}% is failing`);
  } else if (grades[i] === 75) {
    console.log(`${grades[i]}% is good`);
  } else if (grades[i] > 90) {
    console.log(`${grades[i]}% is excellent`);
  } else {
    console.log(`${grades[i]}% is average`);
  }
}
