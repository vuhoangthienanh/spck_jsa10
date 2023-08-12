async function Name() {
    let listOfName = "";
    const jsonName = await {
        "foodInfo": [
            {
                "name": "Burger",
                "price": "60.000",
                "image": "https://tse2.mm.bing.net/th?id=OIP.-Oeg-0y23meUoOHTZ9CwMgHaE8&pid=Api&P=0"
            },
            {
                "name": "Fried Chicken",
                "price": "30.000",
                "image": "https://tse1.mm.bing.net/th?id=OIP.QLfc9a8KTkUujA7-1bku0AHaFj&pid=Api&P=0"
            },
            {
                "name": "Pizza",
                "price": "120.000",
                "image": "https://tse1.mm.bing.net/th?id=OIP.HAu8l9ToJmaNvUVYqmDe2AHaE8&pid=Api&P=0"
            },
            {
                "name": "Ice Cream",
                "price": "12.000",
                "image": "https://tse4.mm.bing.net/th?id=OIP._xwTuw8WFnoy7ZmFi1zBMQHaNK&pid=Api&P=0"
            },
            {
                "name": "Spaghetti",
                "price": "40.000",
                "image": "https://tse3.mm.bing.net/th?id=OIP.HhwZhOFMAoeeVhwA8eoLvAHaE8&pid=Api&P=0"
            },
            {
                "name": "Sausage",
                "price": "8.000",
                "image": "https://tse2.mm.bing.net/th?id=OIP.2QpJkqpCl023oZqZIwnSsAHaE1&pid=Api&P=0"
            }
        ]
    }
    const jsonData = await jsonName.json();
    for (let i = 0; i < jsonData.foodInfo.length; i++) {
        listOfName += jsonData.foodInfo[i].name;
    }
}

async function NameList() {
    let list = await Name();
    console.log(list);
}

NameList()




function addDivsToWrapper() {
    let wrapperDiv = document.getElementById("wrapper");


    for (let i = 0; i < 10; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        newDiv.style.backgroundImage = 
        wrapperDiv.appendChild(newDiv);
    }
}
addDivsToWrapper();
