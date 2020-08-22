window.addEventListener('load', () => {
  const sound = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#db5461',
    '#686963',
    '#8aa29e',
    '#3d5467',
    '#71edee',
    '#ffc6ac'
  ];

  //play sound
  pads.forEach((pad, index) => {
    pad.addEventListener('click', function () {
      pad.style.animation = 'scale 0.5s ease';
      sound[index].currentTime = 0;
      sound[index].play();

      createBubble(index);
      pad.addEventListener('animationend', function () {
        pad.style.animation = '';
      })
    })
  })

  //function that creates bubbles
  const createBubble = index => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function () {
      visual.removeChild(this);
    })
  }
})