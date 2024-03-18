let languange = "Japan";
let greeting = null;

switch (languange) {
    case "Indonesia":
        greeting = "Selamat Pagi";
        break;
    case "Japan":
        greeting = "おはようございます ";
        break;
    case "Arab":
        greeting = "صباح الخير";
        break;
    default:
        greeting = "Good Morning"
}

console.log(greeting);