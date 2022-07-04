let product = db.getSiblingDB("product");

product.createUser(
    {
        user: "product",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "product"
            }
        ]
    }
);

product.runCommand(
    {
        insert: "uniqs",
        documents: [{
            _id: "slug",
            timestamp: new Date(),
            created: new Date(),
        }]
    }
);

product.runCommand(
    {
        insert: "properties",
        documents: [{
            _id: "name",
            timestamp: new Date(),
            created: new Date(),
        }]
    }
);

product.runCommand(
    {
        insert: "images",
        documents: [{
            _id: "preview",
            timestamp: new Date(),
            created: new Date(),
        }]
    }
);

product.runCommand(
    {
        insert: "sections",
        documents: [{
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Beverages"
                }
            },
            uniq: [{
                uniq: "slug",
                value: "beverages"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Brad & bakery"
                }
            },
            uniq: [{
                uniq: "slug",
                value: "brad_bakery"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Vegetables"
                }
            },
            uniq: [{
                uniq: "slug",
                value: "vegetables"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Fruit"
                }
            },
            uniq: [{
                uniq: "slug",
                value: "fruit"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Egg"
                }
            },
            uniq: [{
                uniq: "slug",
                value: "egg"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Frozen veg"
                }
            },
            uniq: [{
                uniq: "slug",
                value: "frozen_veg"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Homecare"
                }
            },
            uniq: [{
                uniq: "slug",
                value: "homecare"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Pet Care"
                }
            },
            uniq: [{
                uniq: "slug",
                value: "pet_care"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }]
    }
);
