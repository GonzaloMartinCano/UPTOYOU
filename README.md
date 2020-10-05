# UPTOYOU

Marketplace to encourage local shopping and create a sustainable network




| ENDPOINT  | METHOD | ROLE  | VIEW |
| ------------- | ------------- | ------------- | ------------- |
|  / | GET  | GUEST / USER / ADMIN  | INDEX   |
|  /products | GET  | GUEST / USER / ADMIN  | ALL PRODUCTS, SPECIAL VIEW TO ADMINS   |
|  /products/details/:product_id | GET  | GUEST / USER / ADMIN  | PRODUCT DETAILS   |
|  /:USERNAME | GET  | GUEST  | USERPROFILE  |
|   /:USERNAME/EDIT  |  GET | USER  | USERPROFILE/EDIT  |
| /:USERNAME/DASHBOARD  | GET  | USER  | DAHSBOARD  |
| /:USERNAME/DASHBOARD/EDIT  | POST  | USER  | DAHSBOARD  |
