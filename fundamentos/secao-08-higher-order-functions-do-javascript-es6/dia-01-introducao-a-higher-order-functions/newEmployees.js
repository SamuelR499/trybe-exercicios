const newEmployees = (callback) => {
  const employees = {
    id1: callback('Sara Soares'), 
    id2: callback('Samuel Ribeiro'),
    id3: callback('Hugo Gabriel'),
  }
  return employees;
};

const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '.'); // Observação 🔎: O replace não é a única maneira de substituir valores em uma string. Você pode utilizar outros métodos, como o split e o join, etc.
  return { fullName, email: `${email}@gmail.com` };
};

console.log(newEmployees(employeeGenerator));