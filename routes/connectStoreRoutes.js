const express = require("express");
const { connectShopifyStore } = require("../controllers/shopifyController");
const { connectEbayStore } = require("../controllers/ebayControllers");
const {connectDarazStore} = require('../controllers/darazControllers')
const router = express.Router();

// Route for connecting a Shopify store
router.post("/connect-shopify-store", connectShopifyStore);
router.post("/connect-ebay-store", connectEbayStore);
router.post("/connect-daraz-store", connectDarazStore);

module.exports = router;
