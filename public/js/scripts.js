console.log('welcome user!');
//get all movies onto page

fetch("/api/movies").then(res=>res.json()).then(data=>{
    data.forEach(movie=>{
        const movieLi = document.createElement("li");
        movieLi.textContent =`${movie.id}: ${movie.title}`;
        const delBtn = document.createElement("button");
        delBtn.setAttribute("class","del-btn");
        delBtn.setAttribute("data-id",movie.id);
        delBtn.textContent = `X`
        movieLi.append(delBtn)

        document.querySelector("#movieList").append(movieLi);

    })
})

document.querySelector("#newMovieForm").addEventListener("submit",e=>{
    e.preventDefault();
    const newMovieObj = {
        title:document.querySelector("input[name='title']").value
    }
    console.log(newMovieObj);
    fetch("/api/movies",{
        method:"POST",
        body:JSON.stringify(newMovieObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })

})

document.querySelector("#movieList").addEventListener("click",e=>{
    if(e.target.matches("button.del-btn")){
       const idToDel = e.target.getAttribute("data-id");
      fetch(`/api/movies/${idToDel}`,{
        method:"DELETE"
      }).then(res=>{
        if(res.ok){
            location.reload()
        } else {
            alert("trumpet sound!")
        }
      })
    } 
})