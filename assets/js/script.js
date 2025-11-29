'use strict';

const MENU = {
  nonveg: {
    "Breakfast": [
      {name:"Tawa Aloo Paratha", price:"₹35"},
      {name:"Tawa Aloo Pyaz Paratha", price:"₹39"},
      {name:"Tawa Gobhi Paratha", price:"₹39"},
      {name:"Tawa Paneer Paratha", price:"₹49"},
      {name:"Tandoori Aloo Paratha", price:"₹45"},
      {name:"Tandoori Aloo Pyaz Paratha", price:"₹49"},
      {name:"Tandoori Gobhi Paratha", price:"₹45"},
      {name:"Tandoori Paneer Paratha", price:"₹59"},
      {name:"Tawa Plain Paratha", price:"₹25"},
      {name:"Double Egg Omelette", price:"₹49"},
      {name:"Double Egg Bhurji", price:"₹89"}
    ],

    "Snacks": [
      {name:"Nawabi Fried Chicken", price:"₹179 (2 ps)"},
      {name:"Nawabi Roasted Chicken", price:"₹209"},
      {name:"Nawabi Garlic Roasted Chicken", price:"₹189 / ₹359"},
      {name:"Nawabi Chicken Tikka", price:"₹399"},
      {name:"Nawabi Garlic Chicken Tikka", price:"₹229 / ₹439"},
      {name:"Nawabi Chicken Malai Tikka", price:"₹229 / ₹439"},
      {name:"Nawabi Chicken Barrah", price:"₹189 / ₹359"},
      {name:"Nawabi Chicken Popcorn", price:"₹259 / ₹499"},
      {name:"Nawabi Chicken Lollipop", price:"₹229 / ₹439"},
      {name:"Nawabi Chilli Chicken", price:"₹229 / ₹439"},
      {name:"Nawabi Afghani Chicken", price:"₹149 (2 ps)"},
      {name:"Nawabi Seekh Kebab", price:"₹249 / ₹479"},
      {name:"Nawabi Creamy Seekh Kebab", price:"₹249 / ₹479"},
      {name:"Nawabi Chicken Changezi", price:"₹249 / ₹479"}
    ],

    "Main Course": [
      {name:"Nawabi Butter Chicken", price:"₹279 / ₹539"},
      {name:"Nawabi Rara Chicken", price:"₹329 / ₹639"},
      {name:"Nawabi Tawa Chicken", price:"₹269 / ₹519"},
      {name:"Nawabi Karahi Chicken", price:"₹289 / ₹559"},
      {name:"Nawabi Chicken Ishtu", price:"₹289 / ₹559"},
      {name:"Nawabi Chicken Changezi", price:"₹279 / ₹539"},
      {name:"Nawabi Chicken Korma", price:"₹249 / ₹479"},
      {name:"Nawabi Kali Mirch Chicken", price:"₹279 / ₹539"},
      {name:"Nawabi Achari Chicken", price:"₹269 / ₹519"}
    ],

    "Thali": [
      {name:"Nawabi Chicken Thali (Chicken item + 2 Tandoori Roti + Fried Rice + Salad)", price:"₹339"},
      {name:"Nawabi Special Chicken Thali (Chicken item + 2 Tandoori Roti + Fried Rice + 1 Seekh Kebab + Boondi Raita + Salad)", price:"₹229"}
    ],

    "Rice": [
      {name:"Nawabi Special Chicken Biryani", price:"₹189 / ₹359"},
      {name:"Nawabi Fried Rice", price:"₹159 / ₹299"},
      {name:"Nawabi Steamed Rice", price:"₹109 / ₹199"},
      {name:"Nawabi Jeera Rice", price:"₹129 / ₹239"}
    ],

    "Breads": [
      {name:"Tawa Roti", price:"₹15"},
      {name:"Tawa Butter Roti", price:"₹20"},
      {name:"Tandoori plain Roti", price:"₹25"},
      {name:"Tandoori Butter Roti", price:"₹30"},
      {name:"Rumali Roti", price:"₹20"},
      {name:"Lachha Paratha", price:"₹40"},
      {name:"Missi Roti", price:"₹35"},
      {name:"Tandoori Plain Naan", price:"₹40"},
      {name:"Tandoori Butter Naan", price:"₹35"},
      {name:"Tandoori Garlic Naan", price:"₹35"},
      {name:"Nawabi Special Milk Paratha", price:"₹40"}
    ],

    "Beverages": [
      {name:"Curd", price:"MRP"},
      {name:"Boondi Raita", price:"₹39"},
      {name:"Water Bottle", price:"MRP"},
      {name:"Butter", price:"MRP"},
      {name:"Soft Drink", price:"MRP"},
      {name:"Sweet Lassi", price:"₹35"},
      {name:"Masala Chhach", price:"MRP"}
    ],

    "Dessert": [
      {name:"Nawabi Shahi Kheer", price:"₹89"},
      {name:"Nawabi Moong Dal Halwa", price:"₹129"},
      {name:"Nawabi Gajar Halwa", price:"₹149"},
      {name:"Ice Cream", price:"MRP"}
    ]
  },

  veg: {
    "Breakfast": [
      {name:"Tawa Aloo Paratha", price:"₹35"},
      {name:"Tawa Aloo Pyaz Paratha", price:"₹39"},
      {name:"Tawa Gobhi Paratha", price:"₹39"},
      {name:"Tawa Paneer Paratha", price:"₹49"},
      {name:"Tawa Plain Paratha", price:"₹25"},
      {name:"Tandoori Aloo Paratha", price:"₹45"},
      {name:"Tandoori Aloo Pyaz Paratha", price:"₹49"},
      {name:"Tandoori Gobhi Paratha", price:"₹45"},
      {name:"Tandoori Paneer Paratha", price:"₹59"}
    ],

    "Soya Chaap": [
      {name:"Nawabi Tandoori Soya Chaap", price:"₹129"},
      {name:"Nawabi Achari Soya Chaap", price:"₹119 / ₹219"},
      {name:"Nawabi Malai Soya Chaap", price:"₹239"},
      {name:"Nawabi Afghani Soya Chaap", price:"₹139 / ₹259"},
      {name:"Nawabi Garlic Soya Chaap", price:"₹199 / ₹379"}
    ],

    "Snacks": [
      {name:"Nawabi Paneer Tikka", price:"₹129 / ₹239"},
      {name:"Nawabi Chilli Paneer", price:"₹219 / ₹419"},
      {name:"Nawabi Paneer Malai Tikka", price:"₹229 / ₹439"},
      {name:"Nawabi Paneer Multani Tikka", price:"₹239 / ₹459"},
      {name:"Nawabi Paneer Garlic Tikka", price:"₹229 / ₹439"},
      {name:"Nawabi Paneer Achari Tikka", price:"₹229 / ₹439"},
      {name:"Nawabi Paneer Cheese Tikka", price:"₹239 / ₹459"},
      {name:"Nawabi Paneer Chilli Milli Tikka", price:"₹229 / ₹439"}
    ],

    "Main Course": [
      {name:"Nawabi Dal Makhani", price:"₹199"},
      {name:"Nawabi Mix Veg", price:"₹179"},
      {name:"Nawabi Shahi Paneer", price:"₹229"},
      {name:"Nawabi Karahi Paneer", price:"₹239"},
      {name:"Nawabi Paneer Do Pyaza", price:"₹229"},
      {name:"Nawabi Paneer Lababdar", price:"₹229"},
      {name:"Nawabi Paneer Handi", price:"₹229"},
      {name:"Nawabi Matar Paneer", price:"₹229"},
      {name:"Nawabi Paneer Tikka Masala", price:"₹239"},
      {name:"Nawabi Soya Chaap Masala", price:"₹239"},
      {name:"Nawabi Paneer Butter Masala", price:"₹239"}
    ],

    "Thali": [
      {name:"Nawabi Veg Thali (Shahi Paneer + 2 Tandoori Roti + Jeera Rice + Onion Salad)", price:"₹199"},
      {name:"Nawabi Special Veg Thali (Shahi Paneer + Dal Makhani + 2 Tandoori Roti + Jeera Rice + Boondi Raita + Onion Salad)", price:"₹319"}
    ],

    "Biryani & Rice": [
      {name:"Nawabi Special Veg Biryani", price:"₹179 / ₹339"},
      {name:"Nawabi Fried Rice", price:"₹159 / ₹299"},
      {name:"Nawabi Steamed Rice", price:"₹109 / ₹199"},
      {name:"Nawabi Jeera Rice", price:"₹129 / ₹239"}
    ],

    "Breads": [
      {name:"Tawa Roti", price:"₹15"},
      {name:"Tawa Butter Roti", price:"₹20"},
      {name:"Tandoori plain Roti", price:"₹25"},
      {name:"Tandoori Butter Roti", price:"₹30"},
      {name:"Rumali Roti", price:"₹20"},
      {name:"Missi Roti", price:"₹35"},
      {name:"Lachha Paratha", price:"₹40"},
      {name:"Tandoori Plain Naan", price:"₹40"},
      {name:"Tandoori Butter Naan", price:"₹40"},
      {name:"Tandoori Garlic Naan", price:"₹35"},
      {name:"Nawabi Special Milk Paratha", price:"₹40"}
    ],

    "Beverages": [
      {name:"Curd", price:"MRP"},
      {name:"Boondi Raita", price:"₹39"},
      {name:"Water Bottle", price:"MRP"},
      {name:"Butter", price:"MRP"},
      {name:"Soft Drink", price:"MRP"},
      {name:"Sweet Lassi", price:"₹35"},
      {name:"Masala Chhach", price:"MRP"}
    ],

    "Dessert": [
      {name:"Nawabi Shahi Kheer", price:"₹89"},
      {name:"Nawabi Moong Dal Halwa", price:"₹129"},
      {name:"Nawabi Gajar Halwa", price:"₹149"},
      {name:"Ice Cream", price:"MRP"}
    ]
  }
};

