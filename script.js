fetch("data.json")
  .then(response => response.json())
  .then(data =>{
    let mainContainer = document.getElementById("data");
      for(i=0; i<data.length; i++){
        let image = data[i].image;
        let caption = data[i].caption;
        let date = data[i].date;
        let likes = data[i].likes;
        let name = data[i].name;
        let profile_image = data[i].profile_image;
        let social_link = data[i].social_link;
        let div = document.createElement('div');
        div.className = 'post';

        div.innerHTML = 
        '<img id="profile" src="'+profile_image+'"/>'+ 
        '<p id="name">'+name+'</p>' + 
        '<p id="date">'+date+'</p>' +
        '<img id="insta" src="./icons/instagram-logo.svg"/>' +
        '<img id="image" src="'+image+'"/>' + 
        '<p id="caption">'+caption+'</p>' +
        '<img class ="heart" id="heart'+[i]+'" src="./icons/heart.svg"/>'+
        '<span class="likes" id="heart'+[i]+'l">'+likes+'</span>'
        ;

        mainContainer.appendChild(div);
      }

      //On Heart Click Function
      document.addEventListener('click', function (event) {
        let id = '#'+event.target.id;
        if (!event.target.matches(id)) return;
        event.preventDefault();
        const element = likeToggle();
      });
      
      //Likes and Heart Function
      let liked = false;
      let array = [""];
        function likeToggle(){
        let id = event.target.id + 'l';
        for(let i=0; i<array.length; i++){
          if(array[i] == id){
            liked=true;
            array.splice(i, 1);
            break;
          }else if(i == array.length-1){
            liked=false;
            array.push(id);
            break;
          }
        }
        if(liked == false){
          document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML)+1;
          document.getElementById(event.target.id).src="./icons/heartFull.svg";
          liked = true;
        }else {
          document.getElementById(id).innerHTML = parseInt(document.getElementById(id).innerHTML)-1;
          document.getElementById(event.target.id).src="./icons/heart.svg";
          liked = false;
        }
      }
      
        //Load More Button
        const loadmore = document.querySelector("#loadmore");
        let currentItems = 4;
        loadmore.addEventListener("click", (e) => {
        const elementList = document.querySelectorAll(".post");
        for (let i = currentItems; i < currentItems + 4; i++) {
          if (elementList[i]) {
            elementList[i].style.display = "block";
          }
        }
        currentItems += 4;
        if (currentItems >= elementList.length) {
          event.target.style.display = "none";
        }
      });
      
  })

