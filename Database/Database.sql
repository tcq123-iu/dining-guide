create table restaurants(
  id bigserial not null,
  name varchar(50) not null,
  location varchar(50) not null,
  price_range int not null
);

create table users(
  uid bigserial not null,
  username varchar(50) not null,
  name varchar(50) not null,
  email varchar(50) not null,
  password varchar(50) not null
)