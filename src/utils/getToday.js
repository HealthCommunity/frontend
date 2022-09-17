export default function getToday() {
  let date = new Date();
  let year = date.getFullYear();
  let month = ("0" + (1 + date.getMonth())).slice(-2);
  let day = ("0" + date.getDate()).slice(-2);
  const dayList = [];
  for (let i = 0; i < 3; i++) {
    dayList.push(
      `${year}-${month}-${day - i < 10 ? "0" + (day - i) : day - i}`
    );
  }
  return dayList;
}
