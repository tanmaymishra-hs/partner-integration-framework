"config" = {
    "create": {
        /**custom logic for pre scripts */
        "headers": [
            {"name": "Content-Type", 
            "type": "text"},
            {"name": "X-HS-IAuth", 
            "type": "text"},
            {"name": "Content-Type", 
            "type": "text"},
        ],
        bodyParams: [],
        path: 'http://localhost:8080/v2/partner/create'
    },
    "listPartners": {
        /**custom logic for pre scripts */
        "headers": [
            {"name": "Content-Type", 
            "type": "text"},
            {"name": "X-HS-IAuth", 
            "type": "text"},
            {"name": "X-HS-Access-Key", 
            "type": "text"},
        ],
        bodyParams: [],
        path: 'http://localhost:8080/v2/partner/create'
    }
}