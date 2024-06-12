document.addEventListener('DOMContentLoaded', () => {
    const contentSelect = document.getElementById('content-select');
    const contentDiv = document.getElementById('content');

    contentSelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        loadCategoryContent(selectedCategory);
    });

    function loadCategoryContent(category) {
        let content = '';

        switch (category) {
            case 'men':
                content = `
                    <h2>Men's Clothing</h2>
                    <div class="it"><div class="item men-item"><img src="./img/Men's Jacket.jpg" alt="Men's Clothing 1"><div class="item-info"><strong>Men's Jacket</strong><span>$49.99</span></div></div>
                    <div class="item men-item"><img src="./img/Men's T-Shirt.jpg" alt="Men's Clothing 2"><div class="item-info"><strong>Men's T-Shirt</strong><span>$19.99</span></div></div>
                    <div class="item men-item"><img src="./img/Men's Jeans.jpg" alt="Men's Clothing 3"><div class="item-info"><strong>Men's Jeans</strong><span>$39.99</span></div></div>
             </div>   `;
                break;
            case 'women':
                content = `
                    <h2>Women's Clothing</h2>
                    <div class="it"><div class="item women-item"><img src="./img/Women's Dress.jpg" alt="Women's Clothing 1"><div class="item-info"><strong>Women's Dress</strong><span>$59.99</span></div></div>
                    <div class="item women-item"><img src="./img/Women's Jeans.jpg" alt="Women's Clothing 2"><div class="item-info"><strong>Women's Jeans</strong><span>$29.99</span></div></div>
                    <div class="item women-item"><img src="./img/Women's Skirt.jpg" alt="Women's Clothing 3"><div class="item-info"><strong>Women's Skirt</strong><span>$39.99</span></div></div>
             </div>   `;
                break;
            case 'kids':
                content = `
                    <h2>Kids' Clothing</h2><div class="it">
                    <div class="item kids-item"><img src="./img/Kids' T-Shirt.jpg" alt="Kids' Clothing 1"><div class="item-info"><strong>Kids' T-Shirt</strong><span>$14.99</span></div></div>
                    <div class="item kids-item"><img src="./img/Kids' Shorts.jpg" alt="Kids' Clothing 2"><div class="item-info"><strong>Kids' Shorts</strong><span>$19.99</span></div></div>
                    <div class="item kids-item"><img src="./img/Kids' Jacket.jpg" alt="Kids' Clothing 3"><div class="item-info"><strong>Kids' Jacket</strong><span>$24.99</span></div></div></div>
                `;
                break;
            default:
                
                content = `<h2>Welcome to Shop Now Please select a category.</h2>`;
        }

        contentDiv.innerHTML = content;
    }
});
