import puppeteer from 'puppeteer-extra'
const url = "https://blinkit.com/cn/baby-food/cid/7/1590";     //baby food
//atta
//rice
//besun suji maida 

const url2='https://blinkit.com/cn/lighters-accessories/cid/229/34'    //lighter accessories
const url3='https://blinkit.com/cn/mouth-fresheners/cid/229/1933'    //mouth fresheners
const url4='https://blinkit.com/cn/smoking-cessation/cid/229/290'    //smoking cessation
const url5='https://blinkit.com/cn/millet-other-flours/cid/16/48'    //millet other flours
const url6='https://blinkit.com/cn/moong-masoor/cid/16/505'    //moong masoor
const url7='https://blinkit.com/cn/rajma-chhole-others/cid/16/1573'    //rajma chhole others
const url8='https://blinkit.com/cn/poha-daliya-other-grains/cid/16/1295'    //poha daliya other grains
const url9='https://blinkit.com/cn/toor-urad-chana/cid/16/1010'    //toor urad chana
const url10='https://blinkit.com/cn/baby-gifting-toys/cid/7/999'    //baby gifting toys
const url11='https://blinkit.com/cn/baby-care/feeding/cid/7/169'    //baby care feeding
const url12='https://blinkit.com/cn/baby-care/health-safety/cid/7/997'    //baby care health safety
const url13='https://blinkit.com/cn/baby-care/hygiene/cid/7/85'    //baby care hygiene
const url14='https://blinkit.com/cn/baby-care/mom-care-needs/cid/7/1967'    //baby care mom care needs
const url15='https://blinkit.com/cn/baby-care/nursing/cid/7/597'    //baby care nursing
const url16='https://blinkit.com/cn/baby-care/oral-nasal-care/cid/7/998'    //baby care oral nasal care
const url17='https://blinkit.com/cn/bakery-biscuits/bread-pav/cid/888/953'    //bakery biscuits bread pav
const url18='https://blinkit.com/cn/bakery-biscuits/cookies/cid/888/28'    //bakery biscuits cookies
const url19='https://blinkit.com/cn/bakery-biscuits/cream-biscuits/cid/888/105'    //bakery biscuits cream biscuits
const url20='https://blinkit.com/cn/bakery-biscuits/glucose-marie/cid/888/209'    //bakery biscuits glucose marie
const url21='https://blinkit.com/cn/bakery-biscuits/healthy-digestive/cid/888/938'    //bakery biscuits healthy digestive
const url22='https://blinkit.com/cn/bakery-biscuits/sweet-salty/cid/888/144'    //bakery biscuits sweet salty
const url23='https://blinkit.com/cn/noodles/cid/15/962'    //noodles
const url24='https://blinkit.com/cn/instant-frozen-food/pasta/cid/15/968'    //instant frozen food pasta
const url25='https://blinkit.com/cn/instant-frozen-food/ready-to-cook-eat/cid/15/1294'    //instant frozen food ready to cook eat
const url26='https://blinkit.com/cn/instant-frozen-food/soup/cid/15/964'    //instant frozen food soup
const url27='https://blinkit.com/cn/instant-frozen-food/instant-mixes/cid/15/965'    //instant frozen food instant mixes
const url28='https://blinkit.com/cn/instant-frozen-food/imported-noodles-pasta/cid/15/2361'    //instant frozen food imported noodles pasta
const url29='https://blinkit.com/cn/instant-frozen-food/herbs-seasoning/cid/15/1968'    //instant frozen food herbs seasoning
const url30='https://blinkit.com/cn/instant-frozen-food/dessert-cake-mixes/cid/15/970'    //instant frozen food dessert cake mixes
const url31='https://blinkit.com/cn/chicken-meat-fish/chicken/cid/4/1362'    //chicken meat fish chicken
const url32='https://blinkit.com/cn/chicken-meat-fish/fish-seafood/cid/4/1361'    //chicken meat fish fish seafood
const url33='https://blinkit.com/cn/chicken-meat-fish/sausage-salami-ham/cid/4/1388'    //chicken meat fish sausage salami ham
const url34='https://blinkit.com/cn/cleaning-essentials/cleaning-tools/cid/18/1082'    //cleaning essentials cleaning tools
const url35='https://blinkit.com/cn/cleaning-essentials/detergent-powder-bars/cid/18/983'    //cleaning essentials detergent powder bars
const url36='https://blinkit.com/cn/cleaning-essentials/dishwashing-bars-tubs/cid/18/988'    //cleaning essentials dishwashing bars tubs
const url37='https://blinkit.com/cn/cleaning-essentials/dishwashing-accessories/cid/18/986'    //cleaning essentials dishwashing accessories
const url38='https://blinkit.com/cn/cleaning-essentials/dishwashing-gels-tablets/cid/18/1078'    //cleaning essentials dishwashing gels tablets
const url39='https://blinkit.com/cn/cleaning-essentials/disinfectants/cid/18/1784'    //cleaning essentials disinfectants
const url40='https://blinkit.com/cn/cleaning-essentials/floor-surface-cleaners/cid/18/51'    //cleaning essentials floor surface cleaners
const url41='https://blinkit.com/cn/cleaning-essentials/fresheners/cid/18/1085'    //cleaning essentials fresheners
const url42='https://blinkit.com/cn/cleaning-essentials/garbage-bags/cid/18/1833'    //cleaning essentials garbage bags
const url43='https://blinkit.com/cn/cleaning-essentials/fabric-conditioner-additives/cid/18/985'    //cleaning essentials fabric conditioner additives
const url44='https://blinkit.com/cn/cleaning-essentials/liquid-detergents/cid/18/3882'    //cleaning essentials liquid detergents
const url45='https://blinkit.com/cn/cold-drinks-juices/coconut-water/cid/332/1594'    //cold drinks juices coconut water
const url46='https://blinkit.com/cn/cold-drinks-juices/cold-coffee-ice-tea/cid/332/1953'    //cold drinks juices cold coffee ice tea
const url47='https://blinkit.com/cn/cold-drinks-juices/concentrates-syrups/cid/332/109'    //cold drinks juices concentrates syrups
const url48='https://blinkit.com/cn/cold-drinks-juices/energy-drinks/cid/332/91'    //cold drinks juices energy drinks
const url49='https://blinkit.com/cn/cold-drinks-juices/fruit-juices/cid/332/955'    //cold drinks juices fruit juices
const url50='https://blinkit.com/cn/cold-drinks-juices/herbal-drinks/cid/332/1109'    //cold drinks juices herbal drinks
const url51='https://blinkit.com/cn/cold-drinks-juices/imported-beverages/cid/332/2360'    //cold drinks juices imported beverages
const url52='https://blinkit.com/cn/cold-drinks-juices/mango-drinks/cid/332/1108'    //cold drinks juices mango drinks
const url53='https://blinkit.com/cn/cold-drinks-juices/pure-juices/cid/332/1318'    //cold drinks juices pure juices
const url54='https://blinkit.com/cn/cold-drinks-juices/soda-mixers/cid/332/1599'    //cold drinks juices soda mixers
const url55='https://blinkit.com/cn/cold-drinks-juices/soft-drinks/cid/332/1102'    //cold drinks juices soft drinks
const url56='https://blinkit.com/cn/cold-drinks-juices/water-ice-cubes/cid/332/270'    //cold drinks juices water ice cubes
const url57='https://blinkit.com/cn/dairy-breakfast/batter/cid/14/1425'    //dairy breakfast batter
const url58='https://blinkit.com/cn/dairy-breakfast/bread-pav/cid/14/953'    //dairy breakfast bread pav
const url59='https://blinkit.com/cn/dairy-breakfast/breakfast-mixes/cid/14/1612'    //dairy breakfast breakfast mixes
const url60='https://blinkit.com/cn/dairy-breakfast/butter-more/cid/14/952'    //dairy breakfast butter more
const url61='https://blinkit.com/cn/dairy-breakfast/cheese/cid/14/2253'    //dairy breakfast cheese
const url62='https://blinkit.com/cn/dairy-breakfast/condensed-milk/cid/14/130'    //dairy breakfast condensed milk
const url63='https://blinkit.com/cn/dairy-breakfast/cream-whitener/cid/14/1092'    //dairy breakfast cream whitener
const url64='https://blinkit.com/cn/dairy-breakfast/curd-yogurt/cid/14/123'    //dairy breakfast curd yogurt
const url65='https://blinkit.com/cn/dairy-breakfast/eggs/cid/14/1200'    //dairy breakfast eggs
const url66='https://blinkit.com/cn/dairy-breakfast/energy-bars/cid/14/2557'    //dairy breakfast energy bars
const url67='https://blinkit.com/cn/dairy-breakfast/flakes-kids-cereals/cid/14/954'    //dairy breakfast flakes kids cereals
const url68='https://blinkit.com/cn/dairy-breakfast/honey-chyawanprash/cid/14/609'    //dairy breakfast honey chyawanprash
const url69='https://blinkit.com/cn/dairy-breakfast/lassi-shakes-more/cid/14/1184'    //dairy breakfast lassi shakes more
const url70='https://blinkit.com/cn/dairy-breakfast/milk/cid/14/922'    //dairy breakfast milk
const url71='https://blinkit.com/cn/dairy-breakfast/muesli-granola/cid/14/614'    //dairy breakfast muesli granola
const url72='https://blinkit.com/cn/dairy-breakfast/oats/cid/14/584'    //dairy breakfast oats
const url73='https://blinkit.com/cn/dairy-breakfast/paneer-tofu/cid/14/923'    //dairy breakfast paneer tofu
const url74='https://blinkit.com/cn/dairy-breakfast/peanut-butter/cid/14/644'    //dairy breakfast peanut butter
const url75='https://blinkit.com/cn/dairy-breakfast/poha-daliya-other-grains/cid/14/1295'    //dairy breakfast poha daliya other grains
const url76='https://blinkit.com/cn/dairy-breakfast/sausage-salami-ham/cid/14/1388'    //dairy breakfast sausage salami ham
const url77='https://blinkit.com/cn/dairy-breakfast/vermicelli/cid/14/1140'    //dairy breakfast vermicelli
const url78='https://blinkit.com/cn/vegetables-fruits/certified-organic/cid/1487/742'    //vegetables fruits certified organic
const url79='https://blinkit.com/cn/vegetables-fruits/combo-recipes/cid/1487/928'    //vegetables fruits combo recipes
const url80='https://blinkit.com/cn/vegetables-fruits/flowers-leaves/cid/1487/1452'    //vegetables fruits flowers leaves
const url81='https://blinkit.com/cn/vegetables-fruits/fresh-fruits/cid/1487/1503'    //vegetables fruits fresh fruits
const url82='https://blinkit.com/cn/vegetables-fruits/fresh-vegetables/cid/1487/1489'    //vegetables fruits fresh vegetables
const url83='https://blinkit.com/cn/vegetables-fruits/freshly-cut-sprouts/cid/1487/395'    //vegetables fruits freshly cut sprouts
const url84='https://blinkit.com/cn/vegetables-fruits/frozen-veg/cid/1487/157'    //vegetables fruits frozen veg
const url85='https://blinkit.com/cn/vegetables-fruits/leafies-herbs/cid/1487/1871'    //vegetables fruits leafies herbs
const url86='https://blinkit.com/s/?q=appliences'    //appliences
const url87='https://blinkit.com/cn/home-office/bags/cid/1379/120'    //home office bags
const url88='https://blinkit.com/cn/home-office/cables-connectors/cid/1379/1429'    //home office cables connectors
const url89='https://blinkit.com/cn/home-office/candles-diyas/cid/1379/1472'    //home office candles diyas
const url90='https://blinkit.com/cn/home-office/cleaning-tools/cid/1379/1082'    //home office cleaning tools
const url91='https://blinkit.com/cn/home-office/clothing-footwear-accessories/cid/1379/1715'    //home office clothing footwear accessories
const url92='https://blinkit.com/s/?q=Electonic%20Accessories'    //Electonic Accessories
const url93='https://blinkit.com/cn/home-office/festive-gifting/cid/1379/389'    //home office festive gifting
const url94='https://blinkit.com/cn/home-office/festive-occasion-needs/cid/1379/1674'    //home office festive occasion needs
const url95='https://blinkit.com/cn/home-office/fresheners/cid/1379/1085'    //home office fresheners
const url96='https://blinkit.com/cn/home-office/garbage-bags/cid/1379/1833'    //home office garbage bags
const url97='https://blinkit.com/cn/home-office/home-decor/cid/1379/1433'    //home office home decor
const url98='https://blinkit.com/cn/home-office/kitchen-dining-needs/cid/1379/1052'    //home office kitchen dining needs
const url99='https://blinkit.com/cn/home-office/plants/cid/1379/755'    //home office plants
const url100='https://blinkit.com/cn/home-office/pooja-needs/cid/1379/1048'    //home office pooja needs
const url101='https://blinkit.com/cn/repellents/cid/1379/926'    //repellents
const url102='https://blinkit.com/cn/stationery-needs/cid/1379/1049'    //stationery needs
const url103='https://blinkit.com/cn/tissues-disposables/cid/1379/1075'    //tissues disposables
const url104='https://blinkit.com/cn/winter-wear/cid/1379/2559'    //winter wear
const url105='https://blinkit.com/cn/dates-seeds/cid/1557/815'    //dates seeds        
const url106='https://blinkit.com/cn/dry-fruits/cid/1557/1160'    //dry fruits
const url107='https://blinkit.com/cn/dry-fruit-gift-packs/cid/1557/1602'    //dry fruit gift packs
const url108='https://blinkit.com/cn/ghee-vanaspati/cid/1557/1158'    //ghee vanaspati
const url109='https://blinkit.com/cn/oil/cid/1557/917'    //oil
const url110='https://blinkit.com/cn/powdered-spices/cid/1557/50'    //powdered spices
const url111='https://blinkit.com/cn/salt-sugar-jaggery/cid/1557/933'    //salt sugar jaggery
const url112='https://blinkit.com/cn/whole-spices/cid/1557/930'    //whole spices
const url113='https://blinkit.com/cn/baby-food/cid/175/47'    //baby food
const url114='https://blinkit.com/cn/breakfast-more/cid/175/96'    //breakfast more
const url115='https://blinkit.com/cn/cookies-wafers/cid/175/939'    //cookies wafers
const url116='https://blinkit.com/cn/healthy-proteins/cid/175/97'    //healthy proteins
const url117='https://blinkit.com/cn/accessories-other-supplies/cid/5/3609'    //accessories other supplies
const url118='https://blinkit.com/cn/cat-needs/cid/5/3715'    //cat needs
const url119='https://blinkit.com/cn/diverse-pet-food/cid/5/3721'    //diverse pet food
const url120='https://blinkit.com/cn/dog-needs/cid/5/3726'    //dog needs
const url121='https://blinkit.com/cn/pet-grooming/cid/5/3731'    //pet grooming
const url122='https://blinkit.com/cn/adult-diapers/cid/287/629'    //adult diapers
const url123='https://blinkit.com/cn/antiseptic-liquid/cid/287/1121'    //antiseptic liquid
const url124='https://blinkit.com/cn/beauty-supplements/cid/287/295'    //beauty supplements
const url125='https://blinkit.com/cn/chyawanprash/cid/287/1135'    //chyawanprash
const url126='https://blinkit.com/cn/cough-cold/cid/287/75'    //cough cold
const url127='https://blinkit.com/cn/digestive-care/cid/287/298'    //digestive care
const url128='https://blinkit.com/cn/everyday-medicines/cid/287/289'    //everyday medicines
const url129='https://blinkit.com/cn/healthcare-devices/cid/287/62'    //healthcare devices
const url130='https://blinkit.com/cn/asian-sauces/cid/972/1045'    //asian sauces
const url131='https://blinkit.com/cn/cooking-sauces-vinegar/cid/972/929'    //cooking sauces vinegar
const url132='https://blinkit.com/cn/indian-chutney-pickle/cid/972/1126'    //indian chutney pickle
const url133='https://blinkit.com/cn/jam-spreads/cid/972/974'    //jam spreads
const url134='https://blinkit.com/cn/tomato-chilli-ketchup/cid/972/277'    //tomato chilli ketchup
const url135='https://blinkit.com/cn/bhujia-mixtures/cid/1237/1178'    //bhujia mixtures
const url136='https://blinkit.com/cn/chips-crisps/cid/1237/940'    //chips crisps
const url137='https://blinkit.com/cn/energy-bars/cid/1237/2557'    //energy bars
const url138='https://blinkit.com/cn/granola/cid/1237/613'    //granola
const url139='https://blinkit.com/cn/imported-snacks/cid/1237/2362'    //imported snacks   
const url140='https://blinkit.com/cn/makhana-more/cid/1237/816'    //makhana more
const url141='https://blinkit.com/cn/nachos/cid/1237/316'    //nachos
const url142='https://blinkit.com/cn/namkeen-snacks/cid/1237/29'    //namkeen snacks
const url143='https://blinkit.com/cn/papad-fryums/cid/1237/80'    //papad fryums
const url144='https://blinkit.com/cn/popcorn/cid/1237/156'    //popcorn
const url145='https://blinkit.com/cn/rusks-wafers/cid/1237/107'    //rusks wafers
const url146='https://blinkit.com/cn/cakes-rolls/cid/9/108'    //cakes rolls
const url147='https://blinkit.com/cn/chocolates/cid/9/944'    //chocolates
const url148='https://blinkit.com/cn/flavoured-yogurts/cid/9/106'    //flavoured yogurts
const url149='https://blinkit.com/cn/ice-cream-frozen-dessert/cid/9/183'    //ice cream frozen dessert
const url150='https://blinkit.com/cn/coffee/cid/12/1322'    //coffee
const url151='https://blinkit.com/cn/cold-coffee-ice-tea/cid/12/1953'    //cold coffee ice tea
const url152='https://blinkit.com/cn/energy-drinks/cid/12/91'    //energy drinks
const url153='https://blinkit.com/cn/green-flavoured-tea/cid/12/1605'    //green flavoured tea
const url154='https://blinkit.com/cn/hot-chocolate/cid/12/90'    //hot chocolate
const url155='https://blinkit.com/cn/imported-tea-coffee/cid/12/2363'    //imported tea coffee
const url156='https://blinkit.com/cn/tea/cid/12/957'    //tea


