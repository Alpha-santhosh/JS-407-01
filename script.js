const container = document.getElementById("container")

function startstage() {
    container.innerHTML = ""

    var table = document.createElement("table")
    container.appendChild(table) 

    const key = document.getElementById("key").value 
    emojiList.map(e=>{
        // console.log(e.tags)
            console.log(e.emoji)
            console.log(e.aliases);
            console.log(e.description);
            
            var td = document.createElement("td")
            table.appendChild(td)
            td.classList.add("td")
            var emoji = document.createElement("tr")
            var ealiases = document.createElement("tr")
            var edescription = document.createElement("tr")
            td.appendChild(emoji)
            td.appendChild(ealiases)
            td.appendChild(edescription)
            
            emoji.innerText = e.emoji
            ealiases.innerText = e.aliases
            edescription.innerText = e.description

            emoji.classList.add("emoji")
            ealiases.classList.add("ealiases")
            edescription.classList.add("edescription")
        }
)}
startstage()

// function search() {
//     container.innerHTML = ""

//     var table = document.createElement("table")
//     container.appendChild(table) 

//     const key = document.getElementById("key").value 
//     // console.log(key);

//         emojiList.map(e=>{
//             // console.log(e.tags)
//             if(e.tags.includes(key)){
//                 console.log(e.emoji)
//                 console.log(e.aliases);
//                 console.log(e.description);
                
//                 var td = document.createElement("td")
//                 table.appendChild(td)
//                 td.classList.add("td")
//                 var emoji = document.createElement("tr")
//                 var ealiases = document.createElement("tr")
//                 var edescription = document.createElement("tr")
//                 td.appendChild(emoji)
//                 td.appendChild(ealiases)
//                 td.appendChild(edescription)
                
//                 emoji.innerText = e.emoji
//                 ealiases.innerText = e.aliases
//                 edescription.innerText = e.description
    
//                 emoji.classList.add("emoji")
//                 ealiases.classList.add("ealiases")
//                 edescription.classList.add("edescription")
//             }
//         })
//     // console.log(container);
// }

function searchkey() {
    container.innerHTML = ""

    var table = document.createElement("table")
    container.appendChild(table) 

    const key = document.getElementById("key").value 
    // console.log(key);
    
    emojiList.map(e=>{
        // console.log(e.tags)
        e.tags.map(ele=>{
            if(ele.startsWith(key)){
                console.log(e.emoji)
                console.log(e.aliases);
                console.log(e.description);
                
                var td = document.createElement("td")
                table.appendChild(td)
                td.classList.add("td")
                var emoji = document.createElement("tr")
                var ealiases = document.createElement("tr")
                var edescription = document.createElement("tr")
                td.appendChild(emoji)
                td.appendChild(ealiases)
                td.appendChild(edescription)
                
                emoji.innerText = e.emoji
                ealiases.innerText = e.aliases
                edescription.innerText = e.description
    
                emoji.classList.add("emoji")
                ealiases.classList.add("ealiases")
                edescription.classList.add("edescription")
            }
        })
    })
    // console.log(container);
}