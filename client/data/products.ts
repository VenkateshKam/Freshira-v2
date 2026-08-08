export interface Product {
  id: number; name: string; slug: string; category: string; categorySlug: string; subcategory: string; price: number; unit: string; image: string; rating: number; reviewCount: number; availability: "in-stock" | "low-stock" | "out-of-stock"; featured: boolean; description: string; shortDescription: string; originalPrice: number; features: string[]; specifications: { label: string; value: string }[];
}

const productSeed: Product[] = [
  {
    "id": 1,
    "name": "Apple",
    "slug": "apple",
    "category": "Fresh Fruits",
    "categorySlug": "fresh-fruits",
    "subcategory": "Apple",
    "price": 120,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/960px-Red_Apple.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 30,
    "availability": "low-stock",
    "featured": true,
    "description": "Apple selected for dependable quality and everyday use.",
    "shortDescription": "Apple, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Apple"
      },
      {
        "label": "Category",
        "value": "Fresh Fruits"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 2,
    "name": "Banana",
    "slug": "banana",
    "category": "Fresh Fruits",
    "categorySlug": "fresh-fruits",
    "subcategory": "Banana",
    "price": 120,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Cavendish_banana_from_Maracaibo.jpg/960px-Cavendish_banana_from_Maracaibo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 47,
    "availability": "in-stock",
    "featured": true,
    "description": "Banana selected for dependable quality and everyday use.",
    "shortDescription": "Banana, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Banana"
      },
      {
        "label": "Category",
        "value": "Fresh Fruits"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 3,
    "name": "Mango",
    "slug": "mango",
    "category": "Fresh Fruits",
    "categorySlug": "fresh-fruits",
    "subcategory": "Mango",
    "price": 120,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/960px-Mangos_-_single_and_halved.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 64,
    "availability": "in-stock",
    "featured": true,
    "description": "Mango selected for dependable quality and everyday use.",
    "shortDescription": "Mango, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Mango"
      },
      {
        "label": "Category",
        "value": "Fresh Fruits"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 4,
    "name": "Papaya",
    "slug": "papaya",
    "category": "Fresh Fruits",
    "categorySlug": "fresh-fruits",
    "subcategory": "Papaya",
    "price": 120,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Papaya_-_longitudinal_section_close-up_view.jpg/960px-Papaya_-_longitudinal_section_close-up_view.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 81,
    "availability": "in-stock",
    "featured": true,
    "description": "Papaya selected for dependable quality and everyday use.",
    "shortDescription": "Papaya, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Papaya"
      },
      {
        "label": "Category",
        "value": "Fresh Fruits"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 5,
    "name": "Guava",
    "slug": "guava",
    "category": "Fresh Fruits",
    "categorySlug": "fresh-fruits",
    "subcategory": "Guava",
    "price": 120,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Guava_ID.jpg/960px-Guava_ID.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 98,
    "availability": "in-stock",
    "featured": true,
    "description": "Guava selected for dependable quality and everyday use.",
    "shortDescription": "Guava, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Guava"
      },
      {
        "label": "Category",
        "value": "Fresh Fruits"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 6,
    "name": "Orange",
    "slug": "orange",
    "category": "Fresh Fruits",
    "categorySlug": "fresh-fruits",
    "subcategory": "Orange",
    "price": 120,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/960px-Oranges_-_whole-halved-segment.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 115,
    "availability": "in-stock",
    "featured": true,
    "description": "Orange selected for dependable quality and everyday use.",
    "shortDescription": "Orange, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Orange"
      },
      {
        "label": "Category",
        "value": "Fresh Fruits"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 7,
    "name": "Grapes",
    "slug": "grapes",
    "category": "Fresh Fruits",
    "categorySlug": "fresh-fruits",
    "subcategory": "Grapes",
    "price": 120,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Grapes%2C_Dry_Creek_Valley-7705.jpg/960px-Grapes%2C_Dry_Creek_Valley-7705.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 132,
    "availability": "in-stock",
    "featured": true,
    "description": "Grapes selected for dependable quality and everyday use.",
    "shortDescription": "Grapes, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Grapes"
      },
      {
        "label": "Category",
        "value": "Fresh Fruits"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 8,
    "name": "Pomegranate",
    "slug": "pomegranate",
    "category": "Fresh Fruits",
    "categorySlug": "fresh-fruits",
    "subcategory": "Pomegranate",
    "price": 120,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Pomegranate_fruit_-_whole_and_piece_with_arils.jpg/960px-Pomegranate_fruit_-_whole_and_piece_with_arils.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 149,
    "availability": "in-stock",
    "featured": true,
    "description": "Pomegranate selected for dependable quality and everyday use.",
    "shortDescription": "Pomegranate, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Pomegranate"
      },
      {
        "label": "Category",
        "value": "Fresh Fruits"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 9,
    "name": "Tomato",
    "slug": "tomato",
    "category": "Fresh Vegetables",
    "categorySlug": "fresh-vegetables",
    "subcategory": "Tomato",
    "price": 65,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 166,
    "availability": "in-stock",
    "featured": true,
    "description": "Tomato selected for dependable quality and everyday use.",
    "shortDescription": "Tomato, prepared for convenient everyday use.",
    "originalPrice": 75,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Tomato"
      },
      {
        "label": "Category",
        "value": "Fresh Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 10,
    "name": "Onion",
    "slug": "onion",
    "category": "Fresh Vegetables",
    "categorySlug": "fresh-vegetables",
    "subcategory": "Onion",
    "price": 65,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Mixed_onions.jpg/960px-Mixed_onions.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 183,
    "availability": "in-stock",
    "featured": true,
    "description": "Onion selected for dependable quality and everyday use.",
    "shortDescription": "Onion, prepared for convenient everyday use.",
    "originalPrice": 75,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Onion"
      },
      {
        "label": "Category",
        "value": "Fresh Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 11,
    "name": "Potato",
    "slug": "potato",
    "category": "Fresh Vegetables",
    "categorySlug": "fresh-vegetables",
    "subcategory": "Potato",
    "price": 65,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Potato_flowers_2016_G1.jpg/960px-Potato_flowers_2016_G1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 200,
    "availability": "in-stock",
    "featured": true,
    "description": "Potato selected for dependable quality and everyday use.",
    "shortDescription": "Potato, prepared for convenient everyday use.",
    "originalPrice": 75,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Potato"
      },
      {
        "label": "Category",
        "value": "Fresh Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 12,
    "name": "Carrot",
    "slug": "carrot",
    "category": "Fresh Vegetables",
    "categorySlug": "fresh-vegetables",
    "subcategory": "Carrot",
    "price": 65,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Carrots_of_many_colors.jpg/960px-Carrots_of_many_colors.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 217,
    "availability": "in-stock",
    "featured": true,
    "description": "Carrot selected for dependable quality and everyday use.",
    "shortDescription": "Carrot, prepared for convenient everyday use.",
    "originalPrice": 75,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Carrot"
      },
      {
        "label": "Category",
        "value": "Fresh Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 13,
    "name": "Cabbage",
    "slug": "cabbage",
    "category": "Fresh Vegetables",
    "categorySlug": "fresh-vegetables",
    "subcategory": "Cabbage",
    "price": 65,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pieris_brassicae_-_Large_Cabbage_White_-_02.jpg/960px-Pieris_brassicae_-_Large_Cabbage_White_-_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 234,
    "availability": "in-stock",
    "featured": false,
    "description": "Cabbage selected for dependable quality and everyday use.",
    "shortDescription": "Cabbage, prepared for convenient everyday use.",
    "originalPrice": 75,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Cabbage"
      },
      {
        "label": "Category",
        "value": "Fresh Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 14,
    "name": "Cauliflower",
    "slug": "cauliflower",
    "category": "Fresh Vegetables",
    "categorySlug": "fresh-vegetables",
    "subcategory": "Cauliflower",
    "price": 65,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Starr-191212-7172-Brassica_oleracea_var_botrytis-homegrown_cauliflower-Hawea_Pl_Olinda-Maui_%2849254727061%29.jpg/960px-Starr-191212-7172-Brassica_oleracea_var_botrytis-homegrown_cauliflower-Hawea_Pl_Olinda-Maui_%2849254727061%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 251,
    "availability": "in-stock",
    "featured": false,
    "description": "Cauliflower selected for dependable quality and everyday use.",
    "shortDescription": "Cauliflower, prepared for convenient everyday use.",
    "originalPrice": 75,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Cauliflower"
      },
      {
        "label": "Category",
        "value": "Fresh Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 15,
    "name": "Spinach",
    "slug": "spinach",
    "category": "Fresh Vegetables",
    "categorySlug": "fresh-vegetables",
    "subcategory": "Spinach",
    "price": 65,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/77/Karyotype_of_Spinach_%28Spinacia_oleracea_L._Mazeran%29.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "rating": 4.6,
    "reviewCount": 268,
    "availability": "in-stock",
    "featured": false,
    "description": "Spinach selected for dependable quality and everyday use.",
    "shortDescription": "Spinach, prepared for convenient everyday use.",
    "originalPrice": 75,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Spinach"
      },
      {
        "label": "Category",
        "value": "Fresh Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 16,
    "name": "Brinjal",
    "slug": "brinjal",
    "category": "Fresh Vegetables",
    "categorySlug": "fresh-vegetables",
    "subcategory": "Brinjal",
    "price": 65,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/An_aubergine-eggplant-brinjal_plant_with_a_hanging_fruit..jpg/960px-An_aubergine-eggplant-brinjal_plant_with_a_hanging_fruit..jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 45,
    "availability": "in-stock",
    "featured": false,
    "description": "Brinjal selected for dependable quality and everyday use.",
    "shortDescription": "Brinjal, prepared for convenient everyday use.",
    "originalPrice": 75,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Brinjal"
      },
      {
        "label": "Category",
        "value": "Fresh Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 17,
    "name": "Dragon Fruit",
    "slug": "dragon-fruit",
    "category": "Exotic Fruits",
    "categorySlug": "exotic-fruits",
    "subcategory": "Dragon Fruit",
    "price": 240,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Yellow_dragon_fruit_with_spoon_%2850847s%29.jpg/960px-Yellow_dragon_fruit_with_spoon_%2850847s%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 62,
    "availability": "in-stock",
    "featured": false,
    "description": "Dragon Fruit selected for dependable quality and everyday use.",
    "shortDescription": "Dragon Fruit, prepared for convenient everyday use.",
    "originalPrice": 269,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Dragon Fruit"
      },
      {
        "label": "Category",
        "value": "Exotic Fruits"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 18,
    "name": "Kiwi",
    "slug": "kiwi",
    "category": "Exotic Fruits",
    "categorySlug": "exotic-fruits",
    "subcategory": "Kiwi",
    "price": 240,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/960px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 79,
    "availability": "in-stock",
    "featured": false,
    "description": "Kiwi selected for dependable quality and everyday use.",
    "shortDescription": "Kiwi, prepared for convenient everyday use.",
    "originalPrice": 269,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Kiwi"
      },
      {
        "label": "Category",
        "value": "Exotic Fruits"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 19,
    "name": "Avocado",
    "slug": "avocado",
    "category": "Exotic Fruits",
    "categorySlug": "exotic-fruits",
    "subcategory": "Avocado",
    "price": 240,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_single_and_halved.jpg/960px-Avocado_Hass_-_single_and_halved.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 96,
    "availability": "in-stock",
    "featured": false,
    "description": "Avocado selected for dependable quality and everyday use.",
    "shortDescription": "Avocado, prepared for convenient everyday use.",
    "originalPrice": 269,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Avocado"
      },
      {
        "label": "Category",
        "value": "Exotic Fruits"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 20,
    "name": "Blueberry",
    "slug": "blueberry",
    "category": "Exotic Fruits",
    "categorySlug": "exotic-fruits",
    "subcategory": "Blueberry",
    "price": 240,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Juvenile_Eastern_Bluebird_in_Blueberry_Bush.jpg/960px-Juvenile_Eastern_Bluebird_in_Blueberry_Bush.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 113,
    "availability": "in-stock",
    "featured": false,
    "description": "Blueberry selected for dependable quality and everyday use.",
    "shortDescription": "Blueberry, prepared for convenient everyday use.",
    "originalPrice": 269,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Blueberry"
      },
      {
        "label": "Category",
        "value": "Exotic Fruits"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 21,
    "name": "Strawberry",
    "slug": "strawberry",
    "category": "Exotic Fruits",
    "categorySlug": "exotic-fruits",
    "subcategory": "Strawberry",
    "price": 240,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_halved.jpg/960px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_halved.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 130,
    "availability": "in-stock",
    "featured": false,
    "description": "Strawberry selected for dependable quality and everyday use.",
    "shortDescription": "Strawberry, prepared for convenient everyday use.",
    "originalPrice": 269,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Strawberry"
      },
      {
        "label": "Category",
        "value": "Exotic Fruits"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 22,
    "name": "Broccoli",
    "slug": "broccoli",
    "category": "Exotic Vegetables",
    "categorySlug": "exotic-vegetables",
    "subcategory": "Broccoli",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Romanesco_broccoli_2025_G2.jpg/960px-Romanesco_broccoli_2025_G2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 147,
    "availability": "in-stock",
    "featured": false,
    "description": "Broccoli selected for dependable quality and everyday use.",
    "shortDescription": "Broccoli, prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Broccoli"
      },
      {
        "label": "Category",
        "value": "Exotic Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 23,
    "name": "Zucchini",
    "slug": "zucchini",
    "category": "Exotic Vegetables",
    "categorySlug": "exotic-vegetables",
    "subcategory": "Zucchini",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2019-07-01_%28100%29_Hanging_leaves_of_Cucurbita_pepo_subsp._pepo_Zucchini_%28zucchini%29_at_Bichlh%C3%A4usl%2C_Tiefgrabenrotte%2C_Frankenfels%2C_Austria.jpg/960px-2019-07-01_%28100%29_Hanging_leaves_of_Cucurbita_pepo_subsp._pepo_Zucchini_%28zucchini%29_at_Bichlh%C3%A4usl%2C_Tiefgrabenrotte%2C_Frankenfels%2C_Austria.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 164,
    "availability": "in-stock",
    "featured": false,
    "description": "Zucchini selected for dependable quality and everyday use.",
    "shortDescription": "Zucchini, prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Zucchini"
      },
      {
        "label": "Category",
        "value": "Exotic Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 24,
    "name": "Bell Pepper (Capsicum)",
    "slug": "bell-pepper",
    "category": "Exotic Vegetables",
    "categorySlug": "exotic-vegetables",
    "subcategory": "Bell Pepper",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Baby_Bell_pepper_%27%27Capsicum_annuum%27%27_.jpg/960px-Baby_Bell_pepper_%27%27Capsicum_annuum%27%27_.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 181,
    "availability": "in-stock",
    "featured": false,
    "description": "Bell Pepper (Capsicum) selected for dependable quality and everyday use.",
    "shortDescription": "Bell Pepper (Capsicum), prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Bell Pepper (Capsicum)"
      },
      {
        "label": "Category",
        "value": "Exotic Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 25,
    "name": "Asparagus",
    "slug": "asparagus",
    "category": "Exotic Vegetables",
    "categorySlug": "exotic-vegetables",
    "subcategory": "Asparagus",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/960px-Asparagus_soup_%28spargelsuppe%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 198,
    "availability": "in-stock",
    "featured": false,
    "description": "Asparagus selected for dependable quality and everyday use.",
    "shortDescription": "Asparagus, prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Asparagus"
      },
      {
        "label": "Category",
        "value": "Exotic Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 26,
    "name": "Iceberg Lettuce",
    "slug": "iceberg-lettuce",
    "category": "Exotic Vegetables",
    "categorySlug": "exotic-vegetables",
    "subcategory": "Iceberg Lettuce",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Iceberg_lettuce_%28IJssla_krop%29.jpg/960px-Iceberg_lettuce_%28IJssla_krop%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 215,
    "availability": "in-stock",
    "featured": false,
    "description": "Iceberg Lettuce selected for dependable quality and everyday use.",
    "shortDescription": "Iceberg Lettuce, prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Iceberg Lettuce"
      },
      {
        "label": "Category",
        "value": "Exotic Vegetables"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 27,
    "name": "Organic Turmeric",
    "slug": "organic-turmeric",
    "category": "Organic Products",
    "categorySlug": "organic-products",
    "subcategory": "Organic Turmeric",
    "price": 190,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Organic_Raw_Turmeric_02.jpg/960px-Organic_Raw_Turmeric_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 232,
    "availability": "in-stock",
    "featured": false,
    "description": "Organic Turmeric selected for dependable quality and everyday use.",
    "shortDescription": "Organic Turmeric, prepared for convenient everyday use.",
    "originalPrice": 213,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Organic Turmeric"
      },
      {
        "label": "Category",
        "value": "Organic Products"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 28,
    "name": "Organic Jaggery",
    "slug": "organic-jaggery",
    "category": "Organic Products",
    "categorySlug": "organic-products",
    "subcategory": "Organic Jaggery",
    "price": 190,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Organic_palm_jaggery.jpg/960px-Organic_palm_jaggery.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 249,
    "availability": "in-stock",
    "featured": false,
    "description": "Organic Jaggery selected for dependable quality and everyday use.",
    "shortDescription": "Organic Jaggery, prepared for convenient everyday use.",
    "originalPrice": 213,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Organic Jaggery"
      },
      {
        "label": "Category",
        "value": "Organic Products"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 29,
    "name": "Organic Honey",
    "slug": "organic-honey",
    "category": "Organic Products",
    "categorySlug": "organic-products",
    "subcategory": "Organic Honey",
    "price": 190,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Organic_Honey.jpg/960px-Organic_Honey.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 266,
    "availability": "in-stock",
    "featured": false,
    "description": "Organic Honey selected for dependable quality and everyday use.",
    "shortDescription": "Organic Honey, prepared for convenient everyday use.",
    "originalPrice": 213,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Organic Honey"
      },
      {
        "label": "Category",
        "value": "Organic Products"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 30,
    "name": "Organic Brown Rice",
    "slug": "organic-brown-rice",
    "category": "Organic Products",
    "categorySlug": "organic-products",
    "subcategory": "Organic Brown Rice",
    "price": 190,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Organic_brown_rice%2C_pork%2C_kim_chi%2C_fried_egg_%288533213828%29.jpg/960px-Organic_brown_rice%2C_pork%2C_kim_chi%2C_fried_egg_%288533213828%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 43,
    "availability": "in-stock",
    "featured": false,
    "description": "Organic Brown Rice selected for dependable quality and everyday use.",
    "shortDescription": "Organic Brown Rice, prepared for convenient everyday use.",
    "originalPrice": 213,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Organic Brown Rice"
      },
      {
        "label": "Category",
        "value": "Organic Products"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 31,
    "name": "Organic Moong Dal",
    "slug": "organic-moong-dal",
    "category": "Organic Products",
    "categorySlug": "organic-products",
    "subcategory": "Organic Moong Dal",
    "price": 190,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Mung_beans_%28Vigna_radiata%29.jpg/960px-Mung_beans_%28Vigna_radiata%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 60,
    "availability": "in-stock",
    "featured": false,
    "description": "Organic Moong Dal selected for dependable quality and everyday use.",
    "shortDescription": "Organic Moong Dal, prepared for convenient everyday use.",
    "originalPrice": 213,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Organic Moong Dal"
      },
      {
        "label": "Category",
        "value": "Organic Products"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 32,
    "name": "Basmati Rice",
    "slug": "basmati-rice",
    "category": "Rice",
    "categorySlug": "rice",
    "subcategory": "Basmati Rice",
    "price": 130,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Grano_de_arroz_basmati_integral%2C_2020-06-12%2C_DD_01-11_FS.jpg/960px-Grano_de_arroz_basmati_integral%2C_2020-06-12%2C_DD_01-11_FS.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 77,
    "availability": "low-stock",
    "featured": false,
    "description": "Basmati Rice selected for dependable quality and everyday use.",
    "shortDescription": "Basmati Rice, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Basmati Rice"
      },
      {
        "label": "Category",
        "value": "Rice"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 33,
    "name": "Sona Masoori Rice",
    "slug": "sona-masoori-rice",
    "category": "Rice",
    "categorySlug": "rice",
    "subcategory": "Sona Masoori Rice",
    "price": 130,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sona-masuri.jpg/960px-Sona-masuri.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 94,
    "availability": "in-stock",
    "featured": false,
    "description": "Sona Masoori Rice selected for dependable quality and everyday use.",
    "shortDescription": "Sona Masoori Rice, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Sona Masoori Rice"
      },
      {
        "label": "Category",
        "value": "Rice"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 34,
    "name": "Brown Rice",
    "slug": "brown-rice",
    "category": "Rice",
    "categorySlug": "rice",
    "subcategory": "Brown Rice",
    "price": 130,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Brown_Rice.jpg/960px-Brown_Rice.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 111,
    "availability": "in-stock",
    "featured": false,
    "description": "Brown Rice selected for dependable quality and everyday use.",
    "shortDescription": "Brown Rice, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Brown Rice"
      },
      {
        "label": "Category",
        "value": "Rice"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 35,
    "name": "Kolam Rice",
    "slug": "kolam-rice",
    "category": "Rice",
    "categorySlug": "rice",
    "subcategory": "Kolam Rice",
    "price": 130,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kolam_Pongal_1stMain_Uthandi_Jan23_A7C_04891.jpg/960px-Kolam_Pongal_1stMain_Uthandi_Jan23_A7C_04891.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 128,
    "availability": "in-stock",
    "featured": false,
    "description": "Kolam Rice selected for dependable quality and everyday use.",
    "shortDescription": "Kolam Rice, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Kolam Rice"
      },
      {
        "label": "Category",
        "value": "Rice"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 36,
    "name": "Whole Wheat Grain",
    "slug": "whole-wheat-grain",
    "category": "Wheat",
    "categorySlug": "wheat",
    "subcategory": "Whole Wheat Grain",
    "price": 95,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Wheat_close-up.JPG/960px-Wheat_close-up.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 145,
    "availability": "in-stock",
    "featured": false,
    "description": "Whole Wheat Grain selected for dependable quality and everyday use.",
    "shortDescription": "Whole Wheat Grain, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Whole Wheat Grain"
      },
      {
        "label": "Category",
        "value": "Wheat"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 37,
    "name": "Sharbati Wheat",
    "slug": "sharbati-wheat",
    "category": "Wheat",
    "categorySlug": "wheat",
    "subcategory": "Sharbati Wheat",
    "price": 95,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/The_combine_Claas_Lexion_584_in_the_wheat_harvest.jpg/960px-The_combine_Claas_Lexion_584_in_the_wheat_harvest.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 162,
    "availability": "in-stock",
    "featured": false,
    "description": "Sharbati Wheat selected for dependable quality and everyday use.",
    "shortDescription": "Sharbati Wheat, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Sharbati Wheat"
      },
      {
        "label": "Category",
        "value": "Wheat"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 38,
    "name": "Lokwan Wheat",
    "slug": "lokwan-wheat",
    "category": "Wheat",
    "categorySlug": "wheat",
    "subcategory": "Lokwan Wheat",
    "price": 95,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Unload_wheat_by_the_combine_Claas_Lexion_584.jpg/960px-Unload_wheat_by_the_combine_Claas_Lexion_584.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 179,
    "availability": "in-stock",
    "featured": false,
    "description": "Lokwan Wheat selected for dependable quality and everyday use.",
    "shortDescription": "Lokwan Wheat, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Lokwan Wheat"
      },
      {
        "label": "Category",
        "value": "Wheat"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 39,
    "name": "Toor Dal",
    "slug": "toor-dal",
    "category": "Pulses",
    "categorySlug": "pulses",
    "subcategory": "Toor Dal",
    "price": 125,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Toor_dal_pakodas.JPG/960px-Toor_dal_pakodas.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 196,
    "availability": "in-stock",
    "featured": false,
    "description": "Toor Dal selected for dependable quality and everyday use.",
    "shortDescription": "Toor Dal, prepared for convenient everyday use.",
    "originalPrice": 140,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Toor Dal"
      },
      {
        "label": "Category",
        "value": "Pulses"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 40,
    "name": "Moong Dal",
    "slug": "moong-dal",
    "category": "Pulses",
    "categorySlug": "pulses",
    "subcategory": "Moong Dal",
    "price": 125,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Green_Moong_Dal.jpg/960px-Green_Moong_Dal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 213,
    "availability": "in-stock",
    "featured": false,
    "description": "Moong Dal selected for dependable quality and everyday use.",
    "shortDescription": "Moong Dal, prepared for convenient everyday use.",
    "originalPrice": 140,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Moong Dal"
      },
      {
        "label": "Category",
        "value": "Pulses"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 41,
    "name": "Chana Dal",
    "slug": "chana-dal",
    "category": "Pulses",
    "categorySlug": "pulses",
    "subcategory": "Chana Dal",
    "price": 125,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Chana_Ko_Dal.jpg/960px-Chana_Ko_Dal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 230,
    "availability": "in-stock",
    "featured": false,
    "description": "Chana Dal selected for dependable quality and everyday use.",
    "shortDescription": "Chana Dal, prepared for convenient everyday use.",
    "originalPrice": 140,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Chana Dal"
      },
      {
        "label": "Category",
        "value": "Pulses"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 42,
    "name": "Masoor Dal",
    "slug": "masoor-dal",
    "category": "Pulses",
    "categorySlug": "pulses",
    "subcategory": "Masoor Dal",
    "price": 125,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/72/MASOOR_DAL_KEBAB.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "rating": 4.9,
    "reviewCount": 247,
    "availability": "in-stock",
    "featured": false,
    "description": "Masoor Dal selected for dependable quality and everyday use.",
    "shortDescription": "Masoor Dal, prepared for convenient everyday use.",
    "originalPrice": 140,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Masoor Dal"
      },
      {
        "label": "Category",
        "value": "Pulses"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 43,
    "name": "Urad Dal",
    "slug": "urad-dal",
    "category": "Pulses",
    "categorySlug": "pulses",
    "subcategory": "Urad Dal",
    "price": 125,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Healthy_-_White_Urad_Dal_Laddu.jpeg/960px-Healthy_-_White_Urad_Dal_Laddu.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 264,
    "availability": "in-stock",
    "featured": false,
    "description": "Urad Dal selected for dependable quality and everyday use.",
    "shortDescription": "Urad Dal, prepared for convenient everyday use.",
    "originalPrice": 140,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Urad Dal"
      },
      {
        "label": "Category",
        "value": "Pulses"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 44,
    "name": "Turmeric Powder",
    "slug": "turmeric-powder",
    "category": "Spices",
    "categorySlug": "spices",
    "subcategory": "Turmeric Powder",
    "price": 95,
    "unit": "200g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Turmeric_Powder_on_a_Spoon_-_Black_Background.jpg/960px-Turmeric_Powder_on_a_Spoon_-_Black_Background.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 41,
    "availability": "in-stock",
    "featured": false,
    "description": "Turmeric Powder selected for dependable quality and everyday use.",
    "shortDescription": "Turmeric Powder, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Turmeric Powder"
      },
      {
        "label": "Category",
        "value": "Spices"
      },
      {
        "label": "Pack size",
        "value": "200g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 45,
    "name": "Red Chilli Powder",
    "slug": "red-chilli-powder",
    "category": "Spices",
    "categorySlug": "spices",
    "subcategory": "Red Chilli Powder",
    "price": 95,
    "unit": "200g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Citrus_medica_mixed_with_salt%2C_sugar%2C_green_chillies_and_red_chilli_powder_during_winter_04.jpg/960px-Citrus_medica_mixed_with_salt%2C_sugar%2C_green_chillies_and_red_chilli_powder_during_winter_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 58,
    "availability": "in-stock",
    "featured": false,
    "description": "Red Chilli Powder selected for dependable quality and everyday use.",
    "shortDescription": "Red Chilli Powder, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Red Chilli Powder"
      },
      {
        "label": "Category",
        "value": "Spices"
      },
      {
        "label": "Pack size",
        "value": "200g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 46,
    "name": "Coriander Powder",
    "slug": "coriander-powder",
    "category": "Spices",
    "categorySlug": "spices",
    "subcategory": "Coriander Powder",
    "price": 95,
    "unit": "200g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chlorofeel_Spices_Turmeric%2C_Coriander_and_Cumin_Powder_Packet.jpg/960px-Chlorofeel_Spices_Turmeric%2C_Coriander_and_Cumin_Powder_Packet.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 75,
    "availability": "in-stock",
    "featured": false,
    "description": "Coriander Powder selected for dependable quality and everyday use.",
    "shortDescription": "Coriander Powder, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Coriander Powder"
      },
      {
        "label": "Category",
        "value": "Spices"
      },
      {
        "label": "Pack size",
        "value": "200g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 47,
    "name": "Garam Masala",
    "slug": "garam-masala",
    "category": "Spices",
    "categorySlug": "spices",
    "subcategory": "Garam Masala",
    "price": 95,
    "unit": "200g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Garam_Masala_1.jpg/960px-Garam_Masala_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 92,
    "availability": "in-stock",
    "featured": false,
    "description": "Garam Masala selected for dependable quality and everyday use.",
    "shortDescription": "Garam Masala, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Garam Masala"
      },
      {
        "label": "Category",
        "value": "Spices"
      },
      {
        "label": "Pack size",
        "value": "200g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 48,
    "name": "Cumin Seeds",
    "slug": "cumin-seeds",
    "category": "Spices",
    "categorySlug": "spices",
    "subcategory": "Cumin Seeds",
    "price": 95,
    "unit": "200g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Lidded_basket_with_cumin_seeds_and_fruits_Vegetable_fibers%2C_organic_remains_-_Museo_Egizio_Turin_S_8415_p02.jpg/960px-Lidded_basket_with_cumin_seeds_and_fruits_Vegetable_fibers%2C_organic_remains_-_Museo_Egizio_Turin_S_8415_p02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 109,
    "availability": "in-stock",
    "featured": false,
    "description": "Cumin Seeds selected for dependable quality and everyday use.",
    "shortDescription": "Cumin Seeds, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Cumin Seeds"
      },
      {
        "label": "Category",
        "value": "Spices"
      },
      {
        "label": "Pack size",
        "value": "200g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 49,
    "name": "Black Pepper",
    "slug": "black-pepper",
    "category": "Spices",
    "categorySlug": "spices",
    "subcategory": "Black Pepper",
    "price": 95,
    "unit": "200g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Black_Pepper_%28Piper_nigrum%29_fruits.jpg/960px-Black_Pepper_%28Piper_nigrum%29_fruits.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 126,
    "availability": "in-stock",
    "featured": false,
    "description": "Black Pepper selected for dependable quality and everyday use.",
    "shortDescription": "Black Pepper, prepared for convenient everyday use.",
    "originalPrice": 106,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Black Pepper"
      },
      {
        "label": "Category",
        "value": "Spices"
      },
      {
        "label": "Pack size",
        "value": "200g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 50,
    "name": "Wheat Atta",
    "slug": "wheat-atta",
    "category": "Flour",
    "categorySlug": "flour",
    "subcategory": "Wheat Atta",
    "price": 90,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Atta_flour.jpg/960px-Atta_flour.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 143,
    "availability": "in-stock",
    "featured": false,
    "description": "Wheat Atta selected for dependable quality and everyday use.",
    "shortDescription": "Wheat Atta, prepared for convenient everyday use.",
    "originalPrice": 101,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Wheat Atta"
      },
      {
        "label": "Category",
        "value": "Flour"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 51,
    "name": "Besan (Gram Flour)",
    "slug": "besan",
    "category": "Flour",
    "categorySlug": "flour",
    "subcategory": "Besan",
    "price": 90,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Besan_%28juny_2013%29_-_panoramio.jpg/960px-Besan_%28juny_2013%29_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 160,
    "availability": "in-stock",
    "featured": false,
    "description": "Besan (Gram Flour) selected for dependable quality and everyday use.",
    "shortDescription": "Besan (Gram Flour), prepared for convenient everyday use.",
    "originalPrice": 101,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Besan (Gram Flour)"
      },
      {
        "label": "Category",
        "value": "Flour"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 52,
    "name": "Rice Flour",
    "slug": "rice-flour",
    "category": "Flour",
    "categorySlug": "flour",
    "subcategory": "Rice Flour",
    "price": 90,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/19/Two_kinds_of_rice_flour.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "rating": 4.7,
    "reviewCount": 177,
    "availability": "in-stock",
    "featured": false,
    "description": "Rice Flour selected for dependable quality and everyday use.",
    "shortDescription": "Rice Flour, prepared for convenient everyday use.",
    "originalPrice": 101,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Rice Flour"
      },
      {
        "label": "Category",
        "value": "Flour"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 53,
    "name": "Maida (Refined Flour)",
    "slug": "maida",
    "category": "Flour",
    "categorySlug": "flour",
    "subcategory": "Maida",
    "price": 90,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Maida_arch.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "rating": 4.8,
    "reviewCount": 194,
    "availability": "in-stock",
    "featured": false,
    "description": "Maida (Refined Flour) selected for dependable quality and everyday use.",
    "shortDescription": "Maida (Refined Flour), prepared for convenient everyday use.",
    "originalPrice": 101,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Maida (Refined Flour)"
      },
      {
        "label": "Category",
        "value": "Flour"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 54,
    "name": "Sunflower Oil",
    "slug": "sunflower-oil",
    "category": "Cooking Oils",
    "categorySlug": "cooking-oils",
    "subcategory": "Sunflower Oil",
    "price": 210,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Sunflower_oil_and_sunflower.jpg/960px-Sunflower_oil_and_sunflower.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 211,
    "availability": "in-stock",
    "featured": false,
    "description": "Sunflower Oil selected for dependable quality and everyday use.",
    "shortDescription": "Sunflower Oil, prepared for convenient everyday use.",
    "originalPrice": 235,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Sunflower Oil"
      },
      {
        "label": "Category",
        "value": "Cooking Oils"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 55,
    "name": "Groundnut Oil",
    "slug": "groundnut-oil",
    "category": "Cooking Oils",
    "categorySlug": "cooking-oils",
    "subcategory": "Groundnut Oil",
    "price": 210,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Groundnut_oil_production%2C_2021.png/960px-Groundnut_oil_production%2C_2021.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 228,
    "availability": "in-stock",
    "featured": false,
    "description": "Groundnut Oil selected for dependable quality and everyday use.",
    "shortDescription": "Groundnut Oil, prepared for convenient everyday use.",
    "originalPrice": 235,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Groundnut Oil"
      },
      {
        "label": "Category",
        "value": "Cooking Oils"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 56,
    "name": "Mustard Oil",
    "slug": "mustard-oil",
    "category": "Cooking Oils",
    "categorySlug": "cooking-oils",
    "subcategory": "Mustard Oil",
    "price": 210,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mustard_Oil_%26_Seeds_-_Kolkata_2003-10-31_00537.JPG/960px-Mustard_Oil_%26_Seeds_-_Kolkata_2003-10-31_00537.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 245,
    "availability": "in-stock",
    "featured": false,
    "description": "Mustard Oil selected for dependable quality and everyday use.",
    "shortDescription": "Mustard Oil, prepared for convenient everyday use.",
    "originalPrice": 235,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Mustard Oil"
      },
      {
        "label": "Category",
        "value": "Cooking Oils"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 57,
    "name": "Coconut Oil",
    "slug": "coconut-oil",
    "category": "Cooking Oils",
    "categorySlug": "cooking-oils",
    "subcategory": "Coconut Oil",
    "price": 210,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Coconut_oil_2.jpg/960px-Coconut_oil_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 262,
    "availability": "in-stock",
    "featured": false,
    "description": "Coconut Oil selected for dependable quality and everyday use.",
    "shortDescription": "Coconut Oil, prepared for convenient everyday use.",
    "originalPrice": 235,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Coconut Oil"
      },
      {
        "label": "Category",
        "value": "Cooking Oils"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 58,
    "name": "Milk",
    "slug": "milk",
    "category": "Dairy",
    "categorySlug": "dairy",
    "subcategory": "Milk",
    "price": 130,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Casein_%28_Milk_Protein%29_Precipitation.jpg/960px-Casein_%28_Milk_Protein%29_Precipitation.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 39,
    "availability": "in-stock",
    "featured": false,
    "description": "Milk selected for dependable quality and everyday use.",
    "shortDescription": "Milk, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Milk"
      },
      {
        "label": "Category",
        "value": "Dairy"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 59,
    "name": "Paneer",
    "slug": "paneer",
    "category": "Dairy",
    "categorySlug": "dairy",
    "subcategory": "Paneer",
    "price": 130,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Panir_Paneer_Indian_cheese_fresh.jpg/960px-Panir_Paneer_Indian_cheese_fresh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 56,
    "availability": "in-stock",
    "featured": false,
    "description": "Paneer selected for dependable quality and everyday use.",
    "shortDescription": "Paneer, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Paneer"
      },
      {
        "label": "Category",
        "value": "Dairy"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 60,
    "name": "Curd (Dahi)",
    "slug": "curd",
    "category": "Dairy",
    "categorySlug": "dairy",
    "subcategory": "Curd",
    "price": 130,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Curd_Setting.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "rating": 4.9,
    "reviewCount": 73,
    "availability": "in-stock",
    "featured": false,
    "description": "Curd (Dahi) selected for dependable quality and everyday use.",
    "shortDescription": "Curd (Dahi), prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Curd (Dahi)"
      },
      {
        "label": "Category",
        "value": "Dairy"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 61,
    "name": "Butter",
    "slug": "butter",
    "category": "Dairy",
    "categorySlug": "dairy",
    "subcategory": "Butter",
    "price": 130,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Antoine_Vollon_-_Mound_of_Butter_-_National_Gallery_of_Art.jpg/960px-Antoine_Vollon_-_Mound_of_Butter_-_National_Gallery_of_Art.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 90,
    "availability": "in-stock",
    "featured": false,
    "description": "Butter selected for dependable quality and everyday use.",
    "shortDescription": "Butter, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Butter"
      },
      {
        "label": "Category",
        "value": "Dairy"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 62,
    "name": "Ghee",
    "slug": "ghee",
    "category": "Dairy",
    "categorySlug": "dairy",
    "subcategory": "Ghee",
    "price": 130,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ghee_2.jpg/960px-Ghee_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 107,
    "availability": "in-stock",
    "featured": false,
    "description": "Ghee selected for dependable quality and everyday use.",
    "shortDescription": "Ghee, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Ghee"
      },
      {
        "label": "Category",
        "value": "Dairy"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 63,
    "name": "Bread",
    "slug": "bread",
    "category": "Bakery",
    "categorySlug": "bakery",
    "subcategory": "Bread",
    "price": 110,
    "unit": "400g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Home_made_sour_dough_bread.jpg/960px-Home_made_sour_dough_bread.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 124,
    "availability": "low-stock",
    "featured": false,
    "description": "Bread selected for dependable quality and everyday use.",
    "shortDescription": "Bread, prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Bread"
      },
      {
        "label": "Category",
        "value": "Bakery"
      },
      {
        "label": "Pack size",
        "value": "400g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 64,
    "name": "Buns",
    "slug": "buns",
    "category": "Bakery",
    "categorySlug": "bakery",
    "subcategory": "Buns",
    "price": 110,
    "unit": "400g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/CrunchyBuns.JPG/960px-CrunchyBuns.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 141,
    "availability": "in-stock",
    "featured": false,
    "description": "Buns selected for dependable quality and everyday use.",
    "shortDescription": "Buns, prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Buns"
      },
      {
        "label": "Category",
        "value": "Bakery"
      },
      {
        "label": "Pack size",
        "value": "400g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 65,
    "name": "Cookies",
    "slug": "cookies",
    "category": "Bakery",
    "categorySlug": "bakery",
    "subcategory": "Cookies",
    "price": 110,
    "unit": "400g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Illuminated_wooden_shelf_with_many_glass_jars_containing_cookies_for_sale_in_Tokyo.jpg/960px-Illuminated_wooden_shelf_with_many_glass_jars_containing_cookies_for_sale_in_Tokyo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 158,
    "availability": "in-stock",
    "featured": false,
    "description": "Cookies selected for dependable quality and everyday use.",
    "shortDescription": "Cookies, prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Cookies"
      },
      {
        "label": "Category",
        "value": "Bakery"
      },
      {
        "label": "Pack size",
        "value": "400g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 66,
    "name": "Rusk",
    "slug": "rusk",
    "category": "Bakery",
    "categorySlug": "bakery",
    "subcategory": "Rusk",
    "price": 110,
    "unit": "400g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dean_Rusk%2C_Lyndon_B._Johnson_and_Robert_McNamara_in_Cabinet_Room_meeting_February_1968.jpg/960px-Dean_Rusk%2C_Lyndon_B._Johnson_and_Robert_McNamara_in_Cabinet_Room_meeting_February_1968.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 175,
    "availability": "in-stock",
    "featured": false,
    "description": "Rusk selected for dependable quality and everyday use.",
    "shortDescription": "Rusk, prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Rusk"
      },
      {
        "label": "Category",
        "value": "Bakery"
      },
      {
        "label": "Pack size",
        "value": "400g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 67,
    "name": "Sugar",
    "slug": "sugar",
    "category": "Grocery",
    "categorySlug": "grocery",
    "subcategory": "Sugar",
    "price": 100,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/The_Sugar_Land_Refinery.jpg/960px-The_Sugar_Land_Refinery.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 192,
    "availability": "in-stock",
    "featured": false,
    "description": "Sugar selected for dependable quality and everyday use.",
    "shortDescription": "Sugar, prepared for convenient everyday use.",
    "originalPrice": 112,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Sugar"
      },
      {
        "label": "Category",
        "value": "Grocery"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 68,
    "name": "Salt",
    "slug": "salt",
    "category": "Grocery",
    "categorySlug": "grocery",
    "subcategory": "Salt",
    "price": 100,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Marakkanam_Salt_Pans.JPG/960px-Marakkanam_Salt_Pans.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 209,
    "availability": "in-stock",
    "featured": false,
    "description": "Salt selected for dependable quality and everyday use.",
    "shortDescription": "Salt, prepared for convenient everyday use.",
    "originalPrice": 112,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Salt"
      },
      {
        "label": "Category",
        "value": "Grocery"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 69,
    "name": "Tea Powder",
    "slug": "tea-powder",
    "category": "Grocery",
    "categorySlug": "grocery",
    "subcategory": "Tea Powder",
    "price": 100,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Tea_egg_with_roasted_red_pepper_hummus_and_chili_powder_-_Massachusetts.jpg/960px-Tea_egg_with_roasted_red_pepper_hummus_and_chili_powder_-_Massachusetts.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 226,
    "availability": "in-stock",
    "featured": false,
    "description": "Tea Powder selected for dependable quality and everyday use.",
    "shortDescription": "Tea Powder, prepared for convenient everyday use.",
    "originalPrice": 112,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Tea Powder"
      },
      {
        "label": "Category",
        "value": "Grocery"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 70,
    "name": "Coffee Powder",
    "slug": "coffee-powder",
    "category": "Grocery",
    "categorySlug": "grocery",
    "subcategory": "Coffee Powder",
    "price": 100,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Coffee_powdered.jpg/960px-Coffee_powdered.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 243,
    "availability": "in-stock",
    "featured": false,
    "description": "Coffee Powder selected for dependable quality and everyday use.",
    "shortDescription": "Coffee Powder, prepared for convenient everyday use.",
    "originalPrice": 112,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Coffee Powder"
      },
      {
        "label": "Category",
        "value": "Grocery"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 71,
    "name": "Poha",
    "slug": "poha",
    "category": "Grocery",
    "categorySlug": "grocery",
    "subcategory": "Poha",
    "price": 100,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Poha_with_tomato_sause.jpg/960px-Poha_with_tomato_sause.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 260,
    "availability": "in-stock",
    "featured": false,
    "description": "Poha selected for dependable quality and everyday use.",
    "shortDescription": "Poha, prepared for convenient everyday use.",
    "originalPrice": 112,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Poha"
      },
      {
        "label": "Category",
        "value": "Grocery"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 72,
    "name": "Almonds",
    "slug": "almonds",
    "category": "Dry Fruits",
    "categorySlug": "dry-fruits",
    "subcategory": "Almonds",
    "price": 420,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Almonds_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_blanched.jpg/960px-Almonds_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_blanched.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 37,
    "availability": "in-stock",
    "featured": false,
    "description": "Almonds selected for dependable quality and everyday use.",
    "shortDescription": "Almonds, prepared for convenient everyday use.",
    "originalPrice": 470,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Almonds"
      },
      {
        "label": "Category",
        "value": "Dry Fruits"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 73,
    "name": "Cashews",
    "slug": "cashews",
    "category": "Dry Fruits",
    "categorySlug": "dry-fruits",
    "subcategory": "Cashews",
    "price": 420,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cashews_and_Raisins_in_hand%2C_in_West_Bengal%2C_India.jpg/960px-Cashews_and_Raisins_in_hand%2C_in_West_Bengal%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 54,
    "availability": "in-stock",
    "featured": false,
    "description": "Cashews selected for dependable quality and everyday use.",
    "shortDescription": "Cashews, prepared for convenient everyday use.",
    "originalPrice": 470,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Cashews"
      },
      {
        "label": "Category",
        "value": "Dry Fruits"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 74,
    "name": "Raisins",
    "slug": "raisins",
    "category": "Dry Fruits",
    "categorySlug": "dry-fruits",
    "subcategory": "Raisins",
    "price": 420,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Raisins_01.jpg/960px-Raisins_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 71,
    "availability": "in-stock",
    "featured": false,
    "description": "Raisins selected for dependable quality and everyday use.",
    "shortDescription": "Raisins, prepared for convenient everyday use.",
    "originalPrice": 470,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Raisins"
      },
      {
        "label": "Category",
        "value": "Dry Fruits"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 75,
    "name": "Pistachios",
    "slug": "pistachios",
    "category": "Dry Fruits",
    "categorySlug": "dry-fruits",
    "subcategory": "Pistachios",
    "price": 420,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Pistachios_in_Coalinga_-_September_2023_-_Sarah_Stierch_03.jpg/960px-Pistachios_in_Coalinga_-_September_2023_-_Sarah_Stierch_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 88,
    "availability": "in-stock",
    "featured": false,
    "description": "Pistachios selected for dependable quality and everyday use.",
    "shortDescription": "Pistachios, prepared for convenient everyday use.",
    "originalPrice": 470,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Pistachios"
      },
      {
        "label": "Category",
        "value": "Dry Fruits"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 76,
    "name": "Walnuts",
    "slug": "walnuts",
    "category": "Dry Fruits",
    "categorySlug": "dry-fruits",
    "subcategory": "Walnuts",
    "price": 420,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Walnuts_-_whole_and_open_with_halved_kernel.jpg/960px-Walnuts_-_whole_and_open_with_halved_kernel.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 105,
    "availability": "in-stock",
    "featured": false,
    "description": "Walnuts selected for dependable quality and everyday use.",
    "shortDescription": "Walnuts, prepared for convenient everyday use.",
    "originalPrice": 470,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Walnuts"
      },
      {
        "label": "Category",
        "value": "Dry Fruits"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 77,
    "name": "Mint (Pudina)",
    "slug": "mint",
    "category": "Herbs",
    "categorySlug": "herbs",
    "subcategory": "Mint",
    "price": 55,
    "unit": "100g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mint_leaves_%28Mentha_spicata%29.jpg/960px-Mint_leaves_%28Mentha_spicata%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 122,
    "availability": "in-stock",
    "featured": false,
    "description": "Mint (Pudina) selected for dependable quality and everyday use.",
    "shortDescription": "Mint (Pudina), prepared for convenient everyday use.",
    "originalPrice": 65,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Mint (Pudina)"
      },
      {
        "label": "Category",
        "value": "Herbs"
      },
      {
        "label": "Pack size",
        "value": "100g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 78,
    "name": "Coriander Leaves",
    "slug": "coriander-leaves",
    "category": "Herbs",
    "categorySlug": "herbs",
    "subcategory": "Coriander Leaves",
    "price": 55,
    "unit": "100g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Coriander_Leaves.jpg/960px-Coriander_Leaves.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 139,
    "availability": "in-stock",
    "featured": false,
    "description": "Coriander Leaves selected for dependable quality and everyday use.",
    "shortDescription": "Coriander Leaves, prepared for convenient everyday use.",
    "originalPrice": 65,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Coriander Leaves"
      },
      {
        "label": "Category",
        "value": "Herbs"
      },
      {
        "label": "Pack size",
        "value": "100g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 79,
    "name": "Curry Leaves",
    "slug": "curry-leaves",
    "category": "Herbs",
    "categorySlug": "herbs",
    "subcategory": "Curry Leaves",
    "price": 55,
    "unit": "100g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/%27Narasingha_Paat%27_or_Curry_leaves%2C_Scientific_Name-_Murraya_koenigii.jpg/960px-%27Narasingha_Paat%27_or_Curry_leaves%2C_Scientific_Name-_Murraya_koenigii.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 156,
    "availability": "in-stock",
    "featured": false,
    "description": "Curry Leaves selected for dependable quality and everyday use.",
    "shortDescription": "Curry Leaves, prepared for convenient everyday use.",
    "originalPrice": 65,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Curry Leaves"
      },
      {
        "label": "Category",
        "value": "Herbs"
      },
      {
        "label": "Pack size",
        "value": "100g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 80,
    "name": "Basil (Tulsi)",
    "slug": "basil",
    "category": "Herbs",
    "categorySlug": "herbs",
    "subcategory": "Basil",
    "price": 55,
    "unit": "100g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ocimum_Basilicum_leaf_lighted_by_the_left.jpg/960px-Ocimum_Basilicum_leaf_lighted_by_the_left.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 173,
    "availability": "in-stock",
    "featured": false,
    "description": "Basil (Tulsi) selected for dependable quality and everyday use.",
    "shortDescription": "Basil (Tulsi), prepared for convenient everyday use.",
    "originalPrice": 65,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Basil (Tulsi)"
      },
      {
        "label": "Category",
        "value": "Herbs"
      },
      {
        "label": "Pack size",
        "value": "100g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 81,
    "name": "Chia Seeds",
    "slug": "chia-seeds",
    "category": "Seeds",
    "categorySlug": "seeds",
    "subcategory": "Chia Seeds",
    "price": 180,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Chia_seeds_in_a_cup.jpg/960px-Chia_seeds_in_a_cup.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 190,
    "availability": "in-stock",
    "featured": false,
    "description": "Chia Seeds selected for dependable quality and everyday use.",
    "shortDescription": "Chia Seeds, prepared for convenient everyday use.",
    "originalPrice": 202,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Chia Seeds"
      },
      {
        "label": "Category",
        "value": "Seeds"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 82,
    "name": "Flax Seeds",
    "slug": "flax-seeds",
    "category": "Seeds",
    "categorySlug": "seeds",
    "subcategory": "Flax Seeds",
    "price": 180,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flax_seeds.jpg/960px-Flax_seeds.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 207,
    "availability": "in-stock",
    "featured": false,
    "description": "Flax Seeds selected for dependable quality and everyday use.",
    "shortDescription": "Flax Seeds, prepared for convenient everyday use.",
    "originalPrice": 202,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Flax Seeds"
      },
      {
        "label": "Category",
        "value": "Seeds"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 83,
    "name": "Sunflower Seeds",
    "slug": "sunflower-seeds",
    "category": "Seeds",
    "categorySlug": "seeds",
    "subcategory": "Sunflower Seeds",
    "price": 180,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sunflower_with_seeds_02.jpg/960px-Sunflower_with_seeds_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 224,
    "availability": "in-stock",
    "featured": false,
    "description": "Sunflower Seeds selected for dependable quality and everyday use.",
    "shortDescription": "Sunflower Seeds, prepared for convenient everyday use.",
    "originalPrice": 202,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Sunflower Seeds"
      },
      {
        "label": "Category",
        "value": "Seeds"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 84,
    "name": "Fruit Juice",
    "slug": "fruit-juice",
    "category": "Beverages",
    "categorySlug": "beverages",
    "subcategory": "Fruit Juice",
    "price": 140,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Orange_juice_1_edit1.jpg/960px-Orange_juice_1_edit1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 241,
    "availability": "in-stock",
    "featured": false,
    "description": "Fruit Juice selected for dependable quality and everyday use.",
    "shortDescription": "Fruit Juice, prepared for convenient everyday use.",
    "originalPrice": 157,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Fruit Juice"
      },
      {
        "label": "Category",
        "value": "Beverages"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 85,
    "name": "Buttermilk (Chaas)",
    "slug": "buttermilk",
    "category": "Beverages",
    "categorySlug": "beverages",
    "subcategory": "Buttermilk",
    "price": 140,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Buttermilk-%28right%29-and-Milk-%28left%29.jpg/960px-Buttermilk-%28right%29-and-Milk-%28left%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 258,
    "availability": "in-stock",
    "featured": false,
    "description": "Buttermilk (Chaas) selected for dependable quality and everyday use.",
    "shortDescription": "Buttermilk (Chaas), prepared for convenient everyday use.",
    "originalPrice": 157,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Buttermilk (Chaas)"
      },
      {
        "label": "Category",
        "value": "Beverages"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 86,
    "name": "Herbal Tea",
    "slug": "herbal-tea",
    "category": "Beverages",
    "categorySlug": "beverages",
    "subcategory": "Herbal Tea",
    "price": 140,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Krasnoyarsk_Stolby%2C_Herbal_tea%2C_Herbal_infusion%2C_Taiga_forest_tea%2C_Russia.jpg/960px-Krasnoyarsk_Stolby%2C_Herbal_tea%2C_Herbal_infusion%2C_Taiga_forest_tea%2C_Russia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 35,
    "availability": "in-stock",
    "featured": false,
    "description": "Herbal Tea selected for dependable quality and everyday use.",
    "shortDescription": "Herbal Tea, prepared for convenient everyday use.",
    "originalPrice": 157,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Herbal Tea"
      },
      {
        "label": "Category",
        "value": "Beverages"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 87,
    "name": "Coconut Water",
    "slug": "coconut-water",
    "category": "Beverages",
    "categorySlug": "beverages",
    "subcategory": "Coconut Water",
    "price": 140,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Coconut_water_vendor.jpg/960px-Coconut_water_vendor.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 52,
    "availability": "in-stock",
    "featured": false,
    "description": "Coconut Water selected for dependable quality and everyday use.",
    "shortDescription": "Coconut Water, prepared for convenient everyday use.",
    "originalPrice": 157,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Coconut Water"
      },
      {
        "label": "Category",
        "value": "Beverages"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 88,
    "name": "Frozen Peas",
    "slug": "frozen-peas",
    "category": "Frozen Foods",
    "categorySlug": "frozen-foods",
    "subcategory": "Frozen Peas",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/India_-_Varanasi_green_peas_-_2714.jpg/960px-India_-_Varanasi_green_peas_-_2714.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 69,
    "availability": "in-stock",
    "featured": false,
    "description": "Frozen Peas selected for dependable quality and everyday use.",
    "shortDescription": "Frozen Peas, prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Frozen Peas"
      },
      {
        "label": "Category",
        "value": "Frozen Foods"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 89,
    "name": "Frozen Corn",
    "slug": "frozen-corn",
    "category": "Frozen Foods",
    "categorySlug": "frozen-foods",
    "subcategory": "Frozen Corn",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Sweet_corn_2.jpg/960px-Sweet_corn_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 86,
    "availability": "in-stock",
    "featured": false,
    "description": "Frozen Corn selected for dependable quality and everyday use.",
    "shortDescription": "Frozen Corn, prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Frozen Corn"
      },
      {
        "label": "Category",
        "value": "Frozen Foods"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 90,
    "name": "Frozen Paratha",
    "slug": "frozen-paratha",
    "category": "Frozen Foods",
    "categorySlug": "frozen-foods",
    "subcategory": "Frozen Paratha",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Paratha_from_Narathiwas%2C_Thailand.jpg/960px-Paratha_from_Narathiwas%2C_Thailand.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 103,
    "availability": "in-stock",
    "featured": false,
    "description": "Frozen Paratha selected for dependable quality and everyday use.",
    "shortDescription": "Frozen Paratha, prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Frozen Paratha"
      },
      {
        "label": "Category",
        "value": "Frozen Foods"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 91,
    "name": "Frozen Mixed Vegetables",
    "slug": "frozen-mixed-vegetables",
    "category": "Frozen Foods",
    "categorySlug": "frozen-foods",
    "subcategory": "Frozen Mixed Vegetables",
    "price": 160,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mixed_Vegetables_-_Pad_Pad_Thai_Restaurant_2025-12-16.jpg/960px-Mixed_Vegetables_-_Pad_Pad_Thai_Restaurant_2025-12-16.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 120,
    "availability": "in-stock",
    "featured": false,
    "description": "Frozen Mixed Vegetables selected for dependable quality and everyday use.",
    "shortDescription": "Frozen Mixed Vegetables, prepared for convenient everyday use.",
    "originalPrice": 179,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Frozen Mixed Vegetables"
      },
      {
        "label": "Category",
        "value": "Frozen Foods"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 92,
    "name": "Oats",
    "slug": "oats",
    "category": "Health Foods",
    "categorySlug": "health-foods",
    "subcategory": "Oats",
    "price": 220,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Oats_in_a_field.jpg/960px-Oats_in_a_field.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 137,
    "availability": "in-stock",
    "featured": false,
    "description": "Oats selected for dependable quality and everyday use.",
    "shortDescription": "Oats, prepared for convenient everyday use.",
    "originalPrice": 246,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Oats"
      },
      {
        "label": "Category",
        "value": "Health Foods"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 93,
    "name": "Muesli",
    "slug": "muesli",
    "category": "Health Foods",
    "categorySlug": "health-foods",
    "subcategory": "Muesli",
    "price": 220,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Muesli.jpg/960px-Muesli.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 154,
    "availability": "in-stock",
    "featured": false,
    "description": "Muesli selected for dependable quality and everyday use.",
    "shortDescription": "Muesli, prepared for convenient everyday use.",
    "originalPrice": 246,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Muesli"
      },
      {
        "label": "Category",
        "value": "Health Foods"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 94,
    "name": "Quinoa",
    "slug": "quinoa",
    "category": "Health Foods",
    "categorySlug": "health-foods",
    "subcategory": "Quinoa",
    "price": 220,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Chenopodium_quinoa_-red_faro-_MHNT.BOT.2007.43.66.jpg/960px-Chenopodium_quinoa_-red_faro-_MHNT.BOT.2007.43.66.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 171,
    "availability": "low-stock",
    "featured": false,
    "description": "Quinoa selected for dependable quality and everyday use.",
    "shortDescription": "Quinoa, prepared for convenient everyday use.",
    "originalPrice": 246,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Quinoa"
      },
      {
        "label": "Category",
        "value": "Health Foods"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 95,
    "name": "Ragi Flour",
    "slug": "ragi-flour",
    "category": "Health Foods",
    "categorySlug": "health-foods",
    "subcategory": "Ragi Flour",
    "price": 220,
    "unit": "500g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Ragi_uttapam.jpg/960px-Ragi_uttapam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 188,
    "availability": "in-stock",
    "featured": false,
    "description": "Ragi Flour selected for dependable quality and everyday use.",
    "shortDescription": "Ragi Flour, prepared for convenient everyday use.",
    "originalPrice": 246,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Ragi Flour"
      },
      {
        "label": "Category",
        "value": "Health Foods"
      },
      {
        "label": "Pack size",
        "value": "500g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 96,
    "name": "Namkeen Mixture",
    "slug": "namkeen-mixture",
    "category": "Snacks",
    "categorySlug": "snacks",
    "subcategory": "Namkeen Mixture",
    "price": 130,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Milka_Oreo_Choco-Mix_Snack_Mix_3_%2832561285135%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "rating": 4.9,
    "reviewCount": 205,
    "availability": "in-stock",
    "featured": false,
    "description": "Namkeen Mixture selected for dependable quality and everyday use.",
    "shortDescription": "Namkeen Mixture, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Namkeen Mixture"
      },
      {
        "label": "Category",
        "value": "Snacks"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 97,
    "name": "Banana Chips",
    "slug": "banana-chips",
    "category": "Snacks",
    "categorySlug": "snacks",
    "subcategory": "Banana Chips",
    "price": 130,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kerala_banana_chips_Upperi_varuthath.jpg/960px-Kerala_banana_chips_Upperi_varuthath.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 222,
    "availability": "in-stock",
    "featured": false,
    "description": "Banana Chips selected for dependable quality and everyday use.",
    "shortDescription": "Banana Chips, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Banana Chips"
      },
      {
        "label": "Category",
        "value": "Snacks"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 98,
    "name": "Roasted Chana",
    "slug": "roasted-chana",
    "category": "Snacks",
    "categorySlug": "snacks",
    "subcategory": "Roasted Chana",
    "price": 130,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Roasted_Chickpea_Chana_with_Salt_and_Turmeric.jpg/960px-Roasted_Chickpea_Chana_with_Salt_and_Turmeric.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 239,
    "availability": "in-stock",
    "featured": false,
    "description": "Roasted Chana selected for dependable quality and everyday use.",
    "shortDescription": "Roasted Chana, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Roasted Chana"
      },
      {
        "label": "Category",
        "value": "Snacks"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 99,
    "name": "Sev",
    "slug": "sev",
    "category": "Snacks",
    "categorySlug": "snacks",
    "subcategory": "Sev",
    "price": 130,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sev_puri%2Cstreet_food%2Ckerala%2Cindia.jpg/960px-Sev_puri%2Cstreet_food%2Ckerala%2Cindia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 256,
    "availability": "in-stock",
    "featured": false,
    "description": "Sev selected for dependable quality and everyday use.",
    "shortDescription": "Sev, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Sev"
      },
      {
        "label": "Category",
        "value": "Snacks"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 100,
    "name": "Bhujia",
    "slug": "bhujia",
    "category": "Snacks",
    "categorySlug": "snacks",
    "subcategory": "Bhujia",
    "price": 130,
    "unit": "250g",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Shop_selling_Bikaneri_bhujia_in_Jaipur.jpg/960px-Shop_selling_Bikaneri_bhujia_in_Jaipur.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 33,
    "availability": "in-stock",
    "featured": false,
    "description": "Bhujia selected for dependable quality and everyday use.",
    "shortDescription": "Bhujia, prepared for convenient everyday use.",
    "originalPrice": 146,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Bhujia"
      },
      {
        "label": "Category",
        "value": "Snacks"
      },
      {
        "label": "Pack size",
        "value": "250g"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 101,
    "name": "Dish Wash Liquid",
    "slug": "dish-wash-liquid",
    "category": "Household Essentials",
    "categorySlug": "household-essentials",
    "subcategory": "Dish Wash Liquid",
    "price": 120,
    "unit": "1pc",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Soap_in_blue_dish.JPG/960px-Soap_in_blue_dish.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 50,
    "availability": "in-stock",
    "featured": false,
    "description": "Dish Wash Liquid selected for dependable quality and everyday use.",
    "shortDescription": "Dish Wash Liquid, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Dish Wash Liquid"
      },
      {
        "label": "Category",
        "value": "Household Essentials"
      },
      {
        "label": "Pack size",
        "value": "1pc"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 102,
    "name": "Matchbox",
    "slug": "matchbox",
    "category": "Household Essentials",
    "categorySlug": "household-essentials",
    "subcategory": "Matchbox",
    "price": 120,
    "unit": "1pc",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/68/Matchbox_window_manager_logo.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "rating": 4.9,
    "reviewCount": 67,
    "availability": "in-stock",
    "featured": false,
    "description": "Matchbox selected for dependable quality and everyday use.",
    "shortDescription": "Matchbox, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Matchbox"
      },
      {
        "label": "Category",
        "value": "Household Essentials"
      },
      {
        "label": "Pack size",
        "value": "1pc"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 103,
    "name": "Aluminium Foil",
    "slug": "aluminium-foil",
    "category": "Household Essentials",
    "categorySlug": "household-essentials",
    "subcategory": "Aluminium Foil",
    "price": 120,
    "unit": "1pc",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Aluminum_foil_1.jpg/960px-Aluminum_foil_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 84,
    "availability": "in-stock",
    "featured": false,
    "description": "Aluminium Foil selected for dependable quality and everyday use.",
    "shortDescription": "Aluminium Foil, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Aluminium Foil"
      },
      {
        "label": "Category",
        "value": "Household Essentials"
      },
      {
        "label": "Pack size",
        "value": "1pc"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 104,
    "name": "Garbage Bags",
    "slug": "garbage-bags",
    "category": "Household Essentials",
    "categorySlug": "household-essentials",
    "subcategory": "Garbage Bags",
    "price": 120,
    "unit": "1pc",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Black_garbage_bag.jpg/960px-Black_garbage_bag.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 101,
    "availability": "in-stock",
    "featured": false,
    "description": "Garbage Bags selected for dependable quality and everyday use.",
    "shortDescription": "Garbage Bags, prepared for convenient everyday use.",
    "originalPrice": 134,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Garbage Bags"
      },
      {
        "label": "Category",
        "value": "Household Essentials"
      },
      {
        "label": "Pack size",
        "value": "1pc"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 105,
    "name": "Soap",
    "slug": "soap",
    "category": "Personal Care",
    "categorySlug": "personal-care",
    "subcategory": "Soap",
    "price": 150,
    "unit": "1pc",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lipid_Islands_on_Soap_Bubble.jpg/960px-Lipid_Islands_on_Soap_Bubble.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 118,
    "availability": "in-stock",
    "featured": false,
    "description": "Soap selected for dependable quality and everyday use.",
    "shortDescription": "Soap, prepared for convenient everyday use.",
    "originalPrice": 168,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Soap"
      },
      {
        "label": "Category",
        "value": "Personal Care"
      },
      {
        "label": "Pack size",
        "value": "1pc"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 106,
    "name": "Shampoo",
    "slug": "shampoo",
    "category": "Personal Care",
    "categorySlug": "personal-care",
    "subcategory": "Shampoo",
    "price": 150,
    "unit": "1pc",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/VS_SASSON_SHAMPOO_CHINA_VERSION.jpg/960px-VS_SASSON_SHAMPOO_CHINA_VERSION.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 135,
    "availability": "in-stock",
    "featured": false,
    "description": "Shampoo selected for dependable quality and everyday use.",
    "shortDescription": "Shampoo, prepared for convenient everyday use.",
    "originalPrice": 168,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Shampoo"
      },
      {
        "label": "Category",
        "value": "Personal Care"
      },
      {
        "label": "Pack size",
        "value": "1pc"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 107,
    "name": "Toothpaste",
    "slug": "toothpaste",
    "category": "Personal Care",
    "categorySlug": "personal-care",
    "subcategory": "Toothpaste",
    "price": 150,
    "unit": "1pc",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Toothpasteonbrush.jpg/960px-Toothpasteonbrush.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 152,
    "availability": "in-stock",
    "featured": false,
    "description": "Toothpaste selected for dependable quality and everyday use.",
    "shortDescription": "Toothpaste, prepared for convenient everyday use.",
    "originalPrice": 168,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Toothpaste"
      },
      {
        "label": "Category",
        "value": "Personal Care"
      },
      {
        "label": "Pack size",
        "value": "1pc"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 108,
    "name": "Hand Sanitizer",
    "slug": "hand-sanitizer",
    "category": "Personal Care",
    "categorySlug": "personal-care",
    "subcategory": "Hand Sanitizer",
    "price": 150,
    "unit": "1pc",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Makeshift_hand_sanitizer_in_Bosnia.jpg/960px-Makeshift_hand_sanitizer_in_Bosnia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 169,
    "availability": "in-stock",
    "featured": false,
    "description": "Hand Sanitizer selected for dependable quality and everyday use.",
    "shortDescription": "Hand Sanitizer, prepared for convenient everyday use.",
    "originalPrice": 168,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Hand Sanitizer"
      },
      {
        "label": "Category",
        "value": "Personal Care"
      },
      {
        "label": "Pack size",
        "value": "1pc"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 109,
    "name": "Floor Cleaner",
    "slug": "floor-cleaner",
    "category": "Cleaning Products",
    "categorySlug": "cleaning-products",
    "subcategory": "Floor Cleaner",
    "price": 170,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Floor_cleaner.jpg/960px-Floor_cleaner.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 186,
    "availability": "in-stock",
    "featured": false,
    "description": "Floor Cleaner selected for dependable quality and everyday use.",
    "shortDescription": "Floor Cleaner, prepared for convenient everyday use.",
    "originalPrice": 190,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Floor Cleaner"
      },
      {
        "label": "Category",
        "value": "Cleaning Products"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 110,
    "name": "Toilet Cleaner",
    "slug": "toilet-cleaner",
    "category": "Cleaning Products",
    "categorySlug": "cleaning-products",
    "subcategory": "Toilet Cleaner",
    "price": 170,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ToiletcleanersbyAlofok_%284%29.JPG/960px-ToiletcleanersbyAlofok_%284%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 203,
    "availability": "in-stock",
    "featured": false,
    "description": "Toilet Cleaner selected for dependable quality and everyday use.",
    "shortDescription": "Toilet Cleaner, prepared for convenient everyday use.",
    "originalPrice": 190,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Toilet Cleaner"
      },
      {
        "label": "Category",
        "value": "Cleaning Products"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 111,
    "name": "Detergent Powder",
    "slug": "detergent-powder",
    "category": "Cleaning Products",
    "categorySlug": "cleaning-products",
    "subcategory": "Detergent Powder",
    "price": 170,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ghari_Detergent_1_kg_Pack.jpg/960px-Ghari_Detergent_1_kg_Pack.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 220,
    "availability": "in-stock",
    "featured": false,
    "description": "Detergent Powder selected for dependable quality and everyday use.",
    "shortDescription": "Detergent Powder, prepared for convenient everyday use.",
    "originalPrice": 190,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Detergent Powder"
      },
      {
        "label": "Category",
        "value": "Cleaning Products"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 112,
    "name": "Glass Cleaner",
    "slug": "glass-cleaner",
    "category": "Cleaning Products",
    "categorySlug": "cleaning-products",
    "subcategory": "Glass Cleaner",
    "price": 170,
    "unit": "1L",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Window_cleaner_on_Haulotte_HA15IP_lift.jpg/960px-Window_cleaner_on_Haulotte_HA15IP_lift.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.7,
    "reviewCount": 237,
    "availability": "in-stock",
    "featured": false,
    "description": "Glass Cleaner selected for dependable quality and everyday use.",
    "shortDescription": "Glass Cleaner, prepared for convenient everyday use.",
    "originalPrice": 190,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Glass Cleaner"
      },
      {
        "label": "Category",
        "value": "Cleaning Products"
      },
      {
        "label": "Pack size",
        "value": "1L"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 113,
    "name": "Sugarcane",
    "slug": "sugarcane",
    "category": "Farm Produce",
    "categorySlug": "farm-produce",
    "subcategory": "Sugarcane",
    "price": 110,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cut_sugarcane.jpg/960px-Cut_sugarcane.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.8,
    "reviewCount": 254,
    "availability": "in-stock",
    "featured": false,
    "description": "Sugarcane selected for dependable quality and everyday use.",
    "shortDescription": "Sugarcane, prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Sugarcane"
      },
      {
        "label": "Category",
        "value": "Farm Produce"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 114,
    "name": "Coconut",
    "slug": "coconut",
    "category": "Farm Produce",
    "categorySlug": "farm-produce",
    "subcategory": "Coconut",
    "price": 110,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Coconuts_-_single_and_cracked_open.jpg/960px-Coconuts_-_single_and_cracked_open.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.9,
    "reviewCount": 31,
    "availability": "in-stock",
    "featured": false,
    "description": "Coconut selected for dependable quality and everyday use.",
    "shortDescription": "Coconut, prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Coconut"
      },
      {
        "label": "Category",
        "value": "Farm Produce"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 115,
    "name": "Groundnut (Raw)",
    "slug": "groundnut",
    "category": "Farm Produce",
    "categorySlug": "farm-produce",
    "subcategory": "Groundnut",
    "price": 110,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Groundnuts_farm.jpg/960px-Groundnuts_farm.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.4,
    "reviewCount": 48,
    "availability": "in-stock",
    "featured": false,
    "description": "Groundnut (Raw) selected for dependable quality and everyday use.",
    "shortDescription": "Groundnut (Raw), prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Groundnut (Raw)"
      },
      {
        "label": "Category",
        "value": "Farm Produce"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 116,
    "name": "Maize",
    "slug": "maize",
    "category": "Farm Produce",
    "categorySlug": "farm-produce",
    "subcategory": "Maize",
    "price": 110,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Maize_field_in_Bavaria_in_Summer_2013.JPG/960px-Maize_field_in_Bavaria_in_Summer_2013.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.5,
    "reviewCount": 65,
    "availability": "in-stock",
    "featured": false,
    "description": "Maize selected for dependable quality and everyday use.",
    "shortDescription": "Maize, prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Maize"
      },
      {
        "label": "Category",
        "value": "Farm Produce"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  },
  {
    "id": 117,
    "name": "Bajra",
    "slug": "bajra",
    "category": "Farm Produce",
    "categorySlug": "farm-produce",
    "subcategory": "Bajra",
    "price": 110,
    "unit": "1kg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Bajra_Ghar_Bajra_House_Pashupati_Area_Pashupatinath_Kathmandu_Nepal_Rajesh_Dhungana.jpg/960px-Bajra_Ghar_Bajra_House_Pashupati_Area_Pashupatinath_Kathmandu_Nepal_Rajesh_Dhungana.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rating": 4.6,
    "reviewCount": 82,
    "availability": "in-stock",
    "featured": false,
    "description": "Bajra selected for dependable quality and everyday use.",
    "shortDescription": "Bajra, prepared for convenient everyday use.",
    "originalPrice": 123,
    "features": [
      "Product-specific selection",
      "Checked before dispatch",
      "Packed for everyday use"
    ],
    "specifications": [
      {
        "label": "Product",
        "value": "Bajra"
      },
      {
        "label": "Category",
        "value": "Farm Produce"
      },
      {
        "label": "Pack size",
        "value": "1kg"
      },
      {
        "label": "Image source",
        "value": "Wikimedia Commons"
      }
    ]
  }
];

export const products = productSeed;
export const featuredProducts = products.filter((product) => product.featured);
export const bestSellerProducts = [...products].sort((a, b) => b.reviewCount - a.reviewCount).slice(0, 4);
export const newArrivalProducts = products.slice(0, 4);
export const seasonalProducts = products.filter((product) => ["fresh-fruits", "fresh-vegetables"].includes(product.categorySlug)).slice(0, 4);
export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const getRelatedProducts = (product: Product) => products.filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id).slice(0, 4);