/* -------------------------
  UI Logic
  --------------------------*/
let currentType = null;
let currentCategory = null;
let currentItemIntro = null;

// Function to generate item description based on item name
function getItemDescription(itemName, category) {
  const name = itemName.toLowerCase();
  let description = '';
  
  // Breakfast items
  if (category === 'Breakfast') {
    if (name.includes('paratha')) {
      if (name.includes('aloo')) {
        description = 'Freshly made paratha stuffed with spiced mashed potatoes, cooked on a hot tawa until golden and crispy. Served with butter, pickle, and curd. A perfect start to your day with authentic North Indian flavors.';
      } else if (name.includes('paneer')) {
        description = 'Soft paratha filled with crumbled paneer and aromatic spices, cooked to perfection. Rich, creamy, and satisfying, this paratha is a favorite among paneer lovers.';
      } else if (name.includes('gobhi')) {
        description = 'Delicious paratha stuffed with spiced cauliflower, cooked until crispy on the outside and soft inside. A wholesome and flavorful breakfast option.';
      } else {
        description = 'Traditional Indian flatbread cooked on a hot tawa, served with butter and accompaniments. Simple yet delicious, perfect for any meal.';
      }
    } else if (name.includes('omelette') || name.includes('bhurji')) {
      description = 'Fresh eggs prepared with onions, tomatoes, and spices. A protein-rich breakfast option that\'s both delicious and filling.';
    }
  }
  
  // Snacks items
  else if (category === 'Snacks') {
    if (name.includes('chicken tikka') || name.includes('tikka')) {
      description = 'Tender chicken pieces marinated in yogurt and aromatic spices, grilled to perfection in the tandoor. Juicy, flavorful, and perfectly charred.';
    } else if (name.includes('fried chicken') || name.includes('roasted chicken')) {
      description = 'Crispy, golden chicken prepared with our signature Nawabi spices. Each piece is marinated for hours and cooked to perfection, delivering an irresistible crunch.';
    } else if (name.includes('kebab') || name.includes('seekh')) {
      description = 'Minced meat mixed with spices and herbs, shaped and grilled on skewers. Tender, smoky, and bursting with authentic Mughlai flavors.';
    } else if (name.includes('lollipop') || name.includes('popcorn')) {
      description = 'Crispy chicken pieces coated in our special Nawabi masala, deep-fried to golden perfection. A perfect appetizer that\'s both crunchy and flavorful.';
    } else {
      description = 'A delicious appetizer prepared with authentic spices and traditional cooking methods. Perfect for sharing or as a starter to your meal.';
    }
  }
  
  // Main Course items
  else if (category === 'Main Course') {
    if (name.includes('butter chicken')) {
      description = 'Creamy, rich curry made with tender chicken pieces in a tomato-based gravy with butter and cream. A classic North Indian favorite that\'s smooth, flavorful, and absolutely irresistible.';
    } else if (name.includes('biryani')) {
      description = 'Fragrant basmati rice cooked with marinated meat and aromatic spices, layered and slow-cooked to perfection. Each grain is infused with rich flavors, making it a royal feast.';
    } else if (name.includes('korma')) {
      description = 'Mild, creamy curry made with yogurt, cream, and aromatic spices. Rich and velvety, this dish is perfect for those who enjoy subtle yet flavorful curries.';
    } else if (name.includes('karahi')) {
      description = 'Spicy and tangy curry cooked in a traditional wok (karahi) with tomatoes, onions, and green chilies. Bold flavors that pair perfectly with naan or rice.';
    } else if (name.includes('paneer')) {
      description = 'Fresh cottage cheese cooked in a rich, creamy gravy with aromatic spices. A vegetarian delight that\'s both satisfying and flavorful.';
    } else if (name.includes('dal') || name.includes('makhani')) {
      description = 'Creamy black lentils slow-cooked with butter, cream, and aromatic spices. Rich, velvety, and absolutely divine - a must-try for dal lovers.';
    } else {
      description = 'A delicious main course prepared with authentic spices and traditional recipes. Rich, flavorful, and perfect to enjoy with rice or bread.';
    }
  }
  
  // Thali items
  else if (category === 'Thali') {
    description = 'A complete meal platter featuring a main dish, fresh rotis, rice, raita, and salad. A wholesome and satisfying meal that brings together all the flavors of North Indian cuisine in one plate.';
  }
  
  // Rice items
  else if (category === 'Rice' || category === 'Biryani & Rice') {
    if (name.includes('biryani')) {
      description = 'Fragrant basmati rice cooked with marinated meat and aromatic spices, layered and slow-cooked to perfection. Each grain is infused with rich flavors, making it a royal feast.';
    } else if (name.includes('fried rice')) {
      description = 'Basmati rice stir-fried with vegetables and spices, creating a flavorful and aromatic dish. Perfect as a side or main course.';
    } else if (name.includes('jeera')) {
      description = 'Basmati rice tempered with cumin seeds and aromatic spices. Light, fragrant, and the perfect accompaniment to any curry.';
    } else {
      description = 'Freshly cooked basmati rice, fluffy and aromatic. A perfect base for any curry or gravy dish.';
    }
  }
  
  // Breads items
  else if (category === 'Breads') {
    if (name.includes('naan')) {
      description = 'Soft, fluffy bread baked in a tandoor until golden and slightly charred. Perfect for scooping up curries and gravies.';
    } else if (name.includes('roti')) {
      description = 'Fresh, soft flatbread cooked on a tawa or in a tandoor. A staple accompaniment to any Indian meal.';
    } else if (name.includes('paratha')) {
      description = 'Layered flatbread that\'s crispy on the outside and soft inside. Rich, buttery, and absolutely delicious.';
    } else {
      description = 'Freshly made Indian bread, perfect for pairing with curries and gravies.';
    }
  }
  
  // Beverages items
  else if (category === 'Beverages') {
    if (name.includes('lassi')) {
      description = 'Creamy, sweet yogurt-based drink, perfectly chilled and refreshing. A traditional North Indian beverage that complements spicy dishes beautifully.';
    } else if (name.includes('raita')) {
      description = 'Cool, refreshing yogurt dip with spices and vegetables. Perfect to balance the heat of spicy dishes.';
    } else {
      description = 'A refreshing beverage to complement your meal and enhance your dining experience.';
    }
  }
  
  // Dessert items
  else if (category === 'Dessert') {
    if (name.includes('kheer')) {
      description = 'Creamy rice pudding cooked with milk, sugar, and aromatic cardamom, garnished with nuts. A classic Indian dessert that\'s rich, sweet, and satisfying.';
    } else if (name.includes('halwa')) {
      description = 'Rich, sweet dessert made with slow-cooked ingredients, ghee, and sugar. A traditional Indian sweet that\'s decadent and delicious.';
    } else {
      description = 'A sweet ending to your meal, prepared with traditional recipes and premium ingredients.';
    }
  }
  
  // Soya Chaap items
  else if (category === 'Soya Chaap') {
    description = 'Tender soya chaap marinated in aromatic spices and cooked to perfection. A vegetarian alternative that\'s both flavorful and protein-rich, perfect for those who love the taste of traditional kebabs.';
  }
  
  // Default description
  if (!description) {
    description = `Our signature ${itemName} is prepared with authentic spices and traditional cooking methods. Each bite brings you the royal flavors of Nawabi Lazzat, crafted with care and premium ingredients.`;
  }
  
  return description;
}

