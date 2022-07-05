let order = db.getSiblingDB("order");

order.createUser(
    {
        user: "order",
        pwd: "example",
        roles: [
            {
                role: "readWrite",
                db: "order"
            }
        ]
    }
);
