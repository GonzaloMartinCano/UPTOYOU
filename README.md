# UPTOYOU

Marketplace to create a sustainable network promoting local purchases




| ENDPOINT  | METHOD | ROLE  | VIEW |
| ------------- | ------------- | ------------- | ------------- |
|  / | GET  | GUEST / USER / ADMIN  | INDEX   |
|  /login | GET/POST  | GUEST / USER / ADMIN  | LOGIN   |
|  /signup | GET/POST  | GUEST / USER / ADMIN  | SIGNUP   |
|  /products | GET  | GUEST / USER / ADMIN  | ALL PRODUCTS |
|  | GET  |  ADMIN  | ALL PRODUCTS, CAN SEE SPECIAL BUTTON ON THEIR PRODUCTS   |
|  /products/details/:product_id | GET  | GUEST / USER / ADMIN  | PRODUCT DETAILS   |
|  /profile/:user_id | GET  | GUEST  | REDIRECT TO LOGIN  |
|   | GET  | USER  | USER PROFILE VIEW |
|  | GET  | ADMIN  | ADMIN AND USER PROFILE VIEW |
|  /profile/:user_id | POST  | USER  | EDIT INFO  |
|  | GET  | POST  | EDIT ADMIN, PRODUCTS AND USER INFO |

