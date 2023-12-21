export const USDollar = new Intl.NumberFormat('en-US');

export const calculatePercentage = (value, totalValue) => {
    let percentage = (value / totalValue) * 100;
    return percentage;
}