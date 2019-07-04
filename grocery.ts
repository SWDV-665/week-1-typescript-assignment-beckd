class Grocery {
    allInfo: string;
    constructor(public name: string, public type: string, public price: string, public description: string) {
        this.allInfo = name + " " + type + " " + price + " " + description;
    }
}

interface Item {
    name: string;
    type: string;
    price: string;
    description: string;
}

function listItem(item: Item,) {
    return "We have, " + item.description + " for " + item.price;

}

let item1 = new Grocery("Apple", "Fruit", "$1.99/lb", "Granny Smith Apples");

let item2 = new Grocery("Orange", "Fruit", "$2.25/lb", "Sweet Valencia Oranges");

let item3 = new Grocery("Potato", "Vegetable", "$.75/lb", "Idaho Potatoes");

document.body.textContent = listItem(item1) + ", " + listItem(item2) + ", " + listItem(item3);