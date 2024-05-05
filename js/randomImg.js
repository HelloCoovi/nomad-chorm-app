const images = ['0.jpeg', '1.jpeg', '2.jpeg']

const chosenImage = images[Math.floor(Math.random() * images.length)]

const randomImg = document.querySelector('.random-img')

randomImg.src = `img/${chosenImage}`
