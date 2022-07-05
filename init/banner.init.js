let banner = db.getSiblingDB("banner");

banner.createUser(
    {
        user: "banner",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "banner"
            }
        ]
    }
);

banner.runCommand(
    {
        insert: "properties",
        documents: [{
            _id: "name",
            timestamp: new Date(),
            created: new Date(),
        }, {
            _id: "button",
            timestamp: new Date(),
            created: new Date(),
        }, {
            _id: "link",
            timestamp: new Date(),
            created: new Date(),
        }]
    }
);

banner.runCommand(
    {
        insert: "images",
        documents: [{
            _id: "preview",
            timestamp: new Date(),
            created: new Date(),
        }]
    }
);

banner.runCommand(
    {
        insert: "contents",
        documents: [{
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Ready to deliver to your home",
                    button: "Start Shopping",
                    link: "/shop/shop1",
                }
            },
            image: {
                preview: [{url: "/img/catalog/market.webp"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Ready to deliver to your home",
                    button: "Start Shopping",
                    link: "/shop/shop2",
                }
            },
            image: {
                preview: [{url: "/img/catalog/market.webp"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            property: {
                DEF: {
                    name: "Ready to deliver to your home",
                    button: "Start Shopping",
                    link: "/shop/shop3",
                }
            },
            image: {
                preview: [{url: "/img/catalog/market.webp"}]
            }
        }]
    }
);
