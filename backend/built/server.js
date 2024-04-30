"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var childdata_router_1 = __importDefault(require("./router/childdata.router"));
var user_router_1 = __importDefault(require("./router/user.router"));
var editordata_router_1 = __importDefault(require("./router/editordata.router"));
var examdata_router_1 = __importDefault(require("./router/examdata.router"));
var ficbook_router_1 = __importDefault(require("./router/ficbook.router"));
var mytho_router_1 = __importDefault(require("./router/mytho.router"));
var text_router_1 = __importDefault(require("./router/text.router"));
var order_router_1 = __importDefault(require("./router/order.router"));
var database_config_1 = require("./configs/database.config");
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.use("/api/childdata", childdata_router_1.default);
app.use("/api/users", user_router_1.default);
app.use("/api/editordata", editordata_router_1.default);
app.use("/api/exambookdata", examdata_router_1.default);
app.use("/api/ficdata", ficbook_router_1.default);
app.use("/api/mythologydata", mytho_router_1.default);
app.use("/api/textbookdata", text_router_1.default);
app.use("/api/orders", order_router_1.default);
app.use(express_1.default.static('public'));
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'public', 'index.html'));
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Website served on http://localhost:" + port);
});
