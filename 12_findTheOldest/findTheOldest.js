const findTheOldest = function(people) {
  ages = people.map((person) => 
  (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth);
  let oldestIndex = ages.indexOf(Math.max(...ages));
  return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
