import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();

const router = new Router();

const requestParamId = ({ request, response }) => {
    if (request.url.searchParams.has("id")) {
        response.body = request.url.searchParams.get("id");
    } else {
        response.body = "Not defined";
    }
};

router.get("/", requestParamId);
app.use(router.routes());
app.listen({ port: 7777 });