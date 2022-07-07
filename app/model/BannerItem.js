
module.exports = class BannerItem {
    constructor(item) {
        Object.assign(this, item);

        this.name = item.property.DEF.name;
        this.button = item.property.DEF.button;
        this.link = item.property.DEF.link;

        this.preview = item.image.preview[0].url;
    }
}
