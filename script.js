// Data File

const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

//    Selectors
  let profileName = document.querySelector('.profile-name');
  let profileTitle = document.querySelector('.profile-title');
  let profileDescription = document.querySelector('.profile-description');
  let image = document.querySelector('img');

//   Selector Buttons
  let leftButton = document.querySelector(".left");
  let rightButton = document.querySelector(".right");
  let randomButton = document.querySelector(".random");

//   EventListener
  let initialValue = 0


// This eventListener and showPerson funtion does the same work
 
//   window.addEventListener('DOMContentLoaded', function(){
//     const item = reviews[initialValue];
//     image.src = item.img;
//     profileName.textContent = item.name;
//     profileTitle.textContent = item.job;
//     profileDescription.textContent = item.text;
//   });

  function showPerson(currentValue=0){
    const item = reviews[currentValue];
    image.src = item.img;
    profileName.textContent = item.name;
    profileTitle.textContent = item.job;
    profileDescription.textContent = item.text;
    // console.log(initialValue);
  }
  showPerson(initialValue);
  
  leftButton.addEventListener('click', function(){
    initialValue--;
    if (initialValue < 0) {
        initialValue = reviews.length - 1;
    }
    showPerson(initialValue);
    // console.log(initialValue);
  });

  rightButton.addEventListener('click', function(){
    initialValue++;
    if (initialValue > reviews.length-1) {
        initialValue = 0;
    }
    showPerson(initialValue);
    // console.log(initialValue);
  });

  randomButton.addEventListener('click', function(){
    initialValue = Math.floor(Math.random()*reviews.length);
    showPerson(initialValue);
    // console.log(initialValue);
  })


  