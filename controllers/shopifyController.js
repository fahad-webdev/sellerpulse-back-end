const axios = require("axios");
const catchAsync = require("../utils/catchAsync");

// Connect Shopify store
const connectShopifyStore = catchAsync(async (req, res) => {
  const { API_key, API_Token, URL } = req.body;
  const API_version = process.env.API_version; // Use version from .env

  if (!API_key || !API_Token || !URL) {
    return res.status(400).json({ message: "Missing required credentials" });
  }

  // Test credentials by making a sample API call
  const shopifyUrl = `https://${URL}/admin/api/${API_version}/products.json`;

  try {
    await axios.get(shopifyUrl, {
      auth: {
        username: API_key,
        password: API_Token,
      },
    });

    // Save credentials in session
    req.session.shopify = { API_key, API_Token, API_version, URL };
    res.status(200).json({ message: "Store connected successfully" });
  } catch (error) {
    console.error("Error connecting store:", error.message);
    res.status(401).json({ message: "Invalid credentials or URL" });
  }
});

module.exports = { connectShopifyStore };
