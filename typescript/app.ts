let message: string = "Help me!"
console.log(message)

let episode: number = 4
console.log("This is episode: " + 4)
episode = episode + 1
console.log("Next episode: " + episode)

let favoriteOS: string
favoriteOS = "OSx"
console.log("My favorite OS is " + favoriteOS)

let milenioFalcon = function(parsecs: number): boolean {
    return parsecs < 12
}
let distance = 11
console.log(`Is ${distance} parsecs ${milenioFalcon(distance) ? 'YES' : 'NO'}`)

// =>
let call = (name: string) => console.log(`Do you copy ${name}?`)
call('R2')
