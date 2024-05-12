function convert1(){
    const cmVal = Number(document.getElementById("input").value)
    const inchVal = cmVal/33.8
    const result = document.getElementById("result")
    result.innerHTML = inchVal.toFixed(3) + "farenhite"
  }
  function convert2(){
    const cmVal = Number(document.getElementById("input").value)
    const inchVal = cmVal*33.8
    const result = document.getElementById("result").innerHTML = inchVal.toFixed(3) + " celcius"

  }