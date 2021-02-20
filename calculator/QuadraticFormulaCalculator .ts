/*
 This class is used the solve quadatic equations of the form:
    a*x^2+b*x+c=0
The solution is as follows:
    x= (-b +/- sqrt(b^2-4*a*c))/(2*a)
* */
export class QuadraticFormulaCalculator{
    static printAnswer(a:number,b:number,c:number){
        if(b**2-4*a*c > 0){
            console.log("The answer is:")
            console.log(`\t x1 = ${ (-b + Math.sqrt(b**2-4*a*c))/(2*a)}`)
            console.log(`\t x2 = ${ (-b - Math.sqrt(b**2-4*a*c))/(2*a)}`)
        }
        else if(b**2-4*a*c === 0){
            console.log("The answer is:")
            console.log(`\t x = ${ -b /(2*a)}`)
        }
        else {
            console.log("The answer does not exist in the real domain.")
        }
    }
}