require("dotenv").config();
const axios = require("axios");
const UserModel = require("../models/User-model");
const bcrypt = require("bcryptjs");
const catchAsync = require("../utils/catchAsync");
const products = require('../reviews');
const shopify_logo = "/public/Shopify-Logo.png";
const daraz_logo = "/public/Daraz-logo-3.png";
const ebay_logo = "/public/ebay-logo.png";
/*===========================================================
                    Get Shopify Products
===========================================================*/
const getShopifyProducts = catchAsync(async (req, res) => {
  try {
    const platformDetails = {
      shopify: {
        name: "Shopify",
        logo: shopify_logo ,
      },
    };
    // Use credentials from the session
    const { API_key, API_Token, API_version, URL } = req.session.shopify;

    if (!API_key || !API_Token || !API_version || !URL) {
      return res.status(401).json({ message: "Not connected to any store" });
    }

    const shopifyUrl = `https://${URL}/admin/api/${API_version}/products.json`;

    const response = await axios.get(shopifyUrl, {
      auth: {
        username: API_key,
        password: API_Token,
      },
    });

    const products = response.data.products.map((product) => ({
      ...product,
      platform: {
        name: platformDetails.shopify.name,
        logo: platformDetails.shopify.logo, // Correctly fetch the logo
      },
    }));
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
});

/*===========================================================
                    Get Daraz Products
===========================================================*/
const getDarazProducts = catchAsync(async (req, res) => {
  try {
    const platformDetails = {
      daraz: {
        name: "Daraz",
        logo: daraz_logo || "/default-logo.png", // Fallback to a default logo
      },
    };
    // Use credentials from the session
    const {Store_Name, API_Secret , API_key} = req.session.daraz;
    const store_name = process.env.store_name;
    const api_secret = process.env.api_secret;
    const api_key = process.env.api_key;
    if(API_key!=api_key || API_Secret!=api_secret || Store_Name!=store_name){
      return res.status(400).json({ message: "Invalid credentials" });
  }
    const darazUrl = `https://dummyjson.com/products/search?q=all`;

    const response = await axios.get(darazUrl, /*{
      auth: {
        username: API_key,
        password: API_Token,
      },
    }*/);

    const darazProducts = response.data.products.map((product) => ({
      ...product,
      platform: {
        name: platformDetails.daraz.name,
        logo: platformDetails.daraz.logo, // Correctly fetch the logo
      },
    }));
    
    res.status(200).json({ products: darazProducts });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
});
/*===========================================================
                    Get Ebay Products
===========================================================*/
const getEbayProducts = catchAsync(async (req, res) => {
  try {
    const platformDetails = {
      ebay: {
        name: "Ebay",
        logo: ebay_logo || "/default-logo.png", // Fallback to a default logo
      },
    };
    // Use credentials from the session
    const {clientId, clientSecret, access_token} = req.session.ebay;
    
    if(!clientId || !clientSecret || !access_token){
      return res.status(400).json({ message: "Invalid credentials" });
  }
    const ebayUrl = `https://dummyjson.com/products/search?q=smartphones`;//replace it with the actual ebay api

    const response = await axios.get(ebayUrl, /*{
      auth: {
        username: API_key,
        password: API_Token,
      },
    }*/);

    const ebayProducts = response.data.products.map((product) => ({
      ...product,
      platform: {
        name: platformDetails.ebay.name,
        logo: platformDetails.ebay.logo, // Correctly fetch the logo
      },
    }));
    
    res.status(200).json({ products: ebayProducts });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
});

/*===========================================================
                  Get Single Product
===========================================================*/
const getSingleProduct = catchAsync(async (req, res) => {
  const product_id = req.params.id;

  if (!product_id) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  const platformDetails = {
    shopify: {
      name: "Shopify",
      logo: shopify_logo,
      url: (session, id) =>
        `https://${session.URL}/admin/api/${session.API_version}/products/${id}.json`,
      auth: (session) => ({
        username: session.API_key,
        password: session.API_Token,
      }),
      extractData: (response) => ({
        ...response.data.product,
      }),
    },
    daraz: {
      name: "Daraz",
      logo: daraz_logo,
      url: (session, id) => `https://dummyjson.com/products/${id}`,
      auth: null, // No authentication for dummy Daraz API
      extractData: (response) => ({
        ...response.data,
      }),
    },
    ebay: {
      name: "Ebay",
      logo: ebay_logo,
      url: (session, id) => `https://dummyjson.com/products/${id}`,
      auth: null, // No authentication for dummy eBay API
      extractData: (response) => ({
        ...response.data,
      }),
    },
  };

  const connectedPlatforms = Object.keys(platformDetails).filter((platform) =>
    req.session[platform]
  );

  if (connectedPlatforms.length === 0) {
    return res.status(404).json({ message: "No platforms connected" });
  }

  const platformResponses = [];

  for (const platform of connectedPlatforms) {
    const session = req.session[platform];
    const details = platformDetails[platform];
    const url = details.url(session, product_id);

    try {
      const config = details.auth
        ? { auth: details.auth(session) }
        : {};

      const response = await axios.get(url, config);

      const productData = details.extractData(response);
      platformResponses.push({
        ...productData,
        platform: {
          name: details.name,
          logo: details.logo,
        },
      });
    } catch (error) {
      console.error(`Error fetching product from ${details.name}:`, error.message);
      platformResponses.push({
        platform: details.name,
        error: `Failed to fetch product: ${error.message}`,
      });
    }
  }

  if (platformResponses.length === 0) {
    return res.status(404).json({ message: "Product not found on any platform" });
  }

  res.status(200).json(platformResponses);
});

/*===========================================================
                  Get Shopify Product reviews
===========================================================*/
const getShopifyProductsReviews = catchAsync(async (req, res) => {
  const product_id = Number(req.params.id); // Convert ID to number
  const product = products.find((p) => p.productId === product_id);

  if (product) {
    res.status(200).json({reviews: product.reviews});
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
/*===========================================================
                     Delete Shopify Product
===========================================================*/
const DeleteShopifyProduct = catchAsync(async (req, res) => {
  try {
    // Validate session
    if (!req.session || !req.session.shopify) {
      return res.status(401).json({ message: "Session not initialized or no store connected" });
    }

    const { API_key, API_Token, API_version, URL } = req.session.shopify;

    if (!API_key || !API_Token || !API_version || !URL) {
      return res.status(401).json({ message: "Not connected to any store" });
    }

    // Validate product ID
    const product_id = Number(req.params.id); // Convert ID to number
    if (isNaN(product_id) || product_id <= 0) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    // Shopify API URL
    const shopifyUrl = `https://${URL}/admin/api/${API_version}/products/${product_id}.json`;

    // Make API request
    await axios.delete(shopifyUrl, {
      auth: {
        username: API_key,
        password: API_Token,
      },
    });

    console.log("Product deleted successfully");
    res.status(200).json({ message: "Product deleted successfully" });

  } catch (error) {
    console.error("Error deleting product:", error.response?.data || error.message);
    res.status(500).json({ message: "Error deleting product" });
  }
});
/*===========================================================
                     Add Shopify Product
===========================================================*/
const AddShopifyProduct = catchAsync(async (req, res) => {
  try {
    const { API_key, API_Token, API_version, URL } = req.session.shopify;

    if (!API_key || !API_Token || !API_version || !URL) {
      return res.status(401).json({ message: "Not connected to any store" });
    }

    const productData = req.body;

    // Check if required fields are provided
    if (!productData.title || !productData.body_html || !productData.vendor) {
      return res.status(400).json({ message: "Missing required product data" });
    }

    // Extract and format the data to send to Shopify
    const dataToSend = {
      product: {
        title: productData.title,
        body_html: productData.body_html,
        vendor: productData.vendor,
        product_type: productData.product_type,
        variants: [
          {
            inventory_quantity: productData.variants.inventory_quantity,
            price: productData.variants.price,
          },
        ],
        images: [
          {
            src: productData.image.src,  // Assuming image has src field
          },
        ],
      },
    };

    // Shopify API endpoint for adding a product
    const shopifyUrl = `https://${URL}/admin/api/${API_version}/products.json`;

    // Send the request to Shopify
    const response = await axios.post(shopifyUrl, dataToSend, {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": API_Token,
      },
    });

    // Return success response
    res.status(201).json({ message: "Product added successfully", data: response.data });
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({ message: "Error adding product" });
  }
});

/*===========================================================
                     Update Shopify Product
===========================================================*/
const UpdateShopifyProduct = catchAsync(async (req, res) => {
  try {
    const { API_key, API_Token, API_version, URL } = req.session.shopify;

    if (!API_key || !API_Token || !API_version || !URL) {
      return res.status(401).json({ message: "Not connected to any store" });
    }

    const productData = req.body;
    const productId = Number(req.params.id); // Ensure productId is passed as a URL parameter and converted to a number

    if (!productData.title || !productData.body_html || !productData.vendor) {
      return res.status(400).json({ message: "Missing required product data" });
    }

    // Prepare data for updating the product, excluding the `images` field
    const dataToSend = {
      product: {
        title: productData.title,
        body_html: productData.body_html,
        vendor: productData.vendor,
        product_type: productData.product_type, // Optional field
        variants: productData.variants, // Ensure this is provided if variants need updating
      },
    };

    // Construct Shopify API URL for the product update
    const shopifyUrl = `https://${URL}/admin/api/${API_version}/products/${productId}.json`;

    // Send PUT request to update the product
    const response = await axios.put(shopifyUrl, dataToSend, {
      auth: {
        username: API_key,
        password: API_Token,
      },
    });

    res.status(200).json({
      message: "Product updated successfully",
      data: response.data,
    });
  } catch (error) {
    console.error("Error updating product:", error.message);
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
});
/*===========================================================
                      Shopify orders
===========================================================*/
const getShopifyOrders = catchAsync(async (req, res) => {
  try {
    // Use credentials from the session
    const { API_key, API_Token, API_version, URL } = req.session.shopify;

    if (!API_key || !API_Token || !API_version || !URL) {
      return res.status(401).json({ message: "Not connected to any store" });
    }

    const shopifyUrl = `https://${URL}/admin/api/${API_version}/orders.json`;

     const response = await axios.get(shopifyUrl,{
       auth: {
         username: API_key,
         password: API_Token,
       },
     });

     const product = response.data.product;
    res.status(200).json({ product });
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
});

/*===========================================================
                    Get ALL Products
===========================================================*/
const getAllProducts = catchAsync(async (req, res) => {
  try {
    // Platform-specific metadata
    const platformDetails = {
      daraz: {
        name: "Daraz",
       logo: daraz_logo, 
      },
      shopify: {
        name: "Shopify",
        logo: shopify_logo, 
      },
      ebay:{
        name:"ebay",
        logo:ebay_logo,
      }
    };

    // Initialize an array to hold all the products
    let allProducts = [];

    // Check for Daraz connection and fetch products if connected
    if (req.session.daraz) {
      const { Store_Name, API_Secret, API_key } = req.session.daraz;
      const darazUrl = `https://dummyjson.com/products/search?q=all`;
      try {
        const response = await axios.get(darazUrl);
        const darazProducts = response.data.products.map((product) => ({
          ...product,
          platform: platformDetails.daraz, // Add Daraz platform details
          storeName: Store_Name,
        }));
        allProducts = allProducts.concat(darazProducts);
      } catch (error) {
        console.error("Error fetching Daraz products:", error.message);
      }
    }

    // Check for Shopify connection and fetch products if connected
    if (req.session.shopify) {
      const { API_key, API_Token, API_version, URL } = req.session.shopify;
      const shopifyUrl = `https://${URL}/admin/api/${API_version}/products.json`;
      try {
        const response = await axios.get(shopifyUrl, {
          auth: {
            username: API_key,
            password: API_Token,
          },
        });
        const shopifyProducts = response.data.products.map((product) => ({
          id: product.id,
          title: product.title,
          body_html: product.body_html,
          product_type: product.product_type,
          vendor: product.vendor,
          price: product.variants[0].price,
          inventory_quantity: product.variants[0].inventory_quantity,
          image: product.image?.src,  
          platform: platformDetails.shopify, // Add Shopify platform details
          storeName: URL,
        }));
        allProducts = allProducts.concat(shopifyProducts);
      } catch (error) {
        console.error("Error fetching Shopify products:", error.message);
      }
    }
    // Check for ebay connection and fetch products if connected
    if (req.session.ebay) {
      const { clientId,clientSecret,access_token } = req.session.ebay;
      const ebayUrl = `https://dummyjson.com/products/search?q=smartphones`;
      try {
        const response = await axios.get(ebayUrl);
        const ebayProducts = response.data.products.map((product) => ({
          ...product,
          platform: platformDetails.ebay, // Add ebay platform details
        }));
        allProducts = allProducts.concat(ebayProducts);
      } catch (error) {
        console.error("Error fetching Ebay products:", error.message);
      }
    }

    // If no products were fetched, return a message
    if (allProducts.length === 0) {
      return res.status(404).json({ message: "No products found from connected stores" });
    }

    // Return all combined products
    res.status(200).json({ products: allProducts });
  } catch (error) {
    console.error("Error fetching all products:", error.message);
    res.status(500).json({ message: "Error fetching all products" });
  }
});

module.exports = {
  getShopifyProducts,
  getDarazProducts,
  getEbayProducts,
  getAllProducts,
  getSingleProduct,
  AddShopifyProduct,
  DeleteShopifyProduct,
  UpdateShopifyProduct,
  getShopifyOrders,
  getShopifyProductsReviews
};
