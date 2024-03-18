const IbuKota = new Map([
    ["Jakarta", "Indonesia"],
    ["Tokyo", "Japan"],
    ["Washington DC", "USA"],
    ["Madrid", "Spain"]
])
console.log(IbuKota.size);
console.log(IbuKota.get("Madrid"));
IbuKota.set("Beijing", "China");
console.log(IbuKota.size);
console.log(IbuKota);

