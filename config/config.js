module.exports = {

    magento: {
        url:  process.env.MAGENTO_URL || 'http://mag25.loc/rest/',
        storeId: process.env.MAGENTO_STORE_ID || 1,
        currencyCode: process.env.MAGENTO_CURRENCY_CODE || 'USD',
        username: "admin",
        password: "a111111"
      },
}