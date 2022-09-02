//arrays
const cardioArray = ["running", "rowing", "cycling"];
const pull = [ "bicep curls", "frenchpress", "pull-ups", "lats-machine", "row-machine" ];
const legs =["barbell-squat", "dumbell-squat", "leg-press", "calf-lift", "reverse lunges"];
const push = ["bench-press", "incline-press", "push-ups", "sit-ups", "cable-fly", "dips"];
const strengthArray = [pull, legs, push];
const coolDownArray = ["yoga","jogging", "stretching"];
let randomPullExcercises = [];
let randomLegExcercises = [];
let randomPushExcercises = [];

// looping through arrays for random strength excercises
do {
    randomPullExcercises[randomPullExcercises.length] = pull.splice(
                                  Math.floor(Math.random() * pull.length)
                                , 1);
  } while (randomPullExcercises.length < 3);

  do {
    randomLegExcercises[randomLegExcercises.length] = legs.splice(
                                  Math.floor(Math.random() * legs.length)
                                , 1);
  } while (randomLegExcercises.length < 3);

  do {
    randomPushExcercises[randomPushExcercises.length] = push.splice(
                                  Math.floor(Math.random() * push.length)
                                , 1);
  } while (randomPushExcercises.length < 3);

// random excercises from three excercise groups
let randomCardio = Math.floor(Math.random() * cardioArray.length);
let randomCoolDown = Math.floor(Math.random() * coolDownArray.length);
let randomStrength = Math.floor(Math.random() * strengthArray.length);


console.log(`You will do 15 minutes of ${cardioArray[randomCardio]} followed by ${strengthArray[randomStrength].join(' and ')} (three sets each) and then 10 minutes of ${coolDownArray[randomCoolDown]}`);