// Function to show item-specific intro card
function showItemIntro(item, category) {
  // Remove existing item intro if any
  if (currentItemIntro) {
    currentItemIntro.remove();
  }
  
  const itemsList = document.getElementById('itemsList');
  const itemIntroCard = document.createElement('div');
  itemIntroCard.className = 'menu-intro-card item-intro-card';
  itemIntroCard.id = 'itemIntroCard';
  
  const description = getItemDescription(item.name, category);
  
  itemIntroCard.innerHTML = `
    <div class="intro-content">
      <button class="close-intro-btn" onclick="closeItemIntro()" aria-label="Close">
        <ion-icon name="close-outline"></ion-icon>
      </button>
      <div class="intro-icon">
        <ion-icon name="restaurant-outline"></ion-icon>
      </div>
      <h3 class="intro-title">${item.name}</h3>
      <div class="intro-price-badge">${item.price}</div>
      <p class="intro-text">${description}</p>
      <div class="intro-actions">
        <a href="https://www.swiggy.com/city/chandigarh/nawabi-lazzat-greater-mohali-rest1224510" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="order-btn swiggy-btn">
          <ion-icon name="bag-outline"></ion-icon>
          <span>Order on Swiggy</span>
        </a>
        <a href="https://www.zomato.com/chandigarh/nawabi-lazzat-sunny-enclave-mohali/order" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="order-btn zomato-btn">
          <ion-icon name="bag-outline"></ion-icon>
          <span>Order on Zomato</span>
        </a>
      </div>
    </div>
  `;
  
  // Insert before the category intro card (which should be the last child)
  const categoryIntro = itemsList.querySelector('.category-intro-card');
  if (categoryIntro) {
    itemsList.insertBefore(itemIntroCard, categoryIntro);
  } else {
    itemsList.appendChild(itemIntroCard);
  }
  
  currentItemIntro = itemIntroCard;
  
  // Scroll to intro card
  setTimeout(() => {
    itemIntroCard.scrollIntoView({behavior: 'smooth', block: 'center'});
  }, 100);
}

