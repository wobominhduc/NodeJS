function print(check){
    for (let i=1; i<=100; i++){
        if (check(i))  console.log(i);
    }
}

function chiaHetCho3(x){
    return x%3===0;
}
function chiaHetCho2(x){
    return x%2===0;
}
print(chiaHetCho3);
print(chiaHetCho2);