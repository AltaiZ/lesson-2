      //         const colors = ["red", "blue", "green", "black", "orange"]
      //         console.log (colors[2])

      // const animals = ["lion", "tiger", "elephant", "giraffe"]
      // animals[1] = "panda"
      // console.log (animals)

    //   const book = ["1984", "brave new world", "Fahrenheit 451"];
    //   book.push("Points");

    //   const book2 = ["1984", "brave new world", "Fahrenheit 451"];
    //   const ggg = book2.push("Points");
    //   //   const book2 = ["Hobbit", "LOTR"];
    //   //   book[3] = "Hobbit";
    //   //   book[4] = "LOTR";
    //   console.log(book);
    //   console.log(ggg);
    //   //   console.log(book.concat(book2));

    //   const numbers = [10, 20, 30, 40, 50];
    //   console.log(numbers.indexOf(30));

    // const friut1 = ["banana", "apple", "grape"];
    // const friut2 = ["pear", "watermelon", "dragonfriut"];
    // console.log (friut1.concat(friut2));

        // const colors = ["red", "green", "blue", "yellow", "purple"]
        // console.log (colors.includes ("red"))

        // const array1 =["a", "b", "c"];
        // const array2 = ["a", "b", "c", "D"];
        // if (array1.length === array2.length)
        //     {console.log ("true")}
        //     else {console.log ("false")} 

        // const words = ["Javascript", "is", "versatile", "language"]
        // console.log (words.join())

//         const colors = ["red", "green", "blue"]
// const randomColor = colors[Math.floor(Math.random() * colors.length)]
// console.log(randomColor)

       
        let player_win_count = 0
        let computer_win_count = 0
        
        
        while( player_win_count < 3 && computer_win_count < 3){
        let player = window.prompt ("player 2 Rock, Paper, Scissors")
        const items =["rock", "paper", "scissors"]
        const computer = items[Math.floor(Math.random() * items.length)]
        if (computer === player){
            console.log("It's a TIE")
        } else if (computer === items [2] && player === items [1]){
            console.log ("computer win. computer: scissors, player : paper ")
            computer_win_count ++
        } else if (computer === items [2] && player === items [0]){
            console.log ("player  win. computer: scissors, player : rock")
            player_win_count ++
        } else if (computer === items [0] && player === items [2]){
            console.log ("computer win. computer: rock, player : scissors")
            computer_win_count ++
        } else if (computer === items [0] && player === items [1]){
            console.log ("player  win. computer: rock, player : paper")
            player_win_count ++
        } else if (computer === items [1] && player === items [0]){
            console.log ("computer win. computer: paper, player : rock")
            computer_win_count ++
        }  else if (computer === items [1] && player === items [2]){
            console.log ("player  win. computer: paper, player : scissors")
            player_win_count ++
        }
        console.log ("player point:" + player_win_count)
        console.log ("computer point:" + computer_win_count)
}
if (
    player_win_count >= 3){
        console.log ("Player final winner")
    } else {console.log("Computer final winner")}


    // const name =["Bek", "Bilguun", "Erxes", "Altai", "Gantulga", "Adiyabal", "Amartuvshin", "Manduul", "Uchral", "Telmen"]
    //     const name1 = name[Math.floor(Math.random() * name.length)]
    //     // console.log(name.indexOf(name1),1)
    //     name.splice(name.indexOf(name1),1)
    //     const name2 = name[Math.floor(Math.random() * name.length)]
    //     console.log("Team", name1, name2)