"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var openai_1 = require("@ai-sdk/openai");
var ai_1 = require("ai");
var zod_1 = require("zod");
exports.default = defineLazyEventHandler(function () { return __awaiter(void 0, void 0, void 0, function () {
    var openai;
    return __generator(this, function (_a) {
        openai = (0, openai_1.createOpenAI)({
            apiKey: useRuntimeConfig().openaiApiKey,
        });
        return [2 /*return*/, defineEventHandler(function (event) { return __awaiter(void 0, void 0, void 0, function () {
                var messages, result, _a;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, readBody(event)];
                        case 1:
                            messages = (_c.sent()).messages;
                            _a = ai_1.streamText;
                            _b = {
                                model: openai('gpt-4o')
                            };
                            return [4 /*yield*/, (0, ai_1.convertToModelMessages)(messages)];
                        case 2:
                            result = _a.apply(void 0, [(_b.messages = _c.sent(),
                                    _b.stopWhen = (0, ai_1.isStepCount)(5),
                                    _b.tools = {
                                        // server-side tool with execute function:
                                        getWeatherInformation: {
                                            description: 'show the weather in a given city to the user',
                                            inputSchema: zod_1.z.object({ city: zod_1.z.string() }),
                                            execute: function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
                                                var weatherOptions;
                                                return __generator(this, function (_c) {
                                                    switch (_c.label) {
                                                        case 0: 
                                                        // Add artificial delay of 2 seconds
                                                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                                                        case 1:
                                                            // Add artificial delay of 2 seconds
                                                            _c.sent();
                                                            weatherOptions = [
                                                                'sunny',
                                                                'cloudy',
                                                                'rainy',
                                                                'snowy',
                                                                'windy',
                                                            ];
                                                            return [2 /*return*/, weatherOptions[Math.floor(Math.random() * weatherOptions.length)]];
                                                    }
                                                });
                                            }); },
                                        },
                                        // client-side tool that starts user interaction:
                                        askForConfirmation: {
                                            description: 'Ask the user for confirmation.',
                                            inputSchema: zod_1.z.object({
                                                message: zod_1.z
                                                    .string()
                                                    .describe('The message to ask for confirmation.'),
                                            }),
                                        },
                                        // client-side tool that is automatically executed on the client:
                                        getLocation: {
                                            description: 'Get the user location. Always ask for confirmation before using this tool.',
                                            inputSchema: zod_1.z.object({}),
                                        },
                                    },
                                    _b)]);
                            return [2 /*return*/, (0, ai_1.createUIMessageStreamResponse)({
                                    stream: (0, ai_1.toUIMessageStream)({ stream: result.stream }),
                                })];
                    }
                });
            }); })];
    });
}); });
