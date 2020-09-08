CREATE TABLE public."user" (
	id SERIAL NOT NULL,
	name varchar(120) NOT NULL,
	cpf varchar(11) NOT NULL,
	email varchar(240) NOT NULL,
	"password" varchar(300) NOT NULL,
	password_md5 varchar(300) NOT NULL,
	password_sha1 varchar(300) NOT NULL,
	password_md5_with_salt varchar(300) NOT NULL,
	password_sha1_with_salt varchar(300) NOT NULL,
	password_hash varchar(300) NOT NULL,
	PRIMARY KEY (id)
);
CREATE UNIQUE INDEX user_id_idx ON public."user" (id);
