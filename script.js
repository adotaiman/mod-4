const names = ["John", "Jessica", "Mark", "julia" , "khadija"];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  
  if (name.charAt(0).toLowerCase() === 'j'|| name.charAt(0).toUpperCase() ==='J') {
    console.log(`Goodbye ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}