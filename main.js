// ---------------------------------------------------------------------------
// data declarations

const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
];

const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "lawncare"
];

const freelancerOne = getFreelancer()
const freelancerTwo = getFreelancer()
const freelancers = [freelancerOne, freelancerTwo]
const container = document.querySelector(".container")

// ---------------------------------------------------------------------------
// function building

function getFreelancer(){
    const nameNum = Math.floor(Math.random()*names.length)
    const occupationNum = Math.floor(Math.random()*occupations.length)
    
    const freelancer = {
        name: names[nameNum],
        occupation: occupations[occupationNum],
        price: Math.floor(Math.random()*250),
    }
    return freelancer
}

function render(){
    // freelancers
    const html = freelancers.map((freelancer) => {
        return `<p>${freelancer.name} | ${freelancer.occupation} | $${freelancer.price}</p>`
    })
    container.innerHTML = html.join("")
    
    // average price
    let total = 0
    freelancers.forEach((freelancer) =>{
        total+=freelancer.price;
    })
    const averagePrice = document.querySelector(".averagePrice")
    const averagePriceNum = total/freelancers.length
    const rounded = averagePriceNum.toFixed(2) // rounds to 2 decimal places
    averagePrice.innerHTML = (`The average price of a freelancer right now is $${rounded}`)
}

render() // could do this another way, just called by itself to have 2 freelancers pop up by default
const interval = setInterval(() => {
    const lancer = getFreelancer()
    freelancers.push(lancer)
    render()
    if (freelancers.length === 2500){
        clearInterval(interval)
    }
},5)