module.exports = (connection, Sequelize) => {
    const config = connection.define('promize_config', {
        domain_name: Sequelize.TEXT,
        license_key: Sequelize.TEXT,
        store_hash: Sequelize.TEXT,
        access_token: Sequelize.TEXT,
        status: Sequelize.BOOLEAN,
    });
    return config;
}