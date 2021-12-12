quizData = [
    {
        question:'How old is Devesh?',
        a:'10',
        b:'15',
        c:'20',
        d:'120',
        correct:'c'
    },{
        question:'The most used programming language of 2021',
        a:'Java',
        b:'Python',
        c:'c#',
        d:'Javascript',
        correct:'b'
    },{ 
        question:'who is the president of US?',
        a:'Devesh Wadhwani',
        b:'Donald Trump',
        c:'Joe Biden',
        d:'Narendra Modi',
        correct:'c'
    },{
        question:'What do you want for breakfast',
        a:'Pancakes',
        b:'Burger',
        c:'Omlett',
        d:'Burrito',
        correct:'b'
    },{
        question:'What year was JavaScript launched',
        a:'1995',
        b:'2019',
        c:'2018',
        d:'2021',
        correct:'a'
    }
]

function getQuestion(){
    let number=Math.floor(Math.random()*(5-0));
document.getElementById('question').innerHTML=quizData[number].question;
document.getElementById('op-a').innerHTML=quizData[number].a;
document.getElementById('op-b').innerHTML=quizData[number].b;
document.getElementById('op-c').innerHTML=quizData[number].c;
document.getElementById('op-d').innerHTML=quizData[number].d;
}
function uncheck(){
    var ele = document.getElementsByName("Hello");
    for(var i=0;i<ele.length;i++)
       ele[i].checked = false;
}

getQuestion();

