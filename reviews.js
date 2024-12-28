const products = [
  {
    productId: 8758542500056,
    reviews: [
      { reviewer: "Hadi", rating: 4, comment: "Nice fit and style." },
      { reviewer: "Laila", rating: 5, comment: "Superb quality! Highly recommend." },
      { reviewer: "Arman", rating: 3, comment: "It's okay, not great." },
      { reviewer: "Zara", rating: 4, comment: "Good value for money." },
      { reviewer: "Farhan", rating: 5, comment: "Excellent jacket, very comfortable." },
      { reviewer: "Aisha", rating: 2, comment: "Not as good as expected." },
      { reviewer: "Hamid", rating: 4, comment: "Fits well and looks good." },
      { reviewer: "Sara", rating: 3, comment: "Decent, but not amazing." },
      { reviewer: "Jamal", rating: 5, comment: "Perfect fit and great quality!" },
      { reviewer: "Noor", rating: 4, comment: "Stylish and comfortable." },
      { reviewer: "Rahim", rating: 2, comment: "Expected better material." },
      { reviewer: "Sana", rating: 5, comment: "Exceeded my expectations!" },
      { reviewer: "Kasim", rating: 3, comment: "Average quality, not bad." },
      { reviewer: "Nadia", rating: 4, comment: "Looks great, feels good." },
      { reviewer: "Sultan", rating: 5, comment: "Highly recommend this jacket." },
      { reviewer: "Layla", rating: 3, comment: "Not bad, but overpriced." },
      { reviewer: "Taha", rating: 4, comment: "Great for casual wear." },
      { reviewer: "Mira", rating: 5, comment: "Love the style and fit!" },
      { reviewer: "Adil", rating: 2, comment: "Poor stitching quality." },
      { reviewer: "Hiba", rating: 4, comment: "Very trendy and comfortable." },
      { reviewer: "Usman", rating: 3, comment: "It's okay, could be better." },
      { reviewer: "Rashida", rating: 5, comment: "Perfect jacket for all seasons." },
      { reviewer: "Faisal", rating: 4, comment: "Looks sharp and stylish." },
      { reviewer: "Nargis", rating: 3, comment: "Average material quality." },
      { reviewer: "Zahir", rating: 5, comment: "Totally worth it!" },
      { reviewer: "Amal", rating: 4, comment: "Nice product, would buy again." },
      { reviewer: "Sameer", rating: 2, comment: "Not what I was expecting." },
      { reviewer: "Fatima", rating: 5, comment: "Amazing jacket! Highly recommend." },
      { reviewer: "Hassan", rating: 3, comment: "Decent but not impressive." },
      { reviewer: "Aliya", rating: 4, comment: "Good jacket for daily wear." },
      { reviewer: "Bilal", rating: 5, comment: "Very comfortable and stylish." },
      { reviewer: "Khadija", rating: 2, comment: "The fit was disappointing." },
      { reviewer: "Rauf", rating: 4, comment: "Great design, comfortable fit." },
      { reviewer: "Zain", rating: 5, comment: "Superb! Love wearing it." },
      { reviewer: "Amina", rating: 3, comment: "Okay, but could be cheaper." },
      { reviewer: "Tariq", rating: 4, comment: "Solid quality and fit." },
      { reviewer: "Samina", rating: 5, comment: "Very happy with my purchase!" },
      { reviewer: "Fahim", rating: 2, comment: "Material feels cheap." },
      { reviewer: "Haleema", rating: 4, comment: "Stylish and affordable." },
      { reviewer: "Mubarak", rating: 3, comment: "Not bad for the price." },
      { reviewer: "Naila", rating: 5, comment: "Love it! Perfect in every way." },
      { reviewer: "Omar", rating: 4, comment: "Good for casual outings." },
      { reviewer: "Bushra", rating: 3, comment: "It's fine, but nothing great." },
      { reviewer: "Salman", rating: 5, comment: "Great jacket! Worth every penny." },
      { reviewer: "Asma", rating: 4, comment: "Fits well, looks great." },
      { reviewer: "Rayan", rating: 2, comment: "Not durable at all." },
      { reviewer: "Nargis", rating: 4, comment: "Good quality, worth the price." },
      { reviewer: "Imran", rating: 5, comment: "Best jacket I've ever owned!" },
      { reviewer: "Zeba", rating: 3, comment: "Average product, nothing special." },
      { reviewer: "Tahir", rating: 4, comment: "Good choice for everyday wear." },
    ],
  },
  {
    productId: 8513649443032,
    reviews: [
      { reviewer: "Alice", rating: 4, comment: "Loved it!" },
      { reviewer: "Bob", rating: 3, comment: "Could be better." },
      {
        reviewer: "Amina",
        rating: 5,
        comment: "Loved this product! Highly recommend.",
      },
      {
        reviewer: "Omar",
        rating: 3,
        comment: "It's decent but could be improved.",
      },
      {
        reviewer: "Fatima",
        rating: 5,
        comment: "Perfect! Exceeded my expectations.",
      },
      { reviewer: "Hassan", rating: 2, comment: "Not as good as I expected." },
      {
        reviewer: "Zainab",
        rating: 4,
        comment: "Really liked it, though there's room for improvement.",
      },
      {
        reviewer: "Ali",
        rating: 1,
        comment: "Very disappointing. Wouldn't recommend.",
      },
      { reviewer: "Yusuf", rating: 4, comment: "Good quality for the price." },
      {
        reviewer: "Layla",
        rating: 3,
        comment: "It’s okay, but it could be better.",
      },
      {
        reviewer: "Ibrahim",
        rating: 5,
        comment: "Fantastic quality! Worth the price.",
      },
      {
        reviewer: "Mariam",
        rating: 3,
        comment: "Decent product, but expected more.",
      },
      {
        reviewer: "Ahmed",
        rating: 2,
        comment: "Not happy with this product, poor quality.",
      },
      {
        reviewer: "Khadijah",
        rating: 4,
        comment: "Pretty good. Some minor flaws.",
      },
      { reviewer: "Zayd", rating: 5, comment: "Great! Perfect for my needs." },
      {
        reviewer: "Safa",
        rating: 2,
        comment: "The product didn't meet my expectations.",
      },
      {
        reviewer: "Rashid",
        rating: 3,
        comment: "Okay product, but nothing special.",
      },
      {
        reviewer: "Nadia",
        rating: 5,
        comment: "Absolutely love it! Would buy again.",
      },
      {
        reviewer: "Tariq",
        rating: 4,
        comment: "Good product overall, but could use some updates.",
      },
      {
        reviewer: "Salma",
        rating: 1,
        comment: "Terrible! Broke after one use.",
      },
      {
        reviewer: "Bilal",
        rating: 5,
        comment: "Excellent! Very satisfied with the purchase.",
      },
      {
        reviewer: "Huda",
        rating: 3,
        comment: "It works fine, but it's not extraordinary.",
      },
      {
        reviewer: "Khalid",
        rating: 4,
        comment: "Very good, I would recommend it.",
      },
      { reviewer: "Zain", rating: 2, comment: "It didn’t work as expected." },
      { reviewer: "Muneeb", rating: 5, comment: "Great value for money!" },
      {
        reviewer: "Sumaiya",
        rating: 4,
        comment: "Very good product, but a little overpriced.",
      },
      {
        reviewer: "Saif",
        rating: 5,
        comment: "Amazing! One of the best purchases I’ve made.",
      },
      {
        reviewer: "Nabil",
        rating: 3,
        comment: "It's alright, nothing special.",
      },
      {
        reviewer: "Khadija",
        rating: 4,
        comment: "Good quality, happy with it.",
      },
      {
        reviewer: "Fahad",
        rating: 1,
        comment: "Waste of money, really bad experience.",
      },
      {
        reviewer: "Zuhair",
        rating: 4,
        comment: "Good product, would buy again.",
      },
      {
        reviewer: "Samira",
        rating: 2,
        comment: "Not worth it, could be better.",
      },
      {
        reviewer: "Imran",
        rating: 3,
        comment: "Average product, decent quality.",
      },
      {
        reviewer: "Muneera",
        rating: 5,
        comment: "Exceeded my expectations! Very happy with it.",
      },
      {
        reviewer: "Asim",
        rating: 4,
        comment: "Good product, but needs minor improvements.",
      },
      { reviewer: "Rida", rating: 3, comment: "It’s okay, not great though." },
      {
        reviewer: "Omar",
        rating: 5,
        comment: "Totally worth the money, great experience.",
      },
      {
        reviewer: "Bushra",
        rating: 4,
        comment: "Really good, but not perfect.",
      },
      {
        reviewer: "Fahima",
        rating: 5,
        comment: "Amazing! Very happy with this product.",
      },
      {
        reviewer: "Sami",
        rating: 3,
        comment: "The product is decent but feels a bit cheap.",
      },
      {
        reviewer: "Nashit",
        rating: 4,
        comment: "Good value for money. Satisfied overall.",
      },
      {
        reviewer: "Rania",
        rating: 5,
        comment: "Excellent quality. Exceeded my expectations.",
      },
      {
        reviewer: "Jamil",
        rating: 2,
        comment: "I had high expectations, but was let down.",
      },
      {
        reviewer: "Amira",
        rating: 5,
        comment: "Love it! Exactly what I was looking for.",
      },
      {
        reviewer: "Yasir",
        rating: 3,
        comment: "It works fine but could have been better.",
      },
      {
        reviewer: "Kareem",
        rating: 4,
        comment: "Good product overall, no issues.",
      },
      {
        reviewer: "Hafsa",
        rating: 5,
        comment: "Very satisfied with my purchase. Great quality!",
      },
      {
        reviewer: "Rafi",
        rating: 3,
        comment: "It’s okay, not too bad, but nothing amazing.",
      },
      { reviewer: "Zara", rating: 2, comment: "Not good. I’m disappointed." },
      {
        reviewer: "Musa",
        rating: 4,
        comment: "Good product, but there’s room for improvement.",
      },
      {
        reviewer: "Anisa",
        rating: 5,
        comment: "Very impressed. Would highly recommend.",
      },
      {
        reviewer: "Tariq",
        rating: 3,
        comment: "It’s fine, but not great for the price.",
      },
      {
        reviewer: "Yasmine",
        rating: 4,
        comment: "Good product. Would recommend it.",
      },
      {
        reviewer: "Ahsan",
        rating: 3,
        comment: "Okay product, nothing exceptional.",
      },
      {
        reviewer: "Lubna",
        rating: 5,
        comment: "I love it! Exactly what I needed.",
      },
      {
        reviewer: "Mujtaba",
        rating: 4,
        comment: "Great quality, I am happy with the purchase.",
      },
      {
        reviewer: "Hassan",
        rating: 3,
        comment: "Not bad, but could be improved.",
      },
      {
        reviewer: "Mona",
        rating: 5,
        comment: "Great quality and design, very happy with it.",
      },
      {
        reviewer: "Tariq",
        rating: 2,
        comment: "Disappointed with the quality. Expected more.",
      },
      {
        reviewer: "Rizwan",
        rating: 4,
        comment: "Good product, but price could be lower.",
      },
      {
        reviewer: "Nasreen",
        rating: 5,
        comment: "Perfect! I couldn’t ask for more.",
      },
      {
        reviewer: "Salim",
        rating: 1,
        comment: "Not happy at all. Poor quality.",
      },
      {
        reviewer: "Fariha",
        rating: 5,
        comment: "Great value for the price. Love it!",
      },
    ],
  },
  {
    productId: 8524753502424,
    reviews: [
      {
        reviewer: "Ahmed",
        rating: 5,
        comment: "Perfect fit and super comfortable! Highly recommend.",
      },
      {
        reviewer: "Fatima",
        rating: 4,
        comment: "Good quality, but the color fades a bit after washing.",
      },
      {
        reviewer: "Ali",
        rating: 3,
        comment:
          "The fabric is soft, but it shrunk a little after the first wash.",
      },
      {
        reviewer: "Mariam",
        rating: 5,
        comment: "Great T-shirt! It fits perfectly and looks great.",
      },
      {
        reviewer: "Zain",
        rating: 4,
        comment: "Nice shirt, but I wish the neckline was a bit wider.",
      },
      {
        reviewer: "Rashid",
        rating: 3,
        comment: "Decent quality, but not as soft as I expected.",
      },
      {
        reviewer: "Omar",
        rating: 5,
        comment: "Love the V-neck style, and it’s very breathable.",
      },
      {
        reviewer: "Amina",
        rating: 2,
        comment: "The shirt didn’t fit right. I was expecting a slimmer fit.",
      },
      {
        reviewer: "Khalid",
        rating: 4,
        comment: "Good value for money. Comfortable and easy to wear.",
      },
      {
        reviewer: "Sara",
        rating: 3,
        comment: "It’s a nice shirt, but the fabric feels a bit thin.",
      },
      {
        reviewer: "Yusuf",
        rating: 5,
        comment:
          "This is the best T-shirt I’ve bought in a while. Great fit and material!",
      },
      {
        reviewer: "Layla",
        rating: 4,
        comment:
          "Love the V-neck, but I would have preferred more color options.",
      },
      {
        reviewer: "Imran",
        rating: 3,
        comment: "Comfortable, but it could be a bit more fitted.",
      },
      {
        reviewer: "Hassan",
        rating: 5,
        comment: "Amazing quality! I wear it all the time.",
      },
      {
        reviewer: "Zaynab",
        rating: 4,
        comment:
          "Nice T-shirt, but I would have liked the fabric to be thicker.",
      },
      {
        reviewer: "Fahad",
        rating: 3,
        comment: "It’s decent, but the fit wasn’t as expected.",
      },
      {
        reviewer: "Muneeb",
        rating: 5,
        comment: "Perfect fit, great quality fabric, and stylish.",
      },
      {
        reviewer: "Samira",
        rating: 4,
        comment: "Good T-shirt, but it could be a bit more stretchy.",
      },
      {
        reviewer: "Ali",
        rating: 3,
        comment: "It shrunk a little after washing. Be careful with sizing.",
      },
      {
        reviewer: "Khadijah",
        rating: 5,
        comment: "Great T-shirt for casual wear. Super comfy.",
      },
      {
        reviewer: "Raza",
        rating: 4,
        comment:
          "The shirt is great, but it could use more colors in the collection.",
      },
      {
        reviewer: "Mariam",
        rating: 5,
        comment: "The fabric is very soft and feels premium. Worth the price.",
      },
      {
        reviewer: "Bilal",
        rating: 3,
        comment: "Comfortable, but the material isn't as thick as I thought.",
      },
      {
        reviewer: "Tariq",
        rating: 4,
        comment: "The fit is great, and it’s super comfy.",
      },
      {
        reviewer: "Nashit",
        rating: 5,
        comment:
          "Love the fit and the way it looks on me. One of my favorite T-shirts.",
      },
      {
        reviewer: "Nadia",
        rating: 3,
        comment: "It’s nice, but it wrinkles easily.",
      },
      {
        reviewer: "Sami",
        rating: 4,
        comment: "Nice, basic V-neck T-shirt for casual wear. Happy with it.",
      },
      {
        reviewer: "Zara",
        rating: 5,
        comment:
          "This is exactly what I wanted. Fits perfectly and is very comfortable.",
      },
      {
        reviewer: "Yaseen",
        rating: 3,
        comment: "Good shirt but runs a bit large.",
      },
      {
        reviewer: "Zahra",
        rating: 4,
        comment: "Very comfy, but the V-neck could be a bit deeper.",
      },
      {
        reviewer: "Hassan",
        rating: 5,
        comment:
          "The fit is amazing, and the fabric feels soft and breathable.",
      },
      {
        reviewer: "Ahsan",
        rating: 4,
        comment: "Nice shirt, but it tends to lose its shape after washing.",
      },
      {
        reviewer: "Bilal",
        rating: 5,
        comment:
          "I love how this T-shirt fits. It's comfortable for everyday use.",
      },
      {
        reviewer: "Fariha",
        rating: 4,
        comment: "Good quality, but I wish it was a bit more fitted.",
      },
      {
        reviewer: "Saad",
        rating: 3,
        comment:
          "It’s a bit loose for my liking, but it’s still a good T-shirt.",
      },
      {
        reviewer: "Sana",
        rating: 5,
        comment:
          "Very comfortable, and it fits perfectly. A must-have in my wardrobe.",
      },
      {
        reviewer: "Tariq",
        rating: 2,
        comment: "The fabric felt cheap, not happy with the quality.",
      },
      {
        reviewer: "Muneeb",
        rating: 4,
        comment:
          "It’s great for casual outings, but the color isn’t as vibrant as shown.",
      },
      {
        reviewer: "Omar",
        rating: 5,
        comment:
          "One of the best T-shirts I’ve bought. I’m going to order more.",
      },
      {
        reviewer: "Sana",
        rating: 3,
        comment:
          "Comfortable, but the fabric is a little too thin for my liking.",
      },
      {
        reviewer: "Ayman",
        rating: 4,
        comment: "Good shirt overall, but I would prefer it to be more snug.",
      },
      {
        reviewer: "Khadijah",
        rating: 5,
        comment: "I love this T-shirt! It fits perfectly and looks stylish.",
      },
      {
        reviewer: "Rizwan",
        rating: 3,
        comment: "It’s a nice T-shirt, but I wish the material was thicker.",
      },
      {
        reviewer: "Yusuf",
        rating: 5,
        comment: "Awesome shirt! Great for both casual and semi-casual wear.",
      },
      {
        reviewer: "Fatima",
        rating: 4,
        comment: "Great for lounging around the house or casual outings.",
      },
      {
        reviewer: "Jamil",
        rating: 3,
        comment: "It’s okay, but I expected better fabric quality.",
      },
      {
        reviewer: "Raza",
        rating: 5,
        comment: "Fits like a glove! Great quality and very comfortable.",
      },
      {
        reviewer: "Amina",
        rating: 4,
        comment:
          "I really like it, but the color fades a little after washing.",
      },
      {
        reviewer: "Yasir",
        rating: 3,
        comment: "Nice, but not as good as I expected. It's slightly loose.",
      },
      {
        reviewer: "Bilal",
        rating: 5,
        comment: "This T-shirt is perfect for everyday use. I love the fit!",
      },
      {
        reviewer: "Hassan",
        rating: 3,
        comment:
          "The shirt shrunk a bit after washing, but otherwise, it’s fine.",
      },
      {
        reviewer: "Imran",
        rating: 4,
        comment: "Good quality, great fit, but wish it came in more colors.",
      },
      {
        reviewer: "Rida",
        rating: 5,
        comment: "Very happy with my purchase. Great for everyday wear.",
      },
      {
        reviewer: "Yaseen",
        rating: 4,
        comment:
          "Comfortable and stylish, but the neck could be a little tighter.",
      },
      {
        reviewer: "Amira",
        rating: 5,
        comment: "Exactly what I was looking for. Perfect for casual wear!",
      },
      {
        reviewer: "Kareem",
        rating: 4,
        comment: "Nice T-shirt, but I would prefer it to be a bit softer.",
      },
      {
        reviewer: "Mujtaba",
        rating: 5,
        comment:
          "This is my new favorite T-shirt. It fits perfectly and looks great.",
      },
      {
        reviewer: "Sami",
        rating: 3,
        comment: "It’s comfortable, but the fabric could be thicker.",
      },
      {
        reviewer: "Mariam",
        rating: 4,
        comment: "Good quality, but it wrinkles easily.",
      },
      {
        reviewer: "Ahmed",
        rating: 5,
        comment: "Perfect fit, great fabric, I will buy more!",
      },
      {
        reviewer: "Fariha",
        rating: 4,
        comment: "Nice, but it’s a bit loose around the shoulders.",
      },
      {
        reviewer: "Zain",
        rating: 5,
        comment: "The best V-neck I’ve ever had. It’s so comfortable.",
      },
      { reviewer: "Charlie", rating: 5, comment: "Absolutely amazing!" },
      { reviewer: "Dana", rating: 4, comment: "Great value for money." },
    ],
  },
  {
    productId: 8724029145304,
    reviews: [
      {
        reviewer: "Amna",
        rating: 5,
        comment:
          "Absolutely love this phone! Great features and smooth performance. Going to buy this one for my hubby too Insha'Allah",
      },
      {
        reviewer: "Omar",
        rating: 4,
        comment: "Good phone, but battery life could be better.",
      },
      {
        reviewer: "Fatima",
        rating: 3,
        comment: "Decent phone, but I expected more for the price.",
      },
      {
        reviewer: "Hassan",
        rating: 5,
        comment: "Perfect for all my needs. Very happy with it.",
      },
      {
        reviewer: "Zainab",
        rating: 2,
        comment: "Not impressed with the camera quality.",
      },
      {
        reviewer: "Ali",
        rating: 5,
        comment: "Great phone! Fast, reliable, and affordable.",
      },
      {
        reviewer: "Yusuf",
        rating: 4,
        comment: "Good phone, but I wish the display was a bit brighter.",
      },
      {
        reviewer: "Layla",
        rating: 1,
        comment: "The phone stopped working after a week. Very disappointing.",
      },
      {
        reviewer: "Ibrahim",
        rating: 4,
        comment:
          "Nice phone, good performance overall, but the screen is a bit fragile.",
      },
      {
        reviewer: "Mariam",
        rating: 3,
        comment: "It's fine, but there's nothing exceptional about it.",
      },
      {
        reviewer: "Ahmed",
        rating: 2,
        comment: "The phone doesn't live up to the hype. Battery dies quickly.",
      },
      {
        reviewer: "Khadijah",
        rating: 4,
        comment: "Good phone for the price, but it could use a better camera.",
      },
      {
        reviewer: "Zayd",
        rating: 5,
        comment: "Fantastic phone! Amazing value for the price.",
      },
      {
        reviewer: "Safa",
        rating: 3,
        comment: "It's a decent phone, but I expected better performance.",
      },
      {
        reviewer: "Rashid",
        rating: 5,
        comment: "Highly recommend this phone! Very smooth performance.",
      },
      {
        reviewer: "Nadia",
        rating: 3,
        comment: "It's okay, but I don't think it's worth the price.",
      },
      {
        reviewer: "Tariq",
        rating: 5,
        comment: "Best smartphone I have owned. Works like a charm!",
      },
      {
        reviewer: "Salma",
        rating: 1,
        comment: "The phone doesn't turn on. Very bad quality.",
      },
      {
        reviewer: "Bilal",
        rating: 4,
        comment: "Great phone overall, but the camera could be better.",
      },
      {
        reviewer: "Huda",
        rating: 2,
        comment: "Not worth the money. Better options are available.",
      },
      {
        reviewer: "Khalid",
        rating: 4,
        comment: "Great performance and speed, but battery drains fast.",
      },
      {
        reviewer: "Zain",
        rating: 5,
        comment: "Fantastic value for money! I highly recommend it.",
      },
      {
        reviewer: "Muneeb",
        rating: 3,
        comment: "It's good, but it could have more features.",
      },
      {
        reviewer: "Sumaiya",
        rating: 4,
        comment: "Good phone for everyday use, but could be faster.",
      },
      {
        reviewer: "Saif",
        rating: 5,
        comment: "Perfect phone. Great design and performance!",
      },
      {
        reviewer: "Nabil",
        rating: 3,
        comment: "It works, but the performance is not as great as I expected.",
      },
      {
        reviewer: "Khadija",
        rating: 5,
        comment: "Amazing phone, couldn’t ask for a better one.",
      },
      {
        reviewer: "Fahad",
        rating: 2,
        comment: "Bad experience. The phone kept crashing.",
      },
      {
        reviewer: "Zuhair",
        rating: 4,
        comment: "Good phone, but the charging speed is slow.",
      },
      {
        reviewer: "Samira",
        rating: 2,
        comment: "The phone froze constantly. Wouldn’t recommend.",
      },
      {
        reviewer: "Imran",
        rating: 3,
        comment: "It’s fine, but I had higher expectations.",
      },
      {
        reviewer: "Muneera",
        rating: 5,
        comment: "Love this phone! It's so fast and smooth.",
      },
      {
        reviewer: "Asim",
        rating: 4,
        comment: "Good phone, but could use a larger battery.",
      },
      {
        reviewer: "Rida",
        rating: 5,
        comment: "Totally worth the price. Best phone I've used.",
      },
      {
        reviewer: "Omar",
        rating: 3,
        comment: "It’s okay, but it lags a little sometimes.",
      },
      {
        reviewer: "Bushra",
        rating: 5,
        comment: "Amazing product. Totally worth the money.",
      },
      {
        reviewer: "Fahima",
        rating: 4,
        comment: "Very satisfied, but the camera quality could be improved.",
      },
      {
        reviewer: "Sami",
        rating: 2,
        comment: "Not a fan. The touch screen is unresponsive.",
      },
      {
        reviewer: "Nashit",
        rating: 4,
        comment: "Good quality, but I wish it had a better screen.",
      },
      { reviewer: "Rania", rating: 5, comment: "Love it! Fast and reliable." },
      {
        reviewer: "Jamil",
        rating: 1,
        comment: "Horrible experience. The phone never worked properly.",
      },
      {
        reviewer: "Amira",
        rating: 5,
        comment: "Incredible phone. Highly recommend it.",
      },
      {
        reviewer: "Yasir",
        rating: 3,
        comment: "It's fine for the price, but I expected more features.",
      },
      {
        reviewer: "Kareem",
        rating: 4,
        comment: "Good quality, but could use a bigger screen.",
      },
      {
        reviewer: "Hafsa",
        rating: 5,
        comment: "Very happy with my purchase! Great phone.",
      },
      {
        reviewer: "Rafi",
        rating: 3,
        comment: "Decent phone, but not as fast as I expected.",
      },
      {
        reviewer: "Zara",
        rating: 2,
        comment: "Not worth the money. It lags and crashes.",
      },
      {
        reviewer: "Musa",
        rating: 4,
        comment: "Good phone, but the camera could be improved.",
      },
      {
        reviewer: "Anisa",
        rating: 5,
        comment: "Highly recommend this phone! It’s amazing.",
      },
      {
        reviewer: "Tariq",
        rating: 3,
        comment: "It’s okay, but the performance isn't top-tier.",
      },
      {
        reviewer: "Yasmine",
        rating: 4,
        comment: "Great phone! But could use more storage.",
      },
      {
        reviewer: "Ahsan",
        rating: 3,
        comment: "It’s decent, but I would have preferred more features.",
      },
      {
        reviewer: "Lubna",
        rating: 5,
        comment: "Fantastic phone. Very happy with it.",
      },
      {
        reviewer: "Mujtaba",
        rating: 4,
        comment: "Great quality and speed, but could be a bit cheaper.",
      },
      {
        reviewer: "Hassan",
        rating: 3,
        comment: "It’s okay, but it’s not as fast as I thought it would be.",
      },
      {
        reviewer: "Mona",
        rating: 5,
        comment: "Great performance and design. Love it!",
      },
      {
        reviewer: "Tariq",
        rating: 2,
        comment: "The phone didn’t last long, poor build quality.",
      },
      {
        reviewer: "Rizwan",
        rating: 4,
        comment: "Good phone overall, but I wish it had wireless charging.",
      },
      {
        reviewer: "Nasreen",
        rating: 5,
        comment: "Very satisfied with my purchase. Great phone.",
      },
      {
        reviewer: "Salim",
        rating: 1,
        comment: "Phone keeps freezing. Very poor quality.",
      },
      {
        reviewer: "Fariha",
        rating: 5,
        comment: "Highly recommend! Amazing quality for the price.",
      },
      { reviewer: "Eve", rating: 2, comment: "Not worth it." },
      { reviewer: "Frank", rating: 3, comment: "Average experience." },
    ],
  },
  {
    productId: 8513649737944,
    reviews: [
      {
        reviewer: "Ali",
        rating: 5,
        comment:
          "Great product for the ski season. Keeps my skis gliding smoothly!",
      },
      {
        reviewer: "Hassan",
        rating: 4,
        comment:
          "Works well, but I feel like I need to apply it more often than other brands.",
      },
      {
        reviewer: "Ayesha",
        rating: 3,
        comment: "It does the job, but it’s not as durable as I expected.",
      },
      {
        reviewer: "Bilal",
        rating: 5,
        comment:
          "Highly recommend this wax! My skis feel like new every time I use it.",
      },
      {
        reviewer: "Zahra",
        rating: 2,
        comment:
          "Not satisfied with this wax. It didn’t make my skis faster as I hoped.",
      },
      {
        reviewer: "Omar",
        rating: 4,
        comment:
          "Good product. Works great, but I wish it was a bit easier to apply.",
      },
      {
        reviewer: "Imran",
        rating: 3,
        comment: "The wax works well, but it doesn’t last long enough for me.",
      },
      {
        reviewer: "Fatima",
        rating: 5,
        comment:
          "Absolutely love this wax! It keeps my skis fast and smooth all day long.",
      },
      {
        reviewer: "Tariq",
        rating: 4,
        comment: "Good value for the price. It performs well on the slopes.",
      },
      {
        reviewer: "Nashit",
        rating: 5,
        comment:
          "Excellent product. My skis are sliding smoothly all winter season.",
      },
      {
        reviewer: "Sara",
        rating: 3,
        comment:
          "It works okay, but I feel like it could be a bit more effective.",
      },
      {
        reviewer: "Khadijah",
        rating: 4,
        comment:
          "Really great wax for my skis. I just wish it lasted a bit longer.",
      },
      {
        reviewer: "Raza",
        rating: 2,
        comment:
          "Doesn’t work as advertised. I don’t feel any difference on the slopes.",
      },
      {
        reviewer: "Muneeb",
        rating: 5,
        comment:
          "This wax is amazing! It keeps my skis in great condition for the entire season.",
      },
      {
        reviewer: "Imran",
        rating: 4,
        comment:
          "It works really well, but it needs reapplication more often than I would like.",
      },
      {
        reviewer: "Zain",
        rating: 3,
        comment:
          "It's okay, but I think it could perform better for the price.",
      },
      {
        reviewer: "Amira",
        rating: 5,
        comment:
          "Great quality wax. It makes skiing a lot smoother and faster.",
      },
      {
        reviewer: "Ahmed",
        rating: 4,
        comment:
          "Good product for the price, but I feel it wears off quicker than I expected.",
      },
      {
        reviewer: "Kareem",
        rating: 3,
        comment:
          "It does its job, but I expected better performance for the cost.",
      },
      {
        reviewer: "Adeel",
        rating: 5,
        comment:
          "I’ve tried a lot of waxes, and this one is by far the best. Fast and easy to use.",
      },
      {
        reviewer: "Layla",
        rating: 4,
        comment:
          "Works great, but I’d like it to last a little longer for my frequent ski trips.",
      },
      {
        reviewer: "Bilal",
        rating: 2,
        comment:
          "Not impressed. The wax didn't seem to last and didn’t provide much speed improvement.",
      },
      {
        reviewer: "Rizwan",
        rating: 5,
        comment:
          "I use this on all my skis. Always keeps them in perfect condition!",
      },
      {
        reviewer: "Samiha",
        rating: 3,
        comment:
          "Decent wax, but I’ve tried better ones. I’ll stick to my old brand.",
      },
      {
        reviewer: "Omar",
        rating: 5,
        comment:
          "Fantastic! My skis are gliding much faster after using this wax. Great performance!",
      },
      {
        reviewer: "Rida",
        rating: 4,
        comment:
          "Pretty good wax. It’s easy to apply, but it doesn’t last as long as I’d like.",
      },
      {
        reviewer: "Khalid",
        rating: 2,
        comment:
          "I didn’t notice any improvement after using this wax. Very disappointed.",
      },
      {
        reviewer: "Mariam",
        rating: 4,
        comment:
          "Good product, but it takes a little longer to apply than other waxes I’ve used.",
      },
      {
        reviewer: "Zehra",
        rating: 3,
        comment:
          "Does the job, but not as effective as some other premium brands.",
      },
      {
        reviewer: "Amir",
        rating: 5,
        comment:
          "This is by far the best ski wax I’ve used. Keeps my skis fast all day!",
      },
      {
        reviewer: "Nashit",
        rating: 4,
        comment:
          "Very solid wax for my skis. It’s just a little tricky to apply in cold weather.",
      },
      {
        reviewer: "Tariq",
        rating: 3,
        comment:
          "It works, but it requires frequent reapplication to maintain performance.",
      },
      {
        reviewer: "Muneeb",
        rating: 5,
        comment:
          "My skis perform great after using this wax. Very happy with the results!",
      },
      {
        reviewer: "Kareem",
        rating: 2,
        comment:
          "The performance wasn’t as good as I hoped for. The wax wears off too fast.",
      },
      {
        reviewer: "Zara",
        rating: 4,
        comment:
          "Good wax for the price. Works well, but I wish it was a little more durable.",
      },
      {
        reviewer: "Rizwan",
        rating: 5,
        comment:
          "Keeps my skis smooth and fast. I love it and will keep buying!",
      },
      {
        reviewer: "Sara",
        rating: 3,
        comment:
          "It's decent, but it didn’t last as long as I expected. I’ll try something else next time.",
      },
      {
        reviewer: "Fahad",
        rating: 4,
        comment:
          "Great wax, but the application process could be a little easier.",
      },
      {
        reviewer: "Khalid",
        rating: 3,
        comment:
          "I didn’t notice much improvement in speed or glide with this wax.",
      },
      {
        reviewer: "Sana",
        rating: 5,
        comment:
          "The best ski wax I’ve used so far! Keeps my skis gliding effortlessly.",
      },
      {
        reviewer: "Fatima",
        rating: 4,
        comment:
          "Good wax, but the scent isn’t the best. Otherwise, it works great.",
      },
      {
        reviewer: "Raza",
        rating: 3,
        comment: "Okay wax, but I think I’ll try a different brand next time.",
      },
      {
        reviewer: "Layla",
        rating: 5,
        comment:
          "Excellent wax! My skis glide much faster, and the wax lasts longer than expected.",
      },
      {
        reviewer: "Ali",
        rating: 4,
        comment:
          "Works great on my skis, but it could be more durable. Still, I’m satisfied with it.",
      },
      {
        reviewer: "Bilal",
        rating: 3,
        comment: "It’s a good wax, but I had to apply it more than I wanted.",
      },
      {
        reviewer: "Zahra",
        rating: 5,
        comment:
          "Absolutely the best ski wax! My skis glide effortlessly after use.",
      },
      {
        reviewer: "Rizwan",
        rating: 4,
        comment:
          "It’s good wax for the price, but I’ve had better results with other brands.",
      },
      {
        reviewer: "Omar",
        rating: 3,
        comment:
          "Decent product, but I had to reapply it often for optimal performance.",
      },
      {
        reviewer: "Amina",
        rating: 5,
        comment:
          "This wax is amazing! It works so well on my skis, and they glide beautifully.",
      },
      {
        reviewer: "Ahmed",
        rating: 4,
        comment:
          "Good wax overall, but it takes a little time to apply compared to others.",
      },
      {
        reviewer: "Khalid",
        rating: 5,
        comment:
          "I love this product! Keeps my skis performing great throughout the season.",
      },
      {
        reviewer: "Sami",
        rating: 2,
        comment:
          "The wax didn’t work for me. My skis were slower after applying it.",
      },
      {
        reviewer: "Layla",
        rating: 4,
        comment:
          "Works great, but the application process could be easier and less time-consuming.",
      },
      {
        reviewer: "Raza",
        rating: 5,
        comment:
          "Fantastic product! Keeps my skis running smoothly and fast all season long.",
      },
      {
        reviewer: "Muneeb",
        rating: 3,
        comment:
          "Decent wax, but I prefer a more durable option that doesn’t need reapplying so often.",
      },
      {
        reviewer: "Fahad",
        rating: 4,
        comment:
          "Good performance and ease of use. Just wish it lasted a bit longer.",
      },
      {
        reviewer: "Nashit",
        rating: 2,
        comment:
          "Not impressed. The wax wore off quickly and didn’t improve the glide.",
      },
      {
        reviewer: "Amira",
        rating: 5,
        comment:
          "I’ve tried many ski waxes, but this one is by far the best. Highly recommended!",
      },
      {
        reviewer: "Kareem",
        rating: 3,
        comment: "It’s okay, but I expected better results given the price.",
      },
      { reviewer: "Grace", rating: 5, comment: "Exceeded expectations!" },
      { reviewer: "Hank", rating: 4, comment: "Pretty good product." },
    ],
  },
  {
    productId: 8513649606872,
    reviews: [
      { reviewer: "Ivy", rating: 3, comment: "Decent quality." },
      { reviewer: "Jack", rating: 2, comment: "Disappointed with the build." },
    ],
  },
  {
    productId: 8513649410264,
    reviews: [
      { reviewer: "Kim", rating: 4, comment: "Good value for the price." },
      { reviewer: "Liam", rating: 5, comment: "Perfect for my needs!" },
    ],
  },
  {
    productId: 8513649377496,
    reviews: [
      { reviewer: "Mia", rating: 4, comment: "Really liked it." },
      { reviewer: "Noah", rating: 3, comment: "Okay product." },
    ],
  },
  {
    productId: 8513649705176,
    reviews: [
      { reviewer: "Olivia", rating: 5, comment: "Highly recommend it!" },
      { reviewer: "Paul", rating: 4, comment: "Worth the purchase." },
    ],
  },
  {
    productId: 8513649672408,
    reviews: [
      { reviewer: "Quinn", rating: 3, comment: "Just fine." },
      { reviewer: "Ryan", rating: 2, comment: "Not great." },
    ],
  },
  {
    productId: 8513649508568,
    reviews: [
      { reviewer: "Sophia", rating: 4, comment: "Happy with it." },
      { reviewer: "Tom", rating: 5, comment: "Fantastic product!" },
    ],
  },
  {
    productId: 8513649344728,
    reviews: [
      { reviewer: "Uma", rating: 3, comment: "Could use some improvements." },
      { reviewer: "Victor", rating: 4, comment: "Satisfied overall." },
    ],
  },
  {
    productId: 8513649279192,
    reviews: [
      { reviewer: "Willow", rating: 4, comment: "Nice quality." },
      { reviewer: "Xander", rating: 3, comment: "Average performance." },
    ],
  },
  {
    productId: 8744257093848,
    reviews: [
      { reviewer: "Yara", rating: 5, comment: "Amazing!" },
      { reviewer: "Zane", rating: 4, comment: "Would buy again." },
      {
        reviewer: "Hassan",
        rating: 5,
        comment:
          "The navy blue color is perfect, and the fit is amazing. I absolutely love it!",
      },
      {
        reviewer: "Zahra",
        rating: 4,
        comment:
          "Great quality T-shirt, but I was expecting the fabric to be a bit thicker.",
      },
      {
        reviewer: "Omar",
        rating: 3,
        comment:
          "It fits well, but the shirt shrunk a little after the first wash.",
      },
      {
        reviewer: "Aisha",
        rating: 5,
        comment:
          "Perfect V-neck and great comfort. Very happy with my purchase!",
      },
      {
        reviewer: "Bilal",
        rating: 2,
        comment:
          "The color faded quickly after just a couple of washes. Not worth the price.",
      },
      {
        reviewer: "Muneeb",
        rating: 4,
        comment:
          "Good shirt overall, but the fit is slightly looser than I expected.",
      },
      {
        reviewer: "Khadijah",
        rating: 3,
        comment:
          "It's okay, but the fabric is thinner than I anticipated. Comfortable, though.",
      },
      {
        reviewer: "Ali",
        rating: 5,
        comment:
          "Super comfy, and the navy blue is a rich color. Highly recommend this T-shirt!",
      },
      {
        reviewer: "Sara",
        rating: 4,
        comment:
          "Good value for the price. The shirt fits well, but the material could be better.",
      },
      {
        reviewer: "Raza",
        rating: 5,
        comment:
          "Absolutely love this T-shirt! The fit is perfect, and the fabric is really soft.",
      },
      {
        reviewer: "Tariq",
        rating: 3,
        comment:
          "The T-shirt is decent, but it doesn't keep its shape after washing.",
      },
      {
        reviewer: "Nadia",
        rating: 4,
        comment:
          "Comfortable and stylish, but I think it could be a little more breathable.",
      },
      {
        reviewer: "Amira",
        rating: 5,
        comment:
          "Best T-shirt I’ve bought in a while. The color and fit are just perfect.",
      },
      {
        reviewer: "Yusuf",
        rating: 2,
        comment:
          "The shirt was a bit too tight and uncomfortable around the chest area.",
      },
      {
        reviewer: "Layla",
        rating: 4,
        comment:
          "Nice T-shirt, but I wish it came in more colors. The navy blue is beautiful, though!",
      },
      {
        reviewer: "Ahmed",
        rating: 5,
        comment:
          "Great T-shirt! It looks fantastic and fits well. I wear it all the time now.",
      },
      {
        reviewer: "Imran",
        rating: 3,
        comment:
          "The material is soft, but I didn’t like the fit. It was too loose.",
      },
      {
        reviewer: "Fariha",
        rating: 4,
        comment:
          "It’s a nice shirt, but I expected a little more stretch to the fabric.",
      },
      {
        reviewer: "Sami",
        rating: 5,
        comment:
          "Comfortable, stylish, and fits perfectly. I’ll buy another one soon.",
      },
      {
        reviewer: "Zain",
        rating: 2,
        comment:
          "The fit was good initially, but after washing, it shrunk and became too tight.",
      },
      {
        reviewer: "Fatima",
        rating: 3,
        comment:
          "Decent shirt, but the fabric is thinner than I thought. Still, it's okay for casual wear.",
      },
      {
        reviewer: "Omar",
        rating: 5,
        comment:
          "I love this shirt! It fits so well and the fabric feels premium.",
      },
      {
        reviewer: "Zahra",
        rating: 4,
        comment:
          "Really comfy and fits well, but the stitching could be a little better.",
      },
      {
        reviewer: "Rizwan",
        rating: 3,
        comment: "It’s a bit loose, but still comfortable. The color is nice.",
      },
      {
        reviewer: "Mariam",
        rating: 5,
        comment:
          "Perfect T-shirt! It’s stylish, and the fit is great. I wear it often.",
      },
      {
        reviewer: "Samiha",
        rating: 4,
        comment:
          "The color is fantastic, and the fabric is soft, but the fit could be slightly slimmer.",
      },
      {
        reviewer: "Yasir",
        rating: 2,
        comment:
          "The shirt is too baggy for my liking, and the material feels cheap.",
      },
      {
        reviewer: "Bilal",
        rating: 5,
        comment:
          "Love the fit and feel of this T-shirt. It’s soft and breathable!",
      },
      {
        reviewer: "Imran",
        rating: 4,
        comment:
          "The shirt is great, but I wish it had more stretch. Still a good product.",
      },
      {
        reviewer: "Rida",
        rating: 3,
        comment: "Good quality, but the fit is a little too big for me.",
      },
      {
        reviewer: "Yusuf",
        rating: 5,
        comment:
          "Amazing shirt! The navy blue looks great, and it’s so comfortable to wear.",
      },
      {
        reviewer: "Sana",
        rating: 2,
        comment:
          "Not happy with this purchase. The fabric is thin and feels low quality.",
      },
      {
        reviewer: "Fahad",
        rating: 4,
        comment:
          "Nice shirt for casual wear, but it could be a little more durable.",
      },
      {
        reviewer: "Raza",
        rating: 3,
        comment:
          "The fabric is nice, but it tends to wrinkle after a few hours of wear.",
      },
      {
        reviewer: "Ayesha",
        rating: 5,
        comment:
          "I’m really happy with this purchase! It fits great and looks stylish.",
      },
      {
        reviewer: "Nashit",
        rating: 4,
        comment:
          "Very comfortable shirt, but I would have liked it to be a little more form-fitting.",
      },
      {
        reviewer: "Khalid",
        rating: 3,
        comment:
          "Good shirt overall, but it shrunk a little after the first wash.",
      },
      {
        reviewer: "Imran",
        rating: 5,
        comment:
          "Perfect fit and color. I love wearing this T-shirt with everything!",
      },
      {
        reviewer: "Nadia",
        rating: 4,
        comment:
          "Good quality, but it could have been a bit more fitted around the waist.",
      },
      {
        reviewer: "Sami",
        rating: 5,
        comment:
          "Excellent shirt, great value for money, and the navy blue color is rich.",
      },
      {
        reviewer: "Zain",
        rating: 3,
        comment: "Not bad, but the fabric could be softer and more breathable.",
      },
      {
        reviewer: "Tariq",
        rating: 5,
        comment:
          "The best V-neck T-shirt I've bought. Super comfortable and stylish!",
      },
      {
        reviewer: "Sara",
        rating: 2,
        comment:
          "The shirt didn't fit as expected, and the material felt flimsy.",
      },
      {
        reviewer: "Ahmed",
        rating: 4,
        comment:
          "Nice fit, but the fabric is thinner than expected. Still, I like it.",
      },
      {
        reviewer: "Rana",
        rating: 5,
        comment:
          "This T-shirt is a great fit, and the navy blue is the perfect shade. Love it!",
      },
      {
        reviewer: "Kareem",
        rating: 3,
        comment:
          "The T-shirt is fine, but the fabric feels a little too thin for my taste.",
      },
      {
        reviewer: "Amira",
        rating: 4,
        comment: "I like the shirt, but I wish the V-neck was a bit deeper.",
      },
      {
        reviewer: "Ali",
        rating: 5,
        comment:
          "Absolutely love this shirt! The fit is perfect, and it looks fantastic.",
      },
      {
        reviewer: "Zahra",
        rating: 3,
        comment:
          "It’s okay, but the fabric wrinkles easily and the fit was slightly larger.",
      },
      {
        reviewer: "Bilal",
        rating: 5,
        comment:
          "Great product! The shirt is soft, fits well, and the navy blue color is perfect.",
      },
      {
        reviewer: "Yasir",
        rating: 4,
        comment: "Nice shirt, but I expected the material to be a bit thicker.",
      },
      {
        reviewer: "Nashit",
        rating: 3,
        comment:
          "The fit is good, but the fabric is not as comfortable as I hoped.",
      },
      {
        reviewer: "Ameen",
        rating: 5,
        comment:
          "One of my best T-shirt purchases! Comfortable, great fit, and nice color.",
      },
      {
        reviewer: "Omar",
        rating: 2,
        comment: "The shirt shrunk too much after washing. Very disappointing.",
      },
      {
        reviewer: "Khalid",
        rating: 4,
        comment:
          "Good T-shirt overall, but the fabric is not as thick as I expected.",
      },
      {
        reviewer: "Layla",
        rating: 5,
        comment:
          "I love this shirt. It fits perfectly and is really soft and comfortable.",
      },
      {
        reviewer: "Raza",
        rating: 3,
        comment:
          "The T-shirt is good, but the quality of fabric isn’t as great as I hoped.",
      },
      {
        reviewer: "Zehra",
        rating: 4,
        comment:
          "Good product, but I wish it had a little more stretch for comfort.",
      },
    ],
  },
  {
    productId: 8513649246424,
    reviews: [
      { reviewer: "Adam", rating: 3, comment: "Not too bad." },
      { reviewer: "Bella", rating: 2, comment: "Expected better." },
    ],
  },
  {
    productId: 8513649475800,
    reviews: [
      { reviewer: "Carter", rating: 5, comment: "Excellent product!" },
      { reviewer: "Diana", rating: 4, comment: "Very pleased with it." },
    ],
  },
  {
    productId: 8513649639640,
    reviews: [
      { reviewer: "Ethan", rating: 3, comment: "Just okay." },
      { reviewer: "Fiona", rating: 4, comment: "Pretty decent overall." },
    ],
  },
];

module.exports = products;
