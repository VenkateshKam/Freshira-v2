import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = "/root/app/code";
const assetDir = path.join(root, "public/products");
const outputManifest = path.join(root, "public/products/attributions.json");
const outputProducts = path.join(root, "generated-products.ts");
const api = "https://commons.wikimedia.org/w/api.php";
const headers = { "User-Agent": "FreshiraCatalogAssetVerifier/1.0 (catalog build; contact unavailable)" };

const items = [
  ["organic-apples", "Organic Apples", "Fresh Fruits", "fresh-fruits", "Apples"],
  ["fresh-bananas", "Fresh Bananas", "Fresh Fruits", "fresh-fruits", "Bananas"],
  ["fresh-oranges", "Fresh Oranges", "Fresh Fruits", "fresh-fruits", "Citrus"],
  ["fresh-mangoes", "Fresh Mangoes", "Fresh Fruits", "fresh-fruits", "Mangoes"],
  ["fresh-papaya", "Fresh Papaya", "Fresh Fruits", "fresh-fruits", "Tropical Fruit"],
  ["fresh-pineapple", "Fresh Pineapple", "Fresh Fruits", "fresh-fruits", "Tropical Fruit"],
  ["fresh-grapes", "Fresh Grapes", "Fresh Fruits", "fresh-fruits", "Grapes"],
  ["fresh-strawberries", "Fresh Strawberries", "Fresh Fruits", "fresh-fruits", "Berries"],
  ["fresh-pears", "Fresh Pears", "Fresh Fruits", "fresh-fruits", "Pears"],
  ["fresh-peaches", "Fresh Peaches", "Fresh Fruits", "fresh-fruits", "Stone Fruit"],
  ["fresh-plums", "Fresh Plums", "Fresh Fruits", "fresh-fruits", "Stone Fruit"],
  ["fresh-cherries", "Fresh Cherries", "Fresh Fruits", "fresh-fruits", "Stone Fruit"],
  ["fresh-lemons", "Fresh Lemons", "Fresh Fruits", "fresh-fruits", "Citrus"],
  ["fresh-limes", "Fresh Limes", "Fresh Fruits", "fresh-fruits", "Citrus"],
  ["fresh-pomegranates", "Fresh Pomegranates", "Fresh Fruits", "fresh-fruits", "Pomegranates"],
  ["fresh-watermelon", "Fresh Watermelon", "Fresh Fruits", "fresh-fruits", "Melons"],
  ["fresh-cantaloupe", "Fresh Cantaloupe", "Fresh Fruits", "fresh-fruits", "Melons"],
  ["fresh-kiwi", "Fresh Kiwi", "Fresh Fruits", "fresh-fruits", "Tropical Fruit"],
  ["fresh-guava", "Fresh Guava", "Fresh Fruits", "fresh-fruits", "Tropical Fruit"],
  ["fresh-coconut", "Fresh Coconut", "Fresh Fruits", "fresh-fruits", "Tropical Fruit"],
  ["organic-tomatoes", "Organic Tomatoes", "Fresh Vegetables", "fresh-vegetables", "Tomatoes"],
  ["fresh-spinach", "Fresh Spinach", "Fresh Vegetables", "fresh-vegetables", "Leafy Greens"],
  ["fresh-carrots", "Fresh Carrots", "Fresh Vegetables", "fresh-vegetables", "Root Vegetables"],
  ["fresh-broccoli", "Fresh Broccoli", "Fresh Vegetables", "fresh-vegetables", "Cruciferous Vegetables"],
  ["fresh-cauliflower", "Fresh Cauliflower", "Fresh Vegetables", "fresh-vegetables", "Cruciferous Vegetables"],
  ["fresh-okra", "Fresh Okra", "Fresh Vegetables", "fresh-vegetables", "Pods"],
  ["fresh-potatoes", "Fresh Potatoes", "Fresh Vegetables", "fresh-vegetables", "Root Vegetables"],
  ["fresh-sweet-potatoes", "Fresh Sweet Potatoes", "Fresh Vegetables", "fresh-vegetables", "Root Vegetables"],
  ["fresh-onions", "Fresh Onions", "Fresh Vegetables", "fresh-vegetables", "Alliums"],
  ["fresh-garlic", "Fresh Garlic", "Fresh Vegetables", "fresh-vegetables", "Alliums"],
  ["fresh-ginger", "Fresh Ginger", "Fresh Vegetables", "fresh-vegetables", "Roots"],
  ["fresh-bell-peppers", "Fresh Bell Peppers", "Fresh Vegetables", "fresh-vegetables", "Peppers"],
  ["fresh-cucumbers", "Fresh Cucumbers", "Fresh Vegetables", "fresh-vegetables", "Salad Vegetables"],
  ["fresh-eggplant", "Fresh Eggplant", "Fresh Vegetables", "fresh-vegetables", "Nightshades"],
  ["fresh-zucchini", "Fresh Zucchini", "Fresh Vegetables", "fresh-vegetables", "Squash"],
  ["fresh-cabbage", "Fresh Cabbage", "Fresh Vegetables", "fresh-vegetables", "Cruciferous Vegetables"],
  ["fresh-lettuce", "Fresh Lettuce", "Fresh Vegetables", "fresh-vegetables", "Leafy Greens"],
  ["fresh-peas", "Fresh Peas", "Fresh Vegetables", "fresh-vegetables", "Legumes"],
  ["fresh-corn", "Fresh Corn", "Fresh Vegetables", "fresh-vegetables", "Sweet Corn"],
  ["fresh-beetroot", "Fresh Beetroot", "Fresh Vegetables", "fresh-vegetables", "Root Vegetables"],
  ["fresh-radishes", "Fresh Radishes", "Fresh Vegetables", "fresh-vegetables", "Root Vegetables"],
  ["fresh-turnips", "Fresh Turnips", "Fresh Vegetables", "fresh-vegetables", "Root Vegetables"],
  ["fresh-green-beans", "Fresh Green Beans", "Fresh Vegetables", "fresh-vegetables", "Legumes"],
  ["fresh-asparagus", "Fresh Asparagus", "Fresh Vegetables", "fresh-vegetables", "Stems"],
  ["fresh-artichokes", "Fresh Artichokes", "Fresh Vegetables", "fresh-vegetables", "Flower Vegetables"],
  ["dragon-fruit", "Dragon Fruit", "Exotic Fruits", "exotic-fruits", "Tropical Fruit"],
  ["passion-fruit", "Passion Fruit", "Exotic Fruits", "exotic-fruits", "Tropical Fruit"],
  ["rambutan", "Rambutan", "Exotic Fruits", "exotic-fruits", "Tropical Fruit"],
  ["lychee", "Lychee", "Exotic Fruits", "exotic-fruits", "Tropical Fruit"],
  ["durian", "Durian", "Exotic Fruits", "exotic-fruits", "Tropical Fruit"],
  ["jackfruit", "Jackfruit", "Exotic Fruits", "exotic-fruits", "Tropical Fruit"],
  ["starfruit", "Starfruit", "Exotic Fruits", "exotic-fruits", "Tropical Fruit"],
  ["persimmon", "Persimmon", "Exotic Fruits", "exotic-fruits", "Seasonal Fruit"],
  ["fresh-figs", "Fresh Figs", "Exotic Fruits", "exotic-fruits", "Specialty Fruit"],
  ["fresh-avocado", "Fresh Avocado", "Exotic Fruits", "exotic-fruits", "Specialty Fruit"],
  ["fresh-kale", "Fresh Kale", "Exotic Vegetables", "exotic-vegetables", "Leafy Greens"],
  ["bok-choy", "Bok Choy", "Exotic Vegetables", "exotic-vegetables", "Leafy Greens"],
  ["fennel", "Fresh Fennel", "Exotic Vegetables", "exotic-vegetables", "Specialty Vegetables"],
  ["brussels-sprouts", "Brussels Sprouts", "Exotic Vegetables", "exotic-vegetables", "Cruciferous Vegetables"],
  ["swiss-chard", "Swiss Chard", "Exotic Vegetables", "exotic-vegetables", "Leafy Greens"],
  ["basmati-rice", "Basmati Rice", "Rice", "rice", "Long Grain Rice"],
  ["brown-rice", "Brown Rice", "Rice", "rice", "Whole Grain Rice"],
  ["jasmine-rice", "Jasmine Rice", "Rice", "rice", "Fragrant Rice"],
  ["wild-rice", "Wild Rice", "Rice", "rice", "Specialty Rice"],
  ["red-rice", "Red Rice", "Rice", "rice", "Whole Grain Rice"],
  ["black-rice", "Black Rice", "Rice", "rice", "Specialty Rice"],
  ["arborio-rice", "Arborio Rice", "Rice", "rice", "Short Grain Rice"],
  ["sticky-rice", "Sticky Rice", "Rice", "rice", "Specialty Rice"],
  ["whole-wheat-flour", "Whole Wheat Flour", "Flour", "flour", "Wheat Flour"],
  ["rye-flour", "Rye Flour", "Flour", "flour", "Grain Flour"],
  ["semolina", "Semolina", "Flour", "flour", "Wheat Flour"],
  ["rolled-oats", "Rolled Oats", "Wheat", "wheat", "Breakfast Grains"],
  ["barley", "Pearl Barley", "Wheat", "wheat", "Whole Grains"],
  ["buckwheat-flour", "Buckwheat Flour", "Flour", "flour", "Alternative Flour"],
  ["cornmeal", "Cornmeal", "Flour", "flour", "Maize Flour"],
  ["chickpea-flour", "Chickpea Flour", "Flour", "flour", "Pulse Flour"],
  ["green-lentils", "Green Lentils", "Pulses", "pulses", "Lentils"],
  ["red-lentils", "Red Lentils", "Pulses", "pulses", "Lentils"],
  ["brown-lentils", "Brown Lentils", "Pulses", "pulses", "Lentils"],
  ["chickpeas", "Chickpeas", "Pulses", "pulses", "Beans"],
  ["kidney-beans", "Kidney Beans", "Pulses", "pulses", "Beans"],
  ["black-beans", "Black Beans", "Pulses", "pulses", "Beans"],
  ["mung-beans", "Mung Beans", "Pulses", "pulses", "Beans"],
  ["split-peas", "Split Peas", "Pulses", "pulses", "Peas"],
  ["ground-turmeric", "Ground Turmeric", "Spices", "spices", "Ground Spices"],
  ["cinnamon", "Cinnamon", "Spices", "spices", "Whole Spices"],
  ["cumin", "Cumin", "Spices", "spices", "Whole Spices"],
  ["coriander", "Coriander", "Spices", "spices", "Whole Spices"],
  ["cardamom", "Cardamom", "Spices", "spices", "Whole Spices"],
  ["cloves", "Cloves", "Spices", "spices", "Whole Spices"],
  ["black-pepper", "Black Pepper", "Spices", "spices", "Whole Spices"],
  ["paprika", "Paprika", "Spices", "spices", "Ground Spices"],
  ["saffron", "Saffron", "Spices", "spices", "Premium Spices"],
  ["nutmeg", "Nutmeg", "Spices", "spices", "Whole Spices"],
  ["mustard-oil", "Mustard Oil", "Cooking Oils", "cooking-oils", "Cold Pressed Oils"],
  ["olive-oil", "Olive Oil", "Cooking Oils", "cooking-oils", "Cold Pressed Oils"],
  ["sunflower-oil", "Sunflower Oil", "Cooking Oils", "cooking-oils", "Cooking Oils"],
  ["coconut-oil", "Coconut Oil", "Cooking Oils", "cooking-oils", "Cold Pressed Oils"],
  ["sesame-oil", "Sesame Oil", "Cooking Oils", "cooking-oils", "Cold Pressed Oils"],
  ["fresh-milk", "Fresh Milk", "Dairy", "dairy", "Milk"],
  ["plain-yogurt", "Plain Yogurt", "Dairy", "dairy", "Cultured Dairy"],
  ["cultured-butter", "Cultured Butter", "Dairy", "dairy", "Butter"],
  ["cheddar-cheese", "Cheddar Cheese", "Dairy", "dairy", "Cheese"],
  ["fresh-cream", "Fresh Cream", "Dairy", "dairy", "Cream"],
  ["organic-honey", "Organic Honey", "Grocery", "grocery", "Sweeteners"],
  ["cane-sugar", "Cane Sugar", "Grocery", "grocery", "Sweeteners"],
  ["sea-salt", "Sea Salt", "Grocery", "grocery", "Seasonings"],
  ["black-tea", "Black Tea", "Beverages", "beverages", "Tea"],
  ["ground-coffee", "Ground Coffee", "Beverages", "beverages", "Coffee"],
  ["sourdough-bread", "Sourdough Bread", "Bakery", "bakery", "Bread"],
  ["croissants", "Croissants", "Bakery", "bakery", "Pastries"],
  ["whole-grain-crackers", "Whole Grain Crackers", "Snacks", "snacks", "Crackers"],
  ["granola", "Granola", "Health Foods", "health-foods", "Breakfast Foods"],
  ["peanut-butter", "Peanut Butter", "Grocery", "grocery", "Nut Butters"],
  ["almonds", "Almonds", "Dry Fruits", "dry-fruits", "Nuts"],
  ["walnuts", "Walnuts", "Dry Fruits", "dry-fruits", "Nuts"],
  ["cashews", "Cashews", "Dry Fruits", "dry-fruits", "Nuts"],
  ["raisins", "Raisins", "Dry Fruits", "dry-fruits", "Dried Fruit"],
  ["dates", "Dates", "Dry Fruits", "dry-fruits", "Dried Fruit"],
  ["chia-seeds", "Chia Seeds", "Seeds", "seeds", "Edible Seeds"],
  ["flax-seeds", "Flax Seeds", "Seeds", "seeds", "Edible Seeds"],
  ["sunflower-seeds", "Sunflower Seeds", "Seeds", "seeds", "Edible Seeds"],
  ["orange-juice", "Orange Juice", "Beverages", "beverages", "Fruit Juice"],
  ["apple-juice", "Apple Juice", "Beverages", "beverages", "Fruit Juice"],
  ["frozen-peas", "Frozen Peas", "Frozen Foods", "frozen-foods", "Frozen Vegetables"],
  ["frozen-berries", "Frozen Berries", "Frozen Foods", "frozen-foods", "Frozen Fruit"],
  ["tofu", "Tofu", "Health Foods", "health-foods", "Plant Protein"],
  ["dark-chocolate", "Dark Chocolate", "Snacks", "snacks", "Chocolate"],
  ["rice-noodles", "Rice Noodles", "Grocery", "grocery", "Noodles"],
  ["quinoa", "Quinoa", "Health Foods", "health-foods", "Whole Grains"],
];

