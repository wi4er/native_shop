
module.exports = class ProductSection {
    constructor(item) {
        Object.assign(this, item);

        this.name = item.property.DEF.name;
        this.slug = item.uniq.find(value => value.uniq === "slug")?.value ?? "";
        this.preview = item.image.preview[0].url;
        
        console.log(this.slug);
        
        
    }
}
