let num = document.querySelectorAll('.num')
let sign = document.querySelectorAll('.sign')
let equal = document.querySelector('.equal')
let input = document.querySelector('.input')
let remove = document.querySelectorAll('.remove-element')
let st = ""
let st2 = ''
let num1 = []
let amal = ""
let nuq = 0 
let inputt = ''
let oz = 0 
let count = 0
for (let i=0; i<num.length;i++){
    num[i].addEventListener('click', (event) => {
        if (oz>0) count+=2
        if (st2 == '') st2 = event.target.innerText.padStart(2, '0')
        else st2 = event.target.innerText
        if(event.target.innerText == '.' && nuq==0){
            if (st.split('')[st.length-1]!=".") nuq++; st += st2
        }else if(event.target.innerText != '.'){
            if (st[0]!="0"){
                st += event.target.innerText
                nuq=0
            }else {
                if (st[1]==".") st += event.target.innerText
                else st = event.target.innerText 
            }
            
        }
        input.value = st 
    })
    
} num1 = st
for (let i=0; i<sign.length; i++){
    sign[i].addEventListener('click', (event) => {
        nuq=0
        st2 = ''
        if (count<2 && st[st.length-1] == '+' ){    
            oz++
            st = st.split('+').join(event.target.innerText)
            input.value =  st
            amal = event.target.innerText
        }else if(count<1 && st[st.length-1] == '-'){
            oz++
            st = st.split('-').join(event.target.innerText)
            input.value =  st
            amal = event.target.innerText
        }else if(count<1 && st[st.length-1] == '✕'){
            oz++
            st = st.split('✕').join(event.target.innerText)
            input.value =  st
            amal = event.target.innerText
        }else if(count<1 && st[st.length-1] == "÷" ){
            oz++
            st = st.split('÷').join(event.target.innerText)
            input.value =  st
            amal = event.target.innerText
        }else{
            if (count<1){
                st += event.target.innerText
                input.value = st
                amal = event.target.innerText
                oz++
            }
        }   
        
    })
}
for (let i = 0; i<remove.length; i++){
    remove[i].addEventListener('click',(event) => {
        nuq=0
        st2 = ''
        let a = st.split('')
        if(event.target.innerText == 'R') a.pop()
        else if (event.target.innerText == 'C') a = []; count = 0; oz = 0
        st = ''
        for (let i of a) st+=i
        input.value = st
        
    })
}
equal.addEventListener('click', (event) => {
    if(amal=='+') {num1 = st.split('+'); if(num1[1] != '' ) { st = (+num1[0] + +num1[1])+''; input.value = st; num1[0]=st; amal = ''}}
    else if(amal=='-'){num1 = st.split('-'); if(num1[1] != '' ) { st = (+num1[0] - +num1[1])+''; input.value = st; num1[0]=st; amal = ''}}
    else if(amal=='÷'){num1 = st.split('÷'); if(num1[1] != '' ) { st = (+num1[0] / +num1[1])+''; input.value = st; num1[0]=st; amal = ''}}
    else if(amal=='✕'){num1 = st.split('✕'); if(num1[1] != '' ) { st = (+num1[0] * +num1[1])+''; input.value = st; num1[0]=st; amal = ''}}
    count=0
})

input.addEventListener('keyup', (event) => {
    // console.log(event.keyCode)
    if (event.keyCode == 107 || event.keyCode == 109 || event.keyCode == 106 || event.keyCode == 111) {
        count++
        if (count > 1){
            console.log(event.target.value)
            fn(event.target.value)
            count=0
        }
    }
    if (event.keyCode == 13){
        fn(event.target.value)
    }
})

function fn(arg){
    st=arg
    if(st.includes('+')) {num1 = st.split('+'); input.value = (+num1[0] + +num1[1]); st = (+num1[0] + +num1[1])+''; num1[0]=st }
    else if(st.includes('-')){num1 = st.split('-'); input.value = (+(num1[0]) - +(num1[1])); st = (+num1[0] - +num1[1])+''; num1[0]=st }
    else if(st.includes('/')){num1 = st.split('/'); input.value = (+(num1[0]) / +(num1[1])); st = (+num1[0] / +num1[1])+''; num1[0]=st}
    else if(st.includes('*')){num1 = st.split('*'); input.value = (+(num1[0]) * +(num1[1])); st = (+num1[0] * +num1[1])+''; num1[0]=st } 
}
