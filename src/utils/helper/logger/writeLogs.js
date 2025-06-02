import { createLogger, format, transports } from "winston";
import path from "path";

const { timestamp, label, prettyPrint, combine } = format;

const logger = (message, stack = "Unknown error\nUnknown stack", level = "error", toPath = "serverlogs") => {
    const fullPath = path.join(process.cwd(), "src", "utils", "logs", toPath, "errors.log");

    const errorFile = stack?.split("\n")[1] || "No stack line";

    const writer = createLogger({
        format: combine(
            label({ label: errorFile }),
            timestamp(),
            prettyPrint()
        ),
        transports: [
            new transports.File({
                filename: fullPath,
                level
            })
        ]
    });

    writer.log({
        level,
        message: `[Xatolik -> ${message}] [stack -> ${errorFile}]`
    });
};

export default logger;
