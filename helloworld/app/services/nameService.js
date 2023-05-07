import {sql} from "../database/database.js";

const create = async (name) => {
  await sql`INSERT INTO names (name) VALUES (${ name })`;
};

const findAll = async () => {
  return await sql`SELECT * FROM names`;
};

const deleteById = async (id) => {
  try {
    await sql`DELETE FROM names WHERE id = ${ id }`;
  } catch (e) {
    console.log(e);
  }
}

const countNames = async () => {
  const rows = await sql`SELECT COUNT(*) AS count FROM names`;
  console.log(rows);
  return rows[0].count;
}

export { create, findAll, deleteById, countNames };