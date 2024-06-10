create table restaurants(
  id bigserial not null ,
  name varchar(50) not null,
  location varchar(50) not null,
  price_range int not null
);

create table users(
  id bigserial not null,
  username varchar(50) not null,
  email varchar(50) not null,
  password varchar(50) not null
)


CREATE TABLE reviews (
review_id BIGSERIAL NOT NULL PRIMARY KEY,
restaurant_id BIGINT REFERENCES restaurants(id),
name VARCHAR(50) NOT NULL,
review TEXT NOT NULL,
rating INT NOT NULL check(rating >=1 and rating <= 5)
);

 ALTER TABLE restaurants ADD PRIMARY KEY (id); 