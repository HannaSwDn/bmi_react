export const bmiCalculation = (weight, height, method) => {
  parseFloat(weight)
  parseFloat(height)
  let bmi
  let finalBmi

  weight = isNaN(weight) ? 0 : weight
  height = isNaN(height) ? 0 : height

  // set BMI message
  const setBMIMessage = (finalBmi) => {
    if (finalBmi < 18.5) {
      return 'Underweight'
    } else if (finalBmi >= 18.5 && finalBmi <= 25) {
      return 'Normal'
    } else if (finalBmi > 25 && finalBmi < 30) {
      return 'Overweight'
    } else {
      return 'Obese'
    }
  }

  // set DOM variables for input labels
  let weightLabel = document.getElementById('weightLabel')
  let heightLabel = document.getElementById('heightLabel')

  if (method == 'metric') {
    bmi = weight / (height / 100 * height / 100)
    finalBmi = bmi.toFixed(2)
    
    weightLabel.innerHTML = 'Weight(kg)'
    heightLabel.innerHTML = 'Height(cm)'
  }
  
  if (method == 'imperial') {
    bmi = (weight / (height * height)) * 703
    finalBmi = bmi.toFixed(2)

    weightLabel.innerHTML = 'Weight(lb)'
    heightLabel.innerHTML = 'Height(in)'
  }

  if (isNaN(bmi) || !isFinite(bmi) || bmi === 0) {
    return ''
  } else {
    return `BMI: ${finalBmi}, result: ${setBMIMessage(finalBmi)}`
  }
}