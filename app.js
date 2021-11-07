class Calc{
    constructor(){
        this.num = document.querySelectorAll('.num')
        this.sign = document.querySelectorAll('.sign')
        this.equal = document.querySelector('.equal')
        this.input = document.querySelector('.input')
        this.remove = document.querySelectorAll('.remove-element')
        this.st = ""
        this.st2 = ''
        this.num1 = []
        this.amal = ""
        this.nuq = 0 
        this.inputt = ''
        this.oz = 0 
        this.count = 0
    }

     Num(){
    for (let i=0; i<this.num.length;i++){
        this.num[i].addEventListener('click', (event) => {
            if (this.oz>0) this.count+=2
            if (this.st2 == '') this.st2 = event.target.innerText.padStart(2, '0')
            else this.st2 = event.target.innerText
            if(event.target.innerText == '.' && this.nuq==0){
                if (this.st.split('')[st.length-1]!=".") this.nuq++; this.st += this.st2
            }else if(event.target.innerText != '.'){
                if (this.st[0]!="0"){
                    this.st += event.target.innerText
                    this.nuq=0
                }else {
                    if (this.st[1]==".") this.st += event.target.innerText
                    else this.st = event.target.innerText 
                }
                
            }
            this.input.value = this.st 
        })
        
    } this.num1 = this.st
}
 amallar(){
    for (let i=0; i<this.sign.length; i++){
        this.sign[i].addEventListener('click', (event) => {
            this.nuq=0
            this.st2 = ''
            if (this.count<1. && this.st[this.st.length-1] == '+' ){    
                this.oz++
                this.st = this.st.split('+').join(event.target.innerText)
                this.input.value =  this.st
                this.amal = event.target.innerText
            }else if(this.count<1 && this.st[this.st.length-1] == '-'){
                this.oz++
                this.st = this.st.split('-').join(event.target.innerText)
                this.input.value =  this.st
                this.amal = event.target.innerText
            }else if(this.count<1 && this.st[this.st.length-1] == '✕'){
                this.oz++
                this.st = this.st.split('✕').join(event.target.innerText)
                this.input.value =  this.st
                this.amal = event.target.innerText
            }else if(this.count<1 && this.st[this.st.length-1] == "÷" ){
                this.oz++
                this.st = this.st.split('÷').join(event.target.innerText)
                this.input.value =  this.st
                this.amal = event.target.innerText
            }else{
                if (this.count<1){
                    this.st += event.target.innerText
                    this.input.value = this.st
                    this.amal = event.target.innerText
                    this.oz++
                }
            }   
            
        })
    }
}
 del(){
    for (let i = 0; i<this.remove.length; i++){
        this.remove[i].addEventListener('click',(event) => {
            this.nuq=0
            this.st2 = ''
            this.a = this.st.split('')
            if(event.target.innerText == 'R') this.a.pop()
            else if (event.target.innerText == 'C') this.a = []; this.count = 0; this.oz = 0
            this.st = ''
            for (let i of this.a) this.st+=i
            this.input.value = this.st
            
        })
    }
}
 bajar(){
    this.equal.addEventListener('click', (event) => {
        if(this.amal=='+') {this.num1 = this.st.split('+'); if(this.num1[1] != '' ) { this.st = (+this.num1[0] + +this.num1[1])+''; this.input.value = this.st; this.num1[0]=this.st; this.amal = ''}}
        else if(this.amal=='-'){this.num1 = this.st.split('-'); if(this.num1[1] != '' ) { this.st = (+this.num1[0] - +this.num1[1])+''; this.input.value = this.st; this.num1[0]=this.st; this.amal = ''}}
        else if(this.amal=='÷'){this.num1 = this.st.split('÷'); if(this.num1[1] != '' ) { this.st = (+this.num1[0] / +this.num1[1])+''; this.input.value = this.st; this.num1[0]=this.st; this.amal = ''}}
        else if(this.amal=='✕'){this.num1 = this.st.split('✕'); if(this.num1[1] != '' ) { this.st = (+this.num1[0] * +this.num1[1])+''; this.input.value = this.st; this.num1[0]=this.st; this.amal = ''}}
        this.count=0
        this.oz = 0
    })
}
 klavitura(){
    this.input.addEventListener('keyup', (event) => {
        if (event.keyCode == 107 || event.keyCode == 109 || event.keyCode == 106 || event.keyCode == 111) {
            this.count++
            if (this.count > 1){
                fn(event.target.value)
                this.count=0
            }
        }
        if (event.keyCode == 13){
            fn(event.target.value)
        }
    })
}
 fn(arg){
    this.st=arg
    if(this.st.includes('+')) {this.num1 = this.st.split('+'); this.input.value = (+this.num1[0] + +this.num1[1]); this.st = (+this.num1[0] + +this.num1[1])+''; this.num1[0]=this.st }
    else if(this.st.includes('-')){this.num1 = this.st.split('-'); this.input.value = (+(this.num1[0]) - +(this.num1[1])); this.st = (+this.num1[0] - +this.num1[1])+''; this.num1[0]=this.st }
    else if(this.st.includes('/')){this.num1 = this.st.split('/'); this.input.value = (+(this.num1[0]) / +(this.num1[1])); this.st = (+this.num1[0] / +this.num1[1])+''; this.num1[0]=this.st}
    else if(this.st.includes('*')){this.num1 = this.st.split('*'); this.input.value = (+(this.num1[0]) * +(this.num1[1])); this.st = (+this.num1[0] * +this.num1[1])+''; this.num1[0]=this.st } 
}
}
let calk = new Calc()

calk.Num()
calk.amallar()
calk.del()
calk.bajar()
calk.klavitura()


