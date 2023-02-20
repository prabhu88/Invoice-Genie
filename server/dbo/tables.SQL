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
INSERT INTO  user_profile values (1,'Prabhu Soft Solution','33EYOPW8565T2Z4','EYOPW8565T','Appartment','Main Road',
'Madurai','Tamilnadu','India','625014','9994040005','pss@pss.com','',''
)
-- 
-- 
CREATE TABLE invoice_products (
  invno VARCHAR(255) NOT NULL,
  slno VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  hsn INT NOT NULL,
  quantity VARCHAR(255) NOT NULL,
  rate VARCHAR(255) NOT NULL,
  cgst VARCHAR(255) NOT NULL,
  sgst VARCHAR(255) NOT NULL,
  igst VARCHAR(255) NOT NULL,
  total INT NOT NULL,
  PRIMARY KEY (invno, slno)
);
-- 
-- 
CREATE TABLE ItemMaster (
    ItemID INT PRIMARY KEY,
    ItemName VARCHAR(50) NOT NULL,
    ItemDesc VARCHAR(255) NOT NULL,
    HSNCode VARCHAR(8) NOT NULL,
    CGST FLOAT NOT NULL,
    SGST FLOAT NOT NULL,
    IGST FLOAT NOT NULL,
    Price FLOAT NOT NULL
);
-- 
-- 

