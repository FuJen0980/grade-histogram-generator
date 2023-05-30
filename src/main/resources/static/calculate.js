var addNewGradeButton = document.getElementsByClassName('button')[0]

var boundaries = [
  document.getElementsByClassName('boundaryInputBox')[0],
  document.getElementsByClassName('boundaryInputBox')[1],
  document.getElementsByClassName('boundaryInputBox')[2],
  document.getElementsByClassName('boundaryInputBox')[3],
  document.getElementsByClassName('boundaryInputBox')[4],
  document.getElementsByClassName('boundaryInputBox')[5],
  document.getElementsByClassName('boundaryInputBox')[6],
  document.getElementsByClassName('boundaryInputBox')[7],
  document.getElementsByClassName('boundaryInputBox')[8],
  document.getElementsByClassName('boundaryInputBox')[9],
  document.getElementsByClassName('boundaryInputBox')[10],
  document.getElementsByClassName('boundaryInputBox')[11]
]

var grades = [];

var currentAPlusPercentage = 0;
var currentAPlusCount = 0;  
var currentAPercentage = 0;
var currentACount = 0;
var currentAMinusPercentage = 0;
var currentAMinusCount = 0;
var currentBPlusPercentage = 0;
var currentBPlusCount = 0;
var currentBPercentage = 0;
var currentBCount = 0;
var currentBMinusPercentage = 0;
var currentBMinusCount = 0;
var currentCPlusPercentage = 0;
var currentCPlusCount = 0;
var currentCPercentage = 0;
var currentCCount = 0;
var currentCMinusPercentage = 0;
var currentCMinusCount = 0;
var currentDPercentage = 0;
var currentDCount = 0;
var currentFPercentage = 0;
var currentFCount = 0;

function getGrade(grade) {
  for (var i = 0; i < boundaries.length; i++) {
    var gradeValue = parseFloat(boundaries[i].value);
    if (grade >= gradeValue) {
      return i;
    }
  }
}

function updateProgressBar(percentage, i, currentCount) {
  var progressBar = document.getElementsByClassName("progressBar")[i];
  progressBar.style.paddingRight = 5 + 'px';
  progressBar.style.width = percentage + '%';
  progressBar.textContent = currentCount;
}

addNewGradeButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  var newGrade = document.getElementById('newGrade').value;
  var values = boundaries.map(function(element) {
    return parseFloat(element.value);
  })
  var isEmpty = values.some(function(value) {
    return isNaN(value);
  })
  if (isEmpty) {
    window.alert("Please finish entering all values for grade boundaries")
  }

  if(parseFloat(newGrade) > parseFloat(boundaries[0].value) || parseFloat(newGrade) < 0) {
    window.alert("Please enter a valid value")
  }
  else {
    if(getGrade(parseFloat(newGrade)) == 0 || getGrade(parseFloat(newGrade)) == 1) {
      console.log(getGrade(parseFloat(newGrade)));
      if(currentAPlusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentAPlusPercentage += 1;
        currentAPlusCount += 1;
        updateProgressBar(currentAPlusPercentage, 0, currentAPlusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 2) {
      if(currentAPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentAPercentage += 1;
        currentACount += 1;
        updateProgressBar(currentAPercentage, 1, currentACount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 3) {
      if(currentAMinusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentAMinusPercentage += 1;
        currentAMinusCount += 1;
        updateProgressBar(currentAMinusPercentage, 2, currentAMinusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 4) {
      if(currentBPlusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentBPlusPercentage += 1;
        currentBPlusCount += 1;
        updateProgressBar(currentBPlusPercentage, 3, currentBPlusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 5) {
      if(currentBPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentBPercentage += 1;
        currentBCount += 1;
        updateProgressBar(currentBPercentage, 4, currentBCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 6) {
      if(currentBMinusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentBMinusPercentage += 1;
        currentBMinusCount += 1;
        updateProgressBar(currentBMinusPercentage, 5, currentBMinusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 7) {
      if(currentCPlusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentCPlusPercentage += 1;
        currentCPlusCount += 1;
        updateProgressBar(currentCPlusPercentage, 6, currentCPlusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 8) {
      if(currentCPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentCPercentage += 1;
        currentCCount += 1;
        updateProgressBar(currentCPercentage, 7, currentCCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 9) {
      if(currentCMinusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentCMinusPercentage += 1;
        currentCMinusCount += 1;
        updateProgressBar(currentCMinusPercentage, 8, currentCMinusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 10) {
      if(currentDPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentDPercentage += 1;
        currentDCount += 1;
        updateProgressBar(currentDPercentage, 9, currentDCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 11 || parseFloat(newGrade) < parseFloat(boundaries[11].value)) {
      if(currentFPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        grades.push(newGrade);
        currentFPercentage += 1;
        currentFCount += 1;
        updateProgressBar(currentFPercentage, 10, currentFCount);
      }
    }
  }
})

var delayTimer;
function validateBoundaries() {
  clearTimeout(delayTimer);
  delayTimer = setTimeout(function() {
    var values = boundaries.map(function(element) {
        return parseFloat(element.value);
    });
    var isValid = true;
    if(parseFloat(boundaries[11].value) < 0) {
      isValid = false;
    }
    for (var i = 0; i < values.length - 1; i++) {
      if (values[i] <= values[i + 1]) {
        isValid = false;
        break;
      }
    }
    if (!isValid) {
      window.alert('Invalid boundaries. Please ensure the values are in the correct order.');
      return isValid;
    }
    return isValid;
  }, 2000);
}
boundaries.forEach(function(element) {
  element.addEventListener('change', validateBoundaries);
  element.addEventListener('blur', validateBoundaries);
  element.addEventListener('change', updateHistogram);
  element.addEventListener('blur', updateHistogram);
});

function updateGradeCount(grade) {
  var newGrade = grade;
  var values = boundaries.map(function(element) {
    return parseFloat(element.value);
  })
  var isEmpty = values.some(function(value) {
    return isNaN(value);
  })
  if (isEmpty) {
    window.alert("Please finish entering all values for grade boundaries")
  }

  if(parseFloat(newGrade) > parseFloat(boundaries[0].value) || parseFloat(newGrade) < 0) {
    window.alert("Please enter a valid value")
  }
  else {
    if(getGrade(parseFloat(newGrade)) == 0 || getGrade(parseFloat(newGrade)) == 1) {
      console.log(getGrade(parseFloat(newGrade)));
      if(currentAPlusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentAPlusPercentage += 1;
        currentAPlusCount += 1;
        updateProgressBar(currentAPlusPercentage, 0, currentAPlusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 2) {
      if(currentAPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentAPercentage += 1;
        currentACount += 1;
        updateProgressBar(currentAPercentage, 1, currentACount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 3) {
      if(currentAMinusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentAMinusPercentage += 1;
        currentAMinusCount += 1;
        updateProgressBar(currentAMinusPercentage, 2, currentAMinusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 4) {
      if(currentBPlusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentBPlusPercentage += 1;
        currentBPlusCount += 1;
        updateProgressBar(currentBPlusPercentage, 3, currentBPlusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 5) {
      if(currentBPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentBPercentage += 1;
        currentBCount += 1;
        updateProgressBar(currentBPercentage, 4, currentBCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 6) {
      if(currentBMinusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentBMinusPercentage += 1;
        currentBMinusCount += 1;
        updateProgressBar(currentBMinusPercentage, 5, currentBMinusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 7) {
      if(currentCPlusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentCPlusPercentage += 1;
        currentCPlusCount += 1;
        updateProgressBar(currentCPlusPercentage, 6, currentCPlusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 8) {
      if(currentCPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentCPercentage += 1;
        currentCCount += 1;
        updateProgressBar(currentCPercentage, 7, currentCCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 9) {
      if(currentCMinusPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentCMinusPercentage += 1;
        currentCMinusCount += 1;
        updateProgressBar(currentCMinusPercentage, 8, currentCMinusCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 10) {
      if(currentDPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentDPercentage += 1;
        currentDCount += 1;
        updateProgressBar(currentDPercentage, 9, currentDCount);
      }
    }
    if(getGrade(parseFloat(newGrade)) == 11 || parseFloat(newGrade) < parseFloat(boundaries[11].value)) {
      if(currentFPercentage == 100) {
        window.alert("You cannot enter any more students");
      }
      else {
        currentFPercentage += 1;
        currentFCount += 1;
        updateProgressBar(currentFPercentage, 10, currentFCount);
      }
    }
  }
}

function updateHistogram() {
  if(grades.length != 0) {
    currentAPlusPercentage = 0;
    currentAPlusCount = 0;  
    currentAPercentage = 0;
    currentACount = 0;
    currentAMinusPercentage = 0;
    currentAMinusCount = 0;
    currentBPlusPercentage = 0;
    currentBPlusCount = 0;
    currentBPercentage = 0;
    currentBCount = 0;
    currentBMinusPercentage = 0;
    currentBMinusCount = 0;
    currentCPlusPercentage = 0;
    currentCPlusCount = 0;
    currentCPercentage = 0;
    currentCCount = 0;
    currentCMinusPercentage = 0;
    currentCMinusCount = 0;
    currentDPercentage = 0;
    currentDCount = 0;
    currentFPercentage = 0;
    currentFCount = 0;

    for(var i = 0; i < 11; i++) {
      var progressBar = document.getElementsByClassName("progressBar")[i];
      progressBar.style.paddingRight = 13 + 'px';
      progressBar.style.width = 0 + '%';
      progressBar.textContent = 0;
    }
    for(var i = 0; i < grades.length; i++) {
      updateGradeCount(grades[i]);
    }
  }
}