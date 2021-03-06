CREATE TABLE users (
	"id" serial NOT NULL,
	"name" varchar(60),
	"cpf" varchar(11),
	"civil_state" varchar(20),
	"password" varchar(120),
	"tel" varchar(12) UNIQUE,
	"email" varchar(80) UNIQUE,
	"birth_date" varchar(10) NOT NULL,
	"cep" varchar(10) NOT NULL,
	"address" varchar(120) NOT NULL,
	"city" varchar(120),
	"state" varchar(120),
	"create_at" TIMESTAMP NOT NULL,
	"update_at" TIMESTAMP NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE accounts (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"uuid"  varchar(40) NOT NULL UNIQUE,
	"account_num" varchar(6) NOT NULL UNIQUE,
	"agency_num" varchar(4) NOT NULL,
	"account_balence" numeric(13,2) NOT NULL,
	"create_at" TIMESTAMP NOT NULL,
	"deleted_at" TIMESTAMP,
	"update_at" TIMESTAMP NOT NULL,
	CONSTRAINT "accounts_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE cards (
	"id" serial NOT NULL,
	"accout_id" integer NOT NULL UNIQUE,
	"card_num" varchar(16) NOT NULL UNIQUE,
	"due_date" varchar(10) NOT NULL,
	"security_code" varchar(3) NOT NULL,
	"blocked" BOOLEAN NOT NULL,
	"create_at" TIMESTAMP NOT NULL,
	"update_at" TIMESTAMP NOT NULL,
	CONSTRAINT "cards_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE transfer (
	"id" serial NOT NULL UNIQUE,
	"account_id_sender" integer NOT NULL,
	"balence_of_the_moment_sender" numeric(13,2) NOT NULL,
	"account_id_reciver" integer NOT NULL,
	"balence_of_the_moment_reciver" numeric(13,2) NOT NULL,
	"transfer_type" varchar(16) NOT NULL,
	"transfer_value" numeric(13,2) NOT NULL,
	"date_and_time" TIMESTAMP NOT NULL,
	CONSTRAINT "transfer_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "accounts" ADD CONSTRAINT "accounts_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("id");

ALTER TABLE "cards" ADD CONSTRAINT "cards_fk0" FOREIGN KEY ("accout_id") REFERENCES "accounts"("id");

ALTER TABLE "transfer" ADD CONSTRAINT "transfer_fk0" FOREIGN KEY ("id_account_sender") REFERENCES "accounts"("id");
ALTER TABLE "transfer" ADD CONSTRAINT "transfer_fk1" FOREIGN KEY ("id_account_reciver") REFERENCES "accounts"("id");