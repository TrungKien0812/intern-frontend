let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];
const result = courses.filter((m) => m.rating >= 4);

console.log("===============EX1==================");
console.log(result);
console.log("====================================");
const result2 = courses
  .filter((m) => m.rating < 4)
  .map((c) => `${c.id} - ${c.title} - ${c.rating}`);
console.log("===============EX2==================");
console.log(result2);
console.log("====================================");
let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];
const result3 = [...courses, ...addedCourses];
console.log("===============EX3==================");
console.log(result3);
console.log("====================================");
