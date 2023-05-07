// import { serve } from "https://deno.land/std@0.171.0/http/server.ts";
// import { configure, renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
// import * as nameService from "./services/nameService.js";

// configure({
//   views: `${Deno.cwd()}/views/`,
// });

// const responseDetails = {
//   headers: { "Content-Type": "text/html;charset=UTF-8" },
// };

// const redirectTo = (path) => {
//   return new Response("-", {
//     status: 303,
//     headers: {
//       "Location": path,
//     },
//   });
// };

// const listNames = async (request) => {
//   const data = {
//     names: await nameService.findAll(),
//     count: await nameService.countNames(),
//   };

//   return new Response(await renderFile("name.eta", data), responseDetails);
// };

// const addName = async (request) => {
//   const formData = await request.formData();
//   const name = formData.get("name");
//   await nameService.create(name);

//   return redirectTo("/names");
// };


// const deleteName = async (request) => {
//   const url = new URL(request.url);
//   const parts = url.pathname.split("/");
//   const id = parts[2];
//   await nameService.deleteById(id);
//   return redirectTo("/names");
// }

// const handleRequest = async (request) => {
//   const url = new URL(request.url);
//   if (request.method === "GET" && url.pathname === "/names") {
//     return await listNames(request);

//   } else if (request.method === "POST" && url.pathname.startsWith("/names/") && url.pathname.endsWith("/delete")) {
//     return await deleteName(request);

//   } else if (request.method === "POST" && url.pathname === "/names") {
//     return await addName(request);
//   }
// };

// serve(handleRequest, { port: 7777 });



import { serve } from "https://deno.land/std@0.171.0/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";
import * as addressController from "./controllers/addressController.js";

configure({
  views: `${Deno.cwd()}/views/`,
});



const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (request.method === "POST" && url.pathname.startsWith("/delete/")) {
    return await addressController.deleteAddress(request);
  } else if (request.method === "POST") {
    return await addressController.addAddress(request);
  } else {
    return await addressController.listAddresses(request);
  }
};

serve(handleRequest, { port: 7777 });