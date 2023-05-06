import postgres from "https://deno.land/x/postgresjs@v3.3.3/mod.js";

const sql = postgres({});

const create = async (name, address) => {
    await sql`INSERT INTO addresses
        (name, address)
    VALUES
        (${ name }, ${ address })`;
};

const findByNameOrAddressLike = async (nameOrAddress) => {
    const likePart = `%${nameOrAddress}%`;

    return await sql`SELECT * FROM addresses
        WHERE name ILIKE ${ likePart } OR address ILIKE ${ likePart }`;
};

const findAll = async() => {
    return await sql`SELECT * FROM addresses`;
}

const deleteById = async (id) => {
    await sql`DELETE FROM addresses WHERE id = ${ id }`;
};

export { create, findByNameOrAddressLike, findAll, deleteById };