// Function to close item intro
function closeItemIntro() {
  if (currentItemIntro) {
    currentItemIntro.remove();
    currentItemIntro = null;
  }
}

// Function to add category intro card
function addCategoryIntroCard(itemsList, category) {
  const introCard = document.createElement('div');
  introCard.className = 'menu-intro-card category-intro-card';
  
  introCard.innerHTML = `
    <div class="intro-content">
      <div class="intro-icon">
        <ion-icon name="restaurant-outline"></ion-icon>
      </div>
      <h3 class="intro-title">Experience Authentic Mughlai Flavors</h3>
      <p class="intro-text">
        Indulge in our carefully crafted ${category.toLowerCase()} dishes, prepared with traditional recipes and premium ingredients. 
        Each dish is a celebration of authentic North Indian and Mughlai cuisine, bringing you the royal flavors of Nawabi Lazzat.
      </p>
      <div class="intro-actions">
        <a href="https://www.swiggy.com/city/chandigarh/nawabi-lazzat-greater-mohali-rest1224510" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="order-btn swiggy-btn">
          <ion-icon name="bag-outline"></ion-icon>
          <span>Order on Swiggy</span>
        </a>
        <a href="https://www.zomato.com/chandigarh/nawabi-lazzat-sunny-enclave-mohali/order" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="order-btn zomato-btn">
          <ion-icon name="bag-outline"></ion-icon>
          <span>Order on Zomato</span>
        </a>
      </div>
    </div>
  `;
  
  itemsList.appendChild(introCard);
}

