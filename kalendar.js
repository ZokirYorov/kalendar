

const kunlar = [1,  2,  3,  4,  5,  6,  7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]


const kun = document.getElementById("content")
console.log("turi", typeof kunlar)

for (const item of kunlar) {
    const hafta = document.createElement("div")
    hafta.innerText = item
    hafta.classList.add("kun1")
    kun.appendChild(hafta)
}
const content = document.getElementById("content2")
const tableNode = document.createElement("table")
let tr = document.createElement("tr")

content.appendChild(tableNode)

for (const index in kunlar) {

    if (index % 7 === 0 && index !==0){
        tableNode.appendChild(tr)

        tr = document.createElement("tr")
    }
    const td = document.createElement("td")
    td.innerText = kunlar[index]
    td.classList.add("td")
    tr.appendChild(td)
    tr.classList.add("tr")
    tableNode.appendChild(tr)
}
