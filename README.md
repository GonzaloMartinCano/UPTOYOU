# UPTOYOU

Marketplace to encourage local shopping and create a sustainable network




| ENDPOINT  | METHOD | ROLE  | VIEW |
| ------------- | ------------- | ------------- | ------------- |
|  / | GET  | GUEST / USER / ADMIN  | INDEX   |
|  /products | GET  | GUEST / USER / ADMIN  | ALL PRODUCTS |
|  | GET  |  ADMIN  | ALL PRODUCTS, CAN SEE SPECIAL BUTTON ON THEIR PRODUCTS   |
|  /products/details/:product_id | GET  | GUEST / USER / ADMIN  | PRODUCT DETAILS   |
|  /profile/:user_id | GET  | GUEST  | REDIRECT TO LOGIN  |
|   | GET  | USER  | USER PROFILE VIEW |
|  | GET  | ADMIN  | ADMIN AND USER PROFILE VIEW |

