function StudentCounter({ count }) {
  if (count === 0) {
    return <p className="text-muted mb-0">Don't have any student in the list</p>;
  }
  return <p className="mb-0 fw-semibold">Total of students: {count}</p>;
}

export default StudentCounter;
