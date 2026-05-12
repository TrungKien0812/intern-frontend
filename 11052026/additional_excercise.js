const checkPrimeNumber = (e) => {
  if (e < 2) return false;
  for (let i = 2; i < e; i++) {
    if (e % i === 0) return false;
  }
  return true;
};
//console.log(checkPrimeNumber(5));

const isPrime = (n) =>
  n > 1 && ![...Array(n).keys()].slice(2).some((i) => n % i === 0);

const numbers = [12, 2, 3, 4, 5, 6, 7, 8, 9];

const primes = numbers.filter(isPrime);

console.log(primes);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "male",
  occupation: "developer",
  nationality: "American",
  city: "New York",
  hobbies: ["reading", "traveling", "photography"],
  languages: ["English", "Spanish"],
  education: {
    degree: "Bachelor",
    major: "Computer Science",
    university: "Harvard University",
  },
};
const {
  firstName,
  gender,
  education: { degree },
  languages,
} = person;
const result = { firstName, gender, degree, English: languages[0] };
console.log(result);

function getInfo(obj) {
  // const firstName = obj.firstName === undefined ? "Quan" : obj.firstName;
  // const degree = obj.degree === undefined ? "NA" : obj.degree;
  const { firstName = "Quan", degree = "NA" } = obj;
  console.log(firstName, degree);
}
const sinhvien = {
  firstName: "Kien",
  gender: "male",
  degree: "Bachelor",
  english: "English",
};
getInfo(sinhvien);
