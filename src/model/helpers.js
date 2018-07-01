export function countAllOperations(operations) {
    let count = 0;
    operations.forEach(() => {
        count++;
    });
    return count;
}

export function countAllCategories(categories) {
    let count = 0;
    categories.forEach(() => {
        count++;
    });
    return count;
}

export function getCategoryName(categories, id) {
    let name = "";
    categories.forEach((category) => {
        if(category.id === parseInt(id, 10)) {
            name = category.libelle
        }
    });
    return name;
}