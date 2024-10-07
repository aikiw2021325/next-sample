-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL,
    "login_day" TEXT NOT NULL,
    "login_time" TEXT NOT NULL DEFAULT '',
    "logout_time" TEXT NOT NULL DEFAULT '',
    "company_name" TEXT NOT NULL,
    "is_qustionnaire" BOOLEAN NOT NULL DEFAULT false,
    "is_lottery" BOOLEAN NOT NULL DEFAULT false,
    "is_personal_information" BOOLEAN NOT NULL DEFAULT false,
    "is_delete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id","login_day")
);
