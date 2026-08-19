function calculateAge() {
  // Index of August is 7, starting with January at 0
  const birthday = new Date(1992, 7, 16);
  const currentDate = new Date();
  const diffInMilliseconds = currentDate - birthday;
  // Divide age in ms by s/ms, hr/s, day/hr, and year/day to get age in years.
  const age = diffInMilliseconds / 1000 / 3600 / 24 / 365.25;

  return age;
}

export {
  calculateAge,
};