function startMenu(){
  // show left panel selection visually and set focus
  const startBtn = document.getElementById('startBtn');
  const btnText1 = startBtn.querySelector('.text-1');
  const btnText2 = startBtn.querySelector('.text-2');
  if (btnText1) btnText1.textContent = 'Choose Menu Type';
  if (btnText2) btnText2.textContent = 'Choose Menu Type';
  document.getElementById('leftPanel').scrollIntoView({behavior:'smooth', block: 'start'});
}

function openPDF(filename){
  // Try to open the file in new tab. Replace path if needed on your server.
  // The files you uploaded: "Nawabi Lazzat Menu with Price.pdf" and "Nawabi Lazzat Veg Menu[1].pdf"
  // If using on server, put these PDFs in same folder as HTML or update path accordingly.
  const path = filename;
  window.open(path, '_blank');
}

function openPDFAndNavigate(filename, type){
  // Open PDF in new tab
  openPDF(filename);
  
  // Navigate to menu nav element and select the type
  setTimeout(() => {
    // Scroll to the "Select Menu Type" heading
    const menuNav = document.getElementById('menunav');
    if (menuNav) {
      menuNav.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    
    // Select the menu type after a short delay to ensure scroll completes
    setTimeout(() => {
      selectType(type);
    }, 300);
  }, 100);
}

function selectType(type){
  currentType = type;
  // UI active button
  document.getElementById('vegBtn').classList.toggle('active', type === 'veg');
  document.getElementById('nonvegBtn').classList.toggle('active', type === 'nonveg');

  // populate categories
  const cats = Object.keys(MENU[type] || {});
  const catsBox = document.getElementById('cats');
  catsBox.innerHTML = '';
  cats.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'cat';
    el.textContent = c;
    el.onclick = ()=> openCategory(c);
    catsBox.appendChild(el);
  });
  
  // Clear any active category state when switching menu types
  currentCategory = null;

  // show top heading (PDF main heading imitation)
  const heading = (type === 'veg') ? 'Vegetarian Menu' : 'Non-Vegetarian Menu';
  document.getElementById('panelTitle').textContent = heading;
  document.getElementById('panelSub').textContent = "Select a category below to view all items with prices.";

  // clear items area
  document.getElementById('itemsList').innerHTML = '';
  
  // Clear any existing item intro
  if (currentItemIntro) {
    currentItemIntro.remove();
    currentItemIntro = null;
  }
}

