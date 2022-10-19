"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TokenPairSchema = new mongoose_1.Schema({
    cryptocurrency: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Token',
        required: true,
    },
    stablecoin: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Token',
        required: true,
    },
}, { _id: false });
const TradingPairSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    token: TokenPairSchema,
    marketCap: {
        type: mongoose_1.Schema.Types.Decimal128,
        default: 0.0,
    },
    last24h: {
        price: {
            type: mongoose_1.Schema.Types.Decimal128,
            default: 0.0,
        },
        volume: {
            type: mongoose_1.Schema.Types.Decimal128,
            default: 0.0,
        },
    },
    current: {
        price: {
            type: mongoose_1.Schema.Types.Decimal128,
            default: 0.0,
        },
        volume: {
            type: mongoose_1.Schema.Types.Decimal128,
            default: 0.0,
        },
    },
    isFavorite: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Number,
        default: Date.now,
    },
    updatedAt: {
        type: Number,
        default: Date.now,
    },
});
TradingPairSchema.index({ marketCap: -1 });
const TradingPair = (0, mongoose_1.model)('TradingPair', TradingPairSchema, 'trading_pairs');
exports.default = TradingPair;
//# sourceMappingURL=pair.model.js.map