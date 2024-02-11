const dateTimeNow = () => {
  const currentdate = new Date();
  let hours = currentdate.getHours(),
    suffix = hours >= 12 ? "PM" : "AM";
  hours = ((hours + 11) % 12) + 1;

  return `${currentdate.getDate()}/${
    currentdate.getMonth() + 1
  }/${currentdate.getFullYear()}, ${hours}:${currentdate.getMinutes()} ${suffix}`;
};

export { dateTimeNow };
