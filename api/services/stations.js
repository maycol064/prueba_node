import { pool } from "../config.js"

const query = `
  SELECT
    stations.name,
    stations.distance,
    products.price,
    products.brand,
    (products.price - (
      SELECT
        min(competitors.price)
      FROM
        stations_competitors
      JOIN
        products
        ON stations_competitors.product_id = products.id
      WHERE
        stations_competitors.station_id = stations.id
    )) AS difference
  FROM
    stations
  JOIN
    products
  ON
    stations.id = products.station_id;
`;

export const getInfo = async () => {
  try {
    connection = await pool.getConnection();
    const rows = await connection.query(query);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
