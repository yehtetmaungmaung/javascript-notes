import { serve } from "https://deno.land/std@0.171.0/http/server.ts";
import { configure, renderFile } from "https://deno.land/x/eta@v2.0.0/mod.ts";

configure({
  views: `${Deno.cwd()}/views/`,
});

const responseDetails = {
  headers: { "Content-Type": "text/html;charset=UTF-8" },
};

const data = {
  names: [],
};

const redirectTo = (path) => {
  return new Response(`Redirecting to ${path}.`, {
    status: 303,
    headers: {
      "Location": path,
    },
  });
};

const addName = async (request) => {
  const formData = await request.formData();
  data.names.push(formData.get("name"));
};

const handleRequest = async (request) => {
  if (request.method === "POST") {
    await addName(request);
    return redirectTo(request.url);
  }

  return new Response(await renderFile("index.eta", data), responseDetails);
};

serve(handleRequest, { port: 7777 });
