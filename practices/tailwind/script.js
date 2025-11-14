const gridWrapper = document.getElementById("grid");
async function movies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1"
  );
  let data = await response.json();
  data = data.results;
  console.log(data);
  data.forEach((item) => {
    const contentContainer = document.createElement("div");
    contentContainer.classList.add(
        "flex", 
        "flex-col", 
        "w-[267px]", 
        "h-[607.125px]", 
        "bg-[#2a2a2a]", 
        "rounded-[10px]", 
        "justify-between", 
        "transition:-all", 
        "duration-200",
        "hover:-translate-y-2",
        "hover:-ring-4",
        "p-[10px]");
        
    contentContainer.innerHTML = `   <img src = https://image.tmdb.org/t/p/w500${
      item.poster_path
    }/>
 <p class="text-white text-lg font-bold">${item.original_title}</p>
  <p class="text-[#bbb]">${item.release_date}</p>   
<p class="text-white bg-[#667eea] w-[60px] rounded-[10px] text-center">★ ${item.vote_average.toPrecision(2)}</p>
  <span class="text-[#bbb] line-clamp-[3]">${item.overview}</span>
                                        `;

    gridWrapper.appendChild(contentContainer);
  });
}
movies();