function openCategory(category){
  if(!currentType) return alert('Please select Veg or Non-Veg first.');

  // Remove active state from all categories
  const allCats = document.querySelectorAll('.cat');
  allCats.forEach(cat => cat.classList.remove('active'));
  
  // Add active state to clicked category
  const clickedCat = Array.from(allCats).find(cat => cat.textContent === category);
  if (clickedCat) {
    clickedCat.classList.add('active');
  }
  
  currentCategory = category;

  const items = MENU[currentType][category] || [];
  const itemsList = document.getElementById('itemsList');
  itemsList.innerHTML = '';

  // update panel title to show category
  document.getElementById('panelTitle').textContent = category;
  document.getElementById('panelSub').textContent = (currentType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian') + " • " + category;

  // render items
  items.forEach(it=>{
    const itDiv = document.createElement('div');
    itDiv.className = 'menu-item';
    itDiv.onclick = () => showItemIntro(it, category);

    const thumb = document.createElement('div');
    thumb.className = 'item-thumb';

    // placeholder image - keep empty src for now. Replace with actual image path like "images/butter-chicken.jpg"
    const img = document.createElement('img');
    img.alt = it.name;
    img.src = "assets/images/North Indian Course  (236).png"; // <-- add real image path here when available
    img.style.display = img.src ? 'block' : 'none';
    thumb.appendChild(img);

    const meta = document.createElement('div');
    meta.className = 'item-meta';
    const h4 = document.createElement('h4');
    h4.textContent = it.name;
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = ''; // extra description if needed

    meta.appendChild(h4);
    meta.appendChild(p);

    const price = document.createElement('div');
    price.className = 'item-price';
    price.textContent = it.price;

    itDiv.appendChild(thumb);
    itDiv.appendChild(meta);
    itDiv.appendChild(price);

    itemsList.appendChild(itDiv);
  });

  // Add static category intro card at the end
  addCategoryIntroCard(itemsList, category);

  // scroll to items
  document.getElementById('contentPanel').scrollIntoView({behavior:'smooth'});
}

/* -----------------------------------------------
   PRELOADER
-------------------------------------------------*/
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/* -----------------------------------------------
   EVENT HELPER
-------------------------------------------------*/
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};



