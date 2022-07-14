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
        insert: "descriptions",
        documents: [{
            _id: "preview",
            timestamp: new Date(),
            created: new Date(),
        }, {
            _id: "detail",
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
            description: {
                DEF: {
                    preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper viverra nam libero justo laoreet sit amet cursus sit. Congue mauris rhoncus aenean vel elit scelerisque mauris. Tristique nulla aliquet enim tortor at auctor. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. "
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
            description: {
                DEF: {
                    preview: "Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Tempor orci dapibus ultrices in iaculis nunc. Nibh mauris cursus mattis molestie a iaculis at erat. A iaculis at erat pellentesque adipiscing commodo. Faucibus turpis in eu mi bibendum neque. Ut porttitor leo a diam sollicitudin tempor id eu."
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
            section: [new ObjectId("000000000000000000000003")],
            property: {
                DEF: {
                    name: "Cabbage",
                    price: 15,
                }
            },
            description: {
                DEF: {
                    preview: "Placerat orci nulla pellentesque dignissim enim sit. Fermentum posuere urna nec tincidunt praesent semper feugiat. Penatibus et magnis dis parturient montes. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Blandit cursus risus at ultrices mi tempus imperdiet. Senectus et netus et malesuada fames ac turpis egestas. Fringilla urna porttitor rhoncus dolor purus non enim."
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "cabbage"
            }],
            image: {
                preview: [{url: "/img/catalog/cabbage.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000003")],
            property: {
                DEF: {
                    name: "Carrot",
                    price: 15,
                }
            },
            description: {
                DEF: {
                    preview: "Odio ut sem nulla pharetra diam. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Faucibus a pellentesque sit amet. Fermentum leo vel orci porta non. Pretium aenean pharetra magna ac placerat vestibulum. Commodo nulla facilisi nullam vehicula ipsum. Tincidunt tortor aliquam nulla facilisi cras. Duis at tellus at urna condimentum mattis pellentesque id."
                }
            },
            flag: [],
            uniq: [{
                uniq: "slug",
                value: "carrot"
            }],
            image: {
                preview: [{url: "/img/catalog/carrot.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000003")],
            property: {
                DEF: {
                    name: "Onion",
                    price: 152,
                }
            },
            description: {
                DEF: {
                    preview: "Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Ultricies leo integer malesuada nunc vel risus commodo viverra. Vitae justo eget magna fermentum iaculis. Ornare arcu dui vivamus arcu felis bibendum. Id volutpat lacus laoreet non curabitur gravida arcu ac. Nunc mattis enim ut tellus elementum sagittis vitae. Est ante in nibh mauris cursus. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Est sit amet facilisis magna etiam tempor orci eu. "
                }
            },
            flag: [],
            uniq: [{
                uniq: "slug",
                value: "onion"
            }],
            image: {
                preview: [{url: "/img/catalog/onion.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000003")],
            property: {
                DEF: {
                    name: "Watel Melon",
                    price: 152,
                }
            },
            description: {
                DEF: {
                    preview: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Ut eu sem integer vitae justo eget magna. Quam lacus suspendisse faucibus interdum posuere lorem."
                }
            },
            flag: [],
            uniq: [{
                uniq: "slug",
                value: "water_melon"
            }],
            image: {
                preview: [{url: "/img/catalog/water_melon.png"}]
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
            description: {
                DEF: {
                    preview: "Amet nulla facilisi morbi tempus. Fusce id velit ut tortor pretium viverra. Bibendum at varius vel pharetra vel turpis. Dui id ornare arcu odio ut sem nulla. Pretium aenean pharetra magna ac placerat vestibulum. Sem integer vitae justo eget magna fermentum iaculis eu. Commodo ullamcorper a lacus vestibulum sed arcu non odio."
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
            description: {
                DEF: {
                    preview: "Egestas integer eget aliquet nibh praesent tristique magna sit. Tortor consequat id porta nibh venenatis cras. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra vitae congue eu consequat ac felis donec et. Sed viverra tellus in hac."
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
            description: {
                DEF: {
                    preview: "Cursus turpis massa tincidunt dui ut ornare. Neque laoreet suspendisse interdum consectetur libero. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Non nisi est sit amet facilisis magna etiam tempor. Quis risus sed vulputate odio ut. Nibh tellus molestie nunc non blandit massa enim. Risus sed vulputate odio ut enim blandit volutpat. "
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
            description: {
                DEF: {
                    preview: "Blandit turpis cursus in hac habitasse. Quis vel eros donec ac odio tempor orci dapibus ultrices. In mollis nunc sed id semper risus in hendrerit. Purus sit amet luctus venenatis lectus. A scelerisque purus semper eget duis. A cras semper auctor neque vitae. Nisl rhoncus mattis rhoncus urna neque viverra. Pellentesque adipiscing commodo elit at imperdiet dui accumsan."
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
            description: {
                DEF: {
                    preview: "Congue mauris rhoncus aenean vel elit scelerisque mauris. Tristique nulla aliquet enim tortor at auctor. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Tempor orci dapibus ultrices in iaculis nunc."
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
            section: [new ObjectId("000000000000000000000002")],
            property: {
                DEF: {
                    name: "Donut"
                }
            },
            description: {
                DEF: {
                    preview: "Senectus et netus et malesuada fames ac turpis egestas. Fringilla urna porttitor rhoncus dolor purus non enim. Odio ut sem nulla pharetra diam. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Faucibus a pellentesque sit amet. Fermentum leo vel orci porta non. Pretium aenean pharetra magna ac placerat vestibulum."
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "donut"
            }],
            image: {
                preview: [{url: "/img/catalog/donut.png"}]
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
            description: {
                DEF: {
                    preview: "Ornare arcu dui vivamus arcu felis bibendum. Id volutpat lacus laoreet non curabitur gravida arcu ac. Nunc mattis enim ut tellus elementum sagittis vitae. Est ante in nibh mauris cursus. Ornare arcu dui vivamus arcu felis bibendum ut tristique. Est sit amet facilisis magna etiam tempor orci eu. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. "
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
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000002")],
            property: {
                DEF: {
                    name: "Bagel"
                }
            },
            description: {
                DEF: {
                    preview: "Sem integer vitae justo eget magna fermentum iaculis eu. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Egestas integer eget aliquet nibh praesent tristique magna sit. Tortor consequat id porta nibh venenatis cras. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra vitae congue eu consequat ac felis donec et. Sed viverra tellus in hac."
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "bagel"
            }],
            image: {
                preview: [{url: "/img/catalog/bagel.png"}]
            }
        }, {
            _id: new ObjectId(),
            timestamp: new Date(),
            created: new Date(),
            section: [new ObjectId("000000000000000000000002")],
            property: {
                DEF: {
                    name: "Cookie"
                }
            },
            description: {
                DEF: {
                    preview: "Ac tortor vitae purus faucibus ornare suspendisse sed. Nullam non nisi est sit amet facilisis magna. Viverra ipsum nunc aliquet bibendum enim. Dignissim enim sit amet venenatis urna cursus eget nunc. Elit sed vulputate mi sit. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Purus non enim praesent elementum facilisis. Risus in hendrerit gravida rutrum quisque non tellus. Porttitor eget dolor morbi non arcu risus. Vitae ultricies leo integer malesuada nunc vel risus. In hac habitasse platea dictumst quisque sagittis purus sit amet. Fermentum leo vel orci porta."
                }
            },
            flag: ["novelty"],
            uniq: [{
                uniq: "slug",
                value: "cookie"
            }],
            image: {
                preview: [{url: "/img/catalog/cookie.png"}]
            }
        }]
    }
)
