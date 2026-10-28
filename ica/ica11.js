
const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const friends = [
  "Hoppy the IPA",
  "strong lager called Lena",
  "a non deomestic beer names Prince",
  "a full of himself ale called Allen"
];

const places = [
  "the downer",
  "the attic",
  "denver",
  "fox theater"
];

const problems = [
  "we lost at football again",
  "its snowing outside",
  "no on laughed at my joke",
  "didnt even make it to the bars"
];

const activities = [
  "did kareoke",
  "played pool",
  "stood in a corner",
  "argued about how CU should fix their football team"
];

function generateStory() {
  let name = customName.value.trim() || "Ben the Beer";
  let friend = randomValueFromArray(friends);
  let place = randomValueFromArray(places);
  let problem = randomValueFromArray(problems);
  let activity = randomValueFromArray(activities);

  let storyText =
    name + " had a long day of class " +
    "One evening, he rolled into " + place + ", where he met " +
    friend + ". Things got awkward when " + name + " " +
    problem + ". They all looked at each other and thought to themselves what in the world did he do? " +
    activity + ". ";

  if (document.getElementById("uk").checked) {
    storyText +=
      "They popped down to the local pub, had a proper wial of a time, " +
      "Then they never saw each other agagin becasue they all got girlfriends";
  } else {
    storyText +=
      "They headed to the local hangout, shared some snacks, " +
      "and then they said a night like this will never come to an end; (they had 8 am's the next day)";
  }

  story.textContent = storyText;
  story.style.visibility = "visible";
}

generateBtn.addEventListener("click", generateStory);
