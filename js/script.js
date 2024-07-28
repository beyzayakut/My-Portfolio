const searchForm=document.querySelector(".search-form");
//htmlde serch-form kısmı yok

const searchBtn= document.querySelector("#search-btn");

searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active");
    document.addEventListener("click",function(e){
        if(
            !e.composedPath().includes(searchBtn)&&
            !e.composedPath().includes(searchForm)
        ){
            searchForm.classList.remove("active");
        }
    });
});