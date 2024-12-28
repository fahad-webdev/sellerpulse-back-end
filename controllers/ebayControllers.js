const axios = require('axios');
const catchAsync = require('../utils/catchAsync'); // Your custom error handling
require('dotenv').config();

// Function to connect eBay store
const connectEbayStore = catchAsync(async (req, res) => {
  const { clientId, clientSecret, refreshToken } = req.body;

  if (!clientId || !clientSecret || !refreshToken) {
    return res.status(400).json({ message: "Missing required credentials" });
  }

  // Define eBay OAuth API endpoint
  const ebayAuthUrl = 'https://api.ebay.com/identity/v1/oauth2/token';

  try {
    // Make a POST request to eBay's OAuth endpoint to get the access token using the refresh token
    const response = await axios.post(
      ebayAuthUrl,
      `grant_type=refresh_token&refresh_token=${refreshToken}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        },
      }
    );

    // Extract the access token from the response
    const { access_token } = response.data;

    if (!access_token) {
      return res.status(401).json({ message: "Failed to retrieve access token" });
    }

    // Test the credentials by making a sample request to eBay's API
    const ebayTestUrl = 'https://api.ebay.com/sell/inventory/v1/inventory_item';
    const productResponse = await axios.get(ebayTestUrl, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

    // Save eBay credentials in the session (optional)
    req.session.ebay = {
      clientId,
      clientSecret,
      refreshToken,
      access_token,
    };

    // Respond with success message and optionally return API response
    res.status(200).json({
      message: "eBay store connected successfully",
      products: productResponse.data,
    });

  } catch (error) {
    console.error("Error connecting eBay store:", error.message, error.response?.data || error);
    res.status(401).json({
      message: "Invalid eBay credentials or API request failed",
      error: error.response?.data || error.message,
    });
  }
});

module.exports = { connectEbayStore };
