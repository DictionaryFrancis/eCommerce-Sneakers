const product = {
    mainPrice: 125,
    discountPercentage: 50,

    /** Returns the formatted main price. Ex: '$ 100.50' */
    getMainPrice: function () {
        let formattedMainPrice = `$ ${formatTwoDecimalPlaces(this.mainPrice)}`;

        return formattedMainPrice;
    },

    /** Returns the formatted discount percentage. Ex: '10 %' */
    getDiscountPercentage: function () {
        let formattedDiscountPercentage = `${this.discountPercentage} %`;

        return formattedDiscountPercentage;
    },

    /** Returns the formatted price after discount. Ex: '$ 5.25' */
    getPriceAfterDiscount: function () {
        let priceAfterDiscount = this.mainPrice * this.discountPercentage / 100;
        let formattedPriceAfterDiscount = `$ ${formatTwoDecimalPlaces(priceAfterDiscount)}`;

        return formattedPriceAfterDiscount;
    },
};

const mainPriceToShow = product.getMainPrice();
const discountPercentageToShow = product.getDiscountPercentage();
const priceAfterDiscountToShow = product.getPriceAfterDiscount();

document.querySelector('.price').innerHTML = `${priceAfterDiscountToShow}<span id="discount">${discountPercentageToShow}</span>`;
document.querySelector('.old-price').textContent = `${mainPriceToShow}`;