import stealthPlugin from "puppeteer-extra-plugin-stealth";
import pkg from 'lodash';
const { delay } = pkg;
import fs from 'fs';

puppeteer.use(stealthPlugin())

const customDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
 puppeteer.launch({ headless: false} ).then(async browser => {
    const page = await browser.newPage()
    await page.goto(url10, { timeout: 60000000 })
    // await page.setViewport({ width: 1280, height: 800 });
    // await page.waitFor(5000)
    // await page.waitForSelector('.tw-mb-2');
    await page.waitForSelector('.tw-flex.tw-w-full.tw-flex-col', { timeout: 6000 });

    for (let i = 0; i < 3; i++) { // Adjust the number of scrolls as needed
        await page.evaluate(() => {
            window.scrollBy(1000, 0);
        });
        await customDelay(7000)
        // await page.waitForTimeout(20000); // Wait for products to load
     
    }
    


    const newProducts = await page.evaluate(() => {
        const products = document.querySelectorAll('.tw-flex.tw-w-full.tw-flex-col'); // Adjust this selector if necessary
        return Array.from(products).map((product) => {
            const titleElement = product.querySelector('.tw-text-300.tw-font-semibold'); // Title selector
            const quantityElement = product.querySelector('.tw-text-200.tw-font-medium'); // Quantity selector
            const priceElement = product.querySelector('.tw-text-200.tw-font-semibold'); // Price selector
            // const priceElement = product.querySelector('.tw-flex.tw-items-center.tw-justify-between > div:nth-child(1) .tw-text-200.tw-font-semibold'); // Updated selector
            // const priceElement = product.querySelector('.tw-flex.tw-items-center.tw-justify-between > div:first-child .tw-text-200.tw-font-semibold');
            
            // Debugging logs
            console.log('Product Element:', product); // Log the entire product element
            console.log('Title Element:', titleElement);
            console.log('Quantity Element:', quantityElement);
            console.log('Price Element:', priceElement);

            // Check if elements exist before accessing their properties
            const title = titleElement ? titleElement.textContent : 'N/A';
            const quantity = quantityElement ? quantityElement.textContent : 'N/A';
            const price = priceElement ? priceElement.textContent : 'N/A';

            return { title, quantity, price };
        });
    });

    let existingProducts = [];
    if (fs.existsSync('products.json')) {
        const data = fs.readFileSync('products.json', { encoding: 'utf-8' });
        existingProducts = JSON.parse(data);
    }

    // Combine existing products with new products
    const allProducts = [...existingProducts, ...newProducts];

    // Write the combined array back to the file
    fs.writeFileSync('products.json', JSON.stringify(allProducts, null, 2), { encoding: 'utf-8' });

    console.log(allProducts.length);
    // await page.screenshot({ path: 'testresult9.png', fullPage: true },{encoding: 'base64'},{timeout: 60000})
     await browser.close()
    console.log(`All done,  ✨`)
  })