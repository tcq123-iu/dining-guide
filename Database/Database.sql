create table restaurants(
  id bigserial not null,
  name varchar(50) not null,
  location varchar(50) not null,
  price_range int not null
);