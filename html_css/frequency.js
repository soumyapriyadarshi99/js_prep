function countFrequency(name) {
  const trimmedName = name?.trim();
  let mapObj = {};
  for (let i = 0; i < trimmedName?.length; i++) {
    let currentCharacter = trimmedName[i];
    if (mapObj[currentCharacter]) {
      mapObj[currentCharacter] = mapObj[currentCharacter] + 1;
    } else {
      mapObj[currentCharacter] = 1;
    }
  }
  console.log(mapObj);
}
countFrequency(" ssssouumyau ");
