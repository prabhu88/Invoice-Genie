-- 
-- 
CREATE TABLE user_login (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
);
insert into user_login values (1,'admin','admin@123','s.prabhu.mtech88@gmail.com')
-- 
-- 

-- 
-- 
CREATE TABLE user_profile (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_name TEXT NOT NULL,
    gstin TEXT(15) unique,
    pan TEXT(15) unique,
    address_line1 TEXT NOT NULL,
    address_line2 TEXT ,
    city TEXT ,
    state TEXT ,
    country TEXT ,
    postal_code INTEGER ,
    mobile_momber INTEGER ,
    email TEXT NOT NULL,
    terms_top TEXT,
    terms_bottom TEXT,
    logo_path TEXT
);
-- 
-- 