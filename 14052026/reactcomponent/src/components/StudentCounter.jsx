function StudentCounter({ count }) {
  if (count === 0) {
    return <p>Don't have any student in the list</p>;
  }
  return (
    <>
      <p>Total of student: </p>
      <p>{count}</p>
    </>
  );
}
export default StudentCounter;
