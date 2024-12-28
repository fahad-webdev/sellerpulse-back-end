const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
// Route to get all Shopify products
router.route("/shopify-products").get(productController.getShopifyProducts);
// Route to get all daraz products
router.route("/daraz-products").get(productController.getDarazProducts);
//Route to get all ebay products
router.route("/ebay-products").get(productController.getEbayProducts);
//Route to get all the products
router.route("/all-products").get(productController.getAllProducts);

// Route to get a single Shopify product by ID
router.route("/products/:id").get(productController.getSingleProduct);

// Route to get a single Shopify product reviews by ID
router
  .route("/shopify-product-reviews/:id")
  .get(productController.getShopifyProductsReviews);

// Route to add a new Shopify product
router.route("/add-shopify-product").post(productController.AddShopifyProduct);

// Route to update a new Shopify product
router
  .route("/shopify-products/:id")
  .put(productController.UpdateShopifyProduct);
// Route to delete a new Shopify product
router
  .route("/delete-shopify-products/:id")
  .delete(productController.DeleteShopifyProduct);
router.route("/shopify-orders").get(productController.getShopifyOrders);

module.exports = router;
