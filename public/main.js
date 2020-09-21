// setting up the stock media object to use the pixabay API//

let media = {
  btnBook: document.getElementById('btnBook'),
  btnVideo: document.getElementById('btnVideo'),
  btnPhoto: document.getElementById('btnPhoto'),
  btnMore: document.getElementById('btnMore'),
  photo: document.getElementById('photo'),
  video: document.getElementById('video'),
  input: document.getElementById('subject'),
  book: document.getElementById('book'),
  count: 0,
  getPhoto(){
    let input = media.input.value.replace(" ","+");
      fetch(`https://pixabay.com/api/?key=18152452-ad2ae05e127c7b14eba5e7e37&q=${input}&image_type=photo&per_page=15`)
        .then(response => response.json())
        .then(data => {
            media.photo.classList.remove("hide")
            media.photo.src= data.hits[media.count].largeImageURL
            media.video.classList.add("hide")
            setTimeout(function(){
              media.btnMore.classList.remove("hide")
            }, 165)
      })
        .catch(err => alert("Out of photos! Try another search."))

  },
  getVideo(){
      let input = media.input.value.replace(" ","+");
      fetch(`https://pixabay.com/api/videos/?key=18152452-ad2ae05e127c7b14eba5e7e37&q=${input}&page=1&per_page=15`)
        .then(response => response.json())
        .then(data => {
            media.video.classList.remove("hide")
            media.video.src= data.hits[media.count].videos.large.url
            media.photo.classList.add("hide")
            setTimeout(function(){
              media.btnMore.classList.remove("hide")
            }, 165)
          })
            .catch(err => alert("Out of videos! Try another search."))

        }
}

media.btnVideo.addEventListener("click", media.getVideo);
media.btnPhoto.addEventListener("click", media.getPhoto);

// more button allows the user to look through the array of data (images and videos) returned from the pixabay API //
media.btnMore.addEventListener("click", ()=>{
  if(media.photo.classList.contains("hide")){
    media.getVideo();
    media.count+=1
  }else if(media.video.classList.contains("hide")){
    media.getPhoto();
    media.count+=1
  }
});

// setting up the site's API to save and delete media received from the pixabay API //
var bookmark = document.getElementById("btnSave");
var trash = document.getElementsByClassName("fa-trash");

  bookmark.addEventListener('click', function(e){
        const name = document.getElementById("user").value
        const subject = media.input.value
        const imgSrc = media.photo.getAttribute("src")
        const vidSrc = media.video.getAttribute("src")
        const msg = document.getElementById("userInput").value
        if(media.video.classList.contains("hide")){
        fetch('saved', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              'name': name,
              'subject': subject,
              'imgSrc': imgSrc,
              'vidSrc': "",
              'msg': msg
            })
          })
          .then(response => {
           if (response.ok) return response.json()
          })
          .then(data => {
           window.location.reload(true)
         })
       }else if(media.photo.classList.contains("hide")){
       fetch('saved', {
         method: 'post',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
             'name': name,
             'subject': subject,
             'imgSrc': '',
             'vidSrc': vidSrc,
             'msg': msg
           })
         })
         .then(response => {
          if (response.ok) return response.json()
         })
         .then(data => {
          window.location.reload(true)
        })

      }
    });

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[7].innerText
        fetch('saved', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
