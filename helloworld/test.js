import { serve } from "https://deno.land/std@0.171.0/http/server.ts";

let count = 0;

const responseDetails = {
    headers: {
        "Content-Type": "text/html;charset=UTF-8",
    },
};

const handleRequest = (request) => {
    count++;
    const content = `<html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Count = ${count}</h1>
        </body>
    </html>`

    return new Response(content, responseDetails);
};
serve(handleRequest, { port: 8080 });