if (items.length !== 130) throw new Error(`Expected 130 product definitions, got ${items.length}`);
await mkdir(assetDir, { recursive: true });
const stripHtml = (value = "") => value.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
const groupPattern = /assortment|assorted|variety|varieties|collection|collage|basket|market|pile|group|mixed|mix of|still life|display of|\bbunch\b|\bstack\b|\band\b|&/i;
const imagePattern = /\.(jpe?g|png|webp)(?:$|[?#])/i;
const existingHashes = new Set();
for (const item of items) {
  const target = path.join(assetDir, `${item[0]}.jpg`);
  if (existsSync(target)) existingHashes.add(createHash("sha256").update(await readFile(target)).digest("hex"));
}
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
async function search(term, offset = 0) {
  const params = new URLSearchParams({ action: "query", generator: "search", gsrsearch: term, gsrnamespace: "6", gsrlimit: "20", gsroffset: String(offset), prop: "imageinfo", iiprop: "url|extmetadata", iiurlwidth: "960", format: "json", origin: "*" });
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(`${api}?${params}`, { headers });
    if (response.ok) {
      await sleep(700);
      return response.json();
    }
    if (response.status !== 429) throw new Error(`Commons API ${response.status} for ${term}`);
    await sleep(4000 * (attempt + 1));
  }
  throw new Error(`Commons API rate limit persisted for ${term}`);
}
const manifest = [];
const usedTitles = new Set();
const aliases = { pineapple: ["ananas"], mangoes: ["mango", "mangifera"], papaya: ["carica"], cantaloupe: ["melon"], kiwi: ["kiwifruit"], "dragon-fruit": ["pitaya"], "passion-fruit": ["passiflora"], rambutan: ["nephelium"], lychee: ["litchi"], durian: ["durio"], jackfruit: ["artocarpus"], starfruit: ["carambola"], persimmon: ["kaki"], "fresh-figs": ["fig"], "fresh-avocado": ["persea"], "bok-choy": ["pak choi"], "brussels-sprouts": ["brussels"], "swiss-chard": ["chard"], chickpeas: ["garbanzo"], "mung-beans": ["moong"], "ground-turmeric": ["curcuma"], cinnamon: ["cinnamomum"], cardamom: ["elettaria"], cloves: ["syzygium"], "black-pepper": ["piper"], paprika: ["capsicum"], saffron: ["crocus"], nutmeg: ["myristica"], "plain-yogurt": ["yoghurt"], "fresh-cream": ["cream"], "sourdough-bread": ["sourdough"], "whole-grain-crackers": ["cracker"], raisins: ["raisin"], dates: ["date"], "orange-juice": ["orange"], "apple-juice": ["apple"], "frozen-berries": ["berry"], tofu: ["soya"], "dark-chocolate": ["chocolate"], "rice-noodles": ["noodle"], quinoa: ["chenopodium"] };
for (let index = 0; index < items.length; index += 1) {
  const [slug, name, category, categorySlug, subcategory] = items[index];
  const searchName = name.replace(/^(organic|fresh|ground|plain|cultured)\s+/i, "");
  const baseWords = searchName.toLowerCase().split(/\s+/).filter((word) => word.length >= 4);
  const singularWords = baseWords.map((word) => word.endsWith("ies") ? `${word.slice(0, -3)}y` : word.endsWith("s") ? word.slice(0, -1) : word);
  const requiredWords = [...baseWords, ...singularWords, ...(aliases[slug] || [])];
  const searchTerms = [searchName, ...singularWords, ...(aliases[slug] || [])];
  let chosen;
  for (const searchTerm of searchTerms) {
    for (let offset = 0; offset <= 80 && !chosen; offset += 20) {
      const data = await search(searchTerm, offset);
    for (const page of Object.values(data.query?.pages || {})) {
      const info = page.imageinfo?.[0];
      const metadata = info?.extmetadata || {};
      const title = page.title?.replace(/^File:/, "") || "";
      const description = stripHtml(metadata.ImageDescription?.value || "");
      const searchableText = `${title} ${description}`.toLowerCase();
      const license = metadata.LicenseShortName?.value || "";
      if (!info?.thumburl || !imagePattern.test(info.thumburl) || !license || license.toLowerCase().includes("unknown") || !requiredWords.some((word) => searchableText.includes(word)) || groupPattern.test(`${title} ${description}`) || usedTitles.has(title)) continue;
      try {
        const imageResponse = await fetch(info.thumburl, { headers });
        if (!imageResponse.ok) continue;
        const bytes = Buffer.from(await imageResponse.arrayBuffer());
        if (bytes.length < 10000) continue;
        const hash = createHash("sha256").update(bytes).digest("hex");
        if (existingHashes.has(hash)) continue;
        chosen = { page, info, metadata, title, description, license, bytes, hash };
        break;
      } catch {}
      }
    }
  }
  if (!chosen) throw new Error(`Could not verify a unique licensed Wikimedia Commons image for ${name}`);
  const filename = `${slug}.jpg`;
  await writeFile(path.join(assetDir, filename), chosen.bytes);
  usedTitles.add(chosen.title);
  existingHashes.add(chosen.hash);
  const author = stripHtml(chosen.metadata.Artist?.value || chosen.metadata.Attribution?.value || chosen.metadata.Credit?.value || "Wikimedia Commons contributor");
  manifest.push({ product: slug, asset: `/products/${filename}`, source: chosen.info.descriptionurl, title: chosen.title, author, license: chosen.license, licenseUrl: chosen.metadata.LicenseUrl?.value || "https://creativecommons.org/share-your-work/cclicenses/", sha256: chosen.hash });
  console.log(`${index + 1}/130 ${name} <- ${chosen.title}`);
}
await writeFile(outputManifest, `${JSON.stringify(manifest)}\n`);
const productLines = items.map(([slug, name, category, categorySlug, subcategory], index) => {
  const price = 35 + ((index * 37) % 465);
  const unit = categorySlug === "cooking-oils" || categorySlug === "beverages" ? "1L" : categorySlug === "dairy" ? "500g" : categorySlug === "spices" || categorySlug === "seeds" ? "200g" : categorySlug.includes("fruits") || categorySlug.includes("vegetables") ? "500g" : "1kg";
  const rating = (4.4 + ((index * 7) % 6) / 10).toFixed(1);
  const reviews = 42 + ((index * 29) % 280);
  const featured = index < 12 || index % 17 === 0;
  const description = `${name} selected for dependable quality and everyday cooking.`;
  return `  { id: ${index + 1}, name: ${JSON.stringify(name)}, slug: ${JSON.stringify(slug)}, category: ${JSON.stringify(category)}, categorySlug: ${JSON.stringify(categorySlug)}, subcategory: ${JSON.stringify(subcategory)}, price: ${price}, unit: ${JSON.stringify(unit)}, image: ${JSON.stringify(`/products/${slug}.jpg`)}, gallery: [${JSON.stringify(`/products/${slug}.jpg`)}], rating: ${rating}, reviewCount: ${reviews}, availability: "in-stock", featured: ${featured}, description: ${JSON.stringify(description)} },`;
}).join("\n");
const generated = `export interface Product {\n  id: number;\n  name: string;\n  slug: string;\n  category: string;\n  categorySlug: string;\n  subcategory: string;\n  price: number;\n  unit: string;\n  image: string;\n  gallery: string[];\n  rating: number;\n  reviewCount: number;\n  availability: "in-stock" | "low-stock" | "out-of-stock";\n  featured: boolean;\n  description: string;\n  shortDescription?: string;\n  originalPrice?: number;\n  features?: string[];\n  specifications?: { label: string; value: string }[];\n}\n\nconst productSeed: Product[] = [\n${productLines}\n];\n\nexport const products: Product[] = productSeed;\n\nexport const featuredProducts: Product[] = products.filter(p => p.featured);\n\nexport const bestSellerProducts: Product[] = [...products]\n  .sort((a, b) => b.reviewCount - a.reviewCount)\n  .slice(0, 4);\n\nexport const newArrivalProducts: Product[] = products.slice(0, 4);\n\nexport const seasonalProducts: Product[] = products.filter(p =>\n  ["fresh-fruits", "fresh-vegetables"].includes(p.categorySlug)\n).slice(0, 4);\n\nexport const getProductBySlug = (slug: string): Product | undefined =>\n  products.find(p => p.slug === slug);\n\nexport const getRelatedProducts = (product: Product): Product[] =>\n  products\n    .filter(p => p.categorySlug === product.categorySlug && p.id !== product.id)\n    .slice(0, 4);\n`;
await writeFile(outputProducts, generated);
console.log(`Verified ${manifest.length} unique Commons assets`);
