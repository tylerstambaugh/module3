function CurrentMessage({ day }) {
  const weekday = day >= 1 && day <= 5;
  const weekend = day >= 6 && day <= 7;
  let message;

  // if (weekday) {
  //   message = <Workdays />;
  // } else if (weekend) {
  //   message = <Weekends />;
  // } else {
  //   message = <ErrorComponent />;
  // }

  return (
    <div>
                  {message}
             {" "}
    </div>
  );
}

export default CurrentMessage;

const time = new Date();
const day = time.toLocaleDateString("en-us", { weekday: "long"});
const morning = time.getHours() >= 6 && time.getHours <= 12;

