var Grocery = /** @class */ (function () {
    function Grocery(name, type, price, description) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.description = description;
        this.allInfo = name + " " + type + " " + price + " " + description;
    }
    return Grocery;
}());
function listItem(item) {
    return "We have, " + item.description + " for " + item.price;
}
var item1 = new Grocery("Apple", "Fruit", "$1.99/lb", "Granny Smith Apples");
var item2 = new Grocery("Orange", "Fruit", "$2.25/lb", "Sweet Valencia Oranges");
var item3 = new Grocery("Potato", "Vegetable", "$.75/lb", "Idaho Potatoes");
document.body.textContent = listItem(item1) + ", " + listItem(item2) + ", " + listItem(item3);
