function isLeapYear(num1, num2){
    let leapYears = 0
    if (isNaN(num1 || num2)|| num1 < 2001 || num2 > 2500){
        console.log('Error, número no válido!')
        return
    }
    //Se redondean los números
    Math.round(num1) && Math.round(num2)
    while(num1 < num2){    
        if(num1 % 4 === 0 || num1 % 100 && num1 % 400){
            leapYears++
            num1++
        }
        num1++
    }
    console.log(`Hay ${leapYears} años bisiestos entre los años introducidos`)
}
// Comprobamos que no se acepta un número que no esté entre los rangos que se especifican
isLeapYear(1999,2300)
// Comprobamos que no se acepta nada que no sea un número
isLeapYear('a', 2495)
// Introducimos números válidos
isLeapYear(2003.3,2499)