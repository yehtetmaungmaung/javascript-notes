import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";

const sql = postgres({});

const rows = await sql`SELECT * FROM names`;

rows.forEach((obj) => {
  console.log(obj.name);
});