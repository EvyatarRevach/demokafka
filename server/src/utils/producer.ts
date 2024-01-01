import { Partitioners } from "kafkajs";
import kafka from "./show.js";

export const producer = kafka.producer({
 createPartitioner: Partitioners.LegacyPartitioner,
});