/* -----------------------------------------------
   NAVBAR
-------------------------------------------------*/
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/* -----------------------------------------------
   HEADER + BACK TO TOP
-------------------------------------------------*/
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;
let scrollThreshold = 100; // Minimum scroll before hiding header

const hideHeader = function () {
  const currentScrollPos = window.scrollY;
  const isScrollingDown = lastScrollPos < currentScrollPos;
  const isScrollingUp = lastScrollPos > currentScrollPos;
  
  // Only hide/show if scrolled past threshold
  if (currentScrollPos > scrollThreshold) {
    if (isScrollingDown && currentScrollPos > lastScrollPos + 5) {
      // Scrolling down - hide header
      header.classList.add("hide");
    } else if (isScrollingUp || currentScrollPos < scrollThreshold) {
      // Scrolling up - show header
      header.classList.remove("hide");
    }
  } else {
    // Near top - always show
    header.classList.remove("hide");
  }

  lastScrollPos = currentScrollPos;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    header.classList.remove("hide");
    backTopBtn.classList.remove("active");
  }
});



/* -----------------------------------------------
   HERO SLIDER
-------------------------------------------------*/
const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  currentSlidePos = (currentSlidePos >= heroSliderItems.length - 1) ? 0 : currentSlidePos + 1;
  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  currentSlidePos = (currentSlidePos <= 0) ? heroSliderItems.length - 1 : currentSlidePos - 1;
  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);


/* --- Auto Slide --- */
let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", () => clearInterval(autoSlideInterval));
addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/* -----------------------------------------------
   PARALLAX EFFECT (SMOOTH)
-------------------------------------------------*/
const parallaxItems = document.querySelectorAll("[data-parallax-item]");

window.addEventListener("mousemove", function (event) {

  let targetX = (event.clientX / window.innerWidth - 0.5) * -30;
  let targetY = (event.clientY / window.innerHeight - 0.5) * -30;

  parallaxItems.forEach((item) => {
    let speed = Number(item.dataset.parallaxSpeed);
    let xMove = targetX * speed;
    let yMove = targetY * speed;

    item.style.transform = `translate3d(${xMove}px, ${yMove}px, 0)`;
  });

});



/* -----------------------------------------------
   REVEAL ANIMATION (WOW EFFECT)
-------------------------------------------------*/
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
