const repeat = (number, action) => {
    for (let i = 0; i <= number; i += 1) {
      action(i);
    }
  };
  
  const isEven = (num) => {
    if (num % 2 === 0) {
      console.log(num, 'is even');
    }
  };
  
  const isOdd = (numer) => {
    if ((numer % 2) > 0) {
      console.log(numer, 'is odd');
    }
  };
  
  repeat(10, isEven); // Testa quais números serão pares;
  repeat(10, isOdd); // Testa quais números serão ímpares;