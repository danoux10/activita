CREATE database activiter;
use activiter;

create table icons (
    idIcon int(11) auto_increment primary key not null,
    nameIcon varchar(255) not null,
    urlIcon varchar(255) not null,
)

create table cards (
    idCard int(11) auto_increment primary key not null,
    activeCard bool not null,
    nameCard varchar(255) not null,
    backgroundCard varchar(255) not null,
    fonrCard varchar(255) not null,
    iconCard int,
    foreign key (iconCard) references icons (idIcon),
)

create table dataActivity (
    idData int(11) auto_increment primary key not null,
    jours date,
    debut time,
    fin time,
    duration time not null,
    durationNum int(255) not null,
    info varchar(255) not null,
    ajout varchar(255) not null,
    card int(11) not null,
    foreign key (card) references cards(idCard)
)

create table barData(
    idBar int(11) auto_increment primary key not null,
    durationTotal int(11) not null,
    jour date not null
)

create table pieDate(
    idPie int(11) auto_increment primary key not null,
    jour date not null,
    durationAct int(255) not null,
    cardValue int(11) not null,
    foreign key (cardValue) references cards(idCard)
)