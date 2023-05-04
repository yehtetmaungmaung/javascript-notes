import { serve } from "https://deno.land/std@0.171.0/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const data = {
  people: [],
};

const addPerson = async (request) => {
  const formData = await request.formData();

  const person = {
    name: formData.get("name"),
    address: formData.get("address"),
  };

  data.people.push(person);
};

const handleRequest = async (request) => {
  if (request.method === "POST") {
    await addPerson(request);
  }

  return new Response(await renderFile("index.eta", data), responseDetails);
};

serve(handleRequest, { port: 7777 });