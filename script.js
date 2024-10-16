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



const username = document.createElement('div');
username.textContent = userData.name;
username.style.fontSize = '20px';
username.style.fontWeight = 'bold';
username.style.marginTop = '10px';
container.appendChild(username);