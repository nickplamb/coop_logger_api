-- CreateTable
CREATE TABLE `LoggedData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `humidity1` INTEGER NOT NULL,
    `tempF1` INTEGER NOT NULL,
    `humidity2` INTEGER NOT NULL,
    `tempF2` INTEGER NOT NULL,
    `doorLock` BOOLEAN NOT NULL,
    `battery` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
