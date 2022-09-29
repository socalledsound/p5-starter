const circleSize = 50
let spacing = 2
let colors1, colors2, colors3
let xanim = 0
let count = 0

function setup() {
  createCanvas(1200, 800)

  colors1 = Array.from({length: 3000}, () => {
    return random(255)
  })

  colors2 = Array.from({length: 3000}, () => {
    return random(50, 150)
  })


  colors3 = Array.from({length: 3000}, () => {
    return [random(170,220), random(60, 110), random(160,200), random(190,250)]
  })


}

function draw() {
  background(110,90, 220, 200)

  translate(width/2, height/2)
  rotate(xanim)
  translate(-width/2, -height/2)
  for(let x = 0; x < width/(circleSize/2); x++){
    for(let y = 0; y < height/(circleSize/2); y++){
      const n = map(noise(x * 100, y * 100), 0, 1, -100, 100)
      //spacing -= n/1000
      fill(colors1[count])
      noisyCircle(x * circleSize + spacing + 100, y * circleSize + spacing, circleSize, xanim)
      fill(colors2[count])
      noisyCircle(x * circleSize + spacing + 100, y * circleSize + spacing, circleSize/2, xanim)
      fill(colors3[count])
      noisyCircle(x * circleSize + spacing + 100, y * circleSize + spacing, circleSize/4, xanim)
      count++
    }
  }
  xanim+=0.001
  count = 0
  //stroke(20)
  //strokeWeight(6)
  //circle(400, 300, 50)
}

function noisyCircle(x, y, r, inc){

  const circlePoints = Array.from({length: 300}, (pt, idx) => {
    const res = 0.002
    const ptx = x + r * cos(idx) * 0.7
    const pty = y + r * sin(idx) * 0.7
    //const n = map(noise(x * res + xAnim, y * res), 0, 1, -scale, scale)
    const n = map(noise(ptx * res + 0, pty * res),0, 1, -200, 200)
    return {
      x : ptx + n,
      y: pty + n
    }
  })

      
      //noFill()
      beginShape()
      circlePoints.forEach((pt, i) => {
        stroke(i % 50)
        strokeWeight(1)
        vertex(pt.x, pt.y)
      })

    endShape()

}