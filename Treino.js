const readline = require("node:readline")
const{stdin:input,stdout:output}=require("node:process")
const rl=readline.createInterface({input,output})

function inicio(){
    var x=0
    var y=0
    rl.question("escreva valor de x",(resposta)=>{
        x= +resposta
    
        
        rl.question("escreva valor de y",(resposta)=>{
            y= +resposta
            const soma = x+y
    console.log ("o resultado é:", soma);
            rl.close()
            
        })
    })

    

    
    }




    inicio()