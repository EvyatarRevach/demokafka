import express from "express";
import chalk from "chalk";
const app = express();
import { getMessageFromKafka } from "./utils/getMessageFromKafka.js";
import { sendKafkaMessage } from "./utils/sendKafkaMessage.js";
import kafka from "./utils/show.js";
import { producer } from './utils/producer.js'
import { createSoldierObject } from './utils/soldier.js'
const PORT = 5000;

const sendSoldierToKafka = () => {
    const soldier = createSoldierObject();
    const soldierMessage = JSON.stringify(soldier);
    sendKafkaMessage(producer, "SoldierTopic", soldierMessage)
        .then(() => {
            console.log(chalk.magentaBright(`Connected Successful To Kafka`));
            console.log(`Soldier info sent to Kafka - Current Time: ${soldier.currentTime}`);
        })
        .catch((err) => console.log(chalk.redBright(`SendKafkaMessage Error: ${err.message}`)));
};


app.listen(PORT, () => {
    console.log(chalk.yellowBright(`listening on: "http://localhost:${PORT}`));
    const soldier = createSoldierObject()
    const soldierMessage = JSON.stringify(soldier);
    sendSoldierToKafka()
    getMessageFromKafka(kafka, "test-group", "Transactions-to-process")
    .catch((err) => console.log(chalk.redBright(`GetMessageFromKafka Error: ${err.message}`)))
    .catch((error) => console.log(chalk.redBright(`Connect To Kafka Error: ${error}`)));
    setInterval(sendSoldierToKafka, 5000);


});
