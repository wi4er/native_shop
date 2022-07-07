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
        }, {
            _id: "price",
            timestamp: new Date(),
            created: new Date(),
        }, {
            _id: "discount",
            timestamp: new Date(),
            created: new Date(),
        }]
    }
);

product.runCommand(
    {
        insert: "flags",
        documents: [{
            _id: "novelty",
            timestamp: new Date(),
            created: new Date(),
        }, {
            _id: "popular",
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
            _id: new ObjectId("000000000000000000000001"),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Beverages",
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
            _id: new ObjectId("000000000000000000000002"),
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
            _id: new ObjectId("000000000000000000000003"),
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
            _id: new ObjectId("000000000000000000000004"),
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
            _id: new ObjectId("000000000000000000000005"),
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
            _id: new ObjectId("000000000000000000000006"),
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
            _id: new ObjectId("000000000000000000000007"),
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
            _id: new ObjectId("000000000000000000000008"),
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

product.runCommand(
    {
        insert: "contents",
        documents: [{
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000001")],
            property: {
                DEF: {
                    name: "Coca Cola",
                    price: 35,
                    discount: 10,
                }
            },
            flag: ["popular"],
            uniq: [{
                uniq: "slug",
                value: "coca_cola"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000003")],
            property: {
                DEF: {
                    name: "Brocolli",
                    price: 15,
                }
            },
            flag: ["popular", "novelty"],
            uniq: [{
                uniq: "slug",
                value: "brocolli"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000001")],
            property: {
                DEF: {
                    name: "Sprite",
                    price: 12,
                }
            },
            flag: ["popular"],
            uniq: [{
                uniq: "slug",
                value: "sprite"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000001")],
            property: {
                DEF: {
                    name: "Lemonade",
                    price: 22,
                }
            },
            flag: [],
            uniq: [{
                uniq: "slug",
                value: "lemonade"
            }],
            image: {
                preview: [{url: "/img/catalog/lemonade.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000001")],
            property: {
                DEF: {
                    name: "Whisky"
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "whisky"
            }],
            image: {
                preview: [{url: "/img/catalog/whisky.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000001")],
            property: {
                DEF: {
                    name: "Fruit punch"
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "fruit_punch"
            }],
            image: {
                preview: [{url: "/img/catalog/fruit_punch.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000001")],
            property: {
                DEF: {
                    name: "Fanta"
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "fanta"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }

        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000003")],
            property: {
                DEF: {
                    name: "Cabbage"
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "cabbage"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000002")],
            property: {
                DEF: {
                    name: "Bun"
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "bun"
            }],
            image: {
                preview: [{url: "/img/catalog/beverages.png"}]
            }
        }]
    }
)
