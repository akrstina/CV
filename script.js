const project1 = ["pictures/1.png", "pictures/2.png", "pictures/3.png"];
  const project2 = ["pictures/4.png", "pictures/5.png", "pictures/6.png"];
  const project3 = ["pictures/7.png", "pictures/7.png", "pictures/9.png"];
  let project1Index = 0;
  let project2Index = 0;
  let project3Index = 0;

  setInterval(() => {
    project1Index = (project1Index + 1) % project1.length;
    document.getElementById("project1-img").src = project1[project1Index];
    project2Index = (project2Index + 1) % project2.length;
    document.getElementById("project2-img").src = project2[project2Index];
    project3Index = (project3Index + 1) % project3.length;
    document.getElementById("project3-img").src = project3[project3Index];
  }, 5000);