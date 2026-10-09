"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationSchema = void 0;
var zod_1 = require("zod");
exports.notificationSchema = zod_1.z.object({
    notifications: zod_1.z.array(zod_1.z.object({
        name: zod_1.z.string().describe('Name of a fictional person.'),
        message: zod_1.z.string().describe('Message. Do not use emojis or links.'),
        minutesAgo: zod_1.z.number(),
    })),
});
