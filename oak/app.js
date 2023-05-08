import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();

const router = new Router();


const isInCalendar = ({params, response}) => {
    const date = new Date(
        Number(params.year),
        Number(params.month) - 1,
        Number(params.day),
    );

    console.log(date);
    if (
        date.getFullYear() == params.year &&
        date.getMonth() + 1 == params.month &&
        date.getDate() == params.day
    ) {
        response.body = "The day is in the calendar!";
    } else {
        response.body = "The day is not in the calendar!";
    }
};


router.get("/year/:year/month/:month/day/:day", isInCalendar)
app.use(router.routes());
app.listen({ port: 7777 });