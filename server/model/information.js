module.exports = (sequlizeConfig, Sequelize) => {
    // set information model
    const Information = sequlizeConfig.define(
        'information',
        {
            id: {
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            kind: {
                type: Sequelize.STRING
            },
            inputTime: {
                type: Sequelize.DATE
            }, 
            amountML: {
                type: Sequelize.INTEGER
            },
            amountSleeping: {
                type: Sequelize.INTEGER
            }
        }, {
            timestamps: false
        }
    );
    return Information;
};