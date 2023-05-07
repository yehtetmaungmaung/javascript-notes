import {sql} from "../database/database.js";

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
    try {
        await sql`DELETE FROM addresses WHERE id = ${ id }`;
    } catch (e) {
        console.log(e);
    }
};

const countAddresses = async() => {
    const rows = await sql`SELECT COUNT(*) AS count FROM addresses`;
    console.log(rows);
    return rows[0].count;
}

export { create, findByNameOrAddressLike, findAll, deleteById, countAddresses};