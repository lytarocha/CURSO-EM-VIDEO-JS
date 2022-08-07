function fatorial(n) {              //Recursividade: quando uma função chama ela mesma   
     if (n==1) {
        return 1
     }else{
        return n * fatorial(n-1)
     }
}
console.log(fatorial(5))





/*
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
1! = 1
n! = n x (n-1)!
*/ 