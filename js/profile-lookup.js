const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  let contact = contacts.find((x) => x.firstName === name);
  /*  if (contact == undefined) {
      return 'No such contact';
    }
    return contact.hasOwnProperty(prop) ? contact[prop] : 'No such property';
  */

  return (contact == undefined) ? "No such contact"
    : contact.hasOwnProperty(prop) ? contact[prop]
      : "No such property";
}

console.log(lookUpProfile("Akiera", "liekes"));
