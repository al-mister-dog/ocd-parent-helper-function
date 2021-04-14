function takeAction(baby) {
  if (baby === 'too hot') {
    console.log('take blanket off')
  } else {
    baby = 'too cold';
    takeAction(baby)
  }
  
  if (baby === 'too cold') {
    console.log('put blanket on')
  } else {
    baby = 'too hot';
    takeAction(baby);
  }
}

const allKnownTemperatures = ['too hot', 'too cold']
const baby = allKnownTemperatures[Math.floor(Math.random() * 2)]
takeAction(baby)