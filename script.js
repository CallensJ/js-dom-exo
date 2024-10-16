const appDiv = document.querySelector(".userProfile");

const userData = {
    name: 'John SEAGAL',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
  };


  //container principal
 
  const container = document.createElement('div');
  container.style.width = '500px';
  container.style.height = '500px'
  container.style.border = '1px solid black';
  appDiv.appendChild(container);
  
  
  //image
  const avatar = document.createElement('img');
  avatar.src = userData.img;
  avatar.style.width = '100%';
  avatar.style.height = '300px';
  avatar.style.objectFit ='fit';
  container.appendChild(avatar);




appDiv.addEventListener("click", function(){
    console.log('click');
})

