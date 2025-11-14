const gridWrapper = document.getElementsByClassName("grid")[0];
async function movies() {
  const poster = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=8476a7ab80ad76f0936744df0430e67c&language=en-US&page=1"
  );
  const data = await poster.json();

  data.results.forEach((item) => {
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("container");
    contentContainer.innerHTML = `  <img src="https://image.tmdb.org/t/p/w500/v9NLaLBbrkDwq44qG51v8T6sPuI.jpg"/>
        <p>${item.original_title}</p>
        <p>${item.release_date}</p>
        <p class="vote"> ${item.vote_average}</p>
        <span class="desc">${item.overview}</span>`;
    gridWrapper.appendChild(contentContainer);
    console.log(data.results);
  });
}
movies();

// async function getUser () {

//     const response = await fetch("https://dummyjson.com/users");
//     const data = await response.json();
//     const users = data.users;
//     console.log(users);
//     users.forEach((item)=> {
//         const element = document.createElement("div");
//         element.classList.add("item");

//         element.innerHTML = `<img src=${item.image}/>
//         <div class= "column">
//         <span style="font-weight: 700; font-size: 18px">${item.firstName} ${item.lastName} </span>
//         <span style="font-size: 14px">${item.email} </span>
//         </div>`;
//         grid.appendChild(element);
//     });
// }
// getUser();
