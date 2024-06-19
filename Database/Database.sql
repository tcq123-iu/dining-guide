create table restaurants(
  id bigserial not null primary key  ,
  name varchar(50) not null,
  location varchar(50) not null,
  price_range int not null,
  phone_number varchar(50) not null,
  cuisine_type varchar(50) not null,
  opening_hours varchar(50) not null,
  closing_hours varchar(50) not null
);

create table users(
  id bigserial not null primary key,
  username varchar(50) not null,
  email varchar(50) not null,
  password varchar(50) not null
);


CREATE TABLE reviews (
review_id BIGSERIAL NOT NULL PRIMARY KEY,
restaurant_id BIGINT REFERENCES restaurants(id),
name VARCHAR(50) NOT NULL,
review TEXT NOT NULL,
rating INT NOT NULL check(rating >=1 and rating <= 5),
u_id BIGINT REFERENCES users(id),
date DATE
);

 ALTER TABLE restaurants ADD PRIMARY KEY (id); 