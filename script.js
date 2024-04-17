let input=document.getElementsByClassName('txt')[0];
let list=document.getElementById('list');

function add(){
    if(input.value===''){
        alert ('write something');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=input.value;
        list.appendChild(li);

        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.append(span);
    }
    save();
    input.value='';
}

    list.addEventListener("click", function(e){
        if(e.target.tagName==='LI'){
            e.target.classList.toggle("checked");
            save();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentNode.remove();
            save();
        }
    })

save=()=>{
    localStorage.setItem('data',list.innerHTML);
}

show=()=>{
    list.innerHTML=localStorage.getItem('data');
}
show();