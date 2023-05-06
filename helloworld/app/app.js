import * as addressService from "./services/addressService.js";

await addressService.create("Donald Duck", "Duckburg");
await addressService.create("Daisy Duck", "Duckburg");

let result = await addressService.findByNameOrAddressLike("daisy");
console.log(result);

result = await addressService.findByNameOrAddressLike("duckb");
console.log(result);