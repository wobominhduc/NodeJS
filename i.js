// function nhan tham số từ function khác  => Suc manh cua javascript

function doSth(a){
    a(123);  // <=> console.log(123)
}
doSth(console.log);