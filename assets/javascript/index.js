  function displayThumb() {

      var imgThumb = ['img4.JPG', 'img6.jpg',
          'img7.jpeg',
          'img9.jpg',
          'img10.jpg',
          'img11.jpg',
          'img12.jpeg',
          'img13.JPG',
          'img14.JPG',
          'img15.JPG',
          'img16.JPG',
          'img17.jpeg',
          'img18.JPG',
          'img19.jpeg',
          'img20.jpeg',
          'img21.jpeg',
          'img22.jpg',
          'img23.jpeg',
          'img24.jpg',
          'img25.JPG',
          'img26.jpg',
          'img27.jpg',
      ]



      for (i = 0; i < 22; i++) {
          document.getElementById('thumb'.concat(i)).src = "assets/img/" + imgThumb[i];
          document.getElementById('thumb'.concat(i)).setAttribute("class", "img-thumbnail img-gallery modal-hover-opacity");
          document.getElementById('thumb'.concat(i)).setAttribute("style", "width:300px; margin-top: 20px");
      }


  }

  window.addEventListener("load", displayThumb, false);

  function imageSwap(element) {


      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = element.src;
      var modalImg = document.getElementById("img01");
    
      modalImg.src = img;
